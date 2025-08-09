export default interface BaseActionType<PayloadType = null> {
  type: string;
  payload?: PayloadType;
}
