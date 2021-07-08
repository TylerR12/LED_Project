# from firebase import firebase
from gpiozero import LED

import RPi.GPIO as GPIO
import time
import pyrebase
import os



green_led = LED(5)
red_led = LED(26)
blue_led = LED(6)

# url =  'https://led-project-eb2d5-default-rtdb.firebaseio.com/' #database url
# firebase = firebase.firebaseApplication(url)#real-time datbase url


firebaseConfig = {
    "apiKey": "AIzaSyDljAom0tOknpek18t0XTfzQ4QkLEGbRYM",
    "authDomain": "led-project-eb2d5.firebaseapp.com",
    "databaseURL": "https://led-project-eb2d5-default-rtdb.firebaseio.com/",
    "projectId": "led-project-eb2d5",
    "storageBucket": "led-project-eb2d5.appspot.com",
    "messagingSenderId": "732803747020",
    "appId": "1:732803747020:web:540e5747e6eb5095bd0669",
    "measurementId": "G-7DNQ7QNCKQ"
  }

firebase = pyrebase.initialize_app(firebaseConfig)
# Get a reference to the database service
db = firebase.database()

print("start")

green = "Green"
blue = "Blue"
red = "Red"
purple = "Purple"
cyan = "Cyan"
White = "White"
yellow = "Yellow"

pre = "Off"

while True:

    color = db.child("currentColor").child("current").get()
    
    colorC = color.val()
    
    #print(colorC)

    if pre != colorC:
        
#if green is on in firebase turn on green LED
        if colorC == "Green":
            green_led.on()
            red_led.off()
            blue_led.off()
            pre = colorC       



#if red is on in firebase turn on red LED
        if colorC == "Red":
            red_led.on()
            blue_led.off()
            green_led.off()
            pre = colorC



#if blue is on in firebase turn on blue LED
        if colorC == "Blue":
            blue_led.on()
            red_led.off()
            green_led.off()
            pre = colorC



#if blue is on in firebase turn on purple LED
        if colorC == "Purple":
            blue_led.on()
            red_led.on()
            green_led.off()
            pre = colorC
            


#if blue is on in firebase turn on yellow LED
        if colorC == "Yellow":
            blue_led.off()
            red_led.on()
            green_led.on()
            pre = colorC



#if blue is on in firebase turn on cyan LED
        if colorC == "Cyan":
            blue_led.on()
            red_led.off()
            green_led.on()
            pre = colorC



#if blue is on in firebase turn on white LED
        if colorC == "White":
            blue_led.on()
            red_led.on()
            green_led.on()
            pre = colorC



#if off is value in firebase turn on all LEDs off
        if colorC == "Off":
            red_led.off()
            blue_led.off()
            green_led.off()
            pre = colorC

