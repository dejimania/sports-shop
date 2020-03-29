import { ActionTypes } from './Types';
import { data as phData } from './placeholderData';

export const loadData = (datatype) => ({
  type: ActionTypes.DATA_LOAD,
  payload: {
    datatype: datatype,
    data: phData[datatype]
  }
});