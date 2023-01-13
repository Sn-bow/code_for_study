import { ChangeEvent } from "react";
import { IQuery } from '../../../../commons/types/generated/types';
// 함수에서 리턴이 없을때 void 라고한다.
export interface IBoardWriteUIPros {
  onClickSubmit: () => void;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLInputElement>) => void;
  myColor: boolean;
  isEdit: boolean;
  onClickUpdate: () => void;
  writer: string;
  contents: string;
  title: string;
  data?: Pick<IQuery, "fetchBoard">
}

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IMyvariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}
