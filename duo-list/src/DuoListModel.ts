import { Prop } from "@stencil/core";
import { Option } from "./Option";

export class DuoListModel {
  @Prop({mutable: true}) leftOptions: Option[] = []
  @Prop({mutable: true}) rightOptions: Option[] = []
}
