import { DMMF } from "./dmmf/types";
export type BaseKeys = keyof Pick<DMMF.ModelMapping, "modelName">;
export declare const baseKeys: BaseKeys[];
export type ModelKeys = keyof Exclude<DMMF.ModelMapping, BaseKeys>;
export type SupportedQueries = keyof Pick<typeof DMMF.ModelAction, "findUnique" | "findUniqueOrThrow" | "findFirst" | "findFirstOrThrow" | "findMany" | "aggregate" | "groupBy">;
export declare const supportedQueryActions: SupportedQueries[];
export type SupportedMutations = keyof Pick<typeof DMMF.ModelAction, "createOne" | "createMany" | "deleteOne" | "updateOne" | "deleteMany" | "updateMany" | "upsertOne">;
export declare const supportedMutationActions: SupportedMutations[];
export declare const modelsFolderName = "models";
export declare const enumsFolderName = "enums";
export declare const inputsFolderName = "inputs";
export declare const outputsFolderName = "outputs";
export declare const resolversFolderName = "resolvers";
export declare const argsFolderName = "args";
export declare const relationsResolversFolderName = "relations";
export declare const crudResolversFolderName = "crud";
export declare enum InputOmitSetting {
    Create = "create",
    Update = "update",
    Where = "where",
    OrderBy = "orderBy"
}
