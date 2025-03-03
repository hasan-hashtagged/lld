import { GarageDoorOpenCommand, LightOnCommand } from "./command";
import { GarageDoor } from "./GarageDoor";
import { Light } from "./Light";
import { SimpleRemote } from "./SimpleRemote";

function run() {
  let remote: SimpleRemote = new SimpleRemote();
  let lght: Light = new Light();
  let command: LightOnCommand = new LightOnCommand(lght);
  remote.setCommand(command);
  remote.buttonPressed();

  let gd: GarageDoor = new GarageDoor();
  let cmd: GarageDoorOpenCommand = new GarageDoorOpenCommand(gd);
  remote.setCommand(cmd);
  remote.buttonPressed();
}

run();
