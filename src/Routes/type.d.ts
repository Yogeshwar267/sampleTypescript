interface IRouter {
  path: string;
  component: React.FunctionComponent;
  title: string;
}

type RouterState = {
  states: IRouter[];
};
