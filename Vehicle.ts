/*
 * Class that defines string stack.
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-04-05
 */

export default class Vehicle {
  // variables
  private color: string
  private licencePlate: string
  readonly numberOfDoors: number
  readonly maxSpeed: number
  readonly _speed: number

  /*
  * Constructor
  */
  constructor(color, licencePlate, numberOfDoors, maxSpeed) {
    this.color = color
    this.licencePlate = licencePlate
    this.numberOfDoors = numberOfDoors
    this.maxSpeed = maxSpeed
    this._speed = 0
  }
  
  /*
  * This method shows the status of the vehicle
  */
  public status() {
    console.log(" -> Speed: " + this._speed)
    console.log(" -> Max Speed: " + this.maxSpeed)
    console.log(" -> Number Of Doors: " + this.numberOfDoors)
    console.log(" -> Licence Plate: " + this.licencePlate)
    console.log(" -> Color: " + this.color)
  }

  /*
  * This method changes the speed via the accelerating formula
  */
  public accelerate(accelerationPower, accelerationTime) {
    this._speed = (accelerationPower * accelerationTime) + this._speed
    // check if speed exceeds max speed 
    if (this._speed > this.maxSpeed) {
      this._speed = this.maxSpeed
    }
  }

  /*
  * This method changes the speed via the braking formula
  */
  public break(breakPower, breakTime) {
    this._speed = this._speed - (breakPower * breakTime)
    // check if speed is less than 0, because speed can't be negative! 
    if (this._speed < 0) {
      this._speed = 0
    }
  }
}
