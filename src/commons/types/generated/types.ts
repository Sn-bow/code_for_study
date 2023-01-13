export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends Record<string, unknown>> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Upload: any;
}

export interface IBoardReturn {
  __typename?: "BoardReturn";
  contents?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["Date"]>;
  like?: Maybe<Scalars["Int"]>;
  number?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  writer?: Maybe<Scalars["String"]>;
}

export enum ICacheControlScope {
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export interface ICreateProductInput {
  detail?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Int"]>;
}

export interface IMutation {
  __typename?: "Mutation";
  createBoard?: Maybe<IReturn>;
  createProduct?: Maybe<IReturn>;
  createProfile?: Maybe<IReturn>;
  deleteBoard?: Maybe<IReturn>;
  deleteProduct?: Maybe<IReturn>;
  deleteProfile?: Maybe<IReturn>;
  updateBoard?: Maybe<IReturn>;
  updateProduct?: Maybe<IReturn>;
  updateProfile?: Maybe<IReturn>;
}

export interface IMutationCreateBoardArgs {
  contents?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  writer?: InputMaybe<Scalars["String"]>;
}

export interface IMutationCreateProductArgs {
  createProductInput: ICreateProductInput;
  seller?: InputMaybe<Scalars["String"]>;
}

export interface IMutationCreateProfileArgs {
  age?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  school?: InputMaybe<Scalars["String"]>;
}

export interface IMutationDeleteBoardArgs {
  number?: InputMaybe<Scalars["Int"]>;
}

export interface IMutationDeleteProductArgs {
  productId?: InputMaybe<Scalars["ID"]>;
}

export interface IMutationDeleteProfileArgs {
  name?: InputMaybe<Scalars["String"]>;
}

export interface IMutationUpdateBoardArgs {
  contents?: InputMaybe<Scalars["String"]>;
  number?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
  writer?: InputMaybe<Scalars["String"]>;
}

export interface IMutationUpdateProductArgs {
  productId?: InputMaybe<Scalars["ID"]>;
  updateProductInput: IUpdateProductInput;
}

export interface IMutationUpdateProfileArgs {
  age?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  school?: InputMaybe<Scalars["String"]>;
}

export interface IProductReturn {
  __typename?: "ProductReturn";
  _id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["Date"]>;
  detail?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Int"]>;
  seller?: Maybe<Scalars["String"]>;
}

export interface IProfileReturn {
  __typename?: "ProfileReturn";
  age?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  number?: Maybe<Scalars["Int"]>;
  school?: Maybe<Scalars["String"]>;
}

export interface IQuery {
  __typename?: "Query";
  fetchBoard?: Maybe<IBoardReturn>;
  fetchBoards?: Maybe<IBoardReturn[]>;
  fetchBoardsCount: Scalars["Int"];
  fetchProduct?: Maybe<IProductReturn>;
  fetchProducts?: Maybe<IProductReturn[]>;
  fetchProductsCount: Scalars["Int"];
  fetchProfile?: Maybe<IProfileReturn>;
  fetchProfiles?: Maybe<IProfileReturn[]>;
  fetchProfilesCount: Scalars["Int"];
}

export interface IQueryFetchBoardArgs {
  number?: InputMaybe<Scalars["Int"]>;
}

export interface IQueryFetchBoardsArgs {
  page?: InputMaybe<Scalars["Int"]>;
}

export interface IQueryFetchProductArgs {
  productId?: InputMaybe<Scalars["ID"]>;
}

export interface IQueryFetchProductsArgs {
  page?: InputMaybe<Scalars["Int"]>;
}

export interface IQueryFetchProfileArgs {
  name?: InputMaybe<Scalars["String"]>;
}

export interface IQueryFetchProfilesArgs {
  page?: InputMaybe<Scalars["Int"]>;
}

export interface IReturn {
  __typename?: "Return";
  _id?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
  number?: Maybe<Scalars["Int"]>;
}

export interface IUpdateProductInput {
  detail?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Int"]>;
}
