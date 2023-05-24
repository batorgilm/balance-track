import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  _Any: { input: any; output: any; }
  _FieldSet: { input: any; output: any; }
};

export type Categories = {
  __typename?: 'Categories';
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
  transaction?: Maybe<Array<Maybe<Transaction>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<Categories>;
  registerTransaction?: Maybe<Transaction>;
  signup?: Maybe<Users>;
  updateCategory?: Maybe<Categories>;
};


export type MutationCreateCategoryArgs = {
  text: Scalars['String']['input'];
};


export type MutationRegisterTransactionArgs = {
  amount: Scalars['String']['input'];
  categoryId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  username: Scalars['String']['input'];
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['String']['input'];
  text: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  categories?: Maybe<Array<Maybe<Categories>>>;
  category?: Maybe<Categories>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  user?: Maybe<Users>;
  users?: Maybe<Array<Maybe<Users>>>;
};


export type QueryCategoriesArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategoryArgs = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserArgs = {
  userId: Scalars['String']['input'];
};

export type Transaction = {
  __typename?: 'Transaction';
  amount?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Categories>;
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type Users = {
  __typename?: 'Users';
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  transaction?: Maybe<Array<Maybe<Transaction>>>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']['output']>;
};

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'Users', createdAt?: string | null, id: string, updatedAt?: string | null, username?: string | null, transaction?: Array<{ __typename?: 'Transaction', id: string, categoryId?: string | null, userId?: string | null } | null> | null } | null> | null };


export const UsersDocument = gql`
    query Users {
  users {
    createdAt
    id
    transaction {
      id
      categoryId
      userId
    }
    updatedAt
    username
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;