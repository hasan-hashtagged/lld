import { Command, FanOffCommand, FanOnCommand, GarageDoorCloseCommand, GarageDoorOpenCommand, LightOffCommand, LightOnCommand, StereoOffCommand, StereoOnCommand, MacroCommand } from "./command";
import { Fan } from "./Fan";
import { GarageDoor } from "./GarageDoor";
import { Light } from "./Light";
import { Remote } from "./remote";
import { Stereo } from "./Stereo";

function run() {
  let rc: Remote = new Remote();
  let livingLight: Light = new Light();
  let livingRoomOn: Command = new LightOnCommand(livingLight);
  let livingRoomOff: Command = new LightOffCommand(livingLight);
  let kitchenLight: Light = new Light();
  let kitchenOn: Command = new LightOnCommand(kitchenLight);
  let kitchenOff: Command = new LightOffCommand(kitchenLight);
  let fan: Fan = new Fan();
  let lvngFanOn: Command = new FanOnCommand(fan);
  let lvngFanOff: Command = new FanOffCommand(fan);
  let gd: GarageDoor = new GarageDoor();
  let doorOpen: Command = new GarageDoorOpenCommand(gd);
  let doorClose: Command = new GarageDoorCloseCommand(gd);
  let stro: Stereo = new Stereo();
  let stroOff: Command = new StereoOffCommand(stro);
  let stroOn: Command = new StereoOnCommand(stro);

  let comArray: Array<Command> = [livingRoomOn, lvngFanOn, stroOn];
  let offArray: Array<Command> = [livingRoomOff, lvngFanOff, stroOff]
  let mcCmd: Command = new MacroCommand(comArray);
  let offComd: Command = new MacroCommand(offArray);

  rc.setCommand(0, livingRoomOn, livingRoomOff);
  rc.setCommand(1, kitchenOn, kitchenOff);
  rc.setCommand(2, lvngFanOn, lvngFanOff);
  rc.setCommand(3, doorOpen, doorClose);
  rc.setCommand(4, stroOn, stroOff);
  rc.setCommand(5, mcCmd, offComd);

  rc.onButton(0);
  rc.onButton(3);
  rc.onButton(4);
  rc.onButton(1);
  rc.onButton(2);
  rc.undoButton();
  rc.offButton(3);
  rc.undoButton();
  rc.offButton(2);
  rc.offButton(0);
  rc.offButton(4);
  rc.undoButton();
  rc.offButton(1);
  console.log('MACRO COMMAND');
  rc.onButton(5);
  rc.offButton(5);
  console.log('UNDO OPERATION');
  rc.undoButton();
}

run();
