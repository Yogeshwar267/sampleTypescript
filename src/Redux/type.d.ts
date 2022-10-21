interface IRedux {
  id?: number;
  title?: string;
  body?: string;
  payload?: string;
  
}

type ReduxState = {
  states?: IRedux[] | undefined;
  token?: string | null;
  fn?: React.FunctionComponent | void;
  key?: string;
  storage?: any;
  whitelist?: Array;
};

type ReduxAction = {
  type: string;
  payload: IRedux;
};

type DispatchType = (args: ReduxAction) => ReduxAction;
