import { IPath, IPathDoc } from "../../models/path.model"
import { ISubPath } from "../../models/sub_path.model"

// export type breakingStrategy = "One_KM" | "4_Pieces" | "Vicinity_Based"

export interface SubPathStrategy{
    break(path: IPathDoc | IPath): Partial<ISubPath>[]
}