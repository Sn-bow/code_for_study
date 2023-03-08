import { IQuery } from "../../../../commons/types/generated/types"
import { MouseEvent } from "react"

export interface IBoardListUIType {
    data?: Pick<IQuery, "fetchBoards">
    onClickMoveToBoardDetail: (e: MouseEvent<HTMLDivElement>) => void
    onClickMoveToBoardNew: () => void
    pageRefetchHandler: (pageNum: string) => void
    pagiCount: number
    nextPagiHandler: () => void
    prevPagiHandler: () => void
    lastPage: number
}
