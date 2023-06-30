//servo library
#include <Servo.h>
//I2C
#include <Wire.h>
//Magnetometer library
#include <LSM303.h>

//Global Variables 
Servo servo1;
static const int servoPin = 0;
float currPosition = 0;
float satellitePosition;
float rotationSpeed = 1;
int rotationDelay = 20;
//Compass
LSM303 compass;

void setup() {

  Serial.begin(9600);
  servo1.attach(servoPin);

  Wire.begin();
  compass.init(); 
  compass.enableDefault();
}

void loop() {  
  compass.read();
  //gets X and Y coordinates from Magnetometer
  int16_t magnetometerX = compass.m.x;
  int16_t magnetometerY = compass.m.y;
  //Calculates North using arctanges and converts the result into degrees
  float deviationFromNorth = (atan2(magnetometerY,magnetometerX))*180/PI;

  while(Serial.available() > 0){
    satellitePosition = Serial.parseFloat() + deviationFromNorth; 
    if(satellitePosition <= 180 && satellitePosition >= 0){
      if(currPosition < satellitePosition){
        while(currPosition < satellitePosition){
          currPosition += rotationSpeed;
          servo1.write(currPosition);
          delay(rotationDelay);
        }
      }
      else if(currPosition > satellitePosition){
        while(currPosition > satellitePosition){
          currPosition -= rotationSpeed;
          servo1.write(currPosition);
          delay(rotationDelay);
        }
      }
    }
  }
}