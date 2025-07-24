
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Site
 * 
 */
export type Site = $Result.DefaultSelection<Prisma.$SitePayload>
/**
 * Model Alarm
 * 
 */
export type Alarm = $Result.DefaultSelection<Prisma.$AlarmPayload>
/**
 * Model AiCall
 * 
 */
export type AiCall = $Result.DefaultSelection<Prisma.$AiCallPayload>
/**
 * Model Dispatch
 * 
 */
export type Dispatch = $Result.DefaultSelection<Prisma.$DispatchPayload>
/**
 * Model ObLog
 * 
 */
export type ObLog = $Result.DefaultSelection<Prisma.$ObLogPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model Guard
 * 
 */
export type Guard = $Result.DefaultSelection<Prisma.$GuardPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clients
 * const clients = await prisma.client.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.site`: Exposes CRUD operations for the **Site** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sites
    * const sites = await prisma.site.findMany()
    * ```
    */
  get site(): Prisma.SiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alarm`: Exposes CRUD operations for the **Alarm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alarms
    * const alarms = await prisma.alarm.findMany()
    * ```
    */
  get alarm(): Prisma.AlarmDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiCall`: Exposes CRUD operations for the **AiCall** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiCalls
    * const aiCalls = await prisma.aiCall.findMany()
    * ```
    */
  get aiCall(): Prisma.AiCallDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dispatch`: Exposes CRUD operations for the **Dispatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dispatches
    * const dispatches = await prisma.dispatch.findMany()
    * ```
    */
  get dispatch(): Prisma.DispatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.obLog`: Exposes CRUD operations for the **ObLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ObLogs
    * const obLogs = await prisma.obLog.findMany()
    * ```
    */
  get obLog(): Prisma.ObLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guard`: Exposes CRUD operations for the **Guard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guards
    * const guards = await prisma.guard.findMany()
    * ```
    */
  get guard(): Prisma.GuardDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Client: 'Client',
    Site: 'Site',
    Alarm: 'Alarm',
    AiCall: 'AiCall',
    Dispatch: 'Dispatch',
    ObLog: 'ObLog',
    User: 'User',
    UserRole: 'UserRole',
    Vehicle: 'Vehicle',
    Guard: 'Guard'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "client" | "site" | "alarm" | "aiCall" | "dispatch" | "obLog" | "user" | "userRole" | "vehicle" | "guard"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Site: {
        payload: Prisma.$SitePayload<ExtArgs>
        fields: Prisma.SiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findFirst: {
            args: Prisma.SiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findMany: {
            args: Prisma.SiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          create: {
            args: Prisma.SiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          createMany: {
            args: Prisma.SiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          delete: {
            args: Prisma.SiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          update: {
            args: Prisma.SiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          deleteMany: {
            args: Prisma.SiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          upsert: {
            args: Prisma.SiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          aggregate: {
            args: Prisma.SiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSite>
          }
          groupBy: {
            args: Prisma.SiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteCountArgs<ExtArgs>
            result: $Utils.Optional<SiteCountAggregateOutputType> | number
          }
        }
      }
      Alarm: {
        payload: Prisma.$AlarmPayload<ExtArgs>
        fields: Prisma.AlarmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlarmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlarmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>
          }
          findFirst: {
            args: Prisma.AlarmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlarmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>
          }
          findMany: {
            args: Prisma.AlarmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>[]
          }
          create: {
            args: Prisma.AlarmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>
          }
          createMany: {
            args: Prisma.AlarmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlarmCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>[]
          }
          delete: {
            args: Prisma.AlarmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>
          }
          update: {
            args: Prisma.AlarmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>
          }
          deleteMany: {
            args: Prisma.AlarmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlarmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlarmUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>[]
          }
          upsert: {
            args: Prisma.AlarmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>
          }
          aggregate: {
            args: Prisma.AlarmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlarm>
          }
          groupBy: {
            args: Prisma.AlarmGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlarmGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlarmCountArgs<ExtArgs>
            result: $Utils.Optional<AlarmCountAggregateOutputType> | number
          }
        }
      }
      AiCall: {
        payload: Prisma.$AiCallPayload<ExtArgs>
        fields: Prisma.AiCallFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiCallFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiCallPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiCallFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiCallPayload>
          }
          findFirst: {
            args: Prisma.AiCallFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiCallPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiCallFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiCallPayload>
          }
          findMany: {
            args: Prisma.AiCallFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiCallPayload>[]
          }
          create: {
            args: Prisma.AiCallCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiCallPayload>
          }
          createMany: {
            args: Prisma.AiCallCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiCallCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiCallPayload>[]
          }
          delete: {
            args: Prisma.AiCallDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiCallPayload>
          }
          update: {
            args: Prisma.AiCallUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiCallPayload>
          }
          deleteMany: {
            args: Prisma.AiCallDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiCallUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiCallUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiCallPayload>[]
          }
          upsert: {
            args: Prisma.AiCallUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiCallPayload>
          }
          aggregate: {
            args: Prisma.AiCallAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiCall>
          }
          groupBy: {
            args: Prisma.AiCallGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiCallGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiCallCountArgs<ExtArgs>
            result: $Utils.Optional<AiCallCountAggregateOutputType> | number
          }
        }
      }
      Dispatch: {
        payload: Prisma.$DispatchPayload<ExtArgs>
        fields: Prisma.DispatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DispatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DispatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>
          }
          findFirst: {
            args: Prisma.DispatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DispatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>
          }
          findMany: {
            args: Prisma.DispatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>[]
          }
          create: {
            args: Prisma.DispatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>
          }
          createMany: {
            args: Prisma.DispatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DispatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>[]
          }
          delete: {
            args: Prisma.DispatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>
          }
          update: {
            args: Prisma.DispatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>
          }
          deleteMany: {
            args: Prisma.DispatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DispatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DispatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>[]
          }
          upsert: {
            args: Prisma.DispatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchPayload>
          }
          aggregate: {
            args: Prisma.DispatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDispatch>
          }
          groupBy: {
            args: Prisma.DispatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<DispatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.DispatchCountArgs<ExtArgs>
            result: $Utils.Optional<DispatchCountAggregateOutputType> | number
          }
        }
      }
      ObLog: {
        payload: Prisma.$ObLogPayload<ExtArgs>
        fields: Prisma.ObLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObLogPayload>
          }
          findFirst: {
            args: Prisma.ObLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObLogPayload>
          }
          findMany: {
            args: Prisma.ObLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObLogPayload>[]
          }
          create: {
            args: Prisma.ObLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObLogPayload>
          }
          createMany: {
            args: Prisma.ObLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObLogPayload>[]
          }
          delete: {
            args: Prisma.ObLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObLogPayload>
          }
          update: {
            args: Prisma.ObLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObLogPayload>
          }
          deleteMany: {
            args: Prisma.ObLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObLogPayload>[]
          }
          upsert: {
            args: Prisma.ObLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObLogPayload>
          }
          aggregate: {
            args: Prisma.ObLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObLog>
          }
          groupBy: {
            args: Prisma.ObLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObLogCountArgs<ExtArgs>
            result: $Utils.Optional<ObLogCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      Guard: {
        payload: Prisma.$GuardPayload<ExtArgs>
        fields: Prisma.GuardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardPayload>
          }
          findFirst: {
            args: Prisma.GuardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardPayload>
          }
          findMany: {
            args: Prisma.GuardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardPayload>[]
          }
          create: {
            args: Prisma.GuardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardPayload>
          }
          createMany: {
            args: Prisma.GuardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardPayload>[]
          }
          delete: {
            args: Prisma.GuardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardPayload>
          }
          update: {
            args: Prisma.GuardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardPayload>
          }
          deleteMany: {
            args: Prisma.GuardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardPayload>[]
          }
          upsert: {
            args: Prisma.GuardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardPayload>
          }
          aggregate: {
            args: Prisma.GuardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuard>
          }
          groupBy: {
            args: Prisma.GuardGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuardGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuardCountArgs<ExtArgs>
            result: $Utils.Optional<GuardCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    client?: ClientOmit
    site?: SiteOmit
    alarm?: AlarmOmit
    aiCall?: AiCallOmit
    dispatch?: DispatchOmit
    obLog?: ObLogOmit
    user?: UserOmit
    userRole?: UserRoleOmit
    vehicle?: VehicleOmit
    guard?: GuardOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    sites: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sites?: boolean | ClientCountOutputTypeCountSitesArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountSitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
  }


  /**
   * Count Type SiteCountOutputType
   */

  export type SiteCountOutputType = {
    alarms: number
    obLogs: number
  }

  export type SiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alarms?: boolean | SiteCountOutputTypeCountAlarmsArgs
    obLogs?: boolean | SiteCountOutputTypeCountObLogsArgs
  }

  // Custom InputTypes
  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteCountOutputType
     */
    select?: SiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountAlarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlarmWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountObLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObLogWhereInput
  }


  /**
   * Count Type AlarmCountOutputType
   */

  export type AlarmCountOutputType = {
    obLogs: number
  }

  export type AlarmCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obLogs?: boolean | AlarmCountOutputTypeCountObLogsArgs
  }

  // Custom InputTypes
  /**
   * AlarmCountOutputType without action
   */
  export type AlarmCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmCountOutputType
     */
    select?: AlarmCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlarmCountOutputType without action
   */
  export type AlarmCountOutputTypeCountObLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObLogWhereInput
  }


  /**
   * Count Type UserRoleCountOutputType
   */

  export type UserRoleCountOutputType = {
    users: number
  }

  export type UserRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserRoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleCountOutputType
     */
    select?: UserRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    dispatches: number
    guards: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispatches?: boolean | VehicleCountOutputTypeCountDispatchesArgs
    guards?: boolean | VehicleCountOutputTypeCountGuardsArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountDispatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DispatchWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountGuardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuardWhereInput
  }


  /**
   * Count Type GuardCountOutputType
   */

  export type GuardCountOutputType = {
    dispatches: number
    obLogs: number
  }

  export type GuardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispatches?: boolean | GuardCountOutputTypeCountDispatchesArgs
    obLogs?: boolean | GuardCountOutputTypeCountObLogsArgs
  }

  // Custom InputTypes
  /**
   * GuardCountOutputType without action
   */
  export type GuardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuardCountOutputType
     */
    select?: GuardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuardCountOutputType without action
   */
  export type GuardCountOutputTypeCountDispatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DispatchWhereInput
  }

  /**
   * GuardCountOutputType without action
   */
  export type GuardCountOutputTypeCountObLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    contactEmail: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    contactEmail: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    contactEmail: number
    phone: number
    createdAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    contactEmail?: true
    phone?: true
    createdAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    contactEmail?: true
    phone?: true
    createdAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    contactEmail?: true
    phone?: true
    createdAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    contactEmail: string
    phone: string | null
    createdAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactEmail?: boolean
    phone?: boolean
    createdAt?: boolean
    sites?: boolean | Client$sitesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactEmail?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactEmail?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    contactEmail?: boolean
    phone?: boolean
    createdAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "contactEmail" | "phone" | "createdAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sites?: boolean | Client$sitesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      sites: Prisma.$SitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      contactEmail: string
      phone: string | null
      createdAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sites<T extends Client$sitesArgs<ExtArgs> = {}>(args?: Subset<T, Client$sitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly contactEmail: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.sites
   */
  export type Client$sitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    cursor?: SiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Site
   */

  export type AggregateSite = {
    _count: SiteCountAggregateOutputType | null
    _avg: SiteAvgAggregateOutputType | null
    _sum: SiteSumAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  export type SiteAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type SiteSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type SiteMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    clientId: string | null
  }

  export type SiteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    clientId: string | null
  }

  export type SiteCountAggregateOutputType = {
    id: number
    name: number
    address: number
    latitude: number
    longitude: number
    createdAt: number
    clientId: number
    _all: number
  }


  export type SiteAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type SiteSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type SiteMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    clientId?: true
  }

  export type SiteMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    clientId?: true
  }

  export type SiteCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    clientId?: true
    _all?: true
  }

  export type SiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Site to aggregate.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sites
    **/
    _count?: true | SiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteMaxAggregateInputType
  }

  export type GetSiteAggregateType<T extends SiteAggregateArgs> = {
        [P in keyof T & keyof AggregateSite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSite[P]>
      : GetScalarType<T[P], AggregateSite[P]>
  }




  export type SiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithAggregationInput | SiteOrderByWithAggregationInput[]
    by: SiteScalarFieldEnum[] | SiteScalarFieldEnum
    having?: SiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteCountAggregateInputType | true
    _avg?: SiteAvgAggregateInputType
    _sum?: SiteSumAggregateInputType
    _min?: SiteMinAggregateInputType
    _max?: SiteMaxAggregateInputType
  }

  export type SiteGroupByOutputType = {
    id: string
    name: string
    address: string
    latitude: number | null
    longitude: number | null
    createdAt: Date
    clientId: string
    _count: SiteCountAggregateOutputType | null
    _avg: SiteAvgAggregateOutputType | null
    _sum: SiteSumAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  type GetSiteGroupByPayload<T extends SiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteGroupByOutputType[P]>
            : GetScalarType<T[P], SiteGroupByOutputType[P]>
        }
      >
    >


  export type SiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    alarms?: boolean | Site$alarmsArgs<ExtArgs>
    obLogs?: boolean | Site$obLogsArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    clientId?: boolean
  }

  export type SiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "latitude" | "longitude" | "createdAt" | "clientId", ExtArgs["result"]["site"]>
  export type SiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    alarms?: boolean | Site$alarmsArgs<ExtArgs>
    obLogs?: boolean | Site$obLogsArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type SiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $SitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Site"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      alarms: Prisma.$AlarmPayload<ExtArgs>[]
      obLogs: Prisma.$ObLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      latitude: number | null
      longitude: number | null
      createdAt: Date
      clientId: string
    }, ExtArgs["result"]["site"]>
    composites: {}
  }

  type SiteGetPayload<S extends boolean | null | undefined | SiteDefaultArgs> = $Result.GetResult<Prisma.$SitePayload, S>

  type SiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteCountAggregateInputType | true
    }

  export interface SiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Site'], meta: { name: 'Site' } }
    /**
     * Find zero or one Site that matches the filter.
     * @param {SiteFindUniqueArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteFindUniqueArgs>(args: SelectSubset<T, SiteFindUniqueArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Site that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteFindUniqueOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteFindFirstArgs>(args?: SelectSubset<T, SiteFindFirstArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sites
     * const sites = await prisma.site.findMany()
     * 
     * // Get first 10 Sites
     * const sites = await prisma.site.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteWithIdOnly = await prisma.site.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteFindManyArgs>(args?: SelectSubset<T, SiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Site.
     * @param {SiteCreateArgs} args - Arguments to create a Site.
     * @example
     * // Create one Site
     * const Site = await prisma.site.create({
     *   data: {
     *     // ... data to create a Site
     *   }
     * })
     * 
     */
    create<T extends SiteCreateArgs>(args: SelectSubset<T, SiteCreateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sites.
     * @param {SiteCreateManyArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteCreateManyArgs>(args?: SelectSubset<T, SiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sites and returns the data saved in the database.
     * @param {SiteCreateManyAndReturnArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Site.
     * @param {SiteDeleteArgs} args - Arguments to delete one Site.
     * @example
     * // Delete one Site
     * const Site = await prisma.site.delete({
     *   where: {
     *     // ... filter to delete one Site
     *   }
     * })
     * 
     */
    delete<T extends SiteDeleteArgs>(args: SelectSubset<T, SiteDeleteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Site.
     * @param {SiteUpdateArgs} args - Arguments to update one Site.
     * @example
     * // Update one Site
     * const site = await prisma.site.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteUpdateArgs>(args: SelectSubset<T, SiteUpdateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sites.
     * @param {SiteDeleteManyArgs} args - Arguments to filter Sites to delete.
     * @example
     * // Delete a few Sites
     * const { count } = await prisma.site.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteDeleteManyArgs>(args?: SelectSubset<T, SiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteUpdateManyArgs>(args: SelectSubset<T, SiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites and returns the data updated in the database.
     * @param {SiteUpdateManyAndReturnArgs} args - Arguments to update many Sites.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Site.
     * @param {SiteUpsertArgs} args - Arguments to update or create a Site.
     * @example
     * // Update or create a Site
     * const site = await prisma.site.upsert({
     *   create: {
     *     // ... data to create a Site
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Site we want to update
     *   }
     * })
     */
    upsert<T extends SiteUpsertArgs>(args: SelectSubset<T, SiteUpsertArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteCountArgs} args - Arguments to filter Sites to count.
     * @example
     * // Count the number of Sites
     * const count = await prisma.site.count({
     *   where: {
     *     // ... the filter for the Sites we want to count
     *   }
     * })
    **/
    count<T extends SiteCountArgs>(
      args?: Subset<T, SiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteAggregateArgs>(args: Subset<T, SiteAggregateArgs>): Prisma.PrismaPromise<GetSiteAggregateType<T>>

    /**
     * Group by Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteGroupByArgs['orderBy'] }
        : { orderBy?: SiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Site model
   */
  readonly fields: SiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Site.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alarms<T extends Site$alarmsArgs<ExtArgs> = {}>(args?: Subset<T, Site$alarmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    obLogs<T extends Site$obLogsArgs<ExtArgs> = {}>(args?: Subset<T, Site$obLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Site model
   */
  interface SiteFieldRefs {
    readonly id: FieldRef<"Site", 'String'>
    readonly name: FieldRef<"Site", 'String'>
    readonly address: FieldRef<"Site", 'String'>
    readonly latitude: FieldRef<"Site", 'Float'>
    readonly longitude: FieldRef<"Site", 'Float'>
    readonly createdAt: FieldRef<"Site", 'DateTime'>
    readonly clientId: FieldRef<"Site", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Site findUnique
   */
  export type SiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findUniqueOrThrow
   */
  export type SiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findFirst
   */
  export type SiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findFirstOrThrow
   */
  export type SiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findMany
   */
  export type SiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Sites to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site create
   */
  export type SiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Site.
     */
    data: XOR<SiteCreateInput, SiteUncheckedCreateInput>
  }

  /**
   * Site createMany
   */
  export type SiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Site createManyAndReturn
   */
  export type SiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Site update
   */
  export type SiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Site.
     */
    data: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
    /**
     * Choose, which Site to update.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site updateMany
   */
  export type SiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
  }

  /**
   * Site updateManyAndReturn
   */
  export type SiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Site upsert
   */
  export type SiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Site to update in case it exists.
     */
    where: SiteWhereUniqueInput
    /**
     * In case the Site found by the `where` argument doesn't exist, create a new Site with this data.
     */
    create: XOR<SiteCreateInput, SiteUncheckedCreateInput>
    /**
     * In case the Site was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
  }

  /**
   * Site delete
   */
  export type SiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter which Site to delete.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site deleteMany
   */
  export type SiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sites to delete
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to delete.
     */
    limit?: number
  }

  /**
   * Site.alarms
   */
  export type Site$alarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    where?: AlarmWhereInput
    orderBy?: AlarmOrderByWithRelationInput | AlarmOrderByWithRelationInput[]
    cursor?: AlarmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlarmScalarFieldEnum | AlarmScalarFieldEnum[]
  }

  /**
   * Site.obLogs
   */
  export type Site$obLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObLog
     */
    select?: ObLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObLog
     */
    omit?: ObLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObLogInclude<ExtArgs> | null
    where?: ObLogWhereInput
    orderBy?: ObLogOrderByWithRelationInput | ObLogOrderByWithRelationInput[]
    cursor?: ObLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObLogScalarFieldEnum | ObLogScalarFieldEnum[]
  }

  /**
   * Site without action
   */
  export type SiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
  }


  /**
   * Model Alarm
   */

  export type AggregateAlarm = {
    _count: AlarmCountAggregateOutputType | null
    _avg: AlarmAvgAggregateOutputType | null
    _sum: AlarmSumAggregateOutputType | null
    _min: AlarmMinAggregateOutputType | null
    _max: AlarmMaxAggregateOutputType | null
  }

  export type AlarmAvgAggregateOutputType = {
    priority: number | null
  }

  export type AlarmSumAggregateOutputType = {
    priority: number | null
  }

  export type AlarmMinAggregateOutputType = {
    id: string | null
    triggeredAt: Date | null
    alarmType: string | null
    priority: number | null
    status: string | null
    siteId: string | null
  }

  export type AlarmMaxAggregateOutputType = {
    id: string | null
    triggeredAt: Date | null
    alarmType: string | null
    priority: number | null
    status: string | null
    siteId: string | null
  }

  export type AlarmCountAggregateOutputType = {
    id: number
    triggeredAt: number
    alarmType: number
    priority: number
    status: number
    siteId: number
    _all: number
  }


  export type AlarmAvgAggregateInputType = {
    priority?: true
  }

  export type AlarmSumAggregateInputType = {
    priority?: true
  }

  export type AlarmMinAggregateInputType = {
    id?: true
    triggeredAt?: true
    alarmType?: true
    priority?: true
    status?: true
    siteId?: true
  }

  export type AlarmMaxAggregateInputType = {
    id?: true
    triggeredAt?: true
    alarmType?: true
    priority?: true
    status?: true
    siteId?: true
  }

  export type AlarmCountAggregateInputType = {
    id?: true
    triggeredAt?: true
    alarmType?: true
    priority?: true
    status?: true
    siteId?: true
    _all?: true
  }

  export type AlarmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alarm to aggregate.
     */
    where?: AlarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alarms to fetch.
     */
    orderBy?: AlarmOrderByWithRelationInput | AlarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alarms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alarms
    **/
    _count?: true | AlarmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlarmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlarmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlarmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlarmMaxAggregateInputType
  }

  export type GetAlarmAggregateType<T extends AlarmAggregateArgs> = {
        [P in keyof T & keyof AggregateAlarm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlarm[P]>
      : GetScalarType<T[P], AggregateAlarm[P]>
  }




  export type AlarmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlarmWhereInput
    orderBy?: AlarmOrderByWithAggregationInput | AlarmOrderByWithAggregationInput[]
    by: AlarmScalarFieldEnum[] | AlarmScalarFieldEnum
    having?: AlarmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlarmCountAggregateInputType | true
    _avg?: AlarmAvgAggregateInputType
    _sum?: AlarmSumAggregateInputType
    _min?: AlarmMinAggregateInputType
    _max?: AlarmMaxAggregateInputType
  }

  export type AlarmGroupByOutputType = {
    id: string
    triggeredAt: Date
    alarmType: string
    priority: number
    status: string
    siteId: string
    _count: AlarmCountAggregateOutputType | null
    _avg: AlarmAvgAggregateOutputType | null
    _sum: AlarmSumAggregateOutputType | null
    _min: AlarmMinAggregateOutputType | null
    _max: AlarmMaxAggregateOutputType | null
  }

  type GetAlarmGroupByPayload<T extends AlarmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlarmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlarmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlarmGroupByOutputType[P]>
            : GetScalarType<T[P], AlarmGroupByOutputType[P]>
        }
      >
    >


  export type AlarmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggeredAt?: boolean
    alarmType?: boolean
    priority?: boolean
    status?: boolean
    siteId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    aiCall?: boolean | Alarm$aiCallArgs<ExtArgs>
    dispatch?: boolean | Alarm$dispatchArgs<ExtArgs>
    obLogs?: boolean | Alarm$obLogsArgs<ExtArgs>
    _count?: boolean | AlarmCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alarm"]>

  export type AlarmSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggeredAt?: boolean
    alarmType?: boolean
    priority?: boolean
    status?: boolean
    siteId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alarm"]>

  export type AlarmSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggeredAt?: boolean
    alarmType?: boolean
    priority?: boolean
    status?: boolean
    siteId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alarm"]>

  export type AlarmSelectScalar = {
    id?: boolean
    triggeredAt?: boolean
    alarmType?: boolean
    priority?: boolean
    status?: boolean
    siteId?: boolean
  }

  export type AlarmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "triggeredAt" | "alarmType" | "priority" | "status" | "siteId", ExtArgs["result"]["alarm"]>
  export type AlarmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    aiCall?: boolean | Alarm$aiCallArgs<ExtArgs>
    dispatch?: boolean | Alarm$dispatchArgs<ExtArgs>
    obLogs?: boolean | Alarm$obLogsArgs<ExtArgs>
    _count?: boolean | AlarmCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlarmIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }
  export type AlarmIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }

  export type $AlarmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alarm"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      aiCall: Prisma.$AiCallPayload<ExtArgs> | null
      dispatch: Prisma.$DispatchPayload<ExtArgs> | null
      obLogs: Prisma.$ObLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      triggeredAt: Date
      alarmType: string
      priority: number
      status: string
      siteId: string
    }, ExtArgs["result"]["alarm"]>
    composites: {}
  }

  type AlarmGetPayload<S extends boolean | null | undefined | AlarmDefaultArgs> = $Result.GetResult<Prisma.$AlarmPayload, S>

  type AlarmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlarmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlarmCountAggregateInputType | true
    }

  export interface AlarmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alarm'], meta: { name: 'Alarm' } }
    /**
     * Find zero or one Alarm that matches the filter.
     * @param {AlarmFindUniqueArgs} args - Arguments to find a Alarm
     * @example
     * // Get one Alarm
     * const alarm = await prisma.alarm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlarmFindUniqueArgs>(args: SelectSubset<T, AlarmFindUniqueArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alarm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlarmFindUniqueOrThrowArgs} args - Arguments to find a Alarm
     * @example
     * // Get one Alarm
     * const alarm = await prisma.alarm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlarmFindUniqueOrThrowArgs>(args: SelectSubset<T, AlarmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alarm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmFindFirstArgs} args - Arguments to find a Alarm
     * @example
     * // Get one Alarm
     * const alarm = await prisma.alarm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlarmFindFirstArgs>(args?: SelectSubset<T, AlarmFindFirstArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alarm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmFindFirstOrThrowArgs} args - Arguments to find a Alarm
     * @example
     * // Get one Alarm
     * const alarm = await prisma.alarm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlarmFindFirstOrThrowArgs>(args?: SelectSubset<T, AlarmFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alarms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alarms
     * const alarms = await prisma.alarm.findMany()
     * 
     * // Get first 10 Alarms
     * const alarms = await prisma.alarm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alarmWithIdOnly = await prisma.alarm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlarmFindManyArgs>(args?: SelectSubset<T, AlarmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alarm.
     * @param {AlarmCreateArgs} args - Arguments to create a Alarm.
     * @example
     * // Create one Alarm
     * const Alarm = await prisma.alarm.create({
     *   data: {
     *     // ... data to create a Alarm
     *   }
     * })
     * 
     */
    create<T extends AlarmCreateArgs>(args: SelectSubset<T, AlarmCreateArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alarms.
     * @param {AlarmCreateManyArgs} args - Arguments to create many Alarms.
     * @example
     * // Create many Alarms
     * const alarm = await prisma.alarm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlarmCreateManyArgs>(args?: SelectSubset<T, AlarmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alarms and returns the data saved in the database.
     * @param {AlarmCreateManyAndReturnArgs} args - Arguments to create many Alarms.
     * @example
     * // Create many Alarms
     * const alarm = await prisma.alarm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alarms and only return the `id`
     * const alarmWithIdOnly = await prisma.alarm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlarmCreateManyAndReturnArgs>(args?: SelectSubset<T, AlarmCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alarm.
     * @param {AlarmDeleteArgs} args - Arguments to delete one Alarm.
     * @example
     * // Delete one Alarm
     * const Alarm = await prisma.alarm.delete({
     *   where: {
     *     // ... filter to delete one Alarm
     *   }
     * })
     * 
     */
    delete<T extends AlarmDeleteArgs>(args: SelectSubset<T, AlarmDeleteArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alarm.
     * @param {AlarmUpdateArgs} args - Arguments to update one Alarm.
     * @example
     * // Update one Alarm
     * const alarm = await prisma.alarm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlarmUpdateArgs>(args: SelectSubset<T, AlarmUpdateArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alarms.
     * @param {AlarmDeleteManyArgs} args - Arguments to filter Alarms to delete.
     * @example
     * // Delete a few Alarms
     * const { count } = await prisma.alarm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlarmDeleteManyArgs>(args?: SelectSubset<T, AlarmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alarms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alarms
     * const alarm = await prisma.alarm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlarmUpdateManyArgs>(args: SelectSubset<T, AlarmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alarms and returns the data updated in the database.
     * @param {AlarmUpdateManyAndReturnArgs} args - Arguments to update many Alarms.
     * @example
     * // Update many Alarms
     * const alarm = await prisma.alarm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alarms and only return the `id`
     * const alarmWithIdOnly = await prisma.alarm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlarmUpdateManyAndReturnArgs>(args: SelectSubset<T, AlarmUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alarm.
     * @param {AlarmUpsertArgs} args - Arguments to update or create a Alarm.
     * @example
     * // Update or create a Alarm
     * const alarm = await prisma.alarm.upsert({
     *   create: {
     *     // ... data to create a Alarm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alarm we want to update
     *   }
     * })
     */
    upsert<T extends AlarmUpsertArgs>(args: SelectSubset<T, AlarmUpsertArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alarms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmCountArgs} args - Arguments to filter Alarms to count.
     * @example
     * // Count the number of Alarms
     * const count = await prisma.alarm.count({
     *   where: {
     *     // ... the filter for the Alarms we want to count
     *   }
     * })
    **/
    count<T extends AlarmCountArgs>(
      args?: Subset<T, AlarmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlarmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alarm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlarmAggregateArgs>(args: Subset<T, AlarmAggregateArgs>): Prisma.PrismaPromise<GetAlarmAggregateType<T>>

    /**
     * Group by Alarm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlarmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlarmGroupByArgs['orderBy'] }
        : { orderBy?: AlarmGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlarmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlarmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alarm model
   */
  readonly fields: AlarmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alarm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlarmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    aiCall<T extends Alarm$aiCallArgs<ExtArgs> = {}>(args?: Subset<T, Alarm$aiCallArgs<ExtArgs>>): Prisma__AiCallClient<$Result.GetResult<Prisma.$AiCallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    dispatch<T extends Alarm$dispatchArgs<ExtArgs> = {}>(args?: Subset<T, Alarm$dispatchArgs<ExtArgs>>): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    obLogs<T extends Alarm$obLogsArgs<ExtArgs> = {}>(args?: Subset<T, Alarm$obLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alarm model
   */
  interface AlarmFieldRefs {
    readonly id: FieldRef<"Alarm", 'String'>
    readonly triggeredAt: FieldRef<"Alarm", 'DateTime'>
    readonly alarmType: FieldRef<"Alarm", 'String'>
    readonly priority: FieldRef<"Alarm", 'Int'>
    readonly status: FieldRef<"Alarm", 'String'>
    readonly siteId: FieldRef<"Alarm", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Alarm findUnique
   */
  export type AlarmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * Filter, which Alarm to fetch.
     */
    where: AlarmWhereUniqueInput
  }

  /**
   * Alarm findUniqueOrThrow
   */
  export type AlarmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * Filter, which Alarm to fetch.
     */
    where: AlarmWhereUniqueInput
  }

  /**
   * Alarm findFirst
   */
  export type AlarmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * Filter, which Alarm to fetch.
     */
    where?: AlarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alarms to fetch.
     */
    orderBy?: AlarmOrderByWithRelationInput | AlarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alarms.
     */
    cursor?: AlarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alarms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alarms.
     */
    distinct?: AlarmScalarFieldEnum | AlarmScalarFieldEnum[]
  }

  /**
   * Alarm findFirstOrThrow
   */
  export type AlarmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * Filter, which Alarm to fetch.
     */
    where?: AlarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alarms to fetch.
     */
    orderBy?: AlarmOrderByWithRelationInput | AlarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alarms.
     */
    cursor?: AlarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alarms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alarms.
     */
    distinct?: AlarmScalarFieldEnum | AlarmScalarFieldEnum[]
  }

  /**
   * Alarm findMany
   */
  export type AlarmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * Filter, which Alarms to fetch.
     */
    where?: AlarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alarms to fetch.
     */
    orderBy?: AlarmOrderByWithRelationInput | AlarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alarms.
     */
    cursor?: AlarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alarms.
     */
    skip?: number
    distinct?: AlarmScalarFieldEnum | AlarmScalarFieldEnum[]
  }

  /**
   * Alarm create
   */
  export type AlarmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * The data needed to create a Alarm.
     */
    data: XOR<AlarmCreateInput, AlarmUncheckedCreateInput>
  }

  /**
   * Alarm createMany
   */
  export type AlarmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alarms.
     */
    data: AlarmCreateManyInput | AlarmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alarm createManyAndReturn
   */
  export type AlarmCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * The data used to create many Alarms.
     */
    data: AlarmCreateManyInput | AlarmCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alarm update
   */
  export type AlarmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * The data needed to update a Alarm.
     */
    data: XOR<AlarmUpdateInput, AlarmUncheckedUpdateInput>
    /**
     * Choose, which Alarm to update.
     */
    where: AlarmWhereUniqueInput
  }

  /**
   * Alarm updateMany
   */
  export type AlarmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alarms.
     */
    data: XOR<AlarmUpdateManyMutationInput, AlarmUncheckedUpdateManyInput>
    /**
     * Filter which Alarms to update
     */
    where?: AlarmWhereInput
    /**
     * Limit how many Alarms to update.
     */
    limit?: number
  }

  /**
   * Alarm updateManyAndReturn
   */
  export type AlarmUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * The data used to update Alarms.
     */
    data: XOR<AlarmUpdateManyMutationInput, AlarmUncheckedUpdateManyInput>
    /**
     * Filter which Alarms to update
     */
    where?: AlarmWhereInput
    /**
     * Limit how many Alarms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alarm upsert
   */
  export type AlarmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * The filter to search for the Alarm to update in case it exists.
     */
    where: AlarmWhereUniqueInput
    /**
     * In case the Alarm found by the `where` argument doesn't exist, create a new Alarm with this data.
     */
    create: XOR<AlarmCreateInput, AlarmUncheckedCreateInput>
    /**
     * In case the Alarm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlarmUpdateInput, AlarmUncheckedUpdateInput>
  }

  /**
   * Alarm delete
   */
  export type AlarmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * Filter which Alarm to delete.
     */
    where: AlarmWhereUniqueInput
  }

  /**
   * Alarm deleteMany
   */
  export type AlarmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alarms to delete
     */
    where?: AlarmWhereInput
    /**
     * Limit how many Alarms to delete.
     */
    limit?: number
  }

  /**
   * Alarm.aiCall
   */
  export type Alarm$aiCallArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiCall
     */
    select?: AiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiCall
     */
    omit?: AiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiCallInclude<ExtArgs> | null
    where?: AiCallWhereInput
  }

  /**
   * Alarm.dispatch
   */
  export type Alarm$dispatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    where?: DispatchWhereInput
  }

  /**
   * Alarm.obLogs
   */
  export type Alarm$obLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObLog
     */
    select?: ObLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObLog
     */
    omit?: ObLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObLogInclude<ExtArgs> | null
    where?: ObLogWhereInput
    orderBy?: ObLogOrderByWithRelationInput | ObLogOrderByWithRelationInput[]
    cursor?: ObLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObLogScalarFieldEnum | ObLogScalarFieldEnum[]
  }

  /**
   * Alarm without action
   */
  export type AlarmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
  }


  /**
   * Model AiCall
   */

  export type AggregateAiCall = {
    _count: AiCallCountAggregateOutputType | null
    _avg: AiCallAvgAggregateOutputType | null
    _sum: AiCallSumAggregateOutputType | null
    _min: AiCallMinAggregateOutputType | null
    _max: AiCallMaxAggregateOutputType | null
  }

  export type AiCallAvgAggregateOutputType = {
    confidenceScore: number | null
  }

  export type AiCallSumAggregateOutputType = {
    confidenceScore: number | null
  }

  export type AiCallMinAggregateOutputType = {
    id: string | null
    aiDecision: string | null
    confidenceScore: number | null
    evaluatedAt: Date | null
    notes: string | null
    alarmId: string | null
  }

  export type AiCallMaxAggregateOutputType = {
    id: string | null
    aiDecision: string | null
    confidenceScore: number | null
    evaluatedAt: Date | null
    notes: string | null
    alarmId: string | null
  }

  export type AiCallCountAggregateOutputType = {
    id: number
    aiDecision: number
    confidenceScore: number
    evaluatedAt: number
    notes: number
    alarmId: number
    _all: number
  }


  export type AiCallAvgAggregateInputType = {
    confidenceScore?: true
  }

  export type AiCallSumAggregateInputType = {
    confidenceScore?: true
  }

  export type AiCallMinAggregateInputType = {
    id?: true
    aiDecision?: true
    confidenceScore?: true
    evaluatedAt?: true
    notes?: true
    alarmId?: true
  }

  export type AiCallMaxAggregateInputType = {
    id?: true
    aiDecision?: true
    confidenceScore?: true
    evaluatedAt?: true
    notes?: true
    alarmId?: true
  }

  export type AiCallCountAggregateInputType = {
    id?: true
    aiDecision?: true
    confidenceScore?: true
    evaluatedAt?: true
    notes?: true
    alarmId?: true
    _all?: true
  }

  export type AiCallAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiCall to aggregate.
     */
    where?: AiCallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiCalls to fetch.
     */
    orderBy?: AiCallOrderByWithRelationInput | AiCallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiCallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiCalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiCalls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiCalls
    **/
    _count?: true | AiCallCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AiCallAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AiCallSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiCallMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiCallMaxAggregateInputType
  }

  export type GetAiCallAggregateType<T extends AiCallAggregateArgs> = {
        [P in keyof T & keyof AggregateAiCall]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiCall[P]>
      : GetScalarType<T[P], AggregateAiCall[P]>
  }




  export type AiCallGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiCallWhereInput
    orderBy?: AiCallOrderByWithAggregationInput | AiCallOrderByWithAggregationInput[]
    by: AiCallScalarFieldEnum[] | AiCallScalarFieldEnum
    having?: AiCallScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiCallCountAggregateInputType | true
    _avg?: AiCallAvgAggregateInputType
    _sum?: AiCallSumAggregateInputType
    _min?: AiCallMinAggregateInputType
    _max?: AiCallMaxAggregateInputType
  }

  export type AiCallGroupByOutputType = {
    id: string
    aiDecision: string
    confidenceScore: number
    evaluatedAt: Date
    notes: string | null
    alarmId: string
    _count: AiCallCountAggregateOutputType | null
    _avg: AiCallAvgAggregateOutputType | null
    _sum: AiCallSumAggregateOutputType | null
    _min: AiCallMinAggregateOutputType | null
    _max: AiCallMaxAggregateOutputType | null
  }

  type GetAiCallGroupByPayload<T extends AiCallGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiCallGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiCallGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiCallGroupByOutputType[P]>
            : GetScalarType<T[P], AiCallGroupByOutputType[P]>
        }
      >
    >


  export type AiCallSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiDecision?: boolean
    confidenceScore?: boolean
    evaluatedAt?: boolean
    notes?: boolean
    alarmId?: boolean
    alarm?: boolean | AlarmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiCall"]>

  export type AiCallSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiDecision?: boolean
    confidenceScore?: boolean
    evaluatedAt?: boolean
    notes?: boolean
    alarmId?: boolean
    alarm?: boolean | AlarmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiCall"]>

  export type AiCallSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aiDecision?: boolean
    confidenceScore?: boolean
    evaluatedAt?: boolean
    notes?: boolean
    alarmId?: boolean
    alarm?: boolean | AlarmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiCall"]>

  export type AiCallSelectScalar = {
    id?: boolean
    aiDecision?: boolean
    confidenceScore?: boolean
    evaluatedAt?: boolean
    notes?: boolean
    alarmId?: boolean
  }

  export type AiCallOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aiDecision" | "confidenceScore" | "evaluatedAt" | "notes" | "alarmId", ExtArgs["result"]["aiCall"]>
  export type AiCallInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alarm?: boolean | AlarmDefaultArgs<ExtArgs>
  }
  export type AiCallIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alarm?: boolean | AlarmDefaultArgs<ExtArgs>
  }
  export type AiCallIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alarm?: boolean | AlarmDefaultArgs<ExtArgs>
  }

  export type $AiCallPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiCall"
    objects: {
      alarm: Prisma.$AlarmPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      aiDecision: string
      confidenceScore: number
      evaluatedAt: Date
      notes: string | null
      alarmId: string
    }, ExtArgs["result"]["aiCall"]>
    composites: {}
  }

  type AiCallGetPayload<S extends boolean | null | undefined | AiCallDefaultArgs> = $Result.GetResult<Prisma.$AiCallPayload, S>

  type AiCallCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiCallFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiCallCountAggregateInputType | true
    }

  export interface AiCallDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiCall'], meta: { name: 'AiCall' } }
    /**
     * Find zero or one AiCall that matches the filter.
     * @param {AiCallFindUniqueArgs} args - Arguments to find a AiCall
     * @example
     * // Get one AiCall
     * const aiCall = await prisma.aiCall.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiCallFindUniqueArgs>(args: SelectSubset<T, AiCallFindUniqueArgs<ExtArgs>>): Prisma__AiCallClient<$Result.GetResult<Prisma.$AiCallPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiCall that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiCallFindUniqueOrThrowArgs} args - Arguments to find a AiCall
     * @example
     * // Get one AiCall
     * const aiCall = await prisma.aiCall.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiCallFindUniqueOrThrowArgs>(args: SelectSubset<T, AiCallFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiCallClient<$Result.GetResult<Prisma.$AiCallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiCall that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiCallFindFirstArgs} args - Arguments to find a AiCall
     * @example
     * // Get one AiCall
     * const aiCall = await prisma.aiCall.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiCallFindFirstArgs>(args?: SelectSubset<T, AiCallFindFirstArgs<ExtArgs>>): Prisma__AiCallClient<$Result.GetResult<Prisma.$AiCallPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiCall that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiCallFindFirstOrThrowArgs} args - Arguments to find a AiCall
     * @example
     * // Get one AiCall
     * const aiCall = await prisma.aiCall.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiCallFindFirstOrThrowArgs>(args?: SelectSubset<T, AiCallFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiCallClient<$Result.GetResult<Prisma.$AiCallPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiCalls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiCallFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiCalls
     * const aiCalls = await prisma.aiCall.findMany()
     * 
     * // Get first 10 AiCalls
     * const aiCalls = await prisma.aiCall.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiCallWithIdOnly = await prisma.aiCall.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiCallFindManyArgs>(args?: SelectSubset<T, AiCallFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiCallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiCall.
     * @param {AiCallCreateArgs} args - Arguments to create a AiCall.
     * @example
     * // Create one AiCall
     * const AiCall = await prisma.aiCall.create({
     *   data: {
     *     // ... data to create a AiCall
     *   }
     * })
     * 
     */
    create<T extends AiCallCreateArgs>(args: SelectSubset<T, AiCallCreateArgs<ExtArgs>>): Prisma__AiCallClient<$Result.GetResult<Prisma.$AiCallPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiCalls.
     * @param {AiCallCreateManyArgs} args - Arguments to create many AiCalls.
     * @example
     * // Create many AiCalls
     * const aiCall = await prisma.aiCall.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiCallCreateManyArgs>(args?: SelectSubset<T, AiCallCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiCalls and returns the data saved in the database.
     * @param {AiCallCreateManyAndReturnArgs} args - Arguments to create many AiCalls.
     * @example
     * // Create many AiCalls
     * const aiCall = await prisma.aiCall.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiCalls and only return the `id`
     * const aiCallWithIdOnly = await prisma.aiCall.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiCallCreateManyAndReturnArgs>(args?: SelectSubset<T, AiCallCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiCallPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AiCall.
     * @param {AiCallDeleteArgs} args - Arguments to delete one AiCall.
     * @example
     * // Delete one AiCall
     * const AiCall = await prisma.aiCall.delete({
     *   where: {
     *     // ... filter to delete one AiCall
     *   }
     * })
     * 
     */
    delete<T extends AiCallDeleteArgs>(args: SelectSubset<T, AiCallDeleteArgs<ExtArgs>>): Prisma__AiCallClient<$Result.GetResult<Prisma.$AiCallPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiCall.
     * @param {AiCallUpdateArgs} args - Arguments to update one AiCall.
     * @example
     * // Update one AiCall
     * const aiCall = await prisma.aiCall.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiCallUpdateArgs>(args: SelectSubset<T, AiCallUpdateArgs<ExtArgs>>): Prisma__AiCallClient<$Result.GetResult<Prisma.$AiCallPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiCalls.
     * @param {AiCallDeleteManyArgs} args - Arguments to filter AiCalls to delete.
     * @example
     * // Delete a few AiCalls
     * const { count } = await prisma.aiCall.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiCallDeleteManyArgs>(args?: SelectSubset<T, AiCallDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiCalls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiCallUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiCalls
     * const aiCall = await prisma.aiCall.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiCallUpdateManyArgs>(args: SelectSubset<T, AiCallUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiCalls and returns the data updated in the database.
     * @param {AiCallUpdateManyAndReturnArgs} args - Arguments to update many AiCalls.
     * @example
     * // Update many AiCalls
     * const aiCall = await prisma.aiCall.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiCalls and only return the `id`
     * const aiCallWithIdOnly = await prisma.aiCall.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AiCallUpdateManyAndReturnArgs>(args: SelectSubset<T, AiCallUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiCallPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AiCall.
     * @param {AiCallUpsertArgs} args - Arguments to update or create a AiCall.
     * @example
     * // Update or create a AiCall
     * const aiCall = await prisma.aiCall.upsert({
     *   create: {
     *     // ... data to create a AiCall
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiCall we want to update
     *   }
     * })
     */
    upsert<T extends AiCallUpsertArgs>(args: SelectSubset<T, AiCallUpsertArgs<ExtArgs>>): Prisma__AiCallClient<$Result.GetResult<Prisma.$AiCallPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiCalls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiCallCountArgs} args - Arguments to filter AiCalls to count.
     * @example
     * // Count the number of AiCalls
     * const count = await prisma.aiCall.count({
     *   where: {
     *     // ... the filter for the AiCalls we want to count
     *   }
     * })
    **/
    count<T extends AiCallCountArgs>(
      args?: Subset<T, AiCallCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiCallCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiCall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiCallAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AiCallAggregateArgs>(args: Subset<T, AiCallAggregateArgs>): Prisma.PrismaPromise<GetAiCallAggregateType<T>>

    /**
     * Group by AiCall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiCallGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AiCallGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiCallGroupByArgs['orderBy'] }
        : { orderBy?: AiCallGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AiCallGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiCallGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiCall model
   */
  readonly fields: AiCallFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiCall.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiCallClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alarm<T extends AlarmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlarmDefaultArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AiCall model
   */
  interface AiCallFieldRefs {
    readonly id: FieldRef<"AiCall", 'String'>
    readonly aiDecision: FieldRef<"AiCall", 'String'>
    readonly confidenceScore: FieldRef<"AiCall", 'Float'>
    readonly evaluatedAt: FieldRef<"AiCall", 'DateTime'>
    readonly notes: FieldRef<"AiCall", 'String'>
    readonly alarmId: FieldRef<"AiCall", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AiCall findUnique
   */
  export type AiCallFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiCall
     */
    select?: AiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiCall
     */
    omit?: AiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiCallInclude<ExtArgs> | null
    /**
     * Filter, which AiCall to fetch.
     */
    where: AiCallWhereUniqueInput
  }

  /**
   * AiCall findUniqueOrThrow
   */
  export type AiCallFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiCall
     */
    select?: AiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiCall
     */
    omit?: AiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiCallInclude<ExtArgs> | null
    /**
     * Filter, which AiCall to fetch.
     */
    where: AiCallWhereUniqueInput
  }

  /**
   * AiCall findFirst
   */
  export type AiCallFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiCall
     */
    select?: AiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiCall
     */
    omit?: AiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiCallInclude<ExtArgs> | null
    /**
     * Filter, which AiCall to fetch.
     */
    where?: AiCallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiCalls to fetch.
     */
    orderBy?: AiCallOrderByWithRelationInput | AiCallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiCalls.
     */
    cursor?: AiCallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiCalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiCalls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiCalls.
     */
    distinct?: AiCallScalarFieldEnum | AiCallScalarFieldEnum[]
  }

  /**
   * AiCall findFirstOrThrow
   */
  export type AiCallFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiCall
     */
    select?: AiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiCall
     */
    omit?: AiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiCallInclude<ExtArgs> | null
    /**
     * Filter, which AiCall to fetch.
     */
    where?: AiCallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiCalls to fetch.
     */
    orderBy?: AiCallOrderByWithRelationInput | AiCallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiCalls.
     */
    cursor?: AiCallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiCalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiCalls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiCalls.
     */
    distinct?: AiCallScalarFieldEnum | AiCallScalarFieldEnum[]
  }

  /**
   * AiCall findMany
   */
  export type AiCallFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiCall
     */
    select?: AiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiCall
     */
    omit?: AiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiCallInclude<ExtArgs> | null
    /**
     * Filter, which AiCalls to fetch.
     */
    where?: AiCallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiCalls to fetch.
     */
    orderBy?: AiCallOrderByWithRelationInput | AiCallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiCalls.
     */
    cursor?: AiCallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiCalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiCalls.
     */
    skip?: number
    distinct?: AiCallScalarFieldEnum | AiCallScalarFieldEnum[]
  }

  /**
   * AiCall create
   */
  export type AiCallCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiCall
     */
    select?: AiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiCall
     */
    omit?: AiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiCallInclude<ExtArgs> | null
    /**
     * The data needed to create a AiCall.
     */
    data: XOR<AiCallCreateInput, AiCallUncheckedCreateInput>
  }

  /**
   * AiCall createMany
   */
  export type AiCallCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiCalls.
     */
    data: AiCallCreateManyInput | AiCallCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiCall createManyAndReturn
   */
  export type AiCallCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiCall
     */
    select?: AiCallSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiCall
     */
    omit?: AiCallOmit<ExtArgs> | null
    /**
     * The data used to create many AiCalls.
     */
    data: AiCallCreateManyInput | AiCallCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiCallIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiCall update
   */
  export type AiCallUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiCall
     */
    select?: AiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiCall
     */
    omit?: AiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiCallInclude<ExtArgs> | null
    /**
     * The data needed to update a AiCall.
     */
    data: XOR<AiCallUpdateInput, AiCallUncheckedUpdateInput>
    /**
     * Choose, which AiCall to update.
     */
    where: AiCallWhereUniqueInput
  }

  /**
   * AiCall updateMany
   */
  export type AiCallUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiCalls.
     */
    data: XOR<AiCallUpdateManyMutationInput, AiCallUncheckedUpdateManyInput>
    /**
     * Filter which AiCalls to update
     */
    where?: AiCallWhereInput
    /**
     * Limit how many AiCalls to update.
     */
    limit?: number
  }

  /**
   * AiCall updateManyAndReturn
   */
  export type AiCallUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiCall
     */
    select?: AiCallSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiCall
     */
    omit?: AiCallOmit<ExtArgs> | null
    /**
     * The data used to update AiCalls.
     */
    data: XOR<AiCallUpdateManyMutationInput, AiCallUncheckedUpdateManyInput>
    /**
     * Filter which AiCalls to update
     */
    where?: AiCallWhereInput
    /**
     * Limit how many AiCalls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiCallIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiCall upsert
   */
  export type AiCallUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiCall
     */
    select?: AiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiCall
     */
    omit?: AiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiCallInclude<ExtArgs> | null
    /**
     * The filter to search for the AiCall to update in case it exists.
     */
    where: AiCallWhereUniqueInput
    /**
     * In case the AiCall found by the `where` argument doesn't exist, create a new AiCall with this data.
     */
    create: XOR<AiCallCreateInput, AiCallUncheckedCreateInput>
    /**
     * In case the AiCall was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiCallUpdateInput, AiCallUncheckedUpdateInput>
  }

  /**
   * AiCall delete
   */
  export type AiCallDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiCall
     */
    select?: AiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiCall
     */
    omit?: AiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiCallInclude<ExtArgs> | null
    /**
     * Filter which AiCall to delete.
     */
    where: AiCallWhereUniqueInput
  }

  /**
   * AiCall deleteMany
   */
  export type AiCallDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiCalls to delete
     */
    where?: AiCallWhereInput
    /**
     * Limit how many AiCalls to delete.
     */
    limit?: number
  }

  /**
   * AiCall without action
   */
  export type AiCallDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiCall
     */
    select?: AiCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiCall
     */
    omit?: AiCallOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiCallInclude<ExtArgs> | null
  }


  /**
   * Model Dispatch
   */

  export type AggregateDispatch = {
    _count: DispatchCountAggregateOutputType | null
    _min: DispatchMinAggregateOutputType | null
    _max: DispatchMaxAggregateOutputType | null
  }

  export type DispatchMinAggregateOutputType = {
    id: string | null
    dispatchedAt: Date | null
    arrivalTime: Date | null
    resolvedAt: Date | null
    responseNotes: string | null
    alarmId: string | null
    guardId: string | null
    vehicleId: string | null
  }

  export type DispatchMaxAggregateOutputType = {
    id: string | null
    dispatchedAt: Date | null
    arrivalTime: Date | null
    resolvedAt: Date | null
    responseNotes: string | null
    alarmId: string | null
    guardId: string | null
    vehicleId: string | null
  }

  export type DispatchCountAggregateOutputType = {
    id: number
    dispatchedAt: number
    arrivalTime: number
    resolvedAt: number
    responseNotes: number
    alarmId: number
    guardId: number
    vehicleId: number
    _all: number
  }


  export type DispatchMinAggregateInputType = {
    id?: true
    dispatchedAt?: true
    arrivalTime?: true
    resolvedAt?: true
    responseNotes?: true
    alarmId?: true
    guardId?: true
    vehicleId?: true
  }

  export type DispatchMaxAggregateInputType = {
    id?: true
    dispatchedAt?: true
    arrivalTime?: true
    resolvedAt?: true
    responseNotes?: true
    alarmId?: true
    guardId?: true
    vehicleId?: true
  }

  export type DispatchCountAggregateInputType = {
    id?: true
    dispatchedAt?: true
    arrivalTime?: true
    resolvedAt?: true
    responseNotes?: true
    alarmId?: true
    guardId?: true
    vehicleId?: true
    _all?: true
  }

  export type DispatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispatch to aggregate.
     */
    where?: DispatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispatches to fetch.
     */
    orderBy?: DispatchOrderByWithRelationInput | DispatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DispatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dispatches
    **/
    _count?: true | DispatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DispatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DispatchMaxAggregateInputType
  }

  export type GetDispatchAggregateType<T extends DispatchAggregateArgs> = {
        [P in keyof T & keyof AggregateDispatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDispatch[P]>
      : GetScalarType<T[P], AggregateDispatch[P]>
  }




  export type DispatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DispatchWhereInput
    orderBy?: DispatchOrderByWithAggregationInput | DispatchOrderByWithAggregationInput[]
    by: DispatchScalarFieldEnum[] | DispatchScalarFieldEnum
    having?: DispatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DispatchCountAggregateInputType | true
    _min?: DispatchMinAggregateInputType
    _max?: DispatchMaxAggregateInputType
  }

  export type DispatchGroupByOutputType = {
    id: string
    dispatchedAt: Date
    arrivalTime: Date | null
    resolvedAt: Date | null
    responseNotes: string | null
    alarmId: string
    guardId: string | null
    vehicleId: string | null
    _count: DispatchCountAggregateOutputType | null
    _min: DispatchMinAggregateOutputType | null
    _max: DispatchMaxAggregateOutputType | null
  }

  type GetDispatchGroupByPayload<T extends DispatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DispatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DispatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DispatchGroupByOutputType[P]>
            : GetScalarType<T[P], DispatchGroupByOutputType[P]>
        }
      >
    >


  export type DispatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dispatchedAt?: boolean
    arrivalTime?: boolean
    resolvedAt?: boolean
    responseNotes?: boolean
    alarmId?: boolean
    guardId?: boolean
    vehicleId?: boolean
    alarm?: boolean | AlarmDefaultArgs<ExtArgs>
    guard?: boolean | Dispatch$guardArgs<ExtArgs>
    vehicle?: boolean | Dispatch$vehicleArgs<ExtArgs>
  }, ExtArgs["result"]["dispatch"]>

  export type DispatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dispatchedAt?: boolean
    arrivalTime?: boolean
    resolvedAt?: boolean
    responseNotes?: boolean
    alarmId?: boolean
    guardId?: boolean
    vehicleId?: boolean
    alarm?: boolean | AlarmDefaultArgs<ExtArgs>
    guard?: boolean | Dispatch$guardArgs<ExtArgs>
    vehicle?: boolean | Dispatch$vehicleArgs<ExtArgs>
  }, ExtArgs["result"]["dispatch"]>

  export type DispatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dispatchedAt?: boolean
    arrivalTime?: boolean
    resolvedAt?: boolean
    responseNotes?: boolean
    alarmId?: boolean
    guardId?: boolean
    vehicleId?: boolean
    alarm?: boolean | AlarmDefaultArgs<ExtArgs>
    guard?: boolean | Dispatch$guardArgs<ExtArgs>
    vehicle?: boolean | Dispatch$vehicleArgs<ExtArgs>
  }, ExtArgs["result"]["dispatch"]>

  export type DispatchSelectScalar = {
    id?: boolean
    dispatchedAt?: boolean
    arrivalTime?: boolean
    resolvedAt?: boolean
    responseNotes?: boolean
    alarmId?: boolean
    guardId?: boolean
    vehicleId?: boolean
  }

  export type DispatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dispatchedAt" | "arrivalTime" | "resolvedAt" | "responseNotes" | "alarmId" | "guardId" | "vehicleId", ExtArgs["result"]["dispatch"]>
  export type DispatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alarm?: boolean | AlarmDefaultArgs<ExtArgs>
    guard?: boolean | Dispatch$guardArgs<ExtArgs>
    vehicle?: boolean | Dispatch$vehicleArgs<ExtArgs>
  }
  export type DispatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alarm?: boolean | AlarmDefaultArgs<ExtArgs>
    guard?: boolean | Dispatch$guardArgs<ExtArgs>
    vehicle?: boolean | Dispatch$vehicleArgs<ExtArgs>
  }
  export type DispatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alarm?: boolean | AlarmDefaultArgs<ExtArgs>
    guard?: boolean | Dispatch$guardArgs<ExtArgs>
    vehicle?: boolean | Dispatch$vehicleArgs<ExtArgs>
  }

  export type $DispatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dispatch"
    objects: {
      alarm: Prisma.$AlarmPayload<ExtArgs>
      guard: Prisma.$GuardPayload<ExtArgs> | null
      vehicle: Prisma.$VehiclePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dispatchedAt: Date
      arrivalTime: Date | null
      resolvedAt: Date | null
      responseNotes: string | null
      alarmId: string
      guardId: string | null
      vehicleId: string | null
    }, ExtArgs["result"]["dispatch"]>
    composites: {}
  }

  type DispatchGetPayload<S extends boolean | null | undefined | DispatchDefaultArgs> = $Result.GetResult<Prisma.$DispatchPayload, S>

  type DispatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DispatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DispatchCountAggregateInputType | true
    }

  export interface DispatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dispatch'], meta: { name: 'Dispatch' } }
    /**
     * Find zero or one Dispatch that matches the filter.
     * @param {DispatchFindUniqueArgs} args - Arguments to find a Dispatch
     * @example
     * // Get one Dispatch
     * const dispatch = await prisma.dispatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DispatchFindUniqueArgs>(args: SelectSubset<T, DispatchFindUniqueArgs<ExtArgs>>): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dispatch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DispatchFindUniqueOrThrowArgs} args - Arguments to find a Dispatch
     * @example
     * // Get one Dispatch
     * const dispatch = await prisma.dispatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DispatchFindUniqueOrThrowArgs>(args: SelectSubset<T, DispatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchFindFirstArgs} args - Arguments to find a Dispatch
     * @example
     * // Get one Dispatch
     * const dispatch = await prisma.dispatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DispatchFindFirstArgs>(args?: SelectSubset<T, DispatchFindFirstArgs<ExtArgs>>): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchFindFirstOrThrowArgs} args - Arguments to find a Dispatch
     * @example
     * // Get one Dispatch
     * const dispatch = await prisma.dispatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DispatchFindFirstOrThrowArgs>(args?: SelectSubset<T, DispatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dispatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dispatches
     * const dispatches = await prisma.dispatch.findMany()
     * 
     * // Get first 10 Dispatches
     * const dispatches = await prisma.dispatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dispatchWithIdOnly = await prisma.dispatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DispatchFindManyArgs>(args?: SelectSubset<T, DispatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dispatch.
     * @param {DispatchCreateArgs} args - Arguments to create a Dispatch.
     * @example
     * // Create one Dispatch
     * const Dispatch = await prisma.dispatch.create({
     *   data: {
     *     // ... data to create a Dispatch
     *   }
     * })
     * 
     */
    create<T extends DispatchCreateArgs>(args: SelectSubset<T, DispatchCreateArgs<ExtArgs>>): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dispatches.
     * @param {DispatchCreateManyArgs} args - Arguments to create many Dispatches.
     * @example
     * // Create many Dispatches
     * const dispatch = await prisma.dispatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DispatchCreateManyArgs>(args?: SelectSubset<T, DispatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dispatches and returns the data saved in the database.
     * @param {DispatchCreateManyAndReturnArgs} args - Arguments to create many Dispatches.
     * @example
     * // Create many Dispatches
     * const dispatch = await prisma.dispatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dispatches and only return the `id`
     * const dispatchWithIdOnly = await prisma.dispatch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DispatchCreateManyAndReturnArgs>(args?: SelectSubset<T, DispatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dispatch.
     * @param {DispatchDeleteArgs} args - Arguments to delete one Dispatch.
     * @example
     * // Delete one Dispatch
     * const Dispatch = await prisma.dispatch.delete({
     *   where: {
     *     // ... filter to delete one Dispatch
     *   }
     * })
     * 
     */
    delete<T extends DispatchDeleteArgs>(args: SelectSubset<T, DispatchDeleteArgs<ExtArgs>>): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dispatch.
     * @param {DispatchUpdateArgs} args - Arguments to update one Dispatch.
     * @example
     * // Update one Dispatch
     * const dispatch = await prisma.dispatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DispatchUpdateArgs>(args: SelectSubset<T, DispatchUpdateArgs<ExtArgs>>): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dispatches.
     * @param {DispatchDeleteManyArgs} args - Arguments to filter Dispatches to delete.
     * @example
     * // Delete a few Dispatches
     * const { count } = await prisma.dispatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DispatchDeleteManyArgs>(args?: SelectSubset<T, DispatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dispatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dispatches
     * const dispatch = await prisma.dispatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DispatchUpdateManyArgs>(args: SelectSubset<T, DispatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dispatches and returns the data updated in the database.
     * @param {DispatchUpdateManyAndReturnArgs} args - Arguments to update many Dispatches.
     * @example
     * // Update many Dispatches
     * const dispatch = await prisma.dispatch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dispatches and only return the `id`
     * const dispatchWithIdOnly = await prisma.dispatch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DispatchUpdateManyAndReturnArgs>(args: SelectSubset<T, DispatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dispatch.
     * @param {DispatchUpsertArgs} args - Arguments to update or create a Dispatch.
     * @example
     * // Update or create a Dispatch
     * const dispatch = await prisma.dispatch.upsert({
     *   create: {
     *     // ... data to create a Dispatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dispatch we want to update
     *   }
     * })
     */
    upsert<T extends DispatchUpsertArgs>(args: SelectSubset<T, DispatchUpsertArgs<ExtArgs>>): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dispatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchCountArgs} args - Arguments to filter Dispatches to count.
     * @example
     * // Count the number of Dispatches
     * const count = await prisma.dispatch.count({
     *   where: {
     *     // ... the filter for the Dispatches we want to count
     *   }
     * })
    **/
    count<T extends DispatchCountArgs>(
      args?: Subset<T, DispatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DispatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dispatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DispatchAggregateArgs>(args: Subset<T, DispatchAggregateArgs>): Prisma.PrismaPromise<GetDispatchAggregateType<T>>

    /**
     * Group by Dispatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DispatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DispatchGroupByArgs['orderBy'] }
        : { orderBy?: DispatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DispatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDispatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dispatch model
   */
  readonly fields: DispatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dispatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DispatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alarm<T extends AlarmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlarmDefaultArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guard<T extends Dispatch$guardArgs<ExtArgs> = {}>(args?: Subset<T, Dispatch$guardArgs<ExtArgs>>): Prisma__GuardClient<$Result.GetResult<Prisma.$GuardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends Dispatch$vehicleArgs<ExtArgs> = {}>(args?: Subset<T, Dispatch$vehicleArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dispatch model
   */
  interface DispatchFieldRefs {
    readonly id: FieldRef<"Dispatch", 'String'>
    readonly dispatchedAt: FieldRef<"Dispatch", 'DateTime'>
    readonly arrivalTime: FieldRef<"Dispatch", 'DateTime'>
    readonly resolvedAt: FieldRef<"Dispatch", 'DateTime'>
    readonly responseNotes: FieldRef<"Dispatch", 'String'>
    readonly alarmId: FieldRef<"Dispatch", 'String'>
    readonly guardId: FieldRef<"Dispatch", 'String'>
    readonly vehicleId: FieldRef<"Dispatch", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dispatch findUnique
   */
  export type DispatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * Filter, which Dispatch to fetch.
     */
    where: DispatchWhereUniqueInput
  }

  /**
   * Dispatch findUniqueOrThrow
   */
  export type DispatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * Filter, which Dispatch to fetch.
     */
    where: DispatchWhereUniqueInput
  }

  /**
   * Dispatch findFirst
   */
  export type DispatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * Filter, which Dispatch to fetch.
     */
    where?: DispatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispatches to fetch.
     */
    orderBy?: DispatchOrderByWithRelationInput | DispatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dispatches.
     */
    cursor?: DispatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispatches.
     */
    distinct?: DispatchScalarFieldEnum | DispatchScalarFieldEnum[]
  }

  /**
   * Dispatch findFirstOrThrow
   */
  export type DispatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * Filter, which Dispatch to fetch.
     */
    where?: DispatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispatches to fetch.
     */
    orderBy?: DispatchOrderByWithRelationInput | DispatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dispatches.
     */
    cursor?: DispatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispatches.
     */
    distinct?: DispatchScalarFieldEnum | DispatchScalarFieldEnum[]
  }

  /**
   * Dispatch findMany
   */
  export type DispatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * Filter, which Dispatches to fetch.
     */
    where?: DispatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dispatches to fetch.
     */
    orderBy?: DispatchOrderByWithRelationInput | DispatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dispatches.
     */
    cursor?: DispatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dispatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dispatches.
     */
    skip?: number
    distinct?: DispatchScalarFieldEnum | DispatchScalarFieldEnum[]
  }

  /**
   * Dispatch create
   */
  export type DispatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Dispatch.
     */
    data: XOR<DispatchCreateInput, DispatchUncheckedCreateInput>
  }

  /**
   * Dispatch createMany
   */
  export type DispatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dispatches.
     */
    data: DispatchCreateManyInput | DispatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dispatch createManyAndReturn
   */
  export type DispatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * The data used to create many Dispatches.
     */
    data: DispatchCreateManyInput | DispatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dispatch update
   */
  export type DispatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Dispatch.
     */
    data: XOR<DispatchUpdateInput, DispatchUncheckedUpdateInput>
    /**
     * Choose, which Dispatch to update.
     */
    where: DispatchWhereUniqueInput
  }

  /**
   * Dispatch updateMany
   */
  export type DispatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dispatches.
     */
    data: XOR<DispatchUpdateManyMutationInput, DispatchUncheckedUpdateManyInput>
    /**
     * Filter which Dispatches to update
     */
    where?: DispatchWhereInput
    /**
     * Limit how many Dispatches to update.
     */
    limit?: number
  }

  /**
   * Dispatch updateManyAndReturn
   */
  export type DispatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * The data used to update Dispatches.
     */
    data: XOR<DispatchUpdateManyMutationInput, DispatchUncheckedUpdateManyInput>
    /**
     * Filter which Dispatches to update
     */
    where?: DispatchWhereInput
    /**
     * Limit how many Dispatches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dispatch upsert
   */
  export type DispatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Dispatch to update in case it exists.
     */
    where: DispatchWhereUniqueInput
    /**
     * In case the Dispatch found by the `where` argument doesn't exist, create a new Dispatch with this data.
     */
    create: XOR<DispatchCreateInput, DispatchUncheckedCreateInput>
    /**
     * In case the Dispatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DispatchUpdateInput, DispatchUncheckedUpdateInput>
  }

  /**
   * Dispatch delete
   */
  export type DispatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    /**
     * Filter which Dispatch to delete.
     */
    where: DispatchWhereUniqueInput
  }

  /**
   * Dispatch deleteMany
   */
  export type DispatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispatches to delete
     */
    where?: DispatchWhereInput
    /**
     * Limit how many Dispatches to delete.
     */
    limit?: number
  }

  /**
   * Dispatch.guard
   */
  export type Dispatch$guardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guard
     */
    select?: GuardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guard
     */
    omit?: GuardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardInclude<ExtArgs> | null
    where?: GuardWhereInput
  }

  /**
   * Dispatch.vehicle
   */
  export type Dispatch$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
  }

  /**
   * Dispatch without action
   */
  export type DispatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
  }


  /**
   * Model ObLog
   */

  export type AggregateObLog = {
    _count: ObLogCountAggregateOutputType | null
    _min: ObLogMinAggregateOutputType | null
    _max: ObLogMaxAggregateOutputType | null
  }

  export type ObLogMinAggregateOutputType = {
    id: string | null
    logTime: Date | null
    message: string | null
    source: string | null
    alarmId: string | null
    siteId: string | null
    guardId: string | null
  }

  export type ObLogMaxAggregateOutputType = {
    id: string | null
    logTime: Date | null
    message: string | null
    source: string | null
    alarmId: string | null
    siteId: string | null
    guardId: string | null
  }

  export type ObLogCountAggregateOutputType = {
    id: number
    logTime: number
    message: number
    source: number
    alarmId: number
    siteId: number
    guardId: number
    _all: number
  }


  export type ObLogMinAggregateInputType = {
    id?: true
    logTime?: true
    message?: true
    source?: true
    alarmId?: true
    siteId?: true
    guardId?: true
  }

  export type ObLogMaxAggregateInputType = {
    id?: true
    logTime?: true
    message?: true
    source?: true
    alarmId?: true
    siteId?: true
    guardId?: true
  }

  export type ObLogCountAggregateInputType = {
    id?: true
    logTime?: true
    message?: true
    source?: true
    alarmId?: true
    siteId?: true
    guardId?: true
    _all?: true
  }

  export type ObLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObLog to aggregate.
     */
    where?: ObLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObLogs to fetch.
     */
    orderBy?: ObLogOrderByWithRelationInput | ObLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ObLogs
    **/
    _count?: true | ObLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObLogMaxAggregateInputType
  }

  export type GetObLogAggregateType<T extends ObLogAggregateArgs> = {
        [P in keyof T & keyof AggregateObLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObLog[P]>
      : GetScalarType<T[P], AggregateObLog[P]>
  }




  export type ObLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObLogWhereInput
    orderBy?: ObLogOrderByWithAggregationInput | ObLogOrderByWithAggregationInput[]
    by: ObLogScalarFieldEnum[] | ObLogScalarFieldEnum
    having?: ObLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObLogCountAggregateInputType | true
    _min?: ObLogMinAggregateInputType
    _max?: ObLogMaxAggregateInputType
  }

  export type ObLogGroupByOutputType = {
    id: string
    logTime: Date
    message: string
    source: string
    alarmId: string | null
    siteId: string | null
    guardId: string | null
    _count: ObLogCountAggregateOutputType | null
    _min: ObLogMinAggregateOutputType | null
    _max: ObLogMaxAggregateOutputType | null
  }

  type GetObLogGroupByPayload<T extends ObLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObLogGroupByOutputType[P]>
            : GetScalarType<T[P], ObLogGroupByOutputType[P]>
        }
      >
    >


  export type ObLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logTime?: boolean
    message?: boolean
    source?: boolean
    alarmId?: boolean
    siteId?: boolean
    guardId?: boolean
    alarm?: boolean | ObLog$alarmArgs<ExtArgs>
    site?: boolean | ObLog$siteArgs<ExtArgs>
    guard?: boolean | ObLog$guardArgs<ExtArgs>
  }, ExtArgs["result"]["obLog"]>

  export type ObLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logTime?: boolean
    message?: boolean
    source?: boolean
    alarmId?: boolean
    siteId?: boolean
    guardId?: boolean
    alarm?: boolean | ObLog$alarmArgs<ExtArgs>
    site?: boolean | ObLog$siteArgs<ExtArgs>
    guard?: boolean | ObLog$guardArgs<ExtArgs>
  }, ExtArgs["result"]["obLog"]>

  export type ObLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logTime?: boolean
    message?: boolean
    source?: boolean
    alarmId?: boolean
    siteId?: boolean
    guardId?: boolean
    alarm?: boolean | ObLog$alarmArgs<ExtArgs>
    site?: boolean | ObLog$siteArgs<ExtArgs>
    guard?: boolean | ObLog$guardArgs<ExtArgs>
  }, ExtArgs["result"]["obLog"]>

  export type ObLogSelectScalar = {
    id?: boolean
    logTime?: boolean
    message?: boolean
    source?: boolean
    alarmId?: boolean
    siteId?: boolean
    guardId?: boolean
  }

  export type ObLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "logTime" | "message" | "source" | "alarmId" | "siteId" | "guardId", ExtArgs["result"]["obLog"]>
  export type ObLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alarm?: boolean | ObLog$alarmArgs<ExtArgs>
    site?: boolean | ObLog$siteArgs<ExtArgs>
    guard?: boolean | ObLog$guardArgs<ExtArgs>
  }
  export type ObLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alarm?: boolean | ObLog$alarmArgs<ExtArgs>
    site?: boolean | ObLog$siteArgs<ExtArgs>
    guard?: boolean | ObLog$guardArgs<ExtArgs>
  }
  export type ObLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alarm?: boolean | ObLog$alarmArgs<ExtArgs>
    site?: boolean | ObLog$siteArgs<ExtArgs>
    guard?: boolean | ObLog$guardArgs<ExtArgs>
  }

  export type $ObLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ObLog"
    objects: {
      alarm: Prisma.$AlarmPayload<ExtArgs> | null
      site: Prisma.$SitePayload<ExtArgs> | null
      guard: Prisma.$GuardPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      logTime: Date
      message: string
      source: string
      alarmId: string | null
      siteId: string | null
      guardId: string | null
    }, ExtArgs["result"]["obLog"]>
    composites: {}
  }

  type ObLogGetPayload<S extends boolean | null | undefined | ObLogDefaultArgs> = $Result.GetResult<Prisma.$ObLogPayload, S>

  type ObLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObLogCountAggregateInputType | true
    }

  export interface ObLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ObLog'], meta: { name: 'ObLog' } }
    /**
     * Find zero or one ObLog that matches the filter.
     * @param {ObLogFindUniqueArgs} args - Arguments to find a ObLog
     * @example
     * // Get one ObLog
     * const obLog = await prisma.obLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObLogFindUniqueArgs>(args: SelectSubset<T, ObLogFindUniqueArgs<ExtArgs>>): Prisma__ObLogClient<$Result.GetResult<Prisma.$ObLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ObLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObLogFindUniqueOrThrowArgs} args - Arguments to find a ObLog
     * @example
     * // Get one ObLog
     * const obLog = await prisma.obLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ObLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObLogClient<$Result.GetResult<Prisma.$ObLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ObLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObLogFindFirstArgs} args - Arguments to find a ObLog
     * @example
     * // Get one ObLog
     * const obLog = await prisma.obLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObLogFindFirstArgs>(args?: SelectSubset<T, ObLogFindFirstArgs<ExtArgs>>): Prisma__ObLogClient<$Result.GetResult<Prisma.$ObLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ObLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObLogFindFirstOrThrowArgs} args - Arguments to find a ObLog
     * @example
     * // Get one ObLog
     * const obLog = await prisma.obLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ObLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObLogClient<$Result.GetResult<Prisma.$ObLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ObLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ObLogs
     * const obLogs = await prisma.obLog.findMany()
     * 
     * // Get first 10 ObLogs
     * const obLogs = await prisma.obLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const obLogWithIdOnly = await prisma.obLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObLogFindManyArgs>(args?: SelectSubset<T, ObLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ObLog.
     * @param {ObLogCreateArgs} args - Arguments to create a ObLog.
     * @example
     * // Create one ObLog
     * const ObLog = await prisma.obLog.create({
     *   data: {
     *     // ... data to create a ObLog
     *   }
     * })
     * 
     */
    create<T extends ObLogCreateArgs>(args: SelectSubset<T, ObLogCreateArgs<ExtArgs>>): Prisma__ObLogClient<$Result.GetResult<Prisma.$ObLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ObLogs.
     * @param {ObLogCreateManyArgs} args - Arguments to create many ObLogs.
     * @example
     * // Create many ObLogs
     * const obLog = await prisma.obLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObLogCreateManyArgs>(args?: SelectSubset<T, ObLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ObLogs and returns the data saved in the database.
     * @param {ObLogCreateManyAndReturnArgs} args - Arguments to create many ObLogs.
     * @example
     * // Create many ObLogs
     * const obLog = await prisma.obLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ObLogs and only return the `id`
     * const obLogWithIdOnly = await prisma.obLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ObLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ObLog.
     * @param {ObLogDeleteArgs} args - Arguments to delete one ObLog.
     * @example
     * // Delete one ObLog
     * const ObLog = await prisma.obLog.delete({
     *   where: {
     *     // ... filter to delete one ObLog
     *   }
     * })
     * 
     */
    delete<T extends ObLogDeleteArgs>(args: SelectSubset<T, ObLogDeleteArgs<ExtArgs>>): Prisma__ObLogClient<$Result.GetResult<Prisma.$ObLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ObLog.
     * @param {ObLogUpdateArgs} args - Arguments to update one ObLog.
     * @example
     * // Update one ObLog
     * const obLog = await prisma.obLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObLogUpdateArgs>(args: SelectSubset<T, ObLogUpdateArgs<ExtArgs>>): Prisma__ObLogClient<$Result.GetResult<Prisma.$ObLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ObLogs.
     * @param {ObLogDeleteManyArgs} args - Arguments to filter ObLogs to delete.
     * @example
     * // Delete a few ObLogs
     * const { count } = await prisma.obLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObLogDeleteManyArgs>(args?: SelectSubset<T, ObLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ObLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ObLogs
     * const obLog = await prisma.obLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObLogUpdateManyArgs>(args: SelectSubset<T, ObLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ObLogs and returns the data updated in the database.
     * @param {ObLogUpdateManyAndReturnArgs} args - Arguments to update many ObLogs.
     * @example
     * // Update many ObLogs
     * const obLog = await prisma.obLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ObLogs and only return the `id`
     * const obLogWithIdOnly = await prisma.obLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ObLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ObLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ObLog.
     * @param {ObLogUpsertArgs} args - Arguments to update or create a ObLog.
     * @example
     * // Update or create a ObLog
     * const obLog = await prisma.obLog.upsert({
     *   create: {
     *     // ... data to create a ObLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ObLog we want to update
     *   }
     * })
     */
    upsert<T extends ObLogUpsertArgs>(args: SelectSubset<T, ObLogUpsertArgs<ExtArgs>>): Prisma__ObLogClient<$Result.GetResult<Prisma.$ObLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ObLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObLogCountArgs} args - Arguments to filter ObLogs to count.
     * @example
     * // Count the number of ObLogs
     * const count = await prisma.obLog.count({
     *   where: {
     *     // ... the filter for the ObLogs we want to count
     *   }
     * })
    **/
    count<T extends ObLogCountArgs>(
      args?: Subset<T, ObLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ObLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ObLogAggregateArgs>(args: Subset<T, ObLogAggregateArgs>): Prisma.PrismaPromise<GetObLogAggregateType<T>>

    /**
     * Group by ObLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ObLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObLogGroupByArgs['orderBy'] }
        : { orderBy?: ObLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ObLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ObLog model
   */
  readonly fields: ObLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ObLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alarm<T extends ObLog$alarmArgs<ExtArgs> = {}>(args?: Subset<T, ObLog$alarmArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    site<T extends ObLog$siteArgs<ExtArgs> = {}>(args?: Subset<T, ObLog$siteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    guard<T extends ObLog$guardArgs<ExtArgs> = {}>(args?: Subset<T, ObLog$guardArgs<ExtArgs>>): Prisma__GuardClient<$Result.GetResult<Prisma.$GuardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ObLog model
   */
  interface ObLogFieldRefs {
    readonly id: FieldRef<"ObLog", 'String'>
    readonly logTime: FieldRef<"ObLog", 'DateTime'>
    readonly message: FieldRef<"ObLog", 'String'>
    readonly source: FieldRef<"ObLog", 'String'>
    readonly alarmId: FieldRef<"ObLog", 'String'>
    readonly siteId: FieldRef<"ObLog", 'String'>
    readonly guardId: FieldRef<"ObLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ObLog findUnique
   */
  export type ObLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObLog
     */
    select?: ObLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObLog
     */
    omit?: ObLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObLogInclude<ExtArgs> | null
    /**
     * Filter, which ObLog to fetch.
     */
    where: ObLogWhereUniqueInput
  }

  /**
   * ObLog findUniqueOrThrow
   */
  export type ObLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObLog
     */
    select?: ObLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObLog
     */
    omit?: ObLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObLogInclude<ExtArgs> | null
    /**
     * Filter, which ObLog to fetch.
     */
    where: ObLogWhereUniqueInput
  }

  /**
   * ObLog findFirst
   */
  export type ObLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObLog
     */
    select?: ObLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObLog
     */
    omit?: ObLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObLogInclude<ExtArgs> | null
    /**
     * Filter, which ObLog to fetch.
     */
    where?: ObLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObLogs to fetch.
     */
    orderBy?: ObLogOrderByWithRelationInput | ObLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObLogs.
     */
    cursor?: ObLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObLogs.
     */
    distinct?: ObLogScalarFieldEnum | ObLogScalarFieldEnum[]
  }

  /**
   * ObLog findFirstOrThrow
   */
  export type ObLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObLog
     */
    select?: ObLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObLog
     */
    omit?: ObLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObLogInclude<ExtArgs> | null
    /**
     * Filter, which ObLog to fetch.
     */
    where?: ObLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObLogs to fetch.
     */
    orderBy?: ObLogOrderByWithRelationInput | ObLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObLogs.
     */
    cursor?: ObLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObLogs.
     */
    distinct?: ObLogScalarFieldEnum | ObLogScalarFieldEnum[]
  }

  /**
   * ObLog findMany
   */
  export type ObLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObLog
     */
    select?: ObLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObLog
     */
    omit?: ObLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObLogInclude<ExtArgs> | null
    /**
     * Filter, which ObLogs to fetch.
     */
    where?: ObLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObLogs to fetch.
     */
    orderBy?: ObLogOrderByWithRelationInput | ObLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ObLogs.
     */
    cursor?: ObLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObLogs.
     */
    skip?: number
    distinct?: ObLogScalarFieldEnum | ObLogScalarFieldEnum[]
  }

  /**
   * ObLog create
   */
  export type ObLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObLog
     */
    select?: ObLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObLog
     */
    omit?: ObLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ObLog.
     */
    data: XOR<ObLogCreateInput, ObLogUncheckedCreateInput>
  }

  /**
   * ObLog createMany
   */
  export type ObLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ObLogs.
     */
    data: ObLogCreateManyInput | ObLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ObLog createManyAndReturn
   */
  export type ObLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObLog
     */
    select?: ObLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ObLog
     */
    omit?: ObLogOmit<ExtArgs> | null
    /**
     * The data used to create many ObLogs.
     */
    data: ObLogCreateManyInput | ObLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ObLog update
   */
  export type ObLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObLog
     */
    select?: ObLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObLog
     */
    omit?: ObLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ObLog.
     */
    data: XOR<ObLogUpdateInput, ObLogUncheckedUpdateInput>
    /**
     * Choose, which ObLog to update.
     */
    where: ObLogWhereUniqueInput
  }

  /**
   * ObLog updateMany
   */
  export type ObLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ObLogs.
     */
    data: XOR<ObLogUpdateManyMutationInput, ObLogUncheckedUpdateManyInput>
    /**
     * Filter which ObLogs to update
     */
    where?: ObLogWhereInput
    /**
     * Limit how many ObLogs to update.
     */
    limit?: number
  }

  /**
   * ObLog updateManyAndReturn
   */
  export type ObLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObLog
     */
    select?: ObLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ObLog
     */
    omit?: ObLogOmit<ExtArgs> | null
    /**
     * The data used to update ObLogs.
     */
    data: XOR<ObLogUpdateManyMutationInput, ObLogUncheckedUpdateManyInput>
    /**
     * Filter which ObLogs to update
     */
    where?: ObLogWhereInput
    /**
     * Limit how many ObLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ObLog upsert
   */
  export type ObLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObLog
     */
    select?: ObLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObLog
     */
    omit?: ObLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ObLog to update in case it exists.
     */
    where: ObLogWhereUniqueInput
    /**
     * In case the ObLog found by the `where` argument doesn't exist, create a new ObLog with this data.
     */
    create: XOR<ObLogCreateInput, ObLogUncheckedCreateInput>
    /**
     * In case the ObLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObLogUpdateInput, ObLogUncheckedUpdateInput>
  }

  /**
   * ObLog delete
   */
  export type ObLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObLog
     */
    select?: ObLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObLog
     */
    omit?: ObLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObLogInclude<ExtArgs> | null
    /**
     * Filter which ObLog to delete.
     */
    where: ObLogWhereUniqueInput
  }

  /**
   * ObLog deleteMany
   */
  export type ObLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObLogs to delete
     */
    where?: ObLogWhereInput
    /**
     * Limit how many ObLogs to delete.
     */
    limit?: number
  }

  /**
   * ObLog.alarm
   */
  export type ObLog$alarmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    where?: AlarmWhereInput
  }

  /**
   * ObLog.site
   */
  export type ObLog$siteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    where?: SiteWhereInput
  }

  /**
   * ObLog.guard
   */
  export type ObLog$guardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guard
     */
    select?: GuardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guard
     */
    omit?: GuardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardInclude<ExtArgs> | null
    where?: GuardWhereInput
  }

  /**
   * ObLog without action
   */
  export type ObLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObLog
     */
    select?: ObLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObLog
     */
    omit?: ObLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObLogInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    createdAt: Date | null
    lastLogin: Date | null
    roleId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    createdAt: Date | null
    lastLogin: Date | null
    roleId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    createdAt: number
    lastLogin: number
    roleId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    lastLogin?: true
    roleId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    lastLogin?: true
    roleId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    lastLogin?: true
    roleId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string
    createdAt: Date
    lastLogin: Date | null
    roleId: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    roleId?: boolean
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    roleId?: boolean
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    roleId?: boolean
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    roleId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "createdAt" | "lastLogin" | "roleId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$UserRolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string
      createdAt: Date
      lastLogin: Date | null
      roleId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends UserRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserRoleDefaultArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly roleId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type UserRoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type UserRoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type UserRoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type UserRoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type UserRoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    id: string
    name: string
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | UserRole$usersArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserRole$usersArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleWithIdOnly = await prisma.userRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {UserRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UserRole$usersArgs<ExtArgs> = {}>(args?: Subset<T, UserRole$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly id: FieldRef<"UserRole", 'String'>
    readonly name: FieldRef<"UserRole", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole updateManyAndReturn
   */
  export type UserRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole.users
   */
  export type UserRole$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    plateNumber: string | null
    description: string | null
    status: string | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    plateNumber: string | null
    description: string | null
    status: string | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    plateNumber: number
    description: number
    status: number
    _all: number
  }


  export type VehicleMinAggregateInputType = {
    id?: true
    plateNumber?: true
    description?: true
    status?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    plateNumber?: true
    description?: true
    status?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    plateNumber?: true
    description?: true
    status?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    plateNumber: string
    description: string | null
    status: string
    _count: VehicleCountAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plateNumber?: boolean
    description?: boolean
    status?: boolean
    dispatches?: boolean | Vehicle$dispatchesArgs<ExtArgs>
    guards?: boolean | Vehicle$guardsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plateNumber?: boolean
    description?: boolean
    status?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plateNumber?: boolean
    description?: boolean
    status?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    plateNumber?: boolean
    description?: boolean
    status?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plateNumber" | "description" | "status", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispatches?: boolean | Vehicle$dispatchesArgs<ExtArgs>
    guards?: boolean | Vehicle$guardsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      dispatches: Prisma.$DispatchPayload<ExtArgs>[]
      guards: Prisma.$GuardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plateNumber: string
      description: string | null
      status: string
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dispatches<T extends Vehicle$dispatchesArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$dispatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guards<T extends Vehicle$guardsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$guardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly plateNumber: FieldRef<"Vehicle", 'String'>
    readonly description: FieldRef<"Vehicle", 'String'>
    readonly status: FieldRef<"Vehicle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.dispatches
   */
  export type Vehicle$dispatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    where?: DispatchWhereInput
    orderBy?: DispatchOrderByWithRelationInput | DispatchOrderByWithRelationInput[]
    cursor?: DispatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DispatchScalarFieldEnum | DispatchScalarFieldEnum[]
  }

  /**
   * Vehicle.guards
   */
  export type Vehicle$guardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guard
     */
    select?: GuardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guard
     */
    omit?: GuardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardInclude<ExtArgs> | null
    where?: GuardWhereInput
    orderBy?: GuardOrderByWithRelationInput | GuardOrderByWithRelationInput[]
    cursor?: GuardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuardScalarFieldEnum | GuardScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model Guard
   */

  export type AggregateGuard = {
    _count: GuardCountAggregateOutputType | null
    _min: GuardMinAggregateOutputType | null
    _max: GuardMaxAggregateOutputType | null
  }

  export type GuardMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    status: string | null
    assignedVehicleId: string | null
  }

  export type GuardMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    status: string | null
    assignedVehicleId: string | null
  }

  export type GuardCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    status: number
    assignedVehicleId: number
    _all: number
  }


  export type GuardMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    status?: true
    assignedVehicleId?: true
  }

  export type GuardMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    status?: true
    assignedVehicleId?: true
  }

  export type GuardCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    status?: true
    assignedVehicleId?: true
    _all?: true
  }

  export type GuardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guard to aggregate.
     */
    where?: GuardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guards to fetch.
     */
    orderBy?: GuardOrderByWithRelationInput | GuardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guards
    **/
    _count?: true | GuardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuardMaxAggregateInputType
  }

  export type GetGuardAggregateType<T extends GuardAggregateArgs> = {
        [P in keyof T & keyof AggregateGuard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuard[P]>
      : GetScalarType<T[P], AggregateGuard[P]>
  }




  export type GuardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuardWhereInput
    orderBy?: GuardOrderByWithAggregationInput | GuardOrderByWithAggregationInput[]
    by: GuardScalarFieldEnum[] | GuardScalarFieldEnum
    having?: GuardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuardCountAggregateInputType | true
    _min?: GuardMinAggregateInputType
    _max?: GuardMaxAggregateInputType
  }

  export type GuardGroupByOutputType = {
    id: string
    name: string
    phone: string
    status: string
    assignedVehicleId: string | null
    _count: GuardCountAggregateOutputType | null
    _min: GuardMinAggregateOutputType | null
    _max: GuardMaxAggregateOutputType | null
  }

  type GetGuardGroupByPayload<T extends GuardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuardGroupByOutputType[P]>
            : GetScalarType<T[P], GuardGroupByOutputType[P]>
        }
      >
    >


  export type GuardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    assignedVehicleId?: boolean
    assignedVehicle?: boolean | Guard$assignedVehicleArgs<ExtArgs>
    dispatches?: boolean | Guard$dispatchesArgs<ExtArgs>
    obLogs?: boolean | Guard$obLogsArgs<ExtArgs>
    _count?: boolean | GuardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guard"]>

  export type GuardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    assignedVehicleId?: boolean
    assignedVehicle?: boolean | Guard$assignedVehicleArgs<ExtArgs>
  }, ExtArgs["result"]["guard"]>

  export type GuardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    assignedVehicleId?: boolean
    assignedVehicle?: boolean | Guard$assignedVehicleArgs<ExtArgs>
  }, ExtArgs["result"]["guard"]>

  export type GuardSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    assignedVehicleId?: boolean
  }

  export type GuardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "status" | "assignedVehicleId", ExtArgs["result"]["guard"]>
  export type GuardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedVehicle?: boolean | Guard$assignedVehicleArgs<ExtArgs>
    dispatches?: boolean | Guard$dispatchesArgs<ExtArgs>
    obLogs?: boolean | Guard$obLogsArgs<ExtArgs>
    _count?: boolean | GuardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedVehicle?: boolean | Guard$assignedVehicleArgs<ExtArgs>
  }
  export type GuardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedVehicle?: boolean | Guard$assignedVehicleArgs<ExtArgs>
  }

  export type $GuardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guard"
    objects: {
      assignedVehicle: Prisma.$VehiclePayload<ExtArgs> | null
      dispatches: Prisma.$DispatchPayload<ExtArgs>[]
      obLogs: Prisma.$ObLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      status: string
      assignedVehicleId: string | null
    }, ExtArgs["result"]["guard"]>
    composites: {}
  }

  type GuardGetPayload<S extends boolean | null | undefined | GuardDefaultArgs> = $Result.GetResult<Prisma.$GuardPayload, S>

  type GuardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuardCountAggregateInputType | true
    }

  export interface GuardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guard'], meta: { name: 'Guard' } }
    /**
     * Find zero or one Guard that matches the filter.
     * @param {GuardFindUniqueArgs} args - Arguments to find a Guard
     * @example
     * // Get one Guard
     * const guard = await prisma.guard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuardFindUniqueArgs>(args: SelectSubset<T, GuardFindUniqueArgs<ExtArgs>>): Prisma__GuardClient<$Result.GetResult<Prisma.$GuardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuardFindUniqueOrThrowArgs} args - Arguments to find a Guard
     * @example
     * // Get one Guard
     * const guard = await prisma.guard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuardFindUniqueOrThrowArgs>(args: SelectSubset<T, GuardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuardClient<$Result.GetResult<Prisma.$GuardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardFindFirstArgs} args - Arguments to find a Guard
     * @example
     * // Get one Guard
     * const guard = await prisma.guard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuardFindFirstArgs>(args?: SelectSubset<T, GuardFindFirstArgs<ExtArgs>>): Prisma__GuardClient<$Result.GetResult<Prisma.$GuardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardFindFirstOrThrowArgs} args - Arguments to find a Guard
     * @example
     * // Get one Guard
     * const guard = await prisma.guard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuardFindFirstOrThrowArgs>(args?: SelectSubset<T, GuardFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuardClient<$Result.GetResult<Prisma.$GuardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guards
     * const guards = await prisma.guard.findMany()
     * 
     * // Get first 10 Guards
     * const guards = await prisma.guard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guardWithIdOnly = await prisma.guard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuardFindManyArgs>(args?: SelectSubset<T, GuardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guard.
     * @param {GuardCreateArgs} args - Arguments to create a Guard.
     * @example
     * // Create one Guard
     * const Guard = await prisma.guard.create({
     *   data: {
     *     // ... data to create a Guard
     *   }
     * })
     * 
     */
    create<T extends GuardCreateArgs>(args: SelectSubset<T, GuardCreateArgs<ExtArgs>>): Prisma__GuardClient<$Result.GetResult<Prisma.$GuardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guards.
     * @param {GuardCreateManyArgs} args - Arguments to create many Guards.
     * @example
     * // Create many Guards
     * const guard = await prisma.guard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuardCreateManyArgs>(args?: SelectSubset<T, GuardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guards and returns the data saved in the database.
     * @param {GuardCreateManyAndReturnArgs} args - Arguments to create many Guards.
     * @example
     * // Create many Guards
     * const guard = await prisma.guard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guards and only return the `id`
     * const guardWithIdOnly = await prisma.guard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuardCreateManyAndReturnArgs>(args?: SelectSubset<T, GuardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guard.
     * @param {GuardDeleteArgs} args - Arguments to delete one Guard.
     * @example
     * // Delete one Guard
     * const Guard = await prisma.guard.delete({
     *   where: {
     *     // ... filter to delete one Guard
     *   }
     * })
     * 
     */
    delete<T extends GuardDeleteArgs>(args: SelectSubset<T, GuardDeleteArgs<ExtArgs>>): Prisma__GuardClient<$Result.GetResult<Prisma.$GuardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guard.
     * @param {GuardUpdateArgs} args - Arguments to update one Guard.
     * @example
     * // Update one Guard
     * const guard = await prisma.guard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuardUpdateArgs>(args: SelectSubset<T, GuardUpdateArgs<ExtArgs>>): Prisma__GuardClient<$Result.GetResult<Prisma.$GuardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guards.
     * @param {GuardDeleteManyArgs} args - Arguments to filter Guards to delete.
     * @example
     * // Delete a few Guards
     * const { count } = await prisma.guard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuardDeleteManyArgs>(args?: SelectSubset<T, GuardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guards
     * const guard = await prisma.guard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuardUpdateManyArgs>(args: SelectSubset<T, GuardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guards and returns the data updated in the database.
     * @param {GuardUpdateManyAndReturnArgs} args - Arguments to update many Guards.
     * @example
     * // Update many Guards
     * const guard = await prisma.guard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guards and only return the `id`
     * const guardWithIdOnly = await prisma.guard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuardUpdateManyAndReturnArgs>(args: SelectSubset<T, GuardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guard.
     * @param {GuardUpsertArgs} args - Arguments to update or create a Guard.
     * @example
     * // Update or create a Guard
     * const guard = await prisma.guard.upsert({
     *   create: {
     *     // ... data to create a Guard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guard we want to update
     *   }
     * })
     */
    upsert<T extends GuardUpsertArgs>(args: SelectSubset<T, GuardUpsertArgs<ExtArgs>>): Prisma__GuardClient<$Result.GetResult<Prisma.$GuardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardCountArgs} args - Arguments to filter Guards to count.
     * @example
     * // Count the number of Guards
     * const count = await prisma.guard.count({
     *   where: {
     *     // ... the filter for the Guards we want to count
     *   }
     * })
    **/
    count<T extends GuardCountArgs>(
      args?: Subset<T, GuardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuardAggregateArgs>(args: Subset<T, GuardAggregateArgs>): Prisma.PrismaPromise<GetGuardAggregateType<T>>

    /**
     * Group by Guard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuardGroupByArgs['orderBy'] }
        : { orderBy?: GuardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guard model
   */
  readonly fields: GuardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignedVehicle<T extends Guard$assignedVehicleArgs<ExtArgs> = {}>(args?: Subset<T, Guard$assignedVehicleArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    dispatches<T extends Guard$dispatchesArgs<ExtArgs> = {}>(args?: Subset<T, Guard$dispatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    obLogs<T extends Guard$obLogsArgs<ExtArgs> = {}>(args?: Subset<T, Guard$obLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Guard model
   */
  interface GuardFieldRefs {
    readonly id: FieldRef<"Guard", 'String'>
    readonly name: FieldRef<"Guard", 'String'>
    readonly phone: FieldRef<"Guard", 'String'>
    readonly status: FieldRef<"Guard", 'String'>
    readonly assignedVehicleId: FieldRef<"Guard", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Guard findUnique
   */
  export type GuardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guard
     */
    select?: GuardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guard
     */
    omit?: GuardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardInclude<ExtArgs> | null
    /**
     * Filter, which Guard to fetch.
     */
    where: GuardWhereUniqueInput
  }

  /**
   * Guard findUniqueOrThrow
   */
  export type GuardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guard
     */
    select?: GuardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guard
     */
    omit?: GuardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardInclude<ExtArgs> | null
    /**
     * Filter, which Guard to fetch.
     */
    where: GuardWhereUniqueInput
  }

  /**
   * Guard findFirst
   */
  export type GuardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guard
     */
    select?: GuardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guard
     */
    omit?: GuardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardInclude<ExtArgs> | null
    /**
     * Filter, which Guard to fetch.
     */
    where?: GuardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guards to fetch.
     */
    orderBy?: GuardOrderByWithRelationInput | GuardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guards.
     */
    cursor?: GuardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guards.
     */
    distinct?: GuardScalarFieldEnum | GuardScalarFieldEnum[]
  }

  /**
   * Guard findFirstOrThrow
   */
  export type GuardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guard
     */
    select?: GuardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guard
     */
    omit?: GuardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardInclude<ExtArgs> | null
    /**
     * Filter, which Guard to fetch.
     */
    where?: GuardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guards to fetch.
     */
    orderBy?: GuardOrderByWithRelationInput | GuardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guards.
     */
    cursor?: GuardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guards.
     */
    distinct?: GuardScalarFieldEnum | GuardScalarFieldEnum[]
  }

  /**
   * Guard findMany
   */
  export type GuardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guard
     */
    select?: GuardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guard
     */
    omit?: GuardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardInclude<ExtArgs> | null
    /**
     * Filter, which Guards to fetch.
     */
    where?: GuardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guards to fetch.
     */
    orderBy?: GuardOrderByWithRelationInput | GuardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guards.
     */
    cursor?: GuardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guards.
     */
    skip?: number
    distinct?: GuardScalarFieldEnum | GuardScalarFieldEnum[]
  }

  /**
   * Guard create
   */
  export type GuardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guard
     */
    select?: GuardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guard
     */
    omit?: GuardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardInclude<ExtArgs> | null
    /**
     * The data needed to create a Guard.
     */
    data: XOR<GuardCreateInput, GuardUncheckedCreateInput>
  }

  /**
   * Guard createMany
   */
  export type GuardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guards.
     */
    data: GuardCreateManyInput | GuardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guard createManyAndReturn
   */
  export type GuardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guard
     */
    select?: GuardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guard
     */
    omit?: GuardOmit<ExtArgs> | null
    /**
     * The data used to create many Guards.
     */
    data: GuardCreateManyInput | GuardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guard update
   */
  export type GuardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guard
     */
    select?: GuardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guard
     */
    omit?: GuardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardInclude<ExtArgs> | null
    /**
     * The data needed to update a Guard.
     */
    data: XOR<GuardUpdateInput, GuardUncheckedUpdateInput>
    /**
     * Choose, which Guard to update.
     */
    where: GuardWhereUniqueInput
  }

  /**
   * Guard updateMany
   */
  export type GuardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guards.
     */
    data: XOR<GuardUpdateManyMutationInput, GuardUncheckedUpdateManyInput>
    /**
     * Filter which Guards to update
     */
    where?: GuardWhereInput
    /**
     * Limit how many Guards to update.
     */
    limit?: number
  }

  /**
   * Guard updateManyAndReturn
   */
  export type GuardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guard
     */
    select?: GuardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guard
     */
    omit?: GuardOmit<ExtArgs> | null
    /**
     * The data used to update Guards.
     */
    data: XOR<GuardUpdateManyMutationInput, GuardUncheckedUpdateManyInput>
    /**
     * Filter which Guards to update
     */
    where?: GuardWhereInput
    /**
     * Limit how many Guards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guard upsert
   */
  export type GuardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guard
     */
    select?: GuardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guard
     */
    omit?: GuardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardInclude<ExtArgs> | null
    /**
     * The filter to search for the Guard to update in case it exists.
     */
    where: GuardWhereUniqueInput
    /**
     * In case the Guard found by the `where` argument doesn't exist, create a new Guard with this data.
     */
    create: XOR<GuardCreateInput, GuardUncheckedCreateInput>
    /**
     * In case the Guard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuardUpdateInput, GuardUncheckedUpdateInput>
  }

  /**
   * Guard delete
   */
  export type GuardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guard
     */
    select?: GuardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guard
     */
    omit?: GuardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardInclude<ExtArgs> | null
    /**
     * Filter which Guard to delete.
     */
    where: GuardWhereUniqueInput
  }

  /**
   * Guard deleteMany
   */
  export type GuardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guards to delete
     */
    where?: GuardWhereInput
    /**
     * Limit how many Guards to delete.
     */
    limit?: number
  }

  /**
   * Guard.assignedVehicle
   */
  export type Guard$assignedVehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
  }

  /**
   * Guard.dispatches
   */
  export type Guard$dispatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispatch
     */
    select?: DispatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispatch
     */
    omit?: DispatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchInclude<ExtArgs> | null
    where?: DispatchWhereInput
    orderBy?: DispatchOrderByWithRelationInput | DispatchOrderByWithRelationInput[]
    cursor?: DispatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DispatchScalarFieldEnum | DispatchScalarFieldEnum[]
  }

  /**
   * Guard.obLogs
   */
  export type Guard$obLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObLog
     */
    select?: ObLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObLog
     */
    omit?: ObLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObLogInclude<ExtArgs> | null
    where?: ObLogWhereInput
    orderBy?: ObLogOrderByWithRelationInput | ObLogOrderByWithRelationInput[]
    cursor?: ObLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObLogScalarFieldEnum | ObLogScalarFieldEnum[]
  }

  /**
   * Guard without action
   */
  export type GuardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guard
     */
    select?: GuardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guard
     */
    omit?: GuardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    contactEmail: 'contactEmail',
    phone: 'phone',
    createdAt: 'createdAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const SiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    clientId: 'clientId'
  };

  export type SiteScalarFieldEnum = (typeof SiteScalarFieldEnum)[keyof typeof SiteScalarFieldEnum]


  export const AlarmScalarFieldEnum: {
    id: 'id',
    triggeredAt: 'triggeredAt',
    alarmType: 'alarmType',
    priority: 'priority',
    status: 'status',
    siteId: 'siteId'
  };

  export type AlarmScalarFieldEnum = (typeof AlarmScalarFieldEnum)[keyof typeof AlarmScalarFieldEnum]


  export const AiCallScalarFieldEnum: {
    id: 'id',
    aiDecision: 'aiDecision',
    confidenceScore: 'confidenceScore',
    evaluatedAt: 'evaluatedAt',
    notes: 'notes',
    alarmId: 'alarmId'
  };

  export type AiCallScalarFieldEnum = (typeof AiCallScalarFieldEnum)[keyof typeof AiCallScalarFieldEnum]


  export const DispatchScalarFieldEnum: {
    id: 'id',
    dispatchedAt: 'dispatchedAt',
    arrivalTime: 'arrivalTime',
    resolvedAt: 'resolvedAt',
    responseNotes: 'responseNotes',
    alarmId: 'alarmId',
    guardId: 'guardId',
    vehicleId: 'vehicleId'
  };

  export type DispatchScalarFieldEnum = (typeof DispatchScalarFieldEnum)[keyof typeof DispatchScalarFieldEnum]


  export const ObLogScalarFieldEnum: {
    id: 'id',
    logTime: 'logTime',
    message: 'message',
    source: 'source',
    alarmId: 'alarmId',
    siteId: 'siteId',
    guardId: 'guardId'
  };

  export type ObLogScalarFieldEnum = (typeof ObLogScalarFieldEnum)[keyof typeof ObLogScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    createdAt: 'createdAt',
    lastLogin: 'lastLogin',
    roleId: 'roleId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    plateNumber: 'plateNumber',
    description: 'description',
    status: 'status'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const GuardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    status: 'status',
    assignedVehicleId: 'assignedVehicleId'
  };

  export type GuardScalarFieldEnum = (typeof GuardScalarFieldEnum)[keyof typeof GuardScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    contactEmail?: StringFilter<"Client"> | string
    phone?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    sites?: SiteListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    contactEmail?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    sites?: SiteOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    contactEmail?: StringFilter<"Client"> | string
    phone?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    sites?: SiteListRelationFilter
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    contactEmail?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    contactEmail?: StringWithAggregatesFilter<"Client"> | string
    phone?: StringNullableWithAggregatesFilter<"Client"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type SiteWhereInput = {
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    id?: StringFilter<"Site"> | string
    name?: StringFilter<"Site"> | string
    address?: StringFilter<"Site"> | string
    latitude?: FloatNullableFilter<"Site"> | number | null
    longitude?: FloatNullableFilter<"Site"> | number | null
    createdAt?: DateTimeFilter<"Site"> | Date | string
    clientId?: StringFilter<"Site"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    alarms?: AlarmListRelationFilter
    obLogs?: ObLogListRelationFilter
  }

  export type SiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
    client?: ClientOrderByWithRelationInput
    alarms?: AlarmOrderByRelationAggregateInput
    obLogs?: ObLogOrderByRelationAggregateInput
  }

  export type SiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    name?: StringFilter<"Site"> | string
    address?: StringFilter<"Site"> | string
    latitude?: FloatNullableFilter<"Site"> | number | null
    longitude?: FloatNullableFilter<"Site"> | number | null
    createdAt?: DateTimeFilter<"Site"> | Date | string
    clientId?: StringFilter<"Site"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    alarms?: AlarmListRelationFilter
    obLogs?: ObLogListRelationFilter
  }, "id">

  export type SiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
    _count?: SiteCountOrderByAggregateInput
    _avg?: SiteAvgOrderByAggregateInput
    _max?: SiteMaxOrderByAggregateInput
    _min?: SiteMinOrderByAggregateInput
    _sum?: SiteSumOrderByAggregateInput
  }

  export type SiteScalarWhereWithAggregatesInput = {
    AND?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    OR?: SiteScalarWhereWithAggregatesInput[]
    NOT?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Site"> | string
    name?: StringWithAggregatesFilter<"Site"> | string
    address?: StringWithAggregatesFilter<"Site"> | string
    latitude?: FloatNullableWithAggregatesFilter<"Site"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Site"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
    clientId?: StringWithAggregatesFilter<"Site"> | string
  }

  export type AlarmWhereInput = {
    AND?: AlarmWhereInput | AlarmWhereInput[]
    OR?: AlarmWhereInput[]
    NOT?: AlarmWhereInput | AlarmWhereInput[]
    id?: StringFilter<"Alarm"> | string
    triggeredAt?: DateTimeFilter<"Alarm"> | Date | string
    alarmType?: StringFilter<"Alarm"> | string
    priority?: IntFilter<"Alarm"> | number
    status?: StringFilter<"Alarm"> | string
    siteId?: StringFilter<"Alarm"> | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    aiCall?: XOR<AiCallNullableScalarRelationFilter, AiCallWhereInput> | null
    dispatch?: XOR<DispatchNullableScalarRelationFilter, DispatchWhereInput> | null
    obLogs?: ObLogListRelationFilter
  }

  export type AlarmOrderByWithRelationInput = {
    id?: SortOrder
    triggeredAt?: SortOrder
    alarmType?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    siteId?: SortOrder
    site?: SiteOrderByWithRelationInput
    aiCall?: AiCallOrderByWithRelationInput
    dispatch?: DispatchOrderByWithRelationInput
    obLogs?: ObLogOrderByRelationAggregateInput
  }

  export type AlarmWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlarmWhereInput | AlarmWhereInput[]
    OR?: AlarmWhereInput[]
    NOT?: AlarmWhereInput | AlarmWhereInput[]
    triggeredAt?: DateTimeFilter<"Alarm"> | Date | string
    alarmType?: StringFilter<"Alarm"> | string
    priority?: IntFilter<"Alarm"> | number
    status?: StringFilter<"Alarm"> | string
    siteId?: StringFilter<"Alarm"> | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    aiCall?: XOR<AiCallNullableScalarRelationFilter, AiCallWhereInput> | null
    dispatch?: XOR<DispatchNullableScalarRelationFilter, DispatchWhereInput> | null
    obLogs?: ObLogListRelationFilter
  }, "id">

  export type AlarmOrderByWithAggregationInput = {
    id?: SortOrder
    triggeredAt?: SortOrder
    alarmType?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    siteId?: SortOrder
    _count?: AlarmCountOrderByAggregateInput
    _avg?: AlarmAvgOrderByAggregateInput
    _max?: AlarmMaxOrderByAggregateInput
    _min?: AlarmMinOrderByAggregateInput
    _sum?: AlarmSumOrderByAggregateInput
  }

  export type AlarmScalarWhereWithAggregatesInput = {
    AND?: AlarmScalarWhereWithAggregatesInput | AlarmScalarWhereWithAggregatesInput[]
    OR?: AlarmScalarWhereWithAggregatesInput[]
    NOT?: AlarmScalarWhereWithAggregatesInput | AlarmScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alarm"> | string
    triggeredAt?: DateTimeWithAggregatesFilter<"Alarm"> | Date | string
    alarmType?: StringWithAggregatesFilter<"Alarm"> | string
    priority?: IntWithAggregatesFilter<"Alarm"> | number
    status?: StringWithAggregatesFilter<"Alarm"> | string
    siteId?: StringWithAggregatesFilter<"Alarm"> | string
  }

  export type AiCallWhereInput = {
    AND?: AiCallWhereInput | AiCallWhereInput[]
    OR?: AiCallWhereInput[]
    NOT?: AiCallWhereInput | AiCallWhereInput[]
    id?: StringFilter<"AiCall"> | string
    aiDecision?: StringFilter<"AiCall"> | string
    confidenceScore?: FloatFilter<"AiCall"> | number
    evaluatedAt?: DateTimeFilter<"AiCall"> | Date | string
    notes?: StringNullableFilter<"AiCall"> | string | null
    alarmId?: StringFilter<"AiCall"> | string
    alarm?: XOR<AlarmScalarRelationFilter, AlarmWhereInput>
  }

  export type AiCallOrderByWithRelationInput = {
    id?: SortOrder
    aiDecision?: SortOrder
    confidenceScore?: SortOrder
    evaluatedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    alarmId?: SortOrder
    alarm?: AlarmOrderByWithRelationInput
  }

  export type AiCallWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    alarmId?: string
    AND?: AiCallWhereInput | AiCallWhereInput[]
    OR?: AiCallWhereInput[]
    NOT?: AiCallWhereInput | AiCallWhereInput[]
    aiDecision?: StringFilter<"AiCall"> | string
    confidenceScore?: FloatFilter<"AiCall"> | number
    evaluatedAt?: DateTimeFilter<"AiCall"> | Date | string
    notes?: StringNullableFilter<"AiCall"> | string | null
    alarm?: XOR<AlarmScalarRelationFilter, AlarmWhereInput>
  }, "id" | "alarmId">

  export type AiCallOrderByWithAggregationInput = {
    id?: SortOrder
    aiDecision?: SortOrder
    confidenceScore?: SortOrder
    evaluatedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    alarmId?: SortOrder
    _count?: AiCallCountOrderByAggregateInput
    _avg?: AiCallAvgOrderByAggregateInput
    _max?: AiCallMaxOrderByAggregateInput
    _min?: AiCallMinOrderByAggregateInput
    _sum?: AiCallSumOrderByAggregateInput
  }

  export type AiCallScalarWhereWithAggregatesInput = {
    AND?: AiCallScalarWhereWithAggregatesInput | AiCallScalarWhereWithAggregatesInput[]
    OR?: AiCallScalarWhereWithAggregatesInput[]
    NOT?: AiCallScalarWhereWithAggregatesInput | AiCallScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiCall"> | string
    aiDecision?: StringWithAggregatesFilter<"AiCall"> | string
    confidenceScore?: FloatWithAggregatesFilter<"AiCall"> | number
    evaluatedAt?: DateTimeWithAggregatesFilter<"AiCall"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"AiCall"> | string | null
    alarmId?: StringWithAggregatesFilter<"AiCall"> | string
  }

  export type DispatchWhereInput = {
    AND?: DispatchWhereInput | DispatchWhereInput[]
    OR?: DispatchWhereInput[]
    NOT?: DispatchWhereInput | DispatchWhereInput[]
    id?: StringFilter<"Dispatch"> | string
    dispatchedAt?: DateTimeFilter<"Dispatch"> | Date | string
    arrivalTime?: DateTimeNullableFilter<"Dispatch"> | Date | string | null
    resolvedAt?: DateTimeNullableFilter<"Dispatch"> | Date | string | null
    responseNotes?: StringNullableFilter<"Dispatch"> | string | null
    alarmId?: StringFilter<"Dispatch"> | string
    guardId?: StringNullableFilter<"Dispatch"> | string | null
    vehicleId?: StringNullableFilter<"Dispatch"> | string | null
    alarm?: XOR<AlarmScalarRelationFilter, AlarmWhereInput>
    guard?: XOR<GuardNullableScalarRelationFilter, GuardWhereInput> | null
    vehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
  }

  export type DispatchOrderByWithRelationInput = {
    id?: SortOrder
    dispatchedAt?: SortOrder
    arrivalTime?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    responseNotes?: SortOrderInput | SortOrder
    alarmId?: SortOrder
    guardId?: SortOrderInput | SortOrder
    vehicleId?: SortOrderInput | SortOrder
    alarm?: AlarmOrderByWithRelationInput
    guard?: GuardOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type DispatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    alarmId?: string
    AND?: DispatchWhereInput | DispatchWhereInput[]
    OR?: DispatchWhereInput[]
    NOT?: DispatchWhereInput | DispatchWhereInput[]
    dispatchedAt?: DateTimeFilter<"Dispatch"> | Date | string
    arrivalTime?: DateTimeNullableFilter<"Dispatch"> | Date | string | null
    resolvedAt?: DateTimeNullableFilter<"Dispatch"> | Date | string | null
    responseNotes?: StringNullableFilter<"Dispatch"> | string | null
    guardId?: StringNullableFilter<"Dispatch"> | string | null
    vehicleId?: StringNullableFilter<"Dispatch"> | string | null
    alarm?: XOR<AlarmScalarRelationFilter, AlarmWhereInput>
    guard?: XOR<GuardNullableScalarRelationFilter, GuardWhereInput> | null
    vehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
  }, "id" | "alarmId">

  export type DispatchOrderByWithAggregationInput = {
    id?: SortOrder
    dispatchedAt?: SortOrder
    arrivalTime?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    responseNotes?: SortOrderInput | SortOrder
    alarmId?: SortOrder
    guardId?: SortOrderInput | SortOrder
    vehicleId?: SortOrderInput | SortOrder
    _count?: DispatchCountOrderByAggregateInput
    _max?: DispatchMaxOrderByAggregateInput
    _min?: DispatchMinOrderByAggregateInput
  }

  export type DispatchScalarWhereWithAggregatesInput = {
    AND?: DispatchScalarWhereWithAggregatesInput | DispatchScalarWhereWithAggregatesInput[]
    OR?: DispatchScalarWhereWithAggregatesInput[]
    NOT?: DispatchScalarWhereWithAggregatesInput | DispatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dispatch"> | string
    dispatchedAt?: DateTimeWithAggregatesFilter<"Dispatch"> | Date | string
    arrivalTime?: DateTimeNullableWithAggregatesFilter<"Dispatch"> | Date | string | null
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Dispatch"> | Date | string | null
    responseNotes?: StringNullableWithAggregatesFilter<"Dispatch"> | string | null
    alarmId?: StringWithAggregatesFilter<"Dispatch"> | string
    guardId?: StringNullableWithAggregatesFilter<"Dispatch"> | string | null
    vehicleId?: StringNullableWithAggregatesFilter<"Dispatch"> | string | null
  }

  export type ObLogWhereInput = {
    AND?: ObLogWhereInput | ObLogWhereInput[]
    OR?: ObLogWhereInput[]
    NOT?: ObLogWhereInput | ObLogWhereInput[]
    id?: StringFilter<"ObLog"> | string
    logTime?: DateTimeFilter<"ObLog"> | Date | string
    message?: StringFilter<"ObLog"> | string
    source?: StringFilter<"ObLog"> | string
    alarmId?: StringNullableFilter<"ObLog"> | string | null
    siteId?: StringNullableFilter<"ObLog"> | string | null
    guardId?: StringNullableFilter<"ObLog"> | string | null
    alarm?: XOR<AlarmNullableScalarRelationFilter, AlarmWhereInput> | null
    site?: XOR<SiteNullableScalarRelationFilter, SiteWhereInput> | null
    guard?: XOR<GuardNullableScalarRelationFilter, GuardWhereInput> | null
  }

  export type ObLogOrderByWithRelationInput = {
    id?: SortOrder
    logTime?: SortOrder
    message?: SortOrder
    source?: SortOrder
    alarmId?: SortOrderInput | SortOrder
    siteId?: SortOrderInput | SortOrder
    guardId?: SortOrderInput | SortOrder
    alarm?: AlarmOrderByWithRelationInput
    site?: SiteOrderByWithRelationInput
    guard?: GuardOrderByWithRelationInput
  }

  export type ObLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ObLogWhereInput | ObLogWhereInput[]
    OR?: ObLogWhereInput[]
    NOT?: ObLogWhereInput | ObLogWhereInput[]
    logTime?: DateTimeFilter<"ObLog"> | Date | string
    message?: StringFilter<"ObLog"> | string
    source?: StringFilter<"ObLog"> | string
    alarmId?: StringNullableFilter<"ObLog"> | string | null
    siteId?: StringNullableFilter<"ObLog"> | string | null
    guardId?: StringNullableFilter<"ObLog"> | string | null
    alarm?: XOR<AlarmNullableScalarRelationFilter, AlarmWhereInput> | null
    site?: XOR<SiteNullableScalarRelationFilter, SiteWhereInput> | null
    guard?: XOR<GuardNullableScalarRelationFilter, GuardWhereInput> | null
  }, "id">

  export type ObLogOrderByWithAggregationInput = {
    id?: SortOrder
    logTime?: SortOrder
    message?: SortOrder
    source?: SortOrder
    alarmId?: SortOrderInput | SortOrder
    siteId?: SortOrderInput | SortOrder
    guardId?: SortOrderInput | SortOrder
    _count?: ObLogCountOrderByAggregateInput
    _max?: ObLogMaxOrderByAggregateInput
    _min?: ObLogMinOrderByAggregateInput
  }

  export type ObLogScalarWhereWithAggregatesInput = {
    AND?: ObLogScalarWhereWithAggregatesInput | ObLogScalarWhereWithAggregatesInput[]
    OR?: ObLogScalarWhereWithAggregatesInput[]
    NOT?: ObLogScalarWhereWithAggregatesInput | ObLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ObLog"> | string
    logTime?: DateTimeWithAggregatesFilter<"ObLog"> | Date | string
    message?: StringWithAggregatesFilter<"ObLog"> | string
    source?: StringWithAggregatesFilter<"ObLog"> | string
    alarmId?: StringNullableWithAggregatesFilter<"ObLog"> | string | null
    siteId?: StringNullableWithAggregatesFilter<"ObLog"> | string | null
    guardId?: StringNullableWithAggregatesFilter<"ObLog"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    roleId?: StringFilter<"User"> | string
    role?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    roleId?: SortOrder
    role?: UserRoleOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    roleId?: StringFilter<"User"> | string
    role?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    roleId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    roleId?: StringWithAggregatesFilter<"User"> | string
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    id?: StringFilter<"UserRole"> | string
    name?: StringFilter<"UserRole"> | string
    users?: UserListRelationFilter
  }

  export type UserRoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    users?: UserListRelationFilter
  }, "id" | "name">

  export type UserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRole"> | string
    name?: StringWithAggregatesFilter<"UserRole"> | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    plateNumber?: StringFilter<"Vehicle"> | string
    description?: StringNullableFilter<"Vehicle"> | string | null
    status?: StringFilter<"Vehicle"> | string
    dispatches?: DispatchListRelationFilter
    guards?: GuardListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    dispatches?: DispatchOrderByRelationAggregateInput
    guards?: GuardOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    plateNumber?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    description?: StringNullableFilter<"Vehicle"> | string | null
    status?: StringFilter<"Vehicle"> | string
    dispatches?: DispatchListRelationFilter
    guards?: GuardListRelationFilter
  }, "id" | "plateNumber">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    plateNumber?: StringWithAggregatesFilter<"Vehicle"> | string
    description?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    status?: StringWithAggregatesFilter<"Vehicle"> | string
  }

  export type GuardWhereInput = {
    AND?: GuardWhereInput | GuardWhereInput[]
    OR?: GuardWhereInput[]
    NOT?: GuardWhereInput | GuardWhereInput[]
    id?: StringFilter<"Guard"> | string
    name?: StringFilter<"Guard"> | string
    phone?: StringFilter<"Guard"> | string
    status?: StringFilter<"Guard"> | string
    assignedVehicleId?: StringNullableFilter<"Guard"> | string | null
    assignedVehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
    dispatches?: DispatchListRelationFilter
    obLogs?: ObLogListRelationFilter
  }

  export type GuardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    assignedVehicleId?: SortOrderInput | SortOrder
    assignedVehicle?: VehicleOrderByWithRelationInput
    dispatches?: DispatchOrderByRelationAggregateInput
    obLogs?: ObLogOrderByRelationAggregateInput
  }

  export type GuardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GuardWhereInput | GuardWhereInput[]
    OR?: GuardWhereInput[]
    NOT?: GuardWhereInput | GuardWhereInput[]
    name?: StringFilter<"Guard"> | string
    phone?: StringFilter<"Guard"> | string
    status?: StringFilter<"Guard"> | string
    assignedVehicleId?: StringNullableFilter<"Guard"> | string | null
    assignedVehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
    dispatches?: DispatchListRelationFilter
    obLogs?: ObLogListRelationFilter
  }, "id">

  export type GuardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    assignedVehicleId?: SortOrderInput | SortOrder
    _count?: GuardCountOrderByAggregateInput
    _max?: GuardMaxOrderByAggregateInput
    _min?: GuardMinOrderByAggregateInput
  }

  export type GuardScalarWhereWithAggregatesInput = {
    AND?: GuardScalarWhereWithAggregatesInput | GuardScalarWhereWithAggregatesInput[]
    OR?: GuardScalarWhereWithAggregatesInput[]
    NOT?: GuardScalarWhereWithAggregatesInput | GuardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guard"> | string
    name?: StringWithAggregatesFilter<"Guard"> | string
    phone?: StringWithAggregatesFilter<"Guard"> | string
    status?: StringWithAggregatesFilter<"Guard"> | string
    assignedVehicleId?: StringNullableWithAggregatesFilter<"Guard"> | string | null
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    contactEmail: string
    phone?: string | null
    createdAt?: Date | string
    sites?: SiteCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name: string
    contactEmail: string
    phone?: string | null
    createdAt?: Date | string
    sites?: SiteUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sites?: SiteUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sites?: SiteUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name: string
    contactEmail: string
    phone?: string | null
    createdAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteCreateInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutSitesInput
    alarms?: AlarmCreateNestedManyWithoutSiteInput
    obLogs?: ObLogCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    clientId: string
    alarms?: AlarmUncheckedCreateNestedManyWithoutSiteInput
    obLogs?: ObLogUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutSitesNestedInput
    alarms?: AlarmUpdateManyWithoutSiteNestedInput
    obLogs?: ObLogUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    alarms?: AlarmUncheckedUpdateManyWithoutSiteNestedInput
    obLogs?: ObLogUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteCreateManyInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    clientId: string
  }

  export type SiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type AlarmCreateInput = {
    id?: string
    triggeredAt: Date | string
    alarmType: string
    priority: number
    status: string
    site: SiteCreateNestedOneWithoutAlarmsInput
    aiCall?: AiCallCreateNestedOneWithoutAlarmInput
    dispatch?: DispatchCreateNestedOneWithoutAlarmInput
    obLogs?: ObLogCreateNestedManyWithoutAlarmInput
  }

  export type AlarmUncheckedCreateInput = {
    id?: string
    triggeredAt: Date | string
    alarmType: string
    priority: number
    status: string
    siteId: string
    aiCall?: AiCallUncheckedCreateNestedOneWithoutAlarmInput
    dispatch?: DispatchUncheckedCreateNestedOneWithoutAlarmInput
    obLogs?: ObLogUncheckedCreateNestedManyWithoutAlarmInput
  }

  export type AlarmUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alarmType?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    site?: SiteUpdateOneRequiredWithoutAlarmsNestedInput
    aiCall?: AiCallUpdateOneWithoutAlarmNestedInput
    dispatch?: DispatchUpdateOneWithoutAlarmNestedInput
    obLogs?: ObLogUpdateManyWithoutAlarmNestedInput
  }

  export type AlarmUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alarmType?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    aiCall?: AiCallUncheckedUpdateOneWithoutAlarmNestedInput
    dispatch?: DispatchUncheckedUpdateOneWithoutAlarmNestedInput
    obLogs?: ObLogUncheckedUpdateManyWithoutAlarmNestedInput
  }

  export type AlarmCreateManyInput = {
    id?: string
    triggeredAt: Date | string
    alarmType: string
    priority: number
    status: string
    siteId: string
  }

  export type AlarmUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alarmType?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AlarmUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alarmType?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
  }

  export type AiCallCreateInput = {
    id?: string
    aiDecision: string
    confidenceScore: number
    evaluatedAt: Date | string
    notes?: string | null
    alarm: AlarmCreateNestedOneWithoutAiCallInput
  }

  export type AiCallUncheckedCreateInput = {
    id?: string
    aiDecision: string
    confidenceScore: number
    evaluatedAt: Date | string
    notes?: string | null
    alarmId: string
  }

  export type AiCallUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiDecision?: StringFieldUpdateOperationsInput | string
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    evaluatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    alarm?: AlarmUpdateOneRequiredWithoutAiCallNestedInput
  }

  export type AiCallUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiDecision?: StringFieldUpdateOperationsInput | string
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    evaluatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    alarmId?: StringFieldUpdateOperationsInput | string
  }

  export type AiCallCreateManyInput = {
    id?: string
    aiDecision: string
    confidenceScore: number
    evaluatedAt: Date | string
    notes?: string | null
    alarmId: string
  }

  export type AiCallUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiDecision?: StringFieldUpdateOperationsInput | string
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    evaluatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AiCallUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiDecision?: StringFieldUpdateOperationsInput | string
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    evaluatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    alarmId?: StringFieldUpdateOperationsInput | string
  }

  export type DispatchCreateInput = {
    id?: string
    dispatchedAt: Date | string
    arrivalTime?: Date | string | null
    resolvedAt?: Date | string | null
    responseNotes?: string | null
    alarm: AlarmCreateNestedOneWithoutDispatchInput
    guard?: GuardCreateNestedOneWithoutDispatchesInput
    vehicle?: VehicleCreateNestedOneWithoutDispatchesInput
  }

  export type DispatchUncheckedCreateInput = {
    id?: string
    dispatchedAt: Date | string
    arrivalTime?: Date | string | null
    resolvedAt?: Date | string | null
    responseNotes?: string | null
    alarmId: string
    guardId?: string | null
    vehicleId?: string | null
  }

  export type DispatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNotes?: NullableStringFieldUpdateOperationsInput | string | null
    alarm?: AlarmUpdateOneRequiredWithoutDispatchNestedInput
    guard?: GuardUpdateOneWithoutDispatchesNestedInput
    vehicle?: VehicleUpdateOneWithoutDispatchesNestedInput
  }

  export type DispatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNotes?: NullableStringFieldUpdateOperationsInput | string | null
    alarmId?: StringFieldUpdateOperationsInput | string
    guardId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispatchCreateManyInput = {
    id?: string
    dispatchedAt: Date | string
    arrivalTime?: Date | string | null
    resolvedAt?: Date | string | null
    responseNotes?: string | null
    alarmId: string
    guardId?: string | null
    vehicleId?: string | null
  }

  export type DispatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNotes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNotes?: NullableStringFieldUpdateOperationsInput | string | null
    alarmId?: StringFieldUpdateOperationsInput | string
    guardId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ObLogCreateInput = {
    id?: string
    logTime: Date | string
    message: string
    source: string
    alarm?: AlarmCreateNestedOneWithoutObLogsInput
    site?: SiteCreateNestedOneWithoutObLogsInput
    guard?: GuardCreateNestedOneWithoutObLogsInput
  }

  export type ObLogUncheckedCreateInput = {
    id?: string
    logTime: Date | string
    message: string
    source: string
    alarmId?: string | null
    siteId?: string | null
    guardId?: string | null
  }

  export type ObLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    alarm?: AlarmUpdateOneWithoutObLogsNestedInput
    site?: SiteUpdateOneWithoutObLogsNestedInput
    guard?: GuardUpdateOneWithoutObLogsNestedInput
  }

  export type ObLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    alarmId?: NullableStringFieldUpdateOperationsInput | string | null
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
    guardId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ObLogCreateManyInput = {
    id?: string
    logTime: Date | string
    message: string
    source: string
    alarmId?: string | null
    siteId?: string | null
    guardId?: string | null
  }

  export type ObLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
  }

  export type ObLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    alarmId?: NullableStringFieldUpdateOperationsInput | string | null
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
    guardId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
    role: UserRoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
    roleId: string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: UserRoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
    roleId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleCreateInput = {
    id?: string
    name: string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type UserRoleUncheckedCreateInput = {
    id?: string
    name: string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type UserRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type UserRoleCreateManyInput = {
    id?: string
    name: string
  }

  export type UserRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleCreateInput = {
    id?: string
    plateNumber: string
    description?: string | null
    status: string
    dispatches?: DispatchCreateNestedManyWithoutVehicleInput
    guards?: GuardCreateNestedManyWithoutAssignedVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    plateNumber: string
    description?: string | null
    status: string
    dispatches?: DispatchUncheckedCreateNestedManyWithoutVehicleInput
    guards?: GuardUncheckedCreateNestedManyWithoutAssignedVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    dispatches?: DispatchUpdateManyWithoutVehicleNestedInput
    guards?: GuardUpdateManyWithoutAssignedVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    dispatches?: DispatchUncheckedUpdateManyWithoutVehicleNestedInput
    guards?: GuardUncheckedUpdateManyWithoutAssignedVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    plateNumber: string
    description?: string | null
    status: string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type GuardCreateInput = {
    id?: string
    name: string
    phone: string
    status: string
    assignedVehicle?: VehicleCreateNestedOneWithoutGuardsInput
    dispatches?: DispatchCreateNestedManyWithoutGuardInput
    obLogs?: ObLogCreateNestedManyWithoutGuardInput
  }

  export type GuardUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    status: string
    assignedVehicleId?: string | null
    dispatches?: DispatchUncheckedCreateNestedManyWithoutGuardInput
    obLogs?: ObLogUncheckedCreateNestedManyWithoutGuardInput
  }

  export type GuardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedVehicle?: VehicleUpdateOneWithoutGuardsNestedInput
    dispatches?: DispatchUpdateManyWithoutGuardNestedInput
    obLogs?: ObLogUpdateManyWithoutGuardNestedInput
  }

  export type GuardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedVehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    dispatches?: DispatchUncheckedUpdateManyWithoutGuardNestedInput
    obLogs?: ObLogUncheckedUpdateManyWithoutGuardNestedInput
  }

  export type GuardCreateManyInput = {
    id?: string
    name: string
    phone: string
    status: string
    assignedVehicleId?: string | null
  }

  export type GuardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type GuardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedVehicleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SiteListRelationFilter = {
    every?: SiteWhereInput
    some?: SiteWhereInput
    none?: SiteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactEmail?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactEmail?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactEmail?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type AlarmListRelationFilter = {
    every?: AlarmWhereInput
    some?: AlarmWhereInput
    none?: AlarmWhereInput
  }

  export type ObLogListRelationFilter = {
    every?: ObLogWhereInput
    some?: ObLogWhereInput
    none?: ObLogWhereInput
  }

  export type AlarmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
  }

  export type SiteAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type SiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
  }

  export type SiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
  }

  export type SiteSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SiteScalarRelationFilter = {
    is?: SiteWhereInput
    isNot?: SiteWhereInput
  }

  export type AiCallNullableScalarRelationFilter = {
    is?: AiCallWhereInput | null
    isNot?: AiCallWhereInput | null
  }

  export type DispatchNullableScalarRelationFilter = {
    is?: DispatchWhereInput | null
    isNot?: DispatchWhereInput | null
  }

  export type AlarmCountOrderByAggregateInput = {
    id?: SortOrder
    triggeredAt?: SortOrder
    alarmType?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    siteId?: SortOrder
  }

  export type AlarmAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type AlarmMaxOrderByAggregateInput = {
    id?: SortOrder
    triggeredAt?: SortOrder
    alarmType?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    siteId?: SortOrder
  }

  export type AlarmMinOrderByAggregateInput = {
    id?: SortOrder
    triggeredAt?: SortOrder
    alarmType?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    siteId?: SortOrder
  }

  export type AlarmSumOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AlarmScalarRelationFilter = {
    is?: AlarmWhereInput
    isNot?: AlarmWhereInput
  }

  export type AiCallCountOrderByAggregateInput = {
    id?: SortOrder
    aiDecision?: SortOrder
    confidenceScore?: SortOrder
    evaluatedAt?: SortOrder
    notes?: SortOrder
    alarmId?: SortOrder
  }

  export type AiCallAvgOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type AiCallMaxOrderByAggregateInput = {
    id?: SortOrder
    aiDecision?: SortOrder
    confidenceScore?: SortOrder
    evaluatedAt?: SortOrder
    notes?: SortOrder
    alarmId?: SortOrder
  }

  export type AiCallMinOrderByAggregateInput = {
    id?: SortOrder
    aiDecision?: SortOrder
    confidenceScore?: SortOrder
    evaluatedAt?: SortOrder
    notes?: SortOrder
    alarmId?: SortOrder
  }

  export type AiCallSumOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type GuardNullableScalarRelationFilter = {
    is?: GuardWhereInput | null
    isNot?: GuardWhereInput | null
  }

  export type VehicleNullableScalarRelationFilter = {
    is?: VehicleWhereInput | null
    isNot?: VehicleWhereInput | null
  }

  export type DispatchCountOrderByAggregateInput = {
    id?: SortOrder
    dispatchedAt?: SortOrder
    arrivalTime?: SortOrder
    resolvedAt?: SortOrder
    responseNotes?: SortOrder
    alarmId?: SortOrder
    guardId?: SortOrder
    vehicleId?: SortOrder
  }

  export type DispatchMaxOrderByAggregateInput = {
    id?: SortOrder
    dispatchedAt?: SortOrder
    arrivalTime?: SortOrder
    resolvedAt?: SortOrder
    responseNotes?: SortOrder
    alarmId?: SortOrder
    guardId?: SortOrder
    vehicleId?: SortOrder
  }

  export type DispatchMinOrderByAggregateInput = {
    id?: SortOrder
    dispatchedAt?: SortOrder
    arrivalTime?: SortOrder
    resolvedAt?: SortOrder
    responseNotes?: SortOrder
    alarmId?: SortOrder
    guardId?: SortOrder
    vehicleId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AlarmNullableScalarRelationFilter = {
    is?: AlarmWhereInput | null
    isNot?: AlarmWhereInput | null
  }

  export type SiteNullableScalarRelationFilter = {
    is?: SiteWhereInput | null
    isNot?: SiteWhereInput | null
  }

  export type ObLogCountOrderByAggregateInput = {
    id?: SortOrder
    logTime?: SortOrder
    message?: SortOrder
    source?: SortOrder
    alarmId?: SortOrder
    siteId?: SortOrder
    guardId?: SortOrder
  }

  export type ObLogMaxOrderByAggregateInput = {
    id?: SortOrder
    logTime?: SortOrder
    message?: SortOrder
    source?: SortOrder
    alarmId?: SortOrder
    siteId?: SortOrder
    guardId?: SortOrder
  }

  export type ObLogMinOrderByAggregateInput = {
    id?: SortOrder
    logTime?: SortOrder
    message?: SortOrder
    source?: SortOrder
    alarmId?: SortOrder
    siteId?: SortOrder
    guardId?: SortOrder
  }

  export type UserRoleScalarRelationFilter = {
    is?: UserRoleWhereInput
    isNot?: UserRoleWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    roleId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    roleId?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DispatchListRelationFilter = {
    every?: DispatchWhereInput
    some?: DispatchWhereInput
    none?: DispatchWhereInput
  }

  export type GuardListRelationFilter = {
    every?: GuardWhereInput
    some?: GuardWhereInput
    none?: GuardWhereInput
  }

  export type DispatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type GuardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    assignedVehicleId?: SortOrder
  }

  export type GuardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    assignedVehicleId?: SortOrder
  }

  export type GuardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    assignedVehicleId?: SortOrder
  }

  export type SiteCreateNestedManyWithoutClientInput = {
    create?: XOR<SiteCreateWithoutClientInput, SiteUncheckedCreateWithoutClientInput> | SiteCreateWithoutClientInput[] | SiteUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutClientInput | SiteCreateOrConnectWithoutClientInput[]
    createMany?: SiteCreateManyClientInputEnvelope
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
  }

  export type SiteUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<SiteCreateWithoutClientInput, SiteUncheckedCreateWithoutClientInput> | SiteCreateWithoutClientInput[] | SiteUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutClientInput | SiteCreateOrConnectWithoutClientInput[]
    createMany?: SiteCreateManyClientInputEnvelope
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SiteUpdateManyWithoutClientNestedInput = {
    create?: XOR<SiteCreateWithoutClientInput, SiteUncheckedCreateWithoutClientInput> | SiteCreateWithoutClientInput[] | SiteUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutClientInput | SiteCreateOrConnectWithoutClientInput[]
    upsert?: SiteUpsertWithWhereUniqueWithoutClientInput | SiteUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SiteCreateManyClientInputEnvelope
    set?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    disconnect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    delete?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    update?: SiteUpdateWithWhereUniqueWithoutClientInput | SiteUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SiteUpdateManyWithWhereWithoutClientInput | SiteUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SiteScalarWhereInput | SiteScalarWhereInput[]
  }

  export type SiteUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<SiteCreateWithoutClientInput, SiteUncheckedCreateWithoutClientInput> | SiteCreateWithoutClientInput[] | SiteUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutClientInput | SiteCreateOrConnectWithoutClientInput[]
    upsert?: SiteUpsertWithWhereUniqueWithoutClientInput | SiteUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SiteCreateManyClientInputEnvelope
    set?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    disconnect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    delete?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    update?: SiteUpdateWithWhereUniqueWithoutClientInput | SiteUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SiteUpdateManyWithWhereWithoutClientInput | SiteUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SiteScalarWhereInput | SiteScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutSitesInput = {
    create?: XOR<ClientCreateWithoutSitesInput, ClientUncheckedCreateWithoutSitesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSitesInput
    connect?: ClientWhereUniqueInput
  }

  export type AlarmCreateNestedManyWithoutSiteInput = {
    create?: XOR<AlarmCreateWithoutSiteInput, AlarmUncheckedCreateWithoutSiteInput> | AlarmCreateWithoutSiteInput[] | AlarmUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: AlarmCreateOrConnectWithoutSiteInput | AlarmCreateOrConnectWithoutSiteInput[]
    createMany?: AlarmCreateManySiteInputEnvelope
    connect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
  }

  export type ObLogCreateNestedManyWithoutSiteInput = {
    create?: XOR<ObLogCreateWithoutSiteInput, ObLogUncheckedCreateWithoutSiteInput> | ObLogCreateWithoutSiteInput[] | ObLogUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ObLogCreateOrConnectWithoutSiteInput | ObLogCreateOrConnectWithoutSiteInput[]
    createMany?: ObLogCreateManySiteInputEnvelope
    connect?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
  }

  export type AlarmUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<AlarmCreateWithoutSiteInput, AlarmUncheckedCreateWithoutSiteInput> | AlarmCreateWithoutSiteInput[] | AlarmUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: AlarmCreateOrConnectWithoutSiteInput | AlarmCreateOrConnectWithoutSiteInput[]
    createMany?: AlarmCreateManySiteInputEnvelope
    connect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
  }

  export type ObLogUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<ObLogCreateWithoutSiteInput, ObLogUncheckedCreateWithoutSiteInput> | ObLogCreateWithoutSiteInput[] | ObLogUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ObLogCreateOrConnectWithoutSiteInput | ObLogCreateOrConnectWithoutSiteInput[]
    createMany?: ObLogCreateManySiteInputEnvelope
    connect?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientUpdateOneRequiredWithoutSitesNestedInput = {
    create?: XOR<ClientCreateWithoutSitesInput, ClientUncheckedCreateWithoutSitesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSitesInput
    upsert?: ClientUpsertWithoutSitesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutSitesInput, ClientUpdateWithoutSitesInput>, ClientUncheckedUpdateWithoutSitesInput>
  }

  export type AlarmUpdateManyWithoutSiteNestedInput = {
    create?: XOR<AlarmCreateWithoutSiteInput, AlarmUncheckedCreateWithoutSiteInput> | AlarmCreateWithoutSiteInput[] | AlarmUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: AlarmCreateOrConnectWithoutSiteInput | AlarmCreateOrConnectWithoutSiteInput[]
    upsert?: AlarmUpsertWithWhereUniqueWithoutSiteInput | AlarmUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: AlarmCreateManySiteInputEnvelope
    set?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    disconnect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    delete?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    connect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    update?: AlarmUpdateWithWhereUniqueWithoutSiteInput | AlarmUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: AlarmUpdateManyWithWhereWithoutSiteInput | AlarmUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: AlarmScalarWhereInput | AlarmScalarWhereInput[]
  }

  export type ObLogUpdateManyWithoutSiteNestedInput = {
    create?: XOR<ObLogCreateWithoutSiteInput, ObLogUncheckedCreateWithoutSiteInput> | ObLogCreateWithoutSiteInput[] | ObLogUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ObLogCreateOrConnectWithoutSiteInput | ObLogCreateOrConnectWithoutSiteInput[]
    upsert?: ObLogUpsertWithWhereUniqueWithoutSiteInput | ObLogUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: ObLogCreateManySiteInputEnvelope
    set?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    disconnect?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    delete?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    connect?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    update?: ObLogUpdateWithWhereUniqueWithoutSiteInput | ObLogUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: ObLogUpdateManyWithWhereWithoutSiteInput | ObLogUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: ObLogScalarWhereInput | ObLogScalarWhereInput[]
  }

  export type AlarmUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<AlarmCreateWithoutSiteInput, AlarmUncheckedCreateWithoutSiteInput> | AlarmCreateWithoutSiteInput[] | AlarmUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: AlarmCreateOrConnectWithoutSiteInput | AlarmCreateOrConnectWithoutSiteInput[]
    upsert?: AlarmUpsertWithWhereUniqueWithoutSiteInput | AlarmUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: AlarmCreateManySiteInputEnvelope
    set?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    disconnect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    delete?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    connect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    update?: AlarmUpdateWithWhereUniqueWithoutSiteInput | AlarmUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: AlarmUpdateManyWithWhereWithoutSiteInput | AlarmUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: AlarmScalarWhereInput | AlarmScalarWhereInput[]
  }

  export type ObLogUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<ObLogCreateWithoutSiteInput, ObLogUncheckedCreateWithoutSiteInput> | ObLogCreateWithoutSiteInput[] | ObLogUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: ObLogCreateOrConnectWithoutSiteInput | ObLogCreateOrConnectWithoutSiteInput[]
    upsert?: ObLogUpsertWithWhereUniqueWithoutSiteInput | ObLogUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: ObLogCreateManySiteInputEnvelope
    set?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    disconnect?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    delete?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    connect?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    update?: ObLogUpdateWithWhereUniqueWithoutSiteInput | ObLogUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: ObLogUpdateManyWithWhereWithoutSiteInput | ObLogUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: ObLogScalarWhereInput | ObLogScalarWhereInput[]
  }

  export type SiteCreateNestedOneWithoutAlarmsInput = {
    create?: XOR<SiteCreateWithoutAlarmsInput, SiteUncheckedCreateWithoutAlarmsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutAlarmsInput
    connect?: SiteWhereUniqueInput
  }

  export type AiCallCreateNestedOneWithoutAlarmInput = {
    create?: XOR<AiCallCreateWithoutAlarmInput, AiCallUncheckedCreateWithoutAlarmInput>
    connectOrCreate?: AiCallCreateOrConnectWithoutAlarmInput
    connect?: AiCallWhereUniqueInput
  }

  export type DispatchCreateNestedOneWithoutAlarmInput = {
    create?: XOR<DispatchCreateWithoutAlarmInput, DispatchUncheckedCreateWithoutAlarmInput>
    connectOrCreate?: DispatchCreateOrConnectWithoutAlarmInput
    connect?: DispatchWhereUniqueInput
  }

  export type ObLogCreateNestedManyWithoutAlarmInput = {
    create?: XOR<ObLogCreateWithoutAlarmInput, ObLogUncheckedCreateWithoutAlarmInput> | ObLogCreateWithoutAlarmInput[] | ObLogUncheckedCreateWithoutAlarmInput[]
    connectOrCreate?: ObLogCreateOrConnectWithoutAlarmInput | ObLogCreateOrConnectWithoutAlarmInput[]
    createMany?: ObLogCreateManyAlarmInputEnvelope
    connect?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
  }

  export type AiCallUncheckedCreateNestedOneWithoutAlarmInput = {
    create?: XOR<AiCallCreateWithoutAlarmInput, AiCallUncheckedCreateWithoutAlarmInput>
    connectOrCreate?: AiCallCreateOrConnectWithoutAlarmInput
    connect?: AiCallWhereUniqueInput
  }

  export type DispatchUncheckedCreateNestedOneWithoutAlarmInput = {
    create?: XOR<DispatchCreateWithoutAlarmInput, DispatchUncheckedCreateWithoutAlarmInput>
    connectOrCreate?: DispatchCreateOrConnectWithoutAlarmInput
    connect?: DispatchWhereUniqueInput
  }

  export type ObLogUncheckedCreateNestedManyWithoutAlarmInput = {
    create?: XOR<ObLogCreateWithoutAlarmInput, ObLogUncheckedCreateWithoutAlarmInput> | ObLogCreateWithoutAlarmInput[] | ObLogUncheckedCreateWithoutAlarmInput[]
    connectOrCreate?: ObLogCreateOrConnectWithoutAlarmInput | ObLogCreateOrConnectWithoutAlarmInput[]
    createMany?: ObLogCreateManyAlarmInputEnvelope
    connect?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SiteUpdateOneRequiredWithoutAlarmsNestedInput = {
    create?: XOR<SiteCreateWithoutAlarmsInput, SiteUncheckedCreateWithoutAlarmsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutAlarmsInput
    upsert?: SiteUpsertWithoutAlarmsInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutAlarmsInput, SiteUpdateWithoutAlarmsInput>, SiteUncheckedUpdateWithoutAlarmsInput>
  }

  export type AiCallUpdateOneWithoutAlarmNestedInput = {
    create?: XOR<AiCallCreateWithoutAlarmInput, AiCallUncheckedCreateWithoutAlarmInput>
    connectOrCreate?: AiCallCreateOrConnectWithoutAlarmInput
    upsert?: AiCallUpsertWithoutAlarmInput
    disconnect?: AiCallWhereInput | boolean
    delete?: AiCallWhereInput | boolean
    connect?: AiCallWhereUniqueInput
    update?: XOR<XOR<AiCallUpdateToOneWithWhereWithoutAlarmInput, AiCallUpdateWithoutAlarmInput>, AiCallUncheckedUpdateWithoutAlarmInput>
  }

  export type DispatchUpdateOneWithoutAlarmNestedInput = {
    create?: XOR<DispatchCreateWithoutAlarmInput, DispatchUncheckedCreateWithoutAlarmInput>
    connectOrCreate?: DispatchCreateOrConnectWithoutAlarmInput
    upsert?: DispatchUpsertWithoutAlarmInput
    disconnect?: DispatchWhereInput | boolean
    delete?: DispatchWhereInput | boolean
    connect?: DispatchWhereUniqueInput
    update?: XOR<XOR<DispatchUpdateToOneWithWhereWithoutAlarmInput, DispatchUpdateWithoutAlarmInput>, DispatchUncheckedUpdateWithoutAlarmInput>
  }

  export type ObLogUpdateManyWithoutAlarmNestedInput = {
    create?: XOR<ObLogCreateWithoutAlarmInput, ObLogUncheckedCreateWithoutAlarmInput> | ObLogCreateWithoutAlarmInput[] | ObLogUncheckedCreateWithoutAlarmInput[]
    connectOrCreate?: ObLogCreateOrConnectWithoutAlarmInput | ObLogCreateOrConnectWithoutAlarmInput[]
    upsert?: ObLogUpsertWithWhereUniqueWithoutAlarmInput | ObLogUpsertWithWhereUniqueWithoutAlarmInput[]
    createMany?: ObLogCreateManyAlarmInputEnvelope
    set?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    disconnect?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    delete?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    connect?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    update?: ObLogUpdateWithWhereUniqueWithoutAlarmInput | ObLogUpdateWithWhereUniqueWithoutAlarmInput[]
    updateMany?: ObLogUpdateManyWithWhereWithoutAlarmInput | ObLogUpdateManyWithWhereWithoutAlarmInput[]
    deleteMany?: ObLogScalarWhereInput | ObLogScalarWhereInput[]
  }

  export type AiCallUncheckedUpdateOneWithoutAlarmNestedInput = {
    create?: XOR<AiCallCreateWithoutAlarmInput, AiCallUncheckedCreateWithoutAlarmInput>
    connectOrCreate?: AiCallCreateOrConnectWithoutAlarmInput
    upsert?: AiCallUpsertWithoutAlarmInput
    disconnect?: AiCallWhereInput | boolean
    delete?: AiCallWhereInput | boolean
    connect?: AiCallWhereUniqueInput
    update?: XOR<XOR<AiCallUpdateToOneWithWhereWithoutAlarmInput, AiCallUpdateWithoutAlarmInput>, AiCallUncheckedUpdateWithoutAlarmInput>
  }

  export type DispatchUncheckedUpdateOneWithoutAlarmNestedInput = {
    create?: XOR<DispatchCreateWithoutAlarmInput, DispatchUncheckedCreateWithoutAlarmInput>
    connectOrCreate?: DispatchCreateOrConnectWithoutAlarmInput
    upsert?: DispatchUpsertWithoutAlarmInput
    disconnect?: DispatchWhereInput | boolean
    delete?: DispatchWhereInput | boolean
    connect?: DispatchWhereUniqueInput
    update?: XOR<XOR<DispatchUpdateToOneWithWhereWithoutAlarmInput, DispatchUpdateWithoutAlarmInput>, DispatchUncheckedUpdateWithoutAlarmInput>
  }

  export type ObLogUncheckedUpdateManyWithoutAlarmNestedInput = {
    create?: XOR<ObLogCreateWithoutAlarmInput, ObLogUncheckedCreateWithoutAlarmInput> | ObLogCreateWithoutAlarmInput[] | ObLogUncheckedCreateWithoutAlarmInput[]
    connectOrCreate?: ObLogCreateOrConnectWithoutAlarmInput | ObLogCreateOrConnectWithoutAlarmInput[]
    upsert?: ObLogUpsertWithWhereUniqueWithoutAlarmInput | ObLogUpsertWithWhereUniqueWithoutAlarmInput[]
    createMany?: ObLogCreateManyAlarmInputEnvelope
    set?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    disconnect?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    delete?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    connect?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    update?: ObLogUpdateWithWhereUniqueWithoutAlarmInput | ObLogUpdateWithWhereUniqueWithoutAlarmInput[]
    updateMany?: ObLogUpdateManyWithWhereWithoutAlarmInput | ObLogUpdateManyWithWhereWithoutAlarmInput[]
    deleteMany?: ObLogScalarWhereInput | ObLogScalarWhereInput[]
  }

  export type AlarmCreateNestedOneWithoutAiCallInput = {
    create?: XOR<AlarmCreateWithoutAiCallInput, AlarmUncheckedCreateWithoutAiCallInput>
    connectOrCreate?: AlarmCreateOrConnectWithoutAiCallInput
    connect?: AlarmWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AlarmUpdateOneRequiredWithoutAiCallNestedInput = {
    create?: XOR<AlarmCreateWithoutAiCallInput, AlarmUncheckedCreateWithoutAiCallInput>
    connectOrCreate?: AlarmCreateOrConnectWithoutAiCallInput
    upsert?: AlarmUpsertWithoutAiCallInput
    connect?: AlarmWhereUniqueInput
    update?: XOR<XOR<AlarmUpdateToOneWithWhereWithoutAiCallInput, AlarmUpdateWithoutAiCallInput>, AlarmUncheckedUpdateWithoutAiCallInput>
  }

  export type AlarmCreateNestedOneWithoutDispatchInput = {
    create?: XOR<AlarmCreateWithoutDispatchInput, AlarmUncheckedCreateWithoutDispatchInput>
    connectOrCreate?: AlarmCreateOrConnectWithoutDispatchInput
    connect?: AlarmWhereUniqueInput
  }

  export type GuardCreateNestedOneWithoutDispatchesInput = {
    create?: XOR<GuardCreateWithoutDispatchesInput, GuardUncheckedCreateWithoutDispatchesInput>
    connectOrCreate?: GuardCreateOrConnectWithoutDispatchesInput
    connect?: GuardWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutDispatchesInput = {
    create?: XOR<VehicleCreateWithoutDispatchesInput, VehicleUncheckedCreateWithoutDispatchesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutDispatchesInput
    connect?: VehicleWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AlarmUpdateOneRequiredWithoutDispatchNestedInput = {
    create?: XOR<AlarmCreateWithoutDispatchInput, AlarmUncheckedCreateWithoutDispatchInput>
    connectOrCreate?: AlarmCreateOrConnectWithoutDispatchInput
    upsert?: AlarmUpsertWithoutDispatchInput
    connect?: AlarmWhereUniqueInput
    update?: XOR<XOR<AlarmUpdateToOneWithWhereWithoutDispatchInput, AlarmUpdateWithoutDispatchInput>, AlarmUncheckedUpdateWithoutDispatchInput>
  }

  export type GuardUpdateOneWithoutDispatchesNestedInput = {
    create?: XOR<GuardCreateWithoutDispatchesInput, GuardUncheckedCreateWithoutDispatchesInput>
    connectOrCreate?: GuardCreateOrConnectWithoutDispatchesInput
    upsert?: GuardUpsertWithoutDispatchesInput
    disconnect?: GuardWhereInput | boolean
    delete?: GuardWhereInput | boolean
    connect?: GuardWhereUniqueInput
    update?: XOR<XOR<GuardUpdateToOneWithWhereWithoutDispatchesInput, GuardUpdateWithoutDispatchesInput>, GuardUncheckedUpdateWithoutDispatchesInput>
  }

  export type VehicleUpdateOneWithoutDispatchesNestedInput = {
    create?: XOR<VehicleCreateWithoutDispatchesInput, VehicleUncheckedCreateWithoutDispatchesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutDispatchesInput
    upsert?: VehicleUpsertWithoutDispatchesInput
    disconnect?: VehicleWhereInput | boolean
    delete?: VehicleWhereInput | boolean
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutDispatchesInput, VehicleUpdateWithoutDispatchesInput>, VehicleUncheckedUpdateWithoutDispatchesInput>
  }

  export type AlarmCreateNestedOneWithoutObLogsInput = {
    create?: XOR<AlarmCreateWithoutObLogsInput, AlarmUncheckedCreateWithoutObLogsInput>
    connectOrCreate?: AlarmCreateOrConnectWithoutObLogsInput
    connect?: AlarmWhereUniqueInput
  }

  export type SiteCreateNestedOneWithoutObLogsInput = {
    create?: XOR<SiteCreateWithoutObLogsInput, SiteUncheckedCreateWithoutObLogsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutObLogsInput
    connect?: SiteWhereUniqueInput
  }

  export type GuardCreateNestedOneWithoutObLogsInput = {
    create?: XOR<GuardCreateWithoutObLogsInput, GuardUncheckedCreateWithoutObLogsInput>
    connectOrCreate?: GuardCreateOrConnectWithoutObLogsInput
    connect?: GuardWhereUniqueInput
  }

  export type AlarmUpdateOneWithoutObLogsNestedInput = {
    create?: XOR<AlarmCreateWithoutObLogsInput, AlarmUncheckedCreateWithoutObLogsInput>
    connectOrCreate?: AlarmCreateOrConnectWithoutObLogsInput
    upsert?: AlarmUpsertWithoutObLogsInput
    disconnect?: AlarmWhereInput | boolean
    delete?: AlarmWhereInput | boolean
    connect?: AlarmWhereUniqueInput
    update?: XOR<XOR<AlarmUpdateToOneWithWhereWithoutObLogsInput, AlarmUpdateWithoutObLogsInput>, AlarmUncheckedUpdateWithoutObLogsInput>
  }

  export type SiteUpdateOneWithoutObLogsNestedInput = {
    create?: XOR<SiteCreateWithoutObLogsInput, SiteUncheckedCreateWithoutObLogsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutObLogsInput
    upsert?: SiteUpsertWithoutObLogsInput
    disconnect?: SiteWhereInput | boolean
    delete?: SiteWhereInput | boolean
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutObLogsInput, SiteUpdateWithoutObLogsInput>, SiteUncheckedUpdateWithoutObLogsInput>
  }

  export type GuardUpdateOneWithoutObLogsNestedInput = {
    create?: XOR<GuardCreateWithoutObLogsInput, GuardUncheckedCreateWithoutObLogsInput>
    connectOrCreate?: GuardCreateOrConnectWithoutObLogsInput
    upsert?: GuardUpsertWithoutObLogsInput
    disconnect?: GuardWhereInput | boolean
    delete?: GuardWhereInput | boolean
    connect?: GuardWhereUniqueInput
    update?: XOR<XOR<GuardUpdateToOneWithWhereWithoutObLogsInput, GuardUpdateWithoutObLogsInput>, GuardUncheckedUpdateWithoutObLogsInput>
  }

  export type UserRoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput
    connect?: UserRoleWhereUniqueInput
  }

  export type UserRoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput
    upsert?: UserRoleUpsertWithoutUsersInput
    connect?: UserRoleWhereUniqueInput
    update?: XOR<XOR<UserRoleUpdateToOneWithWhereWithoutUsersInput, UserRoleUpdateWithoutUsersInput>, UserRoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DispatchCreateNestedManyWithoutVehicleInput = {
    create?: XOR<DispatchCreateWithoutVehicleInput, DispatchUncheckedCreateWithoutVehicleInput> | DispatchCreateWithoutVehicleInput[] | DispatchUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: DispatchCreateOrConnectWithoutVehicleInput | DispatchCreateOrConnectWithoutVehicleInput[]
    createMany?: DispatchCreateManyVehicleInputEnvelope
    connect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
  }

  export type GuardCreateNestedManyWithoutAssignedVehicleInput = {
    create?: XOR<GuardCreateWithoutAssignedVehicleInput, GuardUncheckedCreateWithoutAssignedVehicleInput> | GuardCreateWithoutAssignedVehicleInput[] | GuardUncheckedCreateWithoutAssignedVehicleInput[]
    connectOrCreate?: GuardCreateOrConnectWithoutAssignedVehicleInput | GuardCreateOrConnectWithoutAssignedVehicleInput[]
    createMany?: GuardCreateManyAssignedVehicleInputEnvelope
    connect?: GuardWhereUniqueInput | GuardWhereUniqueInput[]
  }

  export type DispatchUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<DispatchCreateWithoutVehicleInput, DispatchUncheckedCreateWithoutVehicleInput> | DispatchCreateWithoutVehicleInput[] | DispatchUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: DispatchCreateOrConnectWithoutVehicleInput | DispatchCreateOrConnectWithoutVehicleInput[]
    createMany?: DispatchCreateManyVehicleInputEnvelope
    connect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
  }

  export type GuardUncheckedCreateNestedManyWithoutAssignedVehicleInput = {
    create?: XOR<GuardCreateWithoutAssignedVehicleInput, GuardUncheckedCreateWithoutAssignedVehicleInput> | GuardCreateWithoutAssignedVehicleInput[] | GuardUncheckedCreateWithoutAssignedVehicleInput[]
    connectOrCreate?: GuardCreateOrConnectWithoutAssignedVehicleInput | GuardCreateOrConnectWithoutAssignedVehicleInput[]
    createMany?: GuardCreateManyAssignedVehicleInputEnvelope
    connect?: GuardWhereUniqueInput | GuardWhereUniqueInput[]
  }

  export type DispatchUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<DispatchCreateWithoutVehicleInput, DispatchUncheckedCreateWithoutVehicleInput> | DispatchCreateWithoutVehicleInput[] | DispatchUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: DispatchCreateOrConnectWithoutVehicleInput | DispatchCreateOrConnectWithoutVehicleInput[]
    upsert?: DispatchUpsertWithWhereUniqueWithoutVehicleInput | DispatchUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: DispatchCreateManyVehicleInputEnvelope
    set?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    disconnect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    delete?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    connect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    update?: DispatchUpdateWithWhereUniqueWithoutVehicleInput | DispatchUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: DispatchUpdateManyWithWhereWithoutVehicleInput | DispatchUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: DispatchScalarWhereInput | DispatchScalarWhereInput[]
  }

  export type GuardUpdateManyWithoutAssignedVehicleNestedInput = {
    create?: XOR<GuardCreateWithoutAssignedVehicleInput, GuardUncheckedCreateWithoutAssignedVehicleInput> | GuardCreateWithoutAssignedVehicleInput[] | GuardUncheckedCreateWithoutAssignedVehicleInput[]
    connectOrCreate?: GuardCreateOrConnectWithoutAssignedVehicleInput | GuardCreateOrConnectWithoutAssignedVehicleInput[]
    upsert?: GuardUpsertWithWhereUniqueWithoutAssignedVehicleInput | GuardUpsertWithWhereUniqueWithoutAssignedVehicleInput[]
    createMany?: GuardCreateManyAssignedVehicleInputEnvelope
    set?: GuardWhereUniqueInput | GuardWhereUniqueInput[]
    disconnect?: GuardWhereUniqueInput | GuardWhereUniqueInput[]
    delete?: GuardWhereUniqueInput | GuardWhereUniqueInput[]
    connect?: GuardWhereUniqueInput | GuardWhereUniqueInput[]
    update?: GuardUpdateWithWhereUniqueWithoutAssignedVehicleInput | GuardUpdateWithWhereUniqueWithoutAssignedVehicleInput[]
    updateMany?: GuardUpdateManyWithWhereWithoutAssignedVehicleInput | GuardUpdateManyWithWhereWithoutAssignedVehicleInput[]
    deleteMany?: GuardScalarWhereInput | GuardScalarWhereInput[]
  }

  export type DispatchUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<DispatchCreateWithoutVehicleInput, DispatchUncheckedCreateWithoutVehicleInput> | DispatchCreateWithoutVehicleInput[] | DispatchUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: DispatchCreateOrConnectWithoutVehicleInput | DispatchCreateOrConnectWithoutVehicleInput[]
    upsert?: DispatchUpsertWithWhereUniqueWithoutVehicleInput | DispatchUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: DispatchCreateManyVehicleInputEnvelope
    set?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    disconnect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    delete?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    connect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    update?: DispatchUpdateWithWhereUniqueWithoutVehicleInput | DispatchUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: DispatchUpdateManyWithWhereWithoutVehicleInput | DispatchUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: DispatchScalarWhereInput | DispatchScalarWhereInput[]
  }

  export type GuardUncheckedUpdateManyWithoutAssignedVehicleNestedInput = {
    create?: XOR<GuardCreateWithoutAssignedVehicleInput, GuardUncheckedCreateWithoutAssignedVehicleInput> | GuardCreateWithoutAssignedVehicleInput[] | GuardUncheckedCreateWithoutAssignedVehicleInput[]
    connectOrCreate?: GuardCreateOrConnectWithoutAssignedVehicleInput | GuardCreateOrConnectWithoutAssignedVehicleInput[]
    upsert?: GuardUpsertWithWhereUniqueWithoutAssignedVehicleInput | GuardUpsertWithWhereUniqueWithoutAssignedVehicleInput[]
    createMany?: GuardCreateManyAssignedVehicleInputEnvelope
    set?: GuardWhereUniqueInput | GuardWhereUniqueInput[]
    disconnect?: GuardWhereUniqueInput | GuardWhereUniqueInput[]
    delete?: GuardWhereUniqueInput | GuardWhereUniqueInput[]
    connect?: GuardWhereUniqueInput | GuardWhereUniqueInput[]
    update?: GuardUpdateWithWhereUniqueWithoutAssignedVehicleInput | GuardUpdateWithWhereUniqueWithoutAssignedVehicleInput[]
    updateMany?: GuardUpdateManyWithWhereWithoutAssignedVehicleInput | GuardUpdateManyWithWhereWithoutAssignedVehicleInput[]
    deleteMany?: GuardScalarWhereInput | GuardScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutGuardsInput = {
    create?: XOR<VehicleCreateWithoutGuardsInput, VehicleUncheckedCreateWithoutGuardsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutGuardsInput
    connect?: VehicleWhereUniqueInput
  }

  export type DispatchCreateNestedManyWithoutGuardInput = {
    create?: XOR<DispatchCreateWithoutGuardInput, DispatchUncheckedCreateWithoutGuardInput> | DispatchCreateWithoutGuardInput[] | DispatchUncheckedCreateWithoutGuardInput[]
    connectOrCreate?: DispatchCreateOrConnectWithoutGuardInput | DispatchCreateOrConnectWithoutGuardInput[]
    createMany?: DispatchCreateManyGuardInputEnvelope
    connect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
  }

  export type ObLogCreateNestedManyWithoutGuardInput = {
    create?: XOR<ObLogCreateWithoutGuardInput, ObLogUncheckedCreateWithoutGuardInput> | ObLogCreateWithoutGuardInput[] | ObLogUncheckedCreateWithoutGuardInput[]
    connectOrCreate?: ObLogCreateOrConnectWithoutGuardInput | ObLogCreateOrConnectWithoutGuardInput[]
    createMany?: ObLogCreateManyGuardInputEnvelope
    connect?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
  }

  export type DispatchUncheckedCreateNestedManyWithoutGuardInput = {
    create?: XOR<DispatchCreateWithoutGuardInput, DispatchUncheckedCreateWithoutGuardInput> | DispatchCreateWithoutGuardInput[] | DispatchUncheckedCreateWithoutGuardInput[]
    connectOrCreate?: DispatchCreateOrConnectWithoutGuardInput | DispatchCreateOrConnectWithoutGuardInput[]
    createMany?: DispatchCreateManyGuardInputEnvelope
    connect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
  }

  export type ObLogUncheckedCreateNestedManyWithoutGuardInput = {
    create?: XOR<ObLogCreateWithoutGuardInput, ObLogUncheckedCreateWithoutGuardInput> | ObLogCreateWithoutGuardInput[] | ObLogUncheckedCreateWithoutGuardInput[]
    connectOrCreate?: ObLogCreateOrConnectWithoutGuardInput | ObLogCreateOrConnectWithoutGuardInput[]
    createMany?: ObLogCreateManyGuardInputEnvelope
    connect?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
  }

  export type VehicleUpdateOneWithoutGuardsNestedInput = {
    create?: XOR<VehicleCreateWithoutGuardsInput, VehicleUncheckedCreateWithoutGuardsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutGuardsInput
    upsert?: VehicleUpsertWithoutGuardsInput
    disconnect?: VehicleWhereInput | boolean
    delete?: VehicleWhereInput | boolean
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutGuardsInput, VehicleUpdateWithoutGuardsInput>, VehicleUncheckedUpdateWithoutGuardsInput>
  }

  export type DispatchUpdateManyWithoutGuardNestedInput = {
    create?: XOR<DispatchCreateWithoutGuardInput, DispatchUncheckedCreateWithoutGuardInput> | DispatchCreateWithoutGuardInput[] | DispatchUncheckedCreateWithoutGuardInput[]
    connectOrCreate?: DispatchCreateOrConnectWithoutGuardInput | DispatchCreateOrConnectWithoutGuardInput[]
    upsert?: DispatchUpsertWithWhereUniqueWithoutGuardInput | DispatchUpsertWithWhereUniqueWithoutGuardInput[]
    createMany?: DispatchCreateManyGuardInputEnvelope
    set?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    disconnect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    delete?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    connect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    update?: DispatchUpdateWithWhereUniqueWithoutGuardInput | DispatchUpdateWithWhereUniqueWithoutGuardInput[]
    updateMany?: DispatchUpdateManyWithWhereWithoutGuardInput | DispatchUpdateManyWithWhereWithoutGuardInput[]
    deleteMany?: DispatchScalarWhereInput | DispatchScalarWhereInput[]
  }

  export type ObLogUpdateManyWithoutGuardNestedInput = {
    create?: XOR<ObLogCreateWithoutGuardInput, ObLogUncheckedCreateWithoutGuardInput> | ObLogCreateWithoutGuardInput[] | ObLogUncheckedCreateWithoutGuardInput[]
    connectOrCreate?: ObLogCreateOrConnectWithoutGuardInput | ObLogCreateOrConnectWithoutGuardInput[]
    upsert?: ObLogUpsertWithWhereUniqueWithoutGuardInput | ObLogUpsertWithWhereUniqueWithoutGuardInput[]
    createMany?: ObLogCreateManyGuardInputEnvelope
    set?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    disconnect?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    delete?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    connect?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    update?: ObLogUpdateWithWhereUniqueWithoutGuardInput | ObLogUpdateWithWhereUniqueWithoutGuardInput[]
    updateMany?: ObLogUpdateManyWithWhereWithoutGuardInput | ObLogUpdateManyWithWhereWithoutGuardInput[]
    deleteMany?: ObLogScalarWhereInput | ObLogScalarWhereInput[]
  }

  export type DispatchUncheckedUpdateManyWithoutGuardNestedInput = {
    create?: XOR<DispatchCreateWithoutGuardInput, DispatchUncheckedCreateWithoutGuardInput> | DispatchCreateWithoutGuardInput[] | DispatchUncheckedCreateWithoutGuardInput[]
    connectOrCreate?: DispatchCreateOrConnectWithoutGuardInput | DispatchCreateOrConnectWithoutGuardInput[]
    upsert?: DispatchUpsertWithWhereUniqueWithoutGuardInput | DispatchUpsertWithWhereUniqueWithoutGuardInput[]
    createMany?: DispatchCreateManyGuardInputEnvelope
    set?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    disconnect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    delete?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    connect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
    update?: DispatchUpdateWithWhereUniqueWithoutGuardInput | DispatchUpdateWithWhereUniqueWithoutGuardInput[]
    updateMany?: DispatchUpdateManyWithWhereWithoutGuardInput | DispatchUpdateManyWithWhereWithoutGuardInput[]
    deleteMany?: DispatchScalarWhereInput | DispatchScalarWhereInput[]
  }

  export type ObLogUncheckedUpdateManyWithoutGuardNestedInput = {
    create?: XOR<ObLogCreateWithoutGuardInput, ObLogUncheckedCreateWithoutGuardInput> | ObLogCreateWithoutGuardInput[] | ObLogUncheckedCreateWithoutGuardInput[]
    connectOrCreate?: ObLogCreateOrConnectWithoutGuardInput | ObLogCreateOrConnectWithoutGuardInput[]
    upsert?: ObLogUpsertWithWhereUniqueWithoutGuardInput | ObLogUpsertWithWhereUniqueWithoutGuardInput[]
    createMany?: ObLogCreateManyGuardInputEnvelope
    set?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    disconnect?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    delete?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    connect?: ObLogWhereUniqueInput | ObLogWhereUniqueInput[]
    update?: ObLogUpdateWithWhereUniqueWithoutGuardInput | ObLogUpdateWithWhereUniqueWithoutGuardInput[]
    updateMany?: ObLogUpdateManyWithWhereWithoutGuardInput | ObLogUpdateManyWithWhereWithoutGuardInput[]
    deleteMany?: ObLogScalarWhereInput | ObLogScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SiteCreateWithoutClientInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    alarms?: AlarmCreateNestedManyWithoutSiteInput
    obLogs?: ObLogCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutClientInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    alarms?: AlarmUncheckedCreateNestedManyWithoutSiteInput
    obLogs?: ObLogUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutClientInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutClientInput, SiteUncheckedCreateWithoutClientInput>
  }

  export type SiteCreateManyClientInputEnvelope = {
    data: SiteCreateManyClientInput | SiteCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type SiteUpsertWithWhereUniqueWithoutClientInput = {
    where: SiteWhereUniqueInput
    update: XOR<SiteUpdateWithoutClientInput, SiteUncheckedUpdateWithoutClientInput>
    create: XOR<SiteCreateWithoutClientInput, SiteUncheckedCreateWithoutClientInput>
  }

  export type SiteUpdateWithWhereUniqueWithoutClientInput = {
    where: SiteWhereUniqueInput
    data: XOR<SiteUpdateWithoutClientInput, SiteUncheckedUpdateWithoutClientInput>
  }

  export type SiteUpdateManyWithWhereWithoutClientInput = {
    where: SiteScalarWhereInput
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyWithoutClientInput>
  }

  export type SiteScalarWhereInput = {
    AND?: SiteScalarWhereInput | SiteScalarWhereInput[]
    OR?: SiteScalarWhereInput[]
    NOT?: SiteScalarWhereInput | SiteScalarWhereInput[]
    id?: StringFilter<"Site"> | string
    name?: StringFilter<"Site"> | string
    address?: StringFilter<"Site"> | string
    latitude?: FloatNullableFilter<"Site"> | number | null
    longitude?: FloatNullableFilter<"Site"> | number | null
    createdAt?: DateTimeFilter<"Site"> | Date | string
    clientId?: StringFilter<"Site"> | string
  }

  export type ClientCreateWithoutSitesInput = {
    id?: string
    name: string
    contactEmail: string
    phone?: string | null
    createdAt?: Date | string
  }

  export type ClientUncheckedCreateWithoutSitesInput = {
    id?: string
    name: string
    contactEmail: string
    phone?: string | null
    createdAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutSitesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutSitesInput, ClientUncheckedCreateWithoutSitesInput>
  }

  export type AlarmCreateWithoutSiteInput = {
    id?: string
    triggeredAt: Date | string
    alarmType: string
    priority: number
    status: string
    aiCall?: AiCallCreateNestedOneWithoutAlarmInput
    dispatch?: DispatchCreateNestedOneWithoutAlarmInput
    obLogs?: ObLogCreateNestedManyWithoutAlarmInput
  }

  export type AlarmUncheckedCreateWithoutSiteInput = {
    id?: string
    triggeredAt: Date | string
    alarmType: string
    priority: number
    status: string
    aiCall?: AiCallUncheckedCreateNestedOneWithoutAlarmInput
    dispatch?: DispatchUncheckedCreateNestedOneWithoutAlarmInput
    obLogs?: ObLogUncheckedCreateNestedManyWithoutAlarmInput
  }

  export type AlarmCreateOrConnectWithoutSiteInput = {
    where: AlarmWhereUniqueInput
    create: XOR<AlarmCreateWithoutSiteInput, AlarmUncheckedCreateWithoutSiteInput>
  }

  export type AlarmCreateManySiteInputEnvelope = {
    data: AlarmCreateManySiteInput | AlarmCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type ObLogCreateWithoutSiteInput = {
    id?: string
    logTime: Date | string
    message: string
    source: string
    alarm?: AlarmCreateNestedOneWithoutObLogsInput
    guard?: GuardCreateNestedOneWithoutObLogsInput
  }

  export type ObLogUncheckedCreateWithoutSiteInput = {
    id?: string
    logTime: Date | string
    message: string
    source: string
    alarmId?: string | null
    guardId?: string | null
  }

  export type ObLogCreateOrConnectWithoutSiteInput = {
    where: ObLogWhereUniqueInput
    create: XOR<ObLogCreateWithoutSiteInput, ObLogUncheckedCreateWithoutSiteInput>
  }

  export type ObLogCreateManySiteInputEnvelope = {
    data: ObLogCreateManySiteInput | ObLogCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutSitesInput = {
    update: XOR<ClientUpdateWithoutSitesInput, ClientUncheckedUpdateWithoutSitesInput>
    create: XOR<ClientCreateWithoutSitesInput, ClientUncheckedCreateWithoutSitesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutSitesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutSitesInput, ClientUncheckedUpdateWithoutSitesInput>
  }

  export type ClientUpdateWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmUpsertWithWhereUniqueWithoutSiteInput = {
    where: AlarmWhereUniqueInput
    update: XOR<AlarmUpdateWithoutSiteInput, AlarmUncheckedUpdateWithoutSiteInput>
    create: XOR<AlarmCreateWithoutSiteInput, AlarmUncheckedCreateWithoutSiteInput>
  }

  export type AlarmUpdateWithWhereUniqueWithoutSiteInput = {
    where: AlarmWhereUniqueInput
    data: XOR<AlarmUpdateWithoutSiteInput, AlarmUncheckedUpdateWithoutSiteInput>
  }

  export type AlarmUpdateManyWithWhereWithoutSiteInput = {
    where: AlarmScalarWhereInput
    data: XOR<AlarmUpdateManyMutationInput, AlarmUncheckedUpdateManyWithoutSiteInput>
  }

  export type AlarmScalarWhereInput = {
    AND?: AlarmScalarWhereInput | AlarmScalarWhereInput[]
    OR?: AlarmScalarWhereInput[]
    NOT?: AlarmScalarWhereInput | AlarmScalarWhereInput[]
    id?: StringFilter<"Alarm"> | string
    triggeredAt?: DateTimeFilter<"Alarm"> | Date | string
    alarmType?: StringFilter<"Alarm"> | string
    priority?: IntFilter<"Alarm"> | number
    status?: StringFilter<"Alarm"> | string
    siteId?: StringFilter<"Alarm"> | string
  }

  export type ObLogUpsertWithWhereUniqueWithoutSiteInput = {
    where: ObLogWhereUniqueInput
    update: XOR<ObLogUpdateWithoutSiteInput, ObLogUncheckedUpdateWithoutSiteInput>
    create: XOR<ObLogCreateWithoutSiteInput, ObLogUncheckedCreateWithoutSiteInput>
  }

  export type ObLogUpdateWithWhereUniqueWithoutSiteInput = {
    where: ObLogWhereUniqueInput
    data: XOR<ObLogUpdateWithoutSiteInput, ObLogUncheckedUpdateWithoutSiteInput>
  }

  export type ObLogUpdateManyWithWhereWithoutSiteInput = {
    where: ObLogScalarWhereInput
    data: XOR<ObLogUpdateManyMutationInput, ObLogUncheckedUpdateManyWithoutSiteInput>
  }

  export type ObLogScalarWhereInput = {
    AND?: ObLogScalarWhereInput | ObLogScalarWhereInput[]
    OR?: ObLogScalarWhereInput[]
    NOT?: ObLogScalarWhereInput | ObLogScalarWhereInput[]
    id?: StringFilter<"ObLog"> | string
    logTime?: DateTimeFilter<"ObLog"> | Date | string
    message?: StringFilter<"ObLog"> | string
    source?: StringFilter<"ObLog"> | string
    alarmId?: StringNullableFilter<"ObLog"> | string | null
    siteId?: StringNullableFilter<"ObLog"> | string | null
    guardId?: StringNullableFilter<"ObLog"> | string | null
  }

  export type SiteCreateWithoutAlarmsInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutSitesInput
    obLogs?: ObLogCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutAlarmsInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    clientId: string
    obLogs?: ObLogUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutAlarmsInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutAlarmsInput, SiteUncheckedCreateWithoutAlarmsInput>
  }

  export type AiCallCreateWithoutAlarmInput = {
    id?: string
    aiDecision: string
    confidenceScore: number
    evaluatedAt: Date | string
    notes?: string | null
  }

  export type AiCallUncheckedCreateWithoutAlarmInput = {
    id?: string
    aiDecision: string
    confidenceScore: number
    evaluatedAt: Date | string
    notes?: string | null
  }

  export type AiCallCreateOrConnectWithoutAlarmInput = {
    where: AiCallWhereUniqueInput
    create: XOR<AiCallCreateWithoutAlarmInput, AiCallUncheckedCreateWithoutAlarmInput>
  }

  export type DispatchCreateWithoutAlarmInput = {
    id?: string
    dispatchedAt: Date | string
    arrivalTime?: Date | string | null
    resolvedAt?: Date | string | null
    responseNotes?: string | null
    guard?: GuardCreateNestedOneWithoutDispatchesInput
    vehicle?: VehicleCreateNestedOneWithoutDispatchesInput
  }

  export type DispatchUncheckedCreateWithoutAlarmInput = {
    id?: string
    dispatchedAt: Date | string
    arrivalTime?: Date | string | null
    resolvedAt?: Date | string | null
    responseNotes?: string | null
    guardId?: string | null
    vehicleId?: string | null
  }

  export type DispatchCreateOrConnectWithoutAlarmInput = {
    where: DispatchWhereUniqueInput
    create: XOR<DispatchCreateWithoutAlarmInput, DispatchUncheckedCreateWithoutAlarmInput>
  }

  export type ObLogCreateWithoutAlarmInput = {
    id?: string
    logTime: Date | string
    message: string
    source: string
    site?: SiteCreateNestedOneWithoutObLogsInput
    guard?: GuardCreateNestedOneWithoutObLogsInput
  }

  export type ObLogUncheckedCreateWithoutAlarmInput = {
    id?: string
    logTime: Date | string
    message: string
    source: string
    siteId?: string | null
    guardId?: string | null
  }

  export type ObLogCreateOrConnectWithoutAlarmInput = {
    where: ObLogWhereUniqueInput
    create: XOR<ObLogCreateWithoutAlarmInput, ObLogUncheckedCreateWithoutAlarmInput>
  }

  export type ObLogCreateManyAlarmInputEnvelope = {
    data: ObLogCreateManyAlarmInput | ObLogCreateManyAlarmInput[]
    skipDuplicates?: boolean
  }

  export type SiteUpsertWithoutAlarmsInput = {
    update: XOR<SiteUpdateWithoutAlarmsInput, SiteUncheckedUpdateWithoutAlarmsInput>
    create: XOR<SiteCreateWithoutAlarmsInput, SiteUncheckedCreateWithoutAlarmsInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutAlarmsInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutAlarmsInput, SiteUncheckedUpdateWithoutAlarmsInput>
  }

  export type SiteUpdateWithoutAlarmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutSitesNestedInput
    obLogs?: ObLogUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutAlarmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    obLogs?: ObLogUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type AiCallUpsertWithoutAlarmInput = {
    update: XOR<AiCallUpdateWithoutAlarmInput, AiCallUncheckedUpdateWithoutAlarmInput>
    create: XOR<AiCallCreateWithoutAlarmInput, AiCallUncheckedCreateWithoutAlarmInput>
    where?: AiCallWhereInput
  }

  export type AiCallUpdateToOneWithWhereWithoutAlarmInput = {
    where?: AiCallWhereInput
    data: XOR<AiCallUpdateWithoutAlarmInput, AiCallUncheckedUpdateWithoutAlarmInput>
  }

  export type AiCallUpdateWithoutAlarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiDecision?: StringFieldUpdateOperationsInput | string
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    evaluatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AiCallUncheckedUpdateWithoutAlarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    aiDecision?: StringFieldUpdateOperationsInput | string
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    evaluatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispatchUpsertWithoutAlarmInput = {
    update: XOR<DispatchUpdateWithoutAlarmInput, DispatchUncheckedUpdateWithoutAlarmInput>
    create: XOR<DispatchCreateWithoutAlarmInput, DispatchUncheckedCreateWithoutAlarmInput>
    where?: DispatchWhereInput
  }

  export type DispatchUpdateToOneWithWhereWithoutAlarmInput = {
    where?: DispatchWhereInput
    data: XOR<DispatchUpdateWithoutAlarmInput, DispatchUncheckedUpdateWithoutAlarmInput>
  }

  export type DispatchUpdateWithoutAlarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNotes?: NullableStringFieldUpdateOperationsInput | string | null
    guard?: GuardUpdateOneWithoutDispatchesNestedInput
    vehicle?: VehicleUpdateOneWithoutDispatchesNestedInput
  }

  export type DispatchUncheckedUpdateWithoutAlarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNotes?: NullableStringFieldUpdateOperationsInput | string | null
    guardId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ObLogUpsertWithWhereUniqueWithoutAlarmInput = {
    where: ObLogWhereUniqueInput
    update: XOR<ObLogUpdateWithoutAlarmInput, ObLogUncheckedUpdateWithoutAlarmInput>
    create: XOR<ObLogCreateWithoutAlarmInput, ObLogUncheckedCreateWithoutAlarmInput>
  }

  export type ObLogUpdateWithWhereUniqueWithoutAlarmInput = {
    where: ObLogWhereUniqueInput
    data: XOR<ObLogUpdateWithoutAlarmInput, ObLogUncheckedUpdateWithoutAlarmInput>
  }

  export type ObLogUpdateManyWithWhereWithoutAlarmInput = {
    where: ObLogScalarWhereInput
    data: XOR<ObLogUpdateManyMutationInput, ObLogUncheckedUpdateManyWithoutAlarmInput>
  }

  export type AlarmCreateWithoutAiCallInput = {
    id?: string
    triggeredAt: Date | string
    alarmType: string
    priority: number
    status: string
    site: SiteCreateNestedOneWithoutAlarmsInput
    dispatch?: DispatchCreateNestedOneWithoutAlarmInput
    obLogs?: ObLogCreateNestedManyWithoutAlarmInput
  }

  export type AlarmUncheckedCreateWithoutAiCallInput = {
    id?: string
    triggeredAt: Date | string
    alarmType: string
    priority: number
    status: string
    siteId: string
    dispatch?: DispatchUncheckedCreateNestedOneWithoutAlarmInput
    obLogs?: ObLogUncheckedCreateNestedManyWithoutAlarmInput
  }

  export type AlarmCreateOrConnectWithoutAiCallInput = {
    where: AlarmWhereUniqueInput
    create: XOR<AlarmCreateWithoutAiCallInput, AlarmUncheckedCreateWithoutAiCallInput>
  }

  export type AlarmUpsertWithoutAiCallInput = {
    update: XOR<AlarmUpdateWithoutAiCallInput, AlarmUncheckedUpdateWithoutAiCallInput>
    create: XOR<AlarmCreateWithoutAiCallInput, AlarmUncheckedCreateWithoutAiCallInput>
    where?: AlarmWhereInput
  }

  export type AlarmUpdateToOneWithWhereWithoutAiCallInput = {
    where?: AlarmWhereInput
    data: XOR<AlarmUpdateWithoutAiCallInput, AlarmUncheckedUpdateWithoutAiCallInput>
  }

  export type AlarmUpdateWithoutAiCallInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alarmType?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    site?: SiteUpdateOneRequiredWithoutAlarmsNestedInput
    dispatch?: DispatchUpdateOneWithoutAlarmNestedInput
    obLogs?: ObLogUpdateManyWithoutAlarmNestedInput
  }

  export type AlarmUncheckedUpdateWithoutAiCallInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alarmType?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    dispatch?: DispatchUncheckedUpdateOneWithoutAlarmNestedInput
    obLogs?: ObLogUncheckedUpdateManyWithoutAlarmNestedInput
  }

  export type AlarmCreateWithoutDispatchInput = {
    id?: string
    triggeredAt: Date | string
    alarmType: string
    priority: number
    status: string
    site: SiteCreateNestedOneWithoutAlarmsInput
    aiCall?: AiCallCreateNestedOneWithoutAlarmInput
    obLogs?: ObLogCreateNestedManyWithoutAlarmInput
  }

  export type AlarmUncheckedCreateWithoutDispatchInput = {
    id?: string
    triggeredAt: Date | string
    alarmType: string
    priority: number
    status: string
    siteId: string
    aiCall?: AiCallUncheckedCreateNestedOneWithoutAlarmInput
    obLogs?: ObLogUncheckedCreateNestedManyWithoutAlarmInput
  }

  export type AlarmCreateOrConnectWithoutDispatchInput = {
    where: AlarmWhereUniqueInput
    create: XOR<AlarmCreateWithoutDispatchInput, AlarmUncheckedCreateWithoutDispatchInput>
  }

  export type GuardCreateWithoutDispatchesInput = {
    id?: string
    name: string
    phone: string
    status: string
    assignedVehicle?: VehicleCreateNestedOneWithoutGuardsInput
    obLogs?: ObLogCreateNestedManyWithoutGuardInput
  }

  export type GuardUncheckedCreateWithoutDispatchesInput = {
    id?: string
    name: string
    phone: string
    status: string
    assignedVehicleId?: string | null
    obLogs?: ObLogUncheckedCreateNestedManyWithoutGuardInput
  }

  export type GuardCreateOrConnectWithoutDispatchesInput = {
    where: GuardWhereUniqueInput
    create: XOR<GuardCreateWithoutDispatchesInput, GuardUncheckedCreateWithoutDispatchesInput>
  }

  export type VehicleCreateWithoutDispatchesInput = {
    id?: string
    plateNumber: string
    description?: string | null
    status: string
    guards?: GuardCreateNestedManyWithoutAssignedVehicleInput
  }

  export type VehicleUncheckedCreateWithoutDispatchesInput = {
    id?: string
    plateNumber: string
    description?: string | null
    status: string
    guards?: GuardUncheckedCreateNestedManyWithoutAssignedVehicleInput
  }

  export type VehicleCreateOrConnectWithoutDispatchesInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutDispatchesInput, VehicleUncheckedCreateWithoutDispatchesInput>
  }

  export type AlarmUpsertWithoutDispatchInput = {
    update: XOR<AlarmUpdateWithoutDispatchInput, AlarmUncheckedUpdateWithoutDispatchInput>
    create: XOR<AlarmCreateWithoutDispatchInput, AlarmUncheckedCreateWithoutDispatchInput>
    where?: AlarmWhereInput
  }

  export type AlarmUpdateToOneWithWhereWithoutDispatchInput = {
    where?: AlarmWhereInput
    data: XOR<AlarmUpdateWithoutDispatchInput, AlarmUncheckedUpdateWithoutDispatchInput>
  }

  export type AlarmUpdateWithoutDispatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alarmType?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    site?: SiteUpdateOneRequiredWithoutAlarmsNestedInput
    aiCall?: AiCallUpdateOneWithoutAlarmNestedInput
    obLogs?: ObLogUpdateManyWithoutAlarmNestedInput
  }

  export type AlarmUncheckedUpdateWithoutDispatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alarmType?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    aiCall?: AiCallUncheckedUpdateOneWithoutAlarmNestedInput
    obLogs?: ObLogUncheckedUpdateManyWithoutAlarmNestedInput
  }

  export type GuardUpsertWithoutDispatchesInput = {
    update: XOR<GuardUpdateWithoutDispatchesInput, GuardUncheckedUpdateWithoutDispatchesInput>
    create: XOR<GuardCreateWithoutDispatchesInput, GuardUncheckedCreateWithoutDispatchesInput>
    where?: GuardWhereInput
  }

  export type GuardUpdateToOneWithWhereWithoutDispatchesInput = {
    where?: GuardWhereInput
    data: XOR<GuardUpdateWithoutDispatchesInput, GuardUncheckedUpdateWithoutDispatchesInput>
  }

  export type GuardUpdateWithoutDispatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedVehicle?: VehicleUpdateOneWithoutGuardsNestedInput
    obLogs?: ObLogUpdateManyWithoutGuardNestedInput
  }

  export type GuardUncheckedUpdateWithoutDispatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedVehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    obLogs?: ObLogUncheckedUpdateManyWithoutGuardNestedInput
  }

  export type VehicleUpsertWithoutDispatchesInput = {
    update: XOR<VehicleUpdateWithoutDispatchesInput, VehicleUncheckedUpdateWithoutDispatchesInput>
    create: XOR<VehicleCreateWithoutDispatchesInput, VehicleUncheckedCreateWithoutDispatchesInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutDispatchesInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutDispatchesInput, VehicleUncheckedUpdateWithoutDispatchesInput>
  }

  export type VehicleUpdateWithoutDispatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    guards?: GuardUpdateManyWithoutAssignedVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutDispatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    guards?: GuardUncheckedUpdateManyWithoutAssignedVehicleNestedInput
  }

  export type AlarmCreateWithoutObLogsInput = {
    id?: string
    triggeredAt: Date | string
    alarmType: string
    priority: number
    status: string
    site: SiteCreateNestedOneWithoutAlarmsInput
    aiCall?: AiCallCreateNestedOneWithoutAlarmInput
    dispatch?: DispatchCreateNestedOneWithoutAlarmInput
  }

  export type AlarmUncheckedCreateWithoutObLogsInput = {
    id?: string
    triggeredAt: Date | string
    alarmType: string
    priority: number
    status: string
    siteId: string
    aiCall?: AiCallUncheckedCreateNestedOneWithoutAlarmInput
    dispatch?: DispatchUncheckedCreateNestedOneWithoutAlarmInput
  }

  export type AlarmCreateOrConnectWithoutObLogsInput = {
    where: AlarmWhereUniqueInput
    create: XOR<AlarmCreateWithoutObLogsInput, AlarmUncheckedCreateWithoutObLogsInput>
  }

  export type SiteCreateWithoutObLogsInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutSitesInput
    alarms?: AlarmCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutObLogsInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    clientId: string
    alarms?: AlarmUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutObLogsInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutObLogsInput, SiteUncheckedCreateWithoutObLogsInput>
  }

  export type GuardCreateWithoutObLogsInput = {
    id?: string
    name: string
    phone: string
    status: string
    assignedVehicle?: VehicleCreateNestedOneWithoutGuardsInput
    dispatches?: DispatchCreateNestedManyWithoutGuardInput
  }

  export type GuardUncheckedCreateWithoutObLogsInput = {
    id?: string
    name: string
    phone: string
    status: string
    assignedVehicleId?: string | null
    dispatches?: DispatchUncheckedCreateNestedManyWithoutGuardInput
  }

  export type GuardCreateOrConnectWithoutObLogsInput = {
    where: GuardWhereUniqueInput
    create: XOR<GuardCreateWithoutObLogsInput, GuardUncheckedCreateWithoutObLogsInput>
  }

  export type AlarmUpsertWithoutObLogsInput = {
    update: XOR<AlarmUpdateWithoutObLogsInput, AlarmUncheckedUpdateWithoutObLogsInput>
    create: XOR<AlarmCreateWithoutObLogsInput, AlarmUncheckedCreateWithoutObLogsInput>
    where?: AlarmWhereInput
  }

  export type AlarmUpdateToOneWithWhereWithoutObLogsInput = {
    where?: AlarmWhereInput
    data: XOR<AlarmUpdateWithoutObLogsInput, AlarmUncheckedUpdateWithoutObLogsInput>
  }

  export type AlarmUpdateWithoutObLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alarmType?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    site?: SiteUpdateOneRequiredWithoutAlarmsNestedInput
    aiCall?: AiCallUpdateOneWithoutAlarmNestedInput
    dispatch?: DispatchUpdateOneWithoutAlarmNestedInput
  }

  export type AlarmUncheckedUpdateWithoutObLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alarmType?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    aiCall?: AiCallUncheckedUpdateOneWithoutAlarmNestedInput
    dispatch?: DispatchUncheckedUpdateOneWithoutAlarmNestedInput
  }

  export type SiteUpsertWithoutObLogsInput = {
    update: XOR<SiteUpdateWithoutObLogsInput, SiteUncheckedUpdateWithoutObLogsInput>
    create: XOR<SiteCreateWithoutObLogsInput, SiteUncheckedCreateWithoutObLogsInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutObLogsInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutObLogsInput, SiteUncheckedUpdateWithoutObLogsInput>
  }

  export type SiteUpdateWithoutObLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutSitesNestedInput
    alarms?: AlarmUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutObLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    alarms?: AlarmUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type GuardUpsertWithoutObLogsInput = {
    update: XOR<GuardUpdateWithoutObLogsInput, GuardUncheckedUpdateWithoutObLogsInput>
    create: XOR<GuardCreateWithoutObLogsInput, GuardUncheckedCreateWithoutObLogsInput>
    where?: GuardWhereInput
  }

  export type GuardUpdateToOneWithWhereWithoutObLogsInput = {
    where?: GuardWhereInput
    data: XOR<GuardUpdateWithoutObLogsInput, GuardUncheckedUpdateWithoutObLogsInput>
  }

  export type GuardUpdateWithoutObLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedVehicle?: VehicleUpdateOneWithoutGuardsNestedInput
    dispatches?: DispatchUpdateManyWithoutGuardNestedInput
  }

  export type GuardUncheckedUpdateWithoutObLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedVehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    dispatches?: DispatchUncheckedUpdateManyWithoutGuardNestedInput
  }

  export type UserRoleCreateWithoutUsersInput = {
    id?: string
    name: string
  }

  export type UserRoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
  }

  export type UserRoleCreateOrConnectWithoutUsersInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
  }

  export type UserRoleUpsertWithoutUsersInput = {
    update: XOR<UserRoleUpdateWithoutUsersInput, UserRoleUncheckedUpdateWithoutUsersInput>
    create: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
    where?: UserRoleWhereInput
  }

  export type UserRoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: UserRoleWhereInput
    data: XOR<UserRoleUpdateWithoutUsersInput, UserRoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserRoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    roleId?: StringFilter<"User"> | string
  }

  export type DispatchCreateWithoutVehicleInput = {
    id?: string
    dispatchedAt: Date | string
    arrivalTime?: Date | string | null
    resolvedAt?: Date | string | null
    responseNotes?: string | null
    alarm: AlarmCreateNestedOneWithoutDispatchInput
    guard?: GuardCreateNestedOneWithoutDispatchesInput
  }

  export type DispatchUncheckedCreateWithoutVehicleInput = {
    id?: string
    dispatchedAt: Date | string
    arrivalTime?: Date | string | null
    resolvedAt?: Date | string | null
    responseNotes?: string | null
    alarmId: string
    guardId?: string | null
  }

  export type DispatchCreateOrConnectWithoutVehicleInput = {
    where: DispatchWhereUniqueInput
    create: XOR<DispatchCreateWithoutVehicleInput, DispatchUncheckedCreateWithoutVehicleInput>
  }

  export type DispatchCreateManyVehicleInputEnvelope = {
    data: DispatchCreateManyVehicleInput | DispatchCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type GuardCreateWithoutAssignedVehicleInput = {
    id?: string
    name: string
    phone: string
    status: string
    dispatches?: DispatchCreateNestedManyWithoutGuardInput
    obLogs?: ObLogCreateNestedManyWithoutGuardInput
  }

  export type GuardUncheckedCreateWithoutAssignedVehicleInput = {
    id?: string
    name: string
    phone: string
    status: string
    dispatches?: DispatchUncheckedCreateNestedManyWithoutGuardInput
    obLogs?: ObLogUncheckedCreateNestedManyWithoutGuardInput
  }

  export type GuardCreateOrConnectWithoutAssignedVehicleInput = {
    where: GuardWhereUniqueInput
    create: XOR<GuardCreateWithoutAssignedVehicleInput, GuardUncheckedCreateWithoutAssignedVehicleInput>
  }

  export type GuardCreateManyAssignedVehicleInputEnvelope = {
    data: GuardCreateManyAssignedVehicleInput | GuardCreateManyAssignedVehicleInput[]
    skipDuplicates?: boolean
  }

  export type DispatchUpsertWithWhereUniqueWithoutVehicleInput = {
    where: DispatchWhereUniqueInput
    update: XOR<DispatchUpdateWithoutVehicleInput, DispatchUncheckedUpdateWithoutVehicleInput>
    create: XOR<DispatchCreateWithoutVehicleInput, DispatchUncheckedCreateWithoutVehicleInput>
  }

  export type DispatchUpdateWithWhereUniqueWithoutVehicleInput = {
    where: DispatchWhereUniqueInput
    data: XOR<DispatchUpdateWithoutVehicleInput, DispatchUncheckedUpdateWithoutVehicleInput>
  }

  export type DispatchUpdateManyWithWhereWithoutVehicleInput = {
    where: DispatchScalarWhereInput
    data: XOR<DispatchUpdateManyMutationInput, DispatchUncheckedUpdateManyWithoutVehicleInput>
  }

  export type DispatchScalarWhereInput = {
    AND?: DispatchScalarWhereInput | DispatchScalarWhereInput[]
    OR?: DispatchScalarWhereInput[]
    NOT?: DispatchScalarWhereInput | DispatchScalarWhereInput[]
    id?: StringFilter<"Dispatch"> | string
    dispatchedAt?: DateTimeFilter<"Dispatch"> | Date | string
    arrivalTime?: DateTimeNullableFilter<"Dispatch"> | Date | string | null
    resolvedAt?: DateTimeNullableFilter<"Dispatch"> | Date | string | null
    responseNotes?: StringNullableFilter<"Dispatch"> | string | null
    alarmId?: StringFilter<"Dispatch"> | string
    guardId?: StringNullableFilter<"Dispatch"> | string | null
    vehicleId?: StringNullableFilter<"Dispatch"> | string | null
  }

  export type GuardUpsertWithWhereUniqueWithoutAssignedVehicleInput = {
    where: GuardWhereUniqueInput
    update: XOR<GuardUpdateWithoutAssignedVehicleInput, GuardUncheckedUpdateWithoutAssignedVehicleInput>
    create: XOR<GuardCreateWithoutAssignedVehicleInput, GuardUncheckedCreateWithoutAssignedVehicleInput>
  }

  export type GuardUpdateWithWhereUniqueWithoutAssignedVehicleInput = {
    where: GuardWhereUniqueInput
    data: XOR<GuardUpdateWithoutAssignedVehicleInput, GuardUncheckedUpdateWithoutAssignedVehicleInput>
  }

  export type GuardUpdateManyWithWhereWithoutAssignedVehicleInput = {
    where: GuardScalarWhereInput
    data: XOR<GuardUpdateManyMutationInput, GuardUncheckedUpdateManyWithoutAssignedVehicleInput>
  }

  export type GuardScalarWhereInput = {
    AND?: GuardScalarWhereInput | GuardScalarWhereInput[]
    OR?: GuardScalarWhereInput[]
    NOT?: GuardScalarWhereInput | GuardScalarWhereInput[]
    id?: StringFilter<"Guard"> | string
    name?: StringFilter<"Guard"> | string
    phone?: StringFilter<"Guard"> | string
    status?: StringFilter<"Guard"> | string
    assignedVehicleId?: StringNullableFilter<"Guard"> | string | null
  }

  export type VehicleCreateWithoutGuardsInput = {
    id?: string
    plateNumber: string
    description?: string | null
    status: string
    dispatches?: DispatchCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutGuardsInput = {
    id?: string
    plateNumber: string
    description?: string | null
    status: string
    dispatches?: DispatchUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutGuardsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutGuardsInput, VehicleUncheckedCreateWithoutGuardsInput>
  }

  export type DispatchCreateWithoutGuardInput = {
    id?: string
    dispatchedAt: Date | string
    arrivalTime?: Date | string | null
    resolvedAt?: Date | string | null
    responseNotes?: string | null
    alarm: AlarmCreateNestedOneWithoutDispatchInput
    vehicle?: VehicleCreateNestedOneWithoutDispatchesInput
  }

  export type DispatchUncheckedCreateWithoutGuardInput = {
    id?: string
    dispatchedAt: Date | string
    arrivalTime?: Date | string | null
    resolvedAt?: Date | string | null
    responseNotes?: string | null
    alarmId: string
    vehicleId?: string | null
  }

  export type DispatchCreateOrConnectWithoutGuardInput = {
    where: DispatchWhereUniqueInput
    create: XOR<DispatchCreateWithoutGuardInput, DispatchUncheckedCreateWithoutGuardInput>
  }

  export type DispatchCreateManyGuardInputEnvelope = {
    data: DispatchCreateManyGuardInput | DispatchCreateManyGuardInput[]
    skipDuplicates?: boolean
  }

  export type ObLogCreateWithoutGuardInput = {
    id?: string
    logTime: Date | string
    message: string
    source: string
    alarm?: AlarmCreateNestedOneWithoutObLogsInput
    site?: SiteCreateNestedOneWithoutObLogsInput
  }

  export type ObLogUncheckedCreateWithoutGuardInput = {
    id?: string
    logTime: Date | string
    message: string
    source: string
    alarmId?: string | null
    siteId?: string | null
  }

  export type ObLogCreateOrConnectWithoutGuardInput = {
    where: ObLogWhereUniqueInput
    create: XOR<ObLogCreateWithoutGuardInput, ObLogUncheckedCreateWithoutGuardInput>
  }

  export type ObLogCreateManyGuardInputEnvelope = {
    data: ObLogCreateManyGuardInput | ObLogCreateManyGuardInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithoutGuardsInput = {
    update: XOR<VehicleUpdateWithoutGuardsInput, VehicleUncheckedUpdateWithoutGuardsInput>
    create: XOR<VehicleCreateWithoutGuardsInput, VehicleUncheckedCreateWithoutGuardsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutGuardsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutGuardsInput, VehicleUncheckedUpdateWithoutGuardsInput>
  }

  export type VehicleUpdateWithoutGuardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    dispatches?: DispatchUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutGuardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    dispatches?: DispatchUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type DispatchUpsertWithWhereUniqueWithoutGuardInput = {
    where: DispatchWhereUniqueInput
    update: XOR<DispatchUpdateWithoutGuardInput, DispatchUncheckedUpdateWithoutGuardInput>
    create: XOR<DispatchCreateWithoutGuardInput, DispatchUncheckedCreateWithoutGuardInput>
  }

  export type DispatchUpdateWithWhereUniqueWithoutGuardInput = {
    where: DispatchWhereUniqueInput
    data: XOR<DispatchUpdateWithoutGuardInput, DispatchUncheckedUpdateWithoutGuardInput>
  }

  export type DispatchUpdateManyWithWhereWithoutGuardInput = {
    where: DispatchScalarWhereInput
    data: XOR<DispatchUpdateManyMutationInput, DispatchUncheckedUpdateManyWithoutGuardInput>
  }

  export type ObLogUpsertWithWhereUniqueWithoutGuardInput = {
    where: ObLogWhereUniqueInput
    update: XOR<ObLogUpdateWithoutGuardInput, ObLogUncheckedUpdateWithoutGuardInput>
    create: XOR<ObLogCreateWithoutGuardInput, ObLogUncheckedCreateWithoutGuardInput>
  }

  export type ObLogUpdateWithWhereUniqueWithoutGuardInput = {
    where: ObLogWhereUniqueInput
    data: XOR<ObLogUpdateWithoutGuardInput, ObLogUncheckedUpdateWithoutGuardInput>
  }

  export type ObLogUpdateManyWithWhereWithoutGuardInput = {
    where: ObLogScalarWhereInput
    data: XOR<ObLogUpdateManyMutationInput, ObLogUncheckedUpdateManyWithoutGuardInput>
  }

  export type SiteCreateManyClientInput = {
    id?: string
    name: string
    address: string
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
  }

  export type SiteUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alarms?: AlarmUpdateManyWithoutSiteNestedInput
    obLogs?: ObLogUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alarms?: AlarmUncheckedUpdateManyWithoutSiteNestedInput
    obLogs?: ObLogUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmCreateManySiteInput = {
    id?: string
    triggeredAt: Date | string
    alarmType: string
    priority: number
    status: string
  }

  export type ObLogCreateManySiteInput = {
    id?: string
    logTime: Date | string
    message: string
    source: string
    alarmId?: string | null
    guardId?: string | null
  }

  export type AlarmUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alarmType?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    aiCall?: AiCallUpdateOneWithoutAlarmNestedInput
    dispatch?: DispatchUpdateOneWithoutAlarmNestedInput
    obLogs?: ObLogUpdateManyWithoutAlarmNestedInput
  }

  export type AlarmUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alarmType?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    aiCall?: AiCallUncheckedUpdateOneWithoutAlarmNestedInput
    dispatch?: DispatchUncheckedUpdateOneWithoutAlarmNestedInput
    obLogs?: ObLogUncheckedUpdateManyWithoutAlarmNestedInput
  }

  export type AlarmUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alarmType?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ObLogUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    alarm?: AlarmUpdateOneWithoutObLogsNestedInput
    guard?: GuardUpdateOneWithoutObLogsNestedInput
  }

  export type ObLogUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    alarmId?: NullableStringFieldUpdateOperationsInput | string | null
    guardId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ObLogUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    alarmId?: NullableStringFieldUpdateOperationsInput | string | null
    guardId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ObLogCreateManyAlarmInput = {
    id?: string
    logTime: Date | string
    message: string
    source: string
    siteId?: string | null
    guardId?: string | null
  }

  export type ObLogUpdateWithoutAlarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    site?: SiteUpdateOneWithoutObLogsNestedInput
    guard?: GuardUpdateOneWithoutObLogsNestedInput
  }

  export type ObLogUncheckedUpdateWithoutAlarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
    guardId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ObLogUncheckedUpdateManyWithoutAlarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
    guardId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyRoleInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DispatchCreateManyVehicleInput = {
    id?: string
    dispatchedAt: Date | string
    arrivalTime?: Date | string | null
    resolvedAt?: Date | string | null
    responseNotes?: string | null
    alarmId: string
    guardId?: string | null
  }

  export type GuardCreateManyAssignedVehicleInput = {
    id?: string
    name: string
    phone: string
    status: string
  }

  export type DispatchUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNotes?: NullableStringFieldUpdateOperationsInput | string | null
    alarm?: AlarmUpdateOneRequiredWithoutDispatchNestedInput
    guard?: GuardUpdateOneWithoutDispatchesNestedInput
  }

  export type DispatchUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNotes?: NullableStringFieldUpdateOperationsInput | string | null
    alarmId?: StringFieldUpdateOperationsInput | string
    guardId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispatchUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNotes?: NullableStringFieldUpdateOperationsInput | string | null
    alarmId?: StringFieldUpdateOperationsInput | string
    guardId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuardUpdateWithoutAssignedVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dispatches?: DispatchUpdateManyWithoutGuardNestedInput
    obLogs?: ObLogUpdateManyWithoutGuardNestedInput
  }

  export type GuardUncheckedUpdateWithoutAssignedVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dispatches?: DispatchUncheckedUpdateManyWithoutGuardNestedInput
    obLogs?: ObLogUncheckedUpdateManyWithoutGuardNestedInput
  }

  export type GuardUncheckedUpdateManyWithoutAssignedVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type DispatchCreateManyGuardInput = {
    id?: string
    dispatchedAt: Date | string
    arrivalTime?: Date | string | null
    resolvedAt?: Date | string | null
    responseNotes?: string | null
    alarmId: string
    vehicleId?: string | null
  }

  export type ObLogCreateManyGuardInput = {
    id?: string
    logTime: Date | string
    message: string
    source: string
    alarmId?: string | null
    siteId?: string | null
  }

  export type DispatchUpdateWithoutGuardInput = {
    id?: StringFieldUpdateOperationsInput | string
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNotes?: NullableStringFieldUpdateOperationsInput | string | null
    alarm?: AlarmUpdateOneRequiredWithoutDispatchNestedInput
    vehicle?: VehicleUpdateOneWithoutDispatchesNestedInput
  }

  export type DispatchUncheckedUpdateWithoutGuardInput = {
    id?: StringFieldUpdateOperationsInput | string
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNotes?: NullableStringFieldUpdateOperationsInput | string | null
    alarmId?: StringFieldUpdateOperationsInput | string
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispatchUncheckedUpdateManyWithoutGuardInput = {
    id?: StringFieldUpdateOperationsInput | string
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNotes?: NullableStringFieldUpdateOperationsInput | string | null
    alarmId?: StringFieldUpdateOperationsInput | string
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ObLogUpdateWithoutGuardInput = {
    id?: StringFieldUpdateOperationsInput | string
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    alarm?: AlarmUpdateOneWithoutObLogsNestedInput
    site?: SiteUpdateOneWithoutObLogsNestedInput
  }

  export type ObLogUncheckedUpdateWithoutGuardInput = {
    id?: StringFieldUpdateOperationsInput | string
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    alarmId?: NullableStringFieldUpdateOperationsInput | string | null
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ObLogUncheckedUpdateManyWithoutGuardInput = {
    id?: StringFieldUpdateOperationsInput | string
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    alarmId?: NullableStringFieldUpdateOperationsInput | string | null
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}