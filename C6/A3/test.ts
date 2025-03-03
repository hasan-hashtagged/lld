import { FanHighCommand, FanLowCommand, FanMediumCommand, FanOffCommand } from "./command";
import { Fan } from "./Fan";
import { RemoteControl } from "./remote";

function run() {
  let rc = new RemoteControl();
  let fan = new Fan();
  let highCommand = new FanHighCommand(fan);
  let lowCommand = new FanLowCommand(fan);
  let mediumCommand = new FanMediumCommand(fan);
  let offCommand = new FanOffCommand(fan);

  rc.setCommand(0, highCommand, offCommand);
  rc.setCommand(1, mediumCommand, offCommand);
  rc.setCommand(2, lowCommand, offCommand);
  rc.setCommand(3, offCommand, offCommand);

  rc.onButtonPressed(0);
  rc.onButtonPressed(2);
  rc.undoPressed();
  rc.onButtonPressed(1);
  rc.undoPressed();
  rc.onButtonPressed(1);
  rc.offButtonPressed(1);

}

run();
