import { GeneralStateModel } from "../../model/commonModel";

interface StateViewManager {
  state: GeneralStateModel["viewState"];
  LoadingComponent: JSX.Element;
  ErrorComponent: JSX.Element;
  SuccessComponent: JSX.Element;
  DefaultComponent: JSX.Element;
}

export default function stateViewManager({
  state,
  LoadingComponent,
  ErrorComponent,
  SuccessComponent,
  DefaultComponent,
}: StateViewManager) {
  switch (state) {
    case "loading":
      return LoadingComponent;
    case "error":
      return ErrorComponent;
    case "success":
      return SuccessComponent;
    case "default":
      return DefaultComponent;
  }
}
