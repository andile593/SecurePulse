
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Transmitter
 * 
 */
export type Transmitter = $Result.DefaultSelection<Prisma.$TransmitterPayload>
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
 * Model OBLog
 * 
 */
export type OBLog = $Result.DefaultSelection<Prisma.$OBLogPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
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
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Clients
 * const clients = await prisma.client.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
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
   * `prisma.transmitter`: Exposes CRUD operations for the **Transmitter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transmitters
    * const transmitters = await prisma.transmitter.findMany()
    * ```
    */
  get transmitter(): Prisma.TransmitterDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.oBLog`: Exposes CRUD operations for the **OBLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OBLogs
    * const oBLogs = await prisma.oBLog.findMany()
    * ```
    */
  get oBLog(): Prisma.OBLogDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Transmitter: 'Transmitter',
    Alarm: 'Alarm',
    AiCall: 'AiCall',
    Dispatch: 'Dispatch',
    OBLog: 'OBLog',
    User: 'User',
    Role: 'Role',
    Vehicle: 'Vehicle',
    Guard: 'Guard'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "client" | "site" | "transmitter" | "alarm" | "aiCall" | "dispatch" | "oBLog" | "user" | "role" | "vehicle" | "guard"
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
      Transmitter: {
        payload: Prisma.$TransmitterPayload<ExtArgs>
        fields: Prisma.TransmitterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransmitterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransmitterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransmitterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransmitterPayload>
          }
          findFirst: {
            args: Prisma.TransmitterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransmitterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransmitterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransmitterPayload>
          }
          findMany: {
            args: Prisma.TransmitterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransmitterPayload>[]
          }
          create: {
            args: Prisma.TransmitterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransmitterPayload>
          }
          createMany: {
            args: Prisma.TransmitterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransmitterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransmitterPayload>[]
          }
          delete: {
            args: Prisma.TransmitterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransmitterPayload>
          }
          update: {
            args: Prisma.TransmitterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransmitterPayload>
          }
          deleteMany: {
            args: Prisma.TransmitterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransmitterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransmitterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransmitterPayload>[]
          }
          upsert: {
            args: Prisma.TransmitterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransmitterPayload>
          }
          aggregate: {
            args: Prisma.TransmitterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransmitter>
          }
          groupBy: {
            args: Prisma.TransmitterGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransmitterGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransmitterCountArgs<ExtArgs>
            result: $Utils.Optional<TransmitterCountAggregateOutputType> | number
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
      OBLog: {
        payload: Prisma.$OBLogPayload<ExtArgs>
        fields: Prisma.OBLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OBLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OBLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OBLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OBLogPayload>
          }
          findFirst: {
            args: Prisma.OBLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OBLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OBLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OBLogPayload>
          }
          findMany: {
            args: Prisma.OBLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OBLogPayload>[]
          }
          create: {
            args: Prisma.OBLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OBLogPayload>
          }
          createMany: {
            args: Prisma.OBLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OBLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OBLogPayload>[]
          }
          delete: {
            args: Prisma.OBLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OBLogPayload>
          }
          update: {
            args: Prisma.OBLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OBLogPayload>
          }
          deleteMany: {
            args: Prisma.OBLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OBLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OBLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OBLogPayload>[]
          }
          upsert: {
            args: Prisma.OBLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OBLogPayload>
          }
          aggregate: {
            args: Prisma.OBLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOBLog>
          }
          groupBy: {
            args: Prisma.OBLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<OBLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.OBLogCountArgs<ExtArgs>
            result: $Utils.Optional<OBLogCountAggregateOutputType> | number
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
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    client?: ClientOmit
    site?: SiteOmit
    transmitter?: TransmitterOmit
    alarm?: AlarmOmit
    aiCall?: AiCallOmit
    dispatch?: DispatchOmit
    oBLog?: OBLogOmit
    user?: UserOmit
    role?: RoleOmit
    vehicle?: VehicleOmit
    guard?: GuardOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    transmitters: number
    OBLogs: number
  }

  export type SiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transmitters?: boolean | SiteCountOutputTypeCountTransmittersArgs
    OBLogs?: boolean | SiteCountOutputTypeCountOBLogsArgs
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
  export type SiteCountOutputTypeCountTransmittersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransmitterWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountOBLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OBLogWhereInput
  }


  /**
   * Count Type TransmitterCountOutputType
   */

  export type TransmitterCountOutputType = {
    alarms: number
  }

  export type TransmitterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alarms?: boolean | TransmitterCountOutputTypeCountAlarmsArgs
  }

  // Custom InputTypes
  /**
   * TransmitterCountOutputType without action
   */
  export type TransmitterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransmitterCountOutputType
     */
    select?: TransmitterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransmitterCountOutputType without action
   */
  export type TransmitterCountOutputTypeCountAlarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlarmWhereInput
  }


  /**
   * Count Type AlarmCountOutputType
   */

  export type AlarmCountOutputType = {
    aiCalls: number
  }

  export type AlarmCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiCalls?: boolean | AlarmCountOutputTypeCountAiCallsArgs
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
  export type AlarmCountOutputTypeCountAiCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiCallWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    OBLogs: number
  }

  export type GuardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispatches?: boolean | GuardCountOutputTypeCountDispatchesArgs
    OBLogs?: boolean | GuardCountOutputTypeCountOBLogsArgs
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
  export type GuardCountOutputTypeCountOBLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OBLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    shortId: number | null
  }

  export type ClientSumAggregateOutputType = {
    shortId: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    shortId: number | null
    surname: string | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    shortId: number | null
    surname: string | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    shortId: number
    surname: number
    name: number
    email: number
    phone: number
    createdAt: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    shortId?: true
  }

  export type ClientSumAggregateInputType = {
    shortId?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    shortId?: true
    surname?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    shortId?: true
    surname?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    shortId?: true
    surname?: true
    name?: true
    email?: true
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
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
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
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    shortId: number
    surname: string
    name: string
    email: string
    phone: string
    createdAt: Date
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
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
    shortId?: boolean
    surname?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    sites?: boolean | Client$sitesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    surname?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    surname?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    shortId?: boolean
    surname?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shortId" | "surname" | "name" | "email" | "phone" | "createdAt", ExtArgs["result"]["client"]>
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
      shortId: number
      surname: string
      name: string
      email: string
      phone: string
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
    readonly shortId: FieldRef<"Client", 'Int'>
    readonly surname: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
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
    shortId: number | null
  }

  export type SiteSumAggregateOutputType = {
    shortId: number | null
  }

  export type SiteMinAggregateOutputType = {
    id: string | null
    shortId: number | null
    name: string | null
    address: string | null
    clientId: string | null
  }

  export type SiteMaxAggregateOutputType = {
    id: string | null
    shortId: number | null
    name: string | null
    address: string | null
    clientId: string | null
  }

  export type SiteCountAggregateOutputType = {
    id: number
    shortId: number
    name: number
    address: number
    clientId: number
    _all: number
  }


  export type SiteAvgAggregateInputType = {
    shortId?: true
  }

  export type SiteSumAggregateInputType = {
    shortId?: true
  }

  export type SiteMinAggregateInputType = {
    id?: true
    shortId?: true
    name?: true
    address?: true
    clientId?: true
  }

  export type SiteMaxAggregateInputType = {
    id?: true
    shortId?: true
    name?: true
    address?: true
    clientId?: true
  }

  export type SiteCountAggregateInputType = {
    id?: true
    shortId?: true
    name?: true
    address?: true
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
    shortId: number
    name: string
    address: string
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
    shortId?: boolean
    name?: boolean
    address?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    transmitters?: boolean | Site$transmittersArgs<ExtArgs>
    OBLogs?: boolean | Site$OBLogsArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    name?: boolean
    address?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    name?: boolean
    address?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectScalar = {
    id?: boolean
    shortId?: boolean
    name?: boolean
    address?: boolean
    clientId?: boolean
  }

  export type SiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shortId" | "name" | "address" | "clientId", ExtArgs["result"]["site"]>
  export type SiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    transmitters?: boolean | Site$transmittersArgs<ExtArgs>
    OBLogs?: boolean | Site$OBLogsArgs<ExtArgs>
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
      transmitters: Prisma.$TransmitterPayload<ExtArgs>[]
      OBLogs: Prisma.$OBLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shortId: number
      name: string
      address: string
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
    transmitters<T extends Site$transmittersArgs<ExtArgs> = {}>(args?: Subset<T, Site$transmittersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransmitterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OBLogs<T extends Site$OBLogsArgs<ExtArgs> = {}>(args?: Subset<T, Site$OBLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OBLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly shortId: FieldRef<"Site", 'Int'>
    readonly name: FieldRef<"Site", 'String'>
    readonly address: FieldRef<"Site", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
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
   * Site.transmitters
   */
  export type Site$transmittersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transmitter
     */
    select?: TransmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transmitter
     */
    omit?: TransmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransmitterInclude<ExtArgs> | null
    where?: TransmitterWhereInput
    orderBy?: TransmitterOrderByWithRelationInput | TransmitterOrderByWithRelationInput[]
    cursor?: TransmitterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransmitterScalarFieldEnum | TransmitterScalarFieldEnum[]
  }

  /**
   * Site.OBLogs
   */
  export type Site$OBLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OBLog
     */
    select?: OBLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OBLog
     */
    omit?: OBLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OBLogInclude<ExtArgs> | null
    where?: OBLogWhereInput
    orderBy?: OBLogOrderByWithRelationInput | OBLogOrderByWithRelationInput[]
    cursor?: OBLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OBLogScalarFieldEnum | OBLogScalarFieldEnum[]
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
   * Model Transmitter
   */

  export type AggregateTransmitter = {
    _count: TransmitterCountAggregateOutputType | null
    _min: TransmitterMinAggregateOutputType | null
    _max: TransmitterMaxAggregateOutputType | null
  }

  export type TransmitterMinAggregateOutputType = {
    id: string | null
    referenceCode: string | null
    siteId: string | null
  }

  export type TransmitterMaxAggregateOutputType = {
    id: string | null
    referenceCode: string | null
    siteId: string | null
  }

  export type TransmitterCountAggregateOutputType = {
    id: number
    referenceCode: number
    siteId: number
    _all: number
  }


  export type TransmitterMinAggregateInputType = {
    id?: true
    referenceCode?: true
    siteId?: true
  }

  export type TransmitterMaxAggregateInputType = {
    id?: true
    referenceCode?: true
    siteId?: true
  }

  export type TransmitterCountAggregateInputType = {
    id?: true
    referenceCode?: true
    siteId?: true
    _all?: true
  }

  export type TransmitterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transmitter to aggregate.
     */
    where?: TransmitterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transmitters to fetch.
     */
    orderBy?: TransmitterOrderByWithRelationInput | TransmitterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransmitterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transmitters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transmitters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transmitters
    **/
    _count?: true | TransmitterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransmitterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransmitterMaxAggregateInputType
  }

  export type GetTransmitterAggregateType<T extends TransmitterAggregateArgs> = {
        [P in keyof T & keyof AggregateTransmitter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransmitter[P]>
      : GetScalarType<T[P], AggregateTransmitter[P]>
  }




  export type TransmitterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransmitterWhereInput
    orderBy?: TransmitterOrderByWithAggregationInput | TransmitterOrderByWithAggregationInput[]
    by: TransmitterScalarFieldEnum[] | TransmitterScalarFieldEnum
    having?: TransmitterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransmitterCountAggregateInputType | true
    _min?: TransmitterMinAggregateInputType
    _max?: TransmitterMaxAggregateInputType
  }

  export type TransmitterGroupByOutputType = {
    id: string
    referenceCode: string
    siteId: string
    _count: TransmitterCountAggregateOutputType | null
    _min: TransmitterMinAggregateOutputType | null
    _max: TransmitterMaxAggregateOutputType | null
  }

  type GetTransmitterGroupByPayload<T extends TransmitterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransmitterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransmitterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransmitterGroupByOutputType[P]>
            : GetScalarType<T[P], TransmitterGroupByOutputType[P]>
        }
      >
    >


  export type TransmitterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceCode?: boolean
    siteId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    alarms?: boolean | Transmitter$alarmsArgs<ExtArgs>
    _count?: boolean | TransmitterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transmitter"]>

  export type TransmitterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceCode?: boolean
    siteId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transmitter"]>

  export type TransmitterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceCode?: boolean
    siteId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transmitter"]>

  export type TransmitterSelectScalar = {
    id?: boolean
    referenceCode?: boolean
    siteId?: boolean
  }

  export type TransmitterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referenceCode" | "siteId", ExtArgs["result"]["transmitter"]>
  export type TransmitterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    alarms?: boolean | Transmitter$alarmsArgs<ExtArgs>
    _count?: boolean | TransmitterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransmitterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }
  export type TransmitterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }

  export type $TransmitterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transmitter"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      alarms: Prisma.$AlarmPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referenceCode: string
      siteId: string
    }, ExtArgs["result"]["transmitter"]>
    composites: {}
  }

  type TransmitterGetPayload<S extends boolean | null | undefined | TransmitterDefaultArgs> = $Result.GetResult<Prisma.$TransmitterPayload, S>

  type TransmitterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransmitterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransmitterCountAggregateInputType | true
    }

  export interface TransmitterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transmitter'], meta: { name: 'Transmitter' } }
    /**
     * Find zero or one Transmitter that matches the filter.
     * @param {TransmitterFindUniqueArgs} args - Arguments to find a Transmitter
     * @example
     * // Get one Transmitter
     * const transmitter = await prisma.transmitter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransmitterFindUniqueArgs>(args: SelectSubset<T, TransmitterFindUniqueArgs<ExtArgs>>): Prisma__TransmitterClient<$Result.GetResult<Prisma.$TransmitterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transmitter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransmitterFindUniqueOrThrowArgs} args - Arguments to find a Transmitter
     * @example
     * // Get one Transmitter
     * const transmitter = await prisma.transmitter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransmitterFindUniqueOrThrowArgs>(args: SelectSubset<T, TransmitterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransmitterClient<$Result.GetResult<Prisma.$TransmitterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transmitter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransmitterFindFirstArgs} args - Arguments to find a Transmitter
     * @example
     * // Get one Transmitter
     * const transmitter = await prisma.transmitter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransmitterFindFirstArgs>(args?: SelectSubset<T, TransmitterFindFirstArgs<ExtArgs>>): Prisma__TransmitterClient<$Result.GetResult<Prisma.$TransmitterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transmitter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransmitterFindFirstOrThrowArgs} args - Arguments to find a Transmitter
     * @example
     * // Get one Transmitter
     * const transmitter = await prisma.transmitter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransmitterFindFirstOrThrowArgs>(args?: SelectSubset<T, TransmitterFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransmitterClient<$Result.GetResult<Prisma.$TransmitterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transmitters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransmitterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transmitters
     * const transmitters = await prisma.transmitter.findMany()
     * 
     * // Get first 10 Transmitters
     * const transmitters = await prisma.transmitter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transmitterWithIdOnly = await prisma.transmitter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransmitterFindManyArgs>(args?: SelectSubset<T, TransmitterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransmitterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transmitter.
     * @param {TransmitterCreateArgs} args - Arguments to create a Transmitter.
     * @example
     * // Create one Transmitter
     * const Transmitter = await prisma.transmitter.create({
     *   data: {
     *     // ... data to create a Transmitter
     *   }
     * })
     * 
     */
    create<T extends TransmitterCreateArgs>(args: SelectSubset<T, TransmitterCreateArgs<ExtArgs>>): Prisma__TransmitterClient<$Result.GetResult<Prisma.$TransmitterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transmitters.
     * @param {TransmitterCreateManyArgs} args - Arguments to create many Transmitters.
     * @example
     * // Create many Transmitters
     * const transmitter = await prisma.transmitter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransmitterCreateManyArgs>(args?: SelectSubset<T, TransmitterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transmitters and returns the data saved in the database.
     * @param {TransmitterCreateManyAndReturnArgs} args - Arguments to create many Transmitters.
     * @example
     * // Create many Transmitters
     * const transmitter = await prisma.transmitter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transmitters and only return the `id`
     * const transmitterWithIdOnly = await prisma.transmitter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransmitterCreateManyAndReturnArgs>(args?: SelectSubset<T, TransmitterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransmitterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transmitter.
     * @param {TransmitterDeleteArgs} args - Arguments to delete one Transmitter.
     * @example
     * // Delete one Transmitter
     * const Transmitter = await prisma.transmitter.delete({
     *   where: {
     *     // ... filter to delete one Transmitter
     *   }
     * })
     * 
     */
    delete<T extends TransmitterDeleteArgs>(args: SelectSubset<T, TransmitterDeleteArgs<ExtArgs>>): Prisma__TransmitterClient<$Result.GetResult<Prisma.$TransmitterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transmitter.
     * @param {TransmitterUpdateArgs} args - Arguments to update one Transmitter.
     * @example
     * // Update one Transmitter
     * const transmitter = await prisma.transmitter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransmitterUpdateArgs>(args: SelectSubset<T, TransmitterUpdateArgs<ExtArgs>>): Prisma__TransmitterClient<$Result.GetResult<Prisma.$TransmitterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transmitters.
     * @param {TransmitterDeleteManyArgs} args - Arguments to filter Transmitters to delete.
     * @example
     * // Delete a few Transmitters
     * const { count } = await prisma.transmitter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransmitterDeleteManyArgs>(args?: SelectSubset<T, TransmitterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transmitters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransmitterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transmitters
     * const transmitter = await prisma.transmitter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransmitterUpdateManyArgs>(args: SelectSubset<T, TransmitterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transmitters and returns the data updated in the database.
     * @param {TransmitterUpdateManyAndReturnArgs} args - Arguments to update many Transmitters.
     * @example
     * // Update many Transmitters
     * const transmitter = await prisma.transmitter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transmitters and only return the `id`
     * const transmitterWithIdOnly = await prisma.transmitter.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransmitterUpdateManyAndReturnArgs>(args: SelectSubset<T, TransmitterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransmitterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transmitter.
     * @param {TransmitterUpsertArgs} args - Arguments to update or create a Transmitter.
     * @example
     * // Update or create a Transmitter
     * const transmitter = await prisma.transmitter.upsert({
     *   create: {
     *     // ... data to create a Transmitter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transmitter we want to update
     *   }
     * })
     */
    upsert<T extends TransmitterUpsertArgs>(args: SelectSubset<T, TransmitterUpsertArgs<ExtArgs>>): Prisma__TransmitterClient<$Result.GetResult<Prisma.$TransmitterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transmitters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransmitterCountArgs} args - Arguments to filter Transmitters to count.
     * @example
     * // Count the number of Transmitters
     * const count = await prisma.transmitter.count({
     *   where: {
     *     // ... the filter for the Transmitters we want to count
     *   }
     * })
    **/
    count<T extends TransmitterCountArgs>(
      args?: Subset<T, TransmitterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransmitterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transmitter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransmitterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransmitterAggregateArgs>(args: Subset<T, TransmitterAggregateArgs>): Prisma.PrismaPromise<GetTransmitterAggregateType<T>>

    /**
     * Group by Transmitter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransmitterGroupByArgs} args - Group by arguments.
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
      T extends TransmitterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransmitterGroupByArgs['orderBy'] }
        : { orderBy?: TransmitterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransmitterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransmitterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transmitter model
   */
  readonly fields: TransmitterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transmitter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransmitterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    alarms<T extends Transmitter$alarmsArgs<ExtArgs> = {}>(args?: Subset<T, Transmitter$alarmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Transmitter model
   */
  interface TransmitterFieldRefs {
    readonly id: FieldRef<"Transmitter", 'String'>
    readonly referenceCode: FieldRef<"Transmitter", 'String'>
    readonly siteId: FieldRef<"Transmitter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transmitter findUnique
   */
  export type TransmitterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transmitter
     */
    select?: TransmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transmitter
     */
    omit?: TransmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransmitterInclude<ExtArgs> | null
    /**
     * Filter, which Transmitter to fetch.
     */
    where: TransmitterWhereUniqueInput
  }

  /**
   * Transmitter findUniqueOrThrow
   */
  export type TransmitterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transmitter
     */
    select?: TransmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transmitter
     */
    omit?: TransmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransmitterInclude<ExtArgs> | null
    /**
     * Filter, which Transmitter to fetch.
     */
    where: TransmitterWhereUniqueInput
  }

  /**
   * Transmitter findFirst
   */
  export type TransmitterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transmitter
     */
    select?: TransmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transmitter
     */
    omit?: TransmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransmitterInclude<ExtArgs> | null
    /**
     * Filter, which Transmitter to fetch.
     */
    where?: TransmitterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transmitters to fetch.
     */
    orderBy?: TransmitterOrderByWithRelationInput | TransmitterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transmitters.
     */
    cursor?: TransmitterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transmitters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transmitters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transmitters.
     */
    distinct?: TransmitterScalarFieldEnum | TransmitterScalarFieldEnum[]
  }

  /**
   * Transmitter findFirstOrThrow
   */
  export type TransmitterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transmitter
     */
    select?: TransmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transmitter
     */
    omit?: TransmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransmitterInclude<ExtArgs> | null
    /**
     * Filter, which Transmitter to fetch.
     */
    where?: TransmitterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transmitters to fetch.
     */
    orderBy?: TransmitterOrderByWithRelationInput | TransmitterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transmitters.
     */
    cursor?: TransmitterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transmitters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transmitters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transmitters.
     */
    distinct?: TransmitterScalarFieldEnum | TransmitterScalarFieldEnum[]
  }

  /**
   * Transmitter findMany
   */
  export type TransmitterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transmitter
     */
    select?: TransmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transmitter
     */
    omit?: TransmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransmitterInclude<ExtArgs> | null
    /**
     * Filter, which Transmitters to fetch.
     */
    where?: TransmitterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transmitters to fetch.
     */
    orderBy?: TransmitterOrderByWithRelationInput | TransmitterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transmitters.
     */
    cursor?: TransmitterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transmitters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transmitters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transmitters.
     */
    distinct?: TransmitterScalarFieldEnum | TransmitterScalarFieldEnum[]
  }

  /**
   * Transmitter create
   */
  export type TransmitterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transmitter
     */
    select?: TransmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transmitter
     */
    omit?: TransmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransmitterInclude<ExtArgs> | null
    /**
     * The data needed to create a Transmitter.
     */
    data: XOR<TransmitterCreateInput, TransmitterUncheckedCreateInput>
  }

  /**
   * Transmitter createMany
   */
  export type TransmitterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transmitters.
     */
    data: TransmitterCreateManyInput | TransmitterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transmitter createManyAndReturn
   */
  export type TransmitterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transmitter
     */
    select?: TransmitterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transmitter
     */
    omit?: TransmitterOmit<ExtArgs> | null
    /**
     * The data used to create many Transmitters.
     */
    data: TransmitterCreateManyInput | TransmitterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransmitterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transmitter update
   */
  export type TransmitterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transmitter
     */
    select?: TransmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transmitter
     */
    omit?: TransmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransmitterInclude<ExtArgs> | null
    /**
     * The data needed to update a Transmitter.
     */
    data: XOR<TransmitterUpdateInput, TransmitterUncheckedUpdateInput>
    /**
     * Choose, which Transmitter to update.
     */
    where: TransmitterWhereUniqueInput
  }

  /**
   * Transmitter updateMany
   */
  export type TransmitterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transmitters.
     */
    data: XOR<TransmitterUpdateManyMutationInput, TransmitterUncheckedUpdateManyInput>
    /**
     * Filter which Transmitters to update
     */
    where?: TransmitterWhereInput
    /**
     * Limit how many Transmitters to update.
     */
    limit?: number
  }

  /**
   * Transmitter updateManyAndReturn
   */
  export type TransmitterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transmitter
     */
    select?: TransmitterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transmitter
     */
    omit?: TransmitterOmit<ExtArgs> | null
    /**
     * The data used to update Transmitters.
     */
    data: XOR<TransmitterUpdateManyMutationInput, TransmitterUncheckedUpdateManyInput>
    /**
     * Filter which Transmitters to update
     */
    where?: TransmitterWhereInput
    /**
     * Limit how many Transmitters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransmitterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transmitter upsert
   */
  export type TransmitterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transmitter
     */
    select?: TransmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transmitter
     */
    omit?: TransmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransmitterInclude<ExtArgs> | null
    /**
     * The filter to search for the Transmitter to update in case it exists.
     */
    where: TransmitterWhereUniqueInput
    /**
     * In case the Transmitter found by the `where` argument doesn't exist, create a new Transmitter with this data.
     */
    create: XOR<TransmitterCreateInput, TransmitterUncheckedCreateInput>
    /**
     * In case the Transmitter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransmitterUpdateInput, TransmitterUncheckedUpdateInput>
  }

  /**
   * Transmitter delete
   */
  export type TransmitterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transmitter
     */
    select?: TransmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transmitter
     */
    omit?: TransmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransmitterInclude<ExtArgs> | null
    /**
     * Filter which Transmitter to delete.
     */
    where: TransmitterWhereUniqueInput
  }

  /**
   * Transmitter deleteMany
   */
  export type TransmitterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transmitters to delete
     */
    where?: TransmitterWhereInput
    /**
     * Limit how many Transmitters to delete.
     */
    limit?: number
  }

  /**
   * Transmitter.alarms
   */
  export type Transmitter$alarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Transmitter without action
   */
  export type TransmitterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transmitter
     */
    select?: TransmitterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transmitter
     */
    omit?: TransmitterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransmitterInclude<ExtArgs> | null
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
    shortId: number | null
  }

  export type AlarmSumAggregateOutputType = {
    shortId: number | null
  }

  export type AlarmMinAggregateOutputType = {
    id: string | null
    shortId: number | null
    triggeredAt: Date | null
    eventType: string | null
    source: string | null
    transmitterId: string | null
    status: string | null
  }

  export type AlarmMaxAggregateOutputType = {
    id: string | null
    shortId: number | null
    triggeredAt: Date | null
    eventType: string | null
    source: string | null
    transmitterId: string | null
    status: string | null
  }

  export type AlarmCountAggregateOutputType = {
    id: number
    shortId: number
    triggeredAt: number
    eventType: number
    source: number
    transmitterId: number
    status: number
    _all: number
  }


  export type AlarmAvgAggregateInputType = {
    shortId?: true
  }

  export type AlarmSumAggregateInputType = {
    shortId?: true
  }

  export type AlarmMinAggregateInputType = {
    id?: true
    shortId?: true
    triggeredAt?: true
    eventType?: true
    source?: true
    transmitterId?: true
    status?: true
  }

  export type AlarmMaxAggregateInputType = {
    id?: true
    shortId?: true
    triggeredAt?: true
    eventType?: true
    source?: true
    transmitterId?: true
    status?: true
  }

  export type AlarmCountAggregateInputType = {
    id?: true
    shortId?: true
    triggeredAt?: true
    eventType?: true
    source?: true
    transmitterId?: true
    status?: true
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
    shortId: number
    triggeredAt: Date
    eventType: string
    source: string
    transmitterId: string
    status: string
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
    shortId?: boolean
    triggeredAt?: boolean
    eventType?: boolean
    source?: boolean
    transmitterId?: boolean
    status?: boolean
    transmitter?: boolean | TransmitterDefaultArgs<ExtArgs>
    aiCalls?: boolean | Alarm$aiCallsArgs<ExtArgs>
    dispatch?: boolean | Alarm$dispatchArgs<ExtArgs>
    _count?: boolean | AlarmCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alarm"]>

  export type AlarmSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    triggeredAt?: boolean
    eventType?: boolean
    source?: boolean
    transmitterId?: boolean
    status?: boolean
    transmitter?: boolean | TransmitterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alarm"]>

  export type AlarmSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    triggeredAt?: boolean
    eventType?: boolean
    source?: boolean
    transmitterId?: boolean
    status?: boolean
    transmitter?: boolean | TransmitterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alarm"]>

  export type AlarmSelectScalar = {
    id?: boolean
    shortId?: boolean
    triggeredAt?: boolean
    eventType?: boolean
    source?: boolean
    transmitterId?: boolean
    status?: boolean
  }

  export type AlarmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shortId" | "triggeredAt" | "eventType" | "source" | "transmitterId" | "status", ExtArgs["result"]["alarm"]>
  export type AlarmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transmitter?: boolean | TransmitterDefaultArgs<ExtArgs>
    aiCalls?: boolean | Alarm$aiCallsArgs<ExtArgs>
    dispatch?: boolean | Alarm$dispatchArgs<ExtArgs>
    _count?: boolean | AlarmCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlarmIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transmitter?: boolean | TransmitterDefaultArgs<ExtArgs>
  }
  export type AlarmIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transmitter?: boolean | TransmitterDefaultArgs<ExtArgs>
  }

  export type $AlarmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alarm"
    objects: {
      transmitter: Prisma.$TransmitterPayload<ExtArgs>
      aiCalls: Prisma.$AiCallPayload<ExtArgs>[]
      dispatch: Prisma.$DispatchPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shortId: number
      triggeredAt: Date
      eventType: string
      source: string
      transmitterId: string
      status: string
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
    transmitter<T extends TransmitterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransmitterDefaultArgs<ExtArgs>>): Prisma__TransmitterClient<$Result.GetResult<Prisma.$TransmitterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    aiCalls<T extends Alarm$aiCallsArgs<ExtArgs> = {}>(args?: Subset<T, Alarm$aiCallsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiCallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dispatch<T extends Alarm$dispatchArgs<ExtArgs> = {}>(args?: Subset<T, Alarm$dispatchArgs<ExtArgs>>): Prisma__DispatchClient<$Result.GetResult<Prisma.$DispatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly shortId: FieldRef<"Alarm", 'Int'>
    readonly triggeredAt: FieldRef<"Alarm", 'DateTime'>
    readonly eventType: FieldRef<"Alarm", 'String'>
    readonly source: FieldRef<"Alarm", 'String'>
    readonly transmitterId: FieldRef<"Alarm", 'String'>
    readonly status: FieldRef<"Alarm", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alarms.
     */
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
   * Alarm.aiCalls
   */
  export type Alarm$aiCallsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: AiCallOrderByWithRelationInput | AiCallOrderByWithRelationInput[]
    cursor?: AiCallWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiCallScalarFieldEnum | AiCallScalarFieldEnum[]
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
    shortId: number | null
    confidenceScore: number | null
  }

  export type AiCallSumAggregateOutputType = {
    shortId: number | null
    confidenceScore: number | null
  }

  export type AiCallMinAggregateOutputType = {
    id: string | null
    shortId: number | null
    alarmId: string | null
    calledAt: Date | null
    callDuration: string | null
    notes: string | null
    aiDecision: string | null
    confidenceScore: number | null
    evaluatedAt: Date | null
    phone: string | null
  }

  export type AiCallMaxAggregateOutputType = {
    id: string | null
    shortId: number | null
    alarmId: string | null
    calledAt: Date | null
    callDuration: string | null
    notes: string | null
    aiDecision: string | null
    confidenceScore: number | null
    evaluatedAt: Date | null
    phone: string | null
  }

  export type AiCallCountAggregateOutputType = {
    id: number
    shortId: number
    alarmId: number
    calledAt: number
    callDuration: number
    notes: number
    aiDecision: number
    confidenceScore: number
    evaluatedAt: number
    phone: number
    _all: number
  }


  export type AiCallAvgAggregateInputType = {
    shortId?: true
    confidenceScore?: true
  }

  export type AiCallSumAggregateInputType = {
    shortId?: true
    confidenceScore?: true
  }

  export type AiCallMinAggregateInputType = {
    id?: true
    shortId?: true
    alarmId?: true
    calledAt?: true
    callDuration?: true
    notes?: true
    aiDecision?: true
    confidenceScore?: true
    evaluatedAt?: true
    phone?: true
  }

  export type AiCallMaxAggregateInputType = {
    id?: true
    shortId?: true
    alarmId?: true
    calledAt?: true
    callDuration?: true
    notes?: true
    aiDecision?: true
    confidenceScore?: true
    evaluatedAt?: true
    phone?: true
  }

  export type AiCallCountAggregateInputType = {
    id?: true
    shortId?: true
    alarmId?: true
    calledAt?: true
    callDuration?: true
    notes?: true
    aiDecision?: true
    confidenceScore?: true
    evaluatedAt?: true
    phone?: true
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
    shortId: number
    alarmId: string
    calledAt: Date
    callDuration: string | null
    notes: string | null
    aiDecision: string | null
    confidenceScore: number | null
    evaluatedAt: Date | null
    phone: string | null
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
    shortId?: boolean
    alarmId?: boolean
    calledAt?: boolean
    callDuration?: boolean
    notes?: boolean
    aiDecision?: boolean
    confidenceScore?: boolean
    evaluatedAt?: boolean
    phone?: boolean
    alarm?: boolean | AlarmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiCall"]>

  export type AiCallSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    alarmId?: boolean
    calledAt?: boolean
    callDuration?: boolean
    notes?: boolean
    aiDecision?: boolean
    confidenceScore?: boolean
    evaluatedAt?: boolean
    phone?: boolean
    alarm?: boolean | AlarmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiCall"]>

  export type AiCallSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    alarmId?: boolean
    calledAt?: boolean
    callDuration?: boolean
    notes?: boolean
    aiDecision?: boolean
    confidenceScore?: boolean
    evaluatedAt?: boolean
    phone?: boolean
    alarm?: boolean | AlarmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiCall"]>

  export type AiCallSelectScalar = {
    id?: boolean
    shortId?: boolean
    alarmId?: boolean
    calledAt?: boolean
    callDuration?: boolean
    notes?: boolean
    aiDecision?: boolean
    confidenceScore?: boolean
    evaluatedAt?: boolean
    phone?: boolean
  }

  export type AiCallOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shortId" | "alarmId" | "calledAt" | "callDuration" | "notes" | "aiDecision" | "confidenceScore" | "evaluatedAt" | "phone", ExtArgs["result"]["aiCall"]>
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
      shortId: number
      alarmId: string
      calledAt: Date
      callDuration: string | null
      notes: string | null
      aiDecision: string | null
      confidenceScore: number | null
      evaluatedAt: Date | null
      phone: string | null
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
    readonly shortId: FieldRef<"AiCall", 'Int'>
    readonly alarmId: FieldRef<"AiCall", 'String'>
    readonly calledAt: FieldRef<"AiCall", 'DateTime'>
    readonly callDuration: FieldRef<"AiCall", 'String'>
    readonly notes: FieldRef<"AiCall", 'String'>
    readonly aiDecision: FieldRef<"AiCall", 'String'>
    readonly confidenceScore: FieldRef<"AiCall", 'Float'>
    readonly evaluatedAt: FieldRef<"AiCall", 'DateTime'>
    readonly phone: FieldRef<"AiCall", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiCalls.
     */
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
    _avg: DispatchAvgAggregateOutputType | null
    _sum: DispatchSumAggregateOutputType | null
    _min: DispatchMinAggregateOutputType | null
    _max: DispatchMaxAggregateOutputType | null
  }

  export type DispatchAvgAggregateOutputType = {
    shortId: number | null
  }

  export type DispatchSumAggregateOutputType = {
    shortId: number | null
  }

  export type DispatchMinAggregateOutputType = {
    id: string | null
    shortId: number | null
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
    shortId: number | null
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
    shortId: number
    dispatchedAt: number
    arrivalTime: number
    resolvedAt: number
    responseNotes: number
    alarmId: number
    guardId: number
    vehicleId: number
    _all: number
  }


  export type DispatchAvgAggregateInputType = {
    shortId?: true
  }

  export type DispatchSumAggregateInputType = {
    shortId?: true
  }

  export type DispatchMinAggregateInputType = {
    id?: true
    shortId?: true
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
    shortId?: true
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
    shortId?: true
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
     * Select which fields to average
    **/
    _avg?: DispatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DispatchSumAggregateInputType
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
    _avg?: DispatchAvgAggregateInputType
    _sum?: DispatchSumAggregateInputType
    _min?: DispatchMinAggregateInputType
    _max?: DispatchMaxAggregateInputType
  }

  export type DispatchGroupByOutputType = {
    id: string
    shortId: number
    dispatchedAt: Date
    arrivalTime: Date | null
    resolvedAt: Date | null
    responseNotes: string | null
    alarmId: string
    guardId: string | null
    vehicleId: string | null
    _count: DispatchCountAggregateOutputType | null
    _avg: DispatchAvgAggregateOutputType | null
    _sum: DispatchSumAggregateOutputType | null
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
    shortId?: boolean
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
    shortId?: boolean
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
    shortId?: boolean
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
    shortId?: boolean
    dispatchedAt?: boolean
    arrivalTime?: boolean
    resolvedAt?: boolean
    responseNotes?: boolean
    alarmId?: boolean
    guardId?: boolean
    vehicleId?: boolean
  }

  export type DispatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shortId" | "dispatchedAt" | "arrivalTime" | "resolvedAt" | "responseNotes" | "alarmId" | "guardId" | "vehicleId", ExtArgs["result"]["dispatch"]>
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
      shortId: number
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
    readonly shortId: FieldRef<"Dispatch", 'Int'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dispatches.
     */
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
   * Model OBLog
   */

  export type AggregateOBLog = {
    _count: OBLogCountAggregateOutputType | null
    _avg: OBLogAvgAggregateOutputType | null
    _sum: OBLogSumAggregateOutputType | null
    _min: OBLogMinAggregateOutputType | null
    _max: OBLogMaxAggregateOutputType | null
  }

  export type OBLogAvgAggregateOutputType = {
    shortId: number | null
  }

  export type OBLogSumAggregateOutputType = {
    shortId: number | null
  }

  export type OBLogMinAggregateOutputType = {
    id: string | null
    shortId: number | null
    logTime: Date | null
    guardId: string | null
    siteId: string | null
    actionLog: string | null
    notes: string | null
  }

  export type OBLogMaxAggregateOutputType = {
    id: string | null
    shortId: number | null
    logTime: Date | null
    guardId: string | null
    siteId: string | null
    actionLog: string | null
    notes: string | null
  }

  export type OBLogCountAggregateOutputType = {
    id: number
    shortId: number
    logTime: number
    guardId: number
    siteId: number
    actionLog: number
    notes: number
    _all: number
  }


  export type OBLogAvgAggregateInputType = {
    shortId?: true
  }

  export type OBLogSumAggregateInputType = {
    shortId?: true
  }

  export type OBLogMinAggregateInputType = {
    id?: true
    shortId?: true
    logTime?: true
    guardId?: true
    siteId?: true
    actionLog?: true
    notes?: true
  }

  export type OBLogMaxAggregateInputType = {
    id?: true
    shortId?: true
    logTime?: true
    guardId?: true
    siteId?: true
    actionLog?: true
    notes?: true
  }

  export type OBLogCountAggregateInputType = {
    id?: true
    shortId?: true
    logTime?: true
    guardId?: true
    siteId?: true
    actionLog?: true
    notes?: true
    _all?: true
  }

  export type OBLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OBLog to aggregate.
     */
    where?: OBLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OBLogs to fetch.
     */
    orderBy?: OBLogOrderByWithRelationInput | OBLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OBLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OBLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OBLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OBLogs
    **/
    _count?: true | OBLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OBLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OBLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OBLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OBLogMaxAggregateInputType
  }

  export type GetOBLogAggregateType<T extends OBLogAggregateArgs> = {
        [P in keyof T & keyof AggregateOBLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOBLog[P]>
      : GetScalarType<T[P], AggregateOBLog[P]>
  }




  export type OBLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OBLogWhereInput
    orderBy?: OBLogOrderByWithAggregationInput | OBLogOrderByWithAggregationInput[]
    by: OBLogScalarFieldEnum[] | OBLogScalarFieldEnum
    having?: OBLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OBLogCountAggregateInputType | true
    _avg?: OBLogAvgAggregateInputType
    _sum?: OBLogSumAggregateInputType
    _min?: OBLogMinAggregateInputType
    _max?: OBLogMaxAggregateInputType
  }

  export type OBLogGroupByOutputType = {
    id: string
    shortId: number
    logTime: Date
    guardId: string | null
    siteId: string | null
    actionLog: string
    notes: string
    _count: OBLogCountAggregateOutputType | null
    _avg: OBLogAvgAggregateOutputType | null
    _sum: OBLogSumAggregateOutputType | null
    _min: OBLogMinAggregateOutputType | null
    _max: OBLogMaxAggregateOutputType | null
  }

  type GetOBLogGroupByPayload<T extends OBLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OBLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OBLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OBLogGroupByOutputType[P]>
            : GetScalarType<T[P], OBLogGroupByOutputType[P]>
        }
      >
    >


  export type OBLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    logTime?: boolean
    guardId?: boolean
    siteId?: boolean
    actionLog?: boolean
    notes?: boolean
    guard?: boolean | OBLog$guardArgs<ExtArgs>
    site?: boolean | OBLog$siteArgs<ExtArgs>
  }, ExtArgs["result"]["oBLog"]>

  export type OBLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    logTime?: boolean
    guardId?: boolean
    siteId?: boolean
    actionLog?: boolean
    notes?: boolean
    guard?: boolean | OBLog$guardArgs<ExtArgs>
    site?: boolean | OBLog$siteArgs<ExtArgs>
  }, ExtArgs["result"]["oBLog"]>

  export type OBLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    logTime?: boolean
    guardId?: boolean
    siteId?: boolean
    actionLog?: boolean
    notes?: boolean
    guard?: boolean | OBLog$guardArgs<ExtArgs>
    site?: boolean | OBLog$siteArgs<ExtArgs>
  }, ExtArgs["result"]["oBLog"]>

  export type OBLogSelectScalar = {
    id?: boolean
    shortId?: boolean
    logTime?: boolean
    guardId?: boolean
    siteId?: boolean
    actionLog?: boolean
    notes?: boolean
  }

  export type OBLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shortId" | "logTime" | "guardId" | "siteId" | "actionLog" | "notes", ExtArgs["result"]["oBLog"]>
  export type OBLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guard?: boolean | OBLog$guardArgs<ExtArgs>
    site?: boolean | OBLog$siteArgs<ExtArgs>
  }
  export type OBLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guard?: boolean | OBLog$guardArgs<ExtArgs>
    site?: boolean | OBLog$siteArgs<ExtArgs>
  }
  export type OBLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guard?: boolean | OBLog$guardArgs<ExtArgs>
    site?: boolean | OBLog$siteArgs<ExtArgs>
  }

  export type $OBLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OBLog"
    objects: {
      guard: Prisma.$GuardPayload<ExtArgs> | null
      site: Prisma.$SitePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shortId: number
      logTime: Date
      guardId: string | null
      siteId: string | null
      actionLog: string
      notes: string
    }, ExtArgs["result"]["oBLog"]>
    composites: {}
  }

  type OBLogGetPayload<S extends boolean | null | undefined | OBLogDefaultArgs> = $Result.GetResult<Prisma.$OBLogPayload, S>

  type OBLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OBLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OBLogCountAggregateInputType | true
    }

  export interface OBLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OBLog'], meta: { name: 'OBLog' } }
    /**
     * Find zero or one OBLog that matches the filter.
     * @param {OBLogFindUniqueArgs} args - Arguments to find a OBLog
     * @example
     * // Get one OBLog
     * const oBLog = await prisma.oBLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OBLogFindUniqueArgs>(args: SelectSubset<T, OBLogFindUniqueArgs<ExtArgs>>): Prisma__OBLogClient<$Result.GetResult<Prisma.$OBLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OBLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OBLogFindUniqueOrThrowArgs} args - Arguments to find a OBLog
     * @example
     * // Get one OBLog
     * const oBLog = await prisma.oBLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OBLogFindUniqueOrThrowArgs>(args: SelectSubset<T, OBLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OBLogClient<$Result.GetResult<Prisma.$OBLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OBLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OBLogFindFirstArgs} args - Arguments to find a OBLog
     * @example
     * // Get one OBLog
     * const oBLog = await prisma.oBLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OBLogFindFirstArgs>(args?: SelectSubset<T, OBLogFindFirstArgs<ExtArgs>>): Prisma__OBLogClient<$Result.GetResult<Prisma.$OBLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OBLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OBLogFindFirstOrThrowArgs} args - Arguments to find a OBLog
     * @example
     * // Get one OBLog
     * const oBLog = await prisma.oBLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OBLogFindFirstOrThrowArgs>(args?: SelectSubset<T, OBLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__OBLogClient<$Result.GetResult<Prisma.$OBLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OBLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OBLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OBLogs
     * const oBLogs = await prisma.oBLog.findMany()
     * 
     * // Get first 10 OBLogs
     * const oBLogs = await prisma.oBLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oBLogWithIdOnly = await prisma.oBLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OBLogFindManyArgs>(args?: SelectSubset<T, OBLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OBLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OBLog.
     * @param {OBLogCreateArgs} args - Arguments to create a OBLog.
     * @example
     * // Create one OBLog
     * const OBLog = await prisma.oBLog.create({
     *   data: {
     *     // ... data to create a OBLog
     *   }
     * })
     * 
     */
    create<T extends OBLogCreateArgs>(args: SelectSubset<T, OBLogCreateArgs<ExtArgs>>): Prisma__OBLogClient<$Result.GetResult<Prisma.$OBLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OBLogs.
     * @param {OBLogCreateManyArgs} args - Arguments to create many OBLogs.
     * @example
     * // Create many OBLogs
     * const oBLog = await prisma.oBLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OBLogCreateManyArgs>(args?: SelectSubset<T, OBLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OBLogs and returns the data saved in the database.
     * @param {OBLogCreateManyAndReturnArgs} args - Arguments to create many OBLogs.
     * @example
     * // Create many OBLogs
     * const oBLog = await prisma.oBLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OBLogs and only return the `id`
     * const oBLogWithIdOnly = await prisma.oBLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OBLogCreateManyAndReturnArgs>(args?: SelectSubset<T, OBLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OBLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OBLog.
     * @param {OBLogDeleteArgs} args - Arguments to delete one OBLog.
     * @example
     * // Delete one OBLog
     * const OBLog = await prisma.oBLog.delete({
     *   where: {
     *     // ... filter to delete one OBLog
     *   }
     * })
     * 
     */
    delete<T extends OBLogDeleteArgs>(args: SelectSubset<T, OBLogDeleteArgs<ExtArgs>>): Prisma__OBLogClient<$Result.GetResult<Prisma.$OBLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OBLog.
     * @param {OBLogUpdateArgs} args - Arguments to update one OBLog.
     * @example
     * // Update one OBLog
     * const oBLog = await prisma.oBLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OBLogUpdateArgs>(args: SelectSubset<T, OBLogUpdateArgs<ExtArgs>>): Prisma__OBLogClient<$Result.GetResult<Prisma.$OBLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OBLogs.
     * @param {OBLogDeleteManyArgs} args - Arguments to filter OBLogs to delete.
     * @example
     * // Delete a few OBLogs
     * const { count } = await prisma.oBLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OBLogDeleteManyArgs>(args?: SelectSubset<T, OBLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OBLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OBLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OBLogs
     * const oBLog = await prisma.oBLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OBLogUpdateManyArgs>(args: SelectSubset<T, OBLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OBLogs and returns the data updated in the database.
     * @param {OBLogUpdateManyAndReturnArgs} args - Arguments to update many OBLogs.
     * @example
     * // Update many OBLogs
     * const oBLog = await prisma.oBLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OBLogs and only return the `id`
     * const oBLogWithIdOnly = await prisma.oBLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends OBLogUpdateManyAndReturnArgs>(args: SelectSubset<T, OBLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OBLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OBLog.
     * @param {OBLogUpsertArgs} args - Arguments to update or create a OBLog.
     * @example
     * // Update or create a OBLog
     * const oBLog = await prisma.oBLog.upsert({
     *   create: {
     *     // ... data to create a OBLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OBLog we want to update
     *   }
     * })
     */
    upsert<T extends OBLogUpsertArgs>(args: SelectSubset<T, OBLogUpsertArgs<ExtArgs>>): Prisma__OBLogClient<$Result.GetResult<Prisma.$OBLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OBLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OBLogCountArgs} args - Arguments to filter OBLogs to count.
     * @example
     * // Count the number of OBLogs
     * const count = await prisma.oBLog.count({
     *   where: {
     *     // ... the filter for the OBLogs we want to count
     *   }
     * })
    **/
    count<T extends OBLogCountArgs>(
      args?: Subset<T, OBLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OBLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OBLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OBLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OBLogAggregateArgs>(args: Subset<T, OBLogAggregateArgs>): Prisma.PrismaPromise<GetOBLogAggregateType<T>>

    /**
     * Group by OBLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OBLogGroupByArgs} args - Group by arguments.
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
      T extends OBLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OBLogGroupByArgs['orderBy'] }
        : { orderBy?: OBLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OBLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOBLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OBLog model
   */
  readonly fields: OBLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OBLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OBLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guard<T extends OBLog$guardArgs<ExtArgs> = {}>(args?: Subset<T, OBLog$guardArgs<ExtArgs>>): Prisma__GuardClient<$Result.GetResult<Prisma.$GuardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    site<T extends OBLog$siteArgs<ExtArgs> = {}>(args?: Subset<T, OBLog$siteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OBLog model
   */
  interface OBLogFieldRefs {
    readonly id: FieldRef<"OBLog", 'String'>
    readonly shortId: FieldRef<"OBLog", 'Int'>
    readonly logTime: FieldRef<"OBLog", 'DateTime'>
    readonly guardId: FieldRef<"OBLog", 'String'>
    readonly siteId: FieldRef<"OBLog", 'String'>
    readonly actionLog: FieldRef<"OBLog", 'String'>
    readonly notes: FieldRef<"OBLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OBLog findUnique
   */
  export type OBLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OBLog
     */
    select?: OBLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OBLog
     */
    omit?: OBLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OBLogInclude<ExtArgs> | null
    /**
     * Filter, which OBLog to fetch.
     */
    where: OBLogWhereUniqueInput
  }

  /**
   * OBLog findUniqueOrThrow
   */
  export type OBLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OBLog
     */
    select?: OBLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OBLog
     */
    omit?: OBLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OBLogInclude<ExtArgs> | null
    /**
     * Filter, which OBLog to fetch.
     */
    where: OBLogWhereUniqueInput
  }

  /**
   * OBLog findFirst
   */
  export type OBLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OBLog
     */
    select?: OBLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OBLog
     */
    omit?: OBLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OBLogInclude<ExtArgs> | null
    /**
     * Filter, which OBLog to fetch.
     */
    where?: OBLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OBLogs to fetch.
     */
    orderBy?: OBLogOrderByWithRelationInput | OBLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OBLogs.
     */
    cursor?: OBLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OBLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OBLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OBLogs.
     */
    distinct?: OBLogScalarFieldEnum | OBLogScalarFieldEnum[]
  }

  /**
   * OBLog findFirstOrThrow
   */
  export type OBLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OBLog
     */
    select?: OBLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OBLog
     */
    omit?: OBLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OBLogInclude<ExtArgs> | null
    /**
     * Filter, which OBLog to fetch.
     */
    where?: OBLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OBLogs to fetch.
     */
    orderBy?: OBLogOrderByWithRelationInput | OBLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OBLogs.
     */
    cursor?: OBLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OBLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OBLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OBLogs.
     */
    distinct?: OBLogScalarFieldEnum | OBLogScalarFieldEnum[]
  }

  /**
   * OBLog findMany
   */
  export type OBLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OBLog
     */
    select?: OBLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OBLog
     */
    omit?: OBLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OBLogInclude<ExtArgs> | null
    /**
     * Filter, which OBLogs to fetch.
     */
    where?: OBLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OBLogs to fetch.
     */
    orderBy?: OBLogOrderByWithRelationInput | OBLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OBLogs.
     */
    cursor?: OBLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OBLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OBLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OBLogs.
     */
    distinct?: OBLogScalarFieldEnum | OBLogScalarFieldEnum[]
  }

  /**
   * OBLog create
   */
  export type OBLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OBLog
     */
    select?: OBLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OBLog
     */
    omit?: OBLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OBLogInclude<ExtArgs> | null
    /**
     * The data needed to create a OBLog.
     */
    data: XOR<OBLogCreateInput, OBLogUncheckedCreateInput>
  }

  /**
   * OBLog createMany
   */
  export type OBLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OBLogs.
     */
    data: OBLogCreateManyInput | OBLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OBLog createManyAndReturn
   */
  export type OBLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OBLog
     */
    select?: OBLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OBLog
     */
    omit?: OBLogOmit<ExtArgs> | null
    /**
     * The data used to create many OBLogs.
     */
    data: OBLogCreateManyInput | OBLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OBLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OBLog update
   */
  export type OBLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OBLog
     */
    select?: OBLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OBLog
     */
    omit?: OBLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OBLogInclude<ExtArgs> | null
    /**
     * The data needed to update a OBLog.
     */
    data: XOR<OBLogUpdateInput, OBLogUncheckedUpdateInput>
    /**
     * Choose, which OBLog to update.
     */
    where: OBLogWhereUniqueInput
  }

  /**
   * OBLog updateMany
   */
  export type OBLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OBLogs.
     */
    data: XOR<OBLogUpdateManyMutationInput, OBLogUncheckedUpdateManyInput>
    /**
     * Filter which OBLogs to update
     */
    where?: OBLogWhereInput
    /**
     * Limit how many OBLogs to update.
     */
    limit?: number
  }

  /**
   * OBLog updateManyAndReturn
   */
  export type OBLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OBLog
     */
    select?: OBLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OBLog
     */
    omit?: OBLogOmit<ExtArgs> | null
    /**
     * The data used to update OBLogs.
     */
    data: XOR<OBLogUpdateManyMutationInput, OBLogUncheckedUpdateManyInput>
    /**
     * Filter which OBLogs to update
     */
    where?: OBLogWhereInput
    /**
     * Limit how many OBLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OBLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OBLog upsert
   */
  export type OBLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OBLog
     */
    select?: OBLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OBLog
     */
    omit?: OBLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OBLogInclude<ExtArgs> | null
    /**
     * The filter to search for the OBLog to update in case it exists.
     */
    where: OBLogWhereUniqueInput
    /**
     * In case the OBLog found by the `where` argument doesn't exist, create a new OBLog with this data.
     */
    create: XOR<OBLogCreateInput, OBLogUncheckedCreateInput>
    /**
     * In case the OBLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OBLogUpdateInput, OBLogUncheckedUpdateInput>
  }

  /**
   * OBLog delete
   */
  export type OBLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OBLog
     */
    select?: OBLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OBLog
     */
    omit?: OBLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OBLogInclude<ExtArgs> | null
    /**
     * Filter which OBLog to delete.
     */
    where: OBLogWhereUniqueInput
  }

  /**
   * OBLog deleteMany
   */
  export type OBLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OBLogs to delete
     */
    where?: OBLogWhereInput
    /**
     * Limit how many OBLogs to delete.
     */
    limit?: number
  }

  /**
   * OBLog.guard
   */
  export type OBLog$guardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * OBLog.site
   */
  export type OBLog$siteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * OBLog without action
   */
  export type OBLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OBLog
     */
    select?: OBLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OBLog
     */
    omit?: OBLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OBLogInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    shortId: number | null
  }

  export type UserSumAggregateOutputType = {
    shortId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    shortId: number | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    lastLogin: Date | null
    roleId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    shortId: number | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    lastLogin: Date | null
    roleId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    shortId: number
    email: number
    password: number
    name: number
    createdAt: number
    lastLogin: number
    roleId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    shortId?: true
  }

  export type UserSumAggregateInputType = {
    shortId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    shortId?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    lastLogin?: true
    roleId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    shortId?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    lastLogin?: true
    roleId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    shortId?: true
    email?: true
    password?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    shortId: number
    email: string
    password: string
    name: string
    createdAt: Date
    lastLogin: Date | null
    roleId: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    shortId?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    shortId?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    roleId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shortId" | "email" | "password" | "name" | "createdAt" | "lastLogin" | "roleId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shortId: number
      email: string
      password: string
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
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly shortId: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    shortId: number | null
  }

  export type VehicleSumAggregateOutputType = {
    shortId: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    shortId: number | null
    name: string | null
    plate: string | null
    model: string | null
    status: string | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    shortId: number | null
    name: string | null
    plate: string | null
    model: string | null
    status: string | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    shortId: number
    name: number
    plate: number
    model: number
    status: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    shortId?: true
  }

  export type VehicleSumAggregateInputType = {
    shortId?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    shortId?: true
    name?: true
    plate?: true
    model?: true
    status?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    shortId?: true
    name?: true
    plate?: true
    model?: true
    status?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    shortId?: true
    name?: true
    plate?: true
    model?: true
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
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
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
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    shortId: number
    name: string
    plate: string
    model: string
    status: string
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
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
    shortId?: boolean
    name?: boolean
    plate?: boolean
    model?: boolean
    status?: boolean
    dispatches?: boolean | Vehicle$dispatchesArgs<ExtArgs>
    guards?: boolean | Vehicle$guardsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    name?: boolean
    plate?: boolean
    model?: boolean
    status?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    name?: boolean
    plate?: boolean
    model?: boolean
    status?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    shortId?: boolean
    name?: boolean
    plate?: boolean
    model?: boolean
    status?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shortId" | "name" | "plate" | "model" | "status", ExtArgs["result"]["vehicle"]>
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
      shortId: number
      name: string
      plate: string
      model: string
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
    readonly shortId: FieldRef<"Vehicle", 'Int'>
    readonly name: FieldRef<"Vehicle", 'String'>
    readonly plate: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
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
    _avg: GuardAvgAggregateOutputType | null
    _sum: GuardSumAggregateOutputType | null
    _min: GuardMinAggregateOutputType | null
    _max: GuardMaxAggregateOutputType | null
  }

  export type GuardAvgAggregateOutputType = {
    shortId: number | null
  }

  export type GuardSumAggregateOutputType = {
    shortId: number | null
  }

  export type GuardMinAggregateOutputType = {
    id: string | null
    shortId: number | null
    name: string | null
    phone: string | null
    status: string | null
    assignedVehicleId: string | null
  }

  export type GuardMaxAggregateOutputType = {
    id: string | null
    shortId: number | null
    name: string | null
    phone: string | null
    status: string | null
    assignedVehicleId: string | null
  }

  export type GuardCountAggregateOutputType = {
    id: number
    shortId: number
    name: number
    phone: number
    status: number
    assignedVehicleId: number
    _all: number
  }


  export type GuardAvgAggregateInputType = {
    shortId?: true
  }

  export type GuardSumAggregateInputType = {
    shortId?: true
  }

  export type GuardMinAggregateInputType = {
    id?: true
    shortId?: true
    name?: true
    phone?: true
    status?: true
    assignedVehicleId?: true
  }

  export type GuardMaxAggregateInputType = {
    id?: true
    shortId?: true
    name?: true
    phone?: true
    status?: true
    assignedVehicleId?: true
  }

  export type GuardCountAggregateInputType = {
    id?: true
    shortId?: true
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
     * Select which fields to average
    **/
    _avg?: GuardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuardSumAggregateInputType
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
    _avg?: GuardAvgAggregateInputType
    _sum?: GuardSumAggregateInputType
    _min?: GuardMinAggregateInputType
    _max?: GuardMaxAggregateInputType
  }

  export type GuardGroupByOutputType = {
    id: string
    shortId: number
    name: string
    phone: string
    status: string
    assignedVehicleId: string | null
    _count: GuardCountAggregateOutputType | null
    _avg: GuardAvgAggregateOutputType | null
    _sum: GuardSumAggregateOutputType | null
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
    shortId?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    assignedVehicleId?: boolean
    assignedVehicle?: boolean | Guard$assignedVehicleArgs<ExtArgs>
    dispatches?: boolean | Guard$dispatchesArgs<ExtArgs>
    OBLogs?: boolean | Guard$OBLogsArgs<ExtArgs>
    _count?: boolean | GuardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guard"]>

  export type GuardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    assignedVehicleId?: boolean
    assignedVehicle?: boolean | Guard$assignedVehicleArgs<ExtArgs>
  }, ExtArgs["result"]["guard"]>

  export type GuardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shortId?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    assignedVehicleId?: boolean
    assignedVehicle?: boolean | Guard$assignedVehicleArgs<ExtArgs>
  }, ExtArgs["result"]["guard"]>

  export type GuardSelectScalar = {
    id?: boolean
    shortId?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    assignedVehicleId?: boolean
  }

  export type GuardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shortId" | "name" | "phone" | "status" | "assignedVehicleId", ExtArgs["result"]["guard"]>
  export type GuardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedVehicle?: boolean | Guard$assignedVehicleArgs<ExtArgs>
    dispatches?: boolean | Guard$dispatchesArgs<ExtArgs>
    OBLogs?: boolean | Guard$OBLogsArgs<ExtArgs>
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
      OBLogs: Prisma.$OBLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shortId: number
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
    OBLogs<T extends Guard$OBLogsArgs<ExtArgs> = {}>(args?: Subset<T, Guard$OBLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OBLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly shortId: FieldRef<"Guard", 'Int'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guards.
     */
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
   * Guard.OBLogs
   */
  export type Guard$OBLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OBLog
     */
    select?: OBLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OBLog
     */
    omit?: OBLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OBLogInclude<ExtArgs> | null
    where?: OBLogWhereInput
    orderBy?: OBLogOrderByWithRelationInput | OBLogOrderByWithRelationInput[]
    cursor?: OBLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OBLogScalarFieldEnum | OBLogScalarFieldEnum[]
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
    shortId: 'shortId',
    surname: 'surname',
    name: 'name',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const SiteScalarFieldEnum: {
    id: 'id',
    shortId: 'shortId',
    name: 'name',
    address: 'address',
    clientId: 'clientId'
  };

  export type SiteScalarFieldEnum = (typeof SiteScalarFieldEnum)[keyof typeof SiteScalarFieldEnum]


  export const TransmitterScalarFieldEnum: {
    id: 'id',
    referenceCode: 'referenceCode',
    siteId: 'siteId'
  };

  export type TransmitterScalarFieldEnum = (typeof TransmitterScalarFieldEnum)[keyof typeof TransmitterScalarFieldEnum]


  export const AlarmScalarFieldEnum: {
    id: 'id',
    shortId: 'shortId',
    triggeredAt: 'triggeredAt',
    eventType: 'eventType',
    source: 'source',
    transmitterId: 'transmitterId',
    status: 'status'
  };

  export type AlarmScalarFieldEnum = (typeof AlarmScalarFieldEnum)[keyof typeof AlarmScalarFieldEnum]


  export const AiCallScalarFieldEnum: {
    id: 'id',
    shortId: 'shortId',
    alarmId: 'alarmId',
    calledAt: 'calledAt',
    callDuration: 'callDuration',
    notes: 'notes',
    aiDecision: 'aiDecision',
    confidenceScore: 'confidenceScore',
    evaluatedAt: 'evaluatedAt',
    phone: 'phone'
  };

  export type AiCallScalarFieldEnum = (typeof AiCallScalarFieldEnum)[keyof typeof AiCallScalarFieldEnum]


  export const DispatchScalarFieldEnum: {
    id: 'id',
    shortId: 'shortId',
    dispatchedAt: 'dispatchedAt',
    arrivalTime: 'arrivalTime',
    resolvedAt: 'resolvedAt',
    responseNotes: 'responseNotes',
    alarmId: 'alarmId',
    guardId: 'guardId',
    vehicleId: 'vehicleId'
  };

  export type DispatchScalarFieldEnum = (typeof DispatchScalarFieldEnum)[keyof typeof DispatchScalarFieldEnum]


  export const OBLogScalarFieldEnum: {
    id: 'id',
    shortId: 'shortId',
    logTime: 'logTime',
    guardId: 'guardId',
    siteId: 'siteId',
    actionLog: 'actionLog',
    notes: 'notes'
  };

  export type OBLogScalarFieldEnum = (typeof OBLogScalarFieldEnum)[keyof typeof OBLogScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    shortId: 'shortId',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    lastLogin: 'lastLogin',
    roleId: 'roleId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    shortId: 'shortId',
    name: 'name',
    plate: 'plate',
    model: 'model',
    status: 'status'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const GuardScalarFieldEnum: {
    id: 'id',
    shortId: 'shortId',
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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Deep Input Types
   */


  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    shortId?: IntFilter<"Client"> | number
    surname?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    sites?: SiteListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    shortId?: SortOrder
    surname?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    sites?: SiteOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shortId?: number
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    surname?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    createdAt?: DateTimeFilter<"Client"> | Date | string
    sites?: SiteListRelationFilter
  }, "id" | "shortId">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    shortId?: SortOrder
    surname?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    shortId?: IntWithAggregatesFilter<"Client"> | number
    surname?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    phone?: StringWithAggregatesFilter<"Client"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type SiteWhereInput = {
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    id?: StringFilter<"Site"> | string
    shortId?: IntFilter<"Site"> | number
    name?: StringFilter<"Site"> | string
    address?: StringFilter<"Site"> | string
    clientId?: StringFilter<"Site"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    transmitters?: TransmitterListRelationFilter
    OBLogs?: OBLogListRelationFilter
  }

  export type SiteOrderByWithRelationInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    clientId?: SortOrder
    client?: ClientOrderByWithRelationInput
    transmitters?: TransmitterOrderByRelationAggregateInput
    OBLogs?: OBLogOrderByRelationAggregateInput
  }

  export type SiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shortId?: number
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    name?: StringFilter<"Site"> | string
    address?: StringFilter<"Site"> | string
    clientId?: StringFilter<"Site"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    transmitters?: TransmitterListRelationFilter
    OBLogs?: OBLogListRelationFilter
  }, "id" | "shortId">

  export type SiteOrderByWithAggregationInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    address?: SortOrder
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
    shortId?: IntWithAggregatesFilter<"Site"> | number
    name?: StringWithAggregatesFilter<"Site"> | string
    address?: StringWithAggregatesFilter<"Site"> | string
    clientId?: StringWithAggregatesFilter<"Site"> | string
  }

  export type TransmitterWhereInput = {
    AND?: TransmitterWhereInput | TransmitterWhereInput[]
    OR?: TransmitterWhereInput[]
    NOT?: TransmitterWhereInput | TransmitterWhereInput[]
    id?: StringFilter<"Transmitter"> | string
    referenceCode?: StringFilter<"Transmitter"> | string
    siteId?: StringFilter<"Transmitter"> | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    alarms?: AlarmListRelationFilter
  }

  export type TransmitterOrderByWithRelationInput = {
    id?: SortOrder
    referenceCode?: SortOrder
    siteId?: SortOrder
    site?: SiteOrderByWithRelationInput
    alarms?: AlarmOrderByRelationAggregateInput
  }

  export type TransmitterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    referenceCode?: string
    AND?: TransmitterWhereInput | TransmitterWhereInput[]
    OR?: TransmitterWhereInput[]
    NOT?: TransmitterWhereInput | TransmitterWhereInput[]
    siteId?: StringFilter<"Transmitter"> | string
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    alarms?: AlarmListRelationFilter
  }, "id" | "referenceCode">

  export type TransmitterOrderByWithAggregationInput = {
    id?: SortOrder
    referenceCode?: SortOrder
    siteId?: SortOrder
    _count?: TransmitterCountOrderByAggregateInput
    _max?: TransmitterMaxOrderByAggregateInput
    _min?: TransmitterMinOrderByAggregateInput
  }

  export type TransmitterScalarWhereWithAggregatesInput = {
    AND?: TransmitterScalarWhereWithAggregatesInput | TransmitterScalarWhereWithAggregatesInput[]
    OR?: TransmitterScalarWhereWithAggregatesInput[]
    NOT?: TransmitterScalarWhereWithAggregatesInput | TransmitterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transmitter"> | string
    referenceCode?: StringWithAggregatesFilter<"Transmitter"> | string
    siteId?: StringWithAggregatesFilter<"Transmitter"> | string
  }

  export type AlarmWhereInput = {
    AND?: AlarmWhereInput | AlarmWhereInput[]
    OR?: AlarmWhereInput[]
    NOT?: AlarmWhereInput | AlarmWhereInput[]
    id?: StringFilter<"Alarm"> | string
    shortId?: IntFilter<"Alarm"> | number
    triggeredAt?: DateTimeFilter<"Alarm"> | Date | string
    eventType?: StringFilter<"Alarm"> | string
    source?: StringFilter<"Alarm"> | string
    transmitterId?: StringFilter<"Alarm"> | string
    status?: StringFilter<"Alarm"> | string
    transmitter?: XOR<TransmitterScalarRelationFilter, TransmitterWhereInput>
    aiCalls?: AiCallListRelationFilter
    dispatch?: XOR<DispatchNullableScalarRelationFilter, DispatchWhereInput> | null
  }

  export type AlarmOrderByWithRelationInput = {
    id?: SortOrder
    shortId?: SortOrder
    triggeredAt?: SortOrder
    eventType?: SortOrder
    source?: SortOrder
    transmitterId?: SortOrder
    status?: SortOrder
    transmitter?: TransmitterOrderByWithRelationInput
    aiCalls?: AiCallOrderByRelationAggregateInput
    dispatch?: DispatchOrderByWithRelationInput
  }

  export type AlarmWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shortId?: number
    AND?: AlarmWhereInput | AlarmWhereInput[]
    OR?: AlarmWhereInput[]
    NOT?: AlarmWhereInput | AlarmWhereInput[]
    triggeredAt?: DateTimeFilter<"Alarm"> | Date | string
    eventType?: StringFilter<"Alarm"> | string
    source?: StringFilter<"Alarm"> | string
    transmitterId?: StringFilter<"Alarm"> | string
    status?: StringFilter<"Alarm"> | string
    transmitter?: XOR<TransmitterScalarRelationFilter, TransmitterWhereInput>
    aiCalls?: AiCallListRelationFilter
    dispatch?: XOR<DispatchNullableScalarRelationFilter, DispatchWhereInput> | null
  }, "id" | "shortId">

  export type AlarmOrderByWithAggregationInput = {
    id?: SortOrder
    shortId?: SortOrder
    triggeredAt?: SortOrder
    eventType?: SortOrder
    source?: SortOrder
    transmitterId?: SortOrder
    status?: SortOrder
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
    shortId?: IntWithAggregatesFilter<"Alarm"> | number
    triggeredAt?: DateTimeWithAggregatesFilter<"Alarm"> | Date | string
    eventType?: StringWithAggregatesFilter<"Alarm"> | string
    source?: StringWithAggregatesFilter<"Alarm"> | string
    transmitterId?: StringWithAggregatesFilter<"Alarm"> | string
    status?: StringWithAggregatesFilter<"Alarm"> | string
  }

  export type AiCallWhereInput = {
    AND?: AiCallWhereInput | AiCallWhereInput[]
    OR?: AiCallWhereInput[]
    NOT?: AiCallWhereInput | AiCallWhereInput[]
    id?: StringFilter<"AiCall"> | string
    shortId?: IntFilter<"AiCall"> | number
    alarmId?: StringFilter<"AiCall"> | string
    calledAt?: DateTimeFilter<"AiCall"> | Date | string
    callDuration?: StringNullableFilter<"AiCall"> | string | null
    notes?: StringNullableFilter<"AiCall"> | string | null
    aiDecision?: StringNullableFilter<"AiCall"> | string | null
    confidenceScore?: FloatNullableFilter<"AiCall"> | number | null
    evaluatedAt?: DateTimeNullableFilter<"AiCall"> | Date | string | null
    phone?: StringNullableFilter<"AiCall"> | string | null
    alarm?: XOR<AlarmScalarRelationFilter, AlarmWhereInput>
  }

  export type AiCallOrderByWithRelationInput = {
    id?: SortOrder
    shortId?: SortOrder
    alarmId?: SortOrder
    calledAt?: SortOrder
    callDuration?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    aiDecision?: SortOrderInput | SortOrder
    confidenceScore?: SortOrderInput | SortOrder
    evaluatedAt?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    alarm?: AlarmOrderByWithRelationInput
  }

  export type AiCallWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shortId?: number
    AND?: AiCallWhereInput | AiCallWhereInput[]
    OR?: AiCallWhereInput[]
    NOT?: AiCallWhereInput | AiCallWhereInput[]
    alarmId?: StringFilter<"AiCall"> | string
    calledAt?: DateTimeFilter<"AiCall"> | Date | string
    callDuration?: StringNullableFilter<"AiCall"> | string | null
    notes?: StringNullableFilter<"AiCall"> | string | null
    aiDecision?: StringNullableFilter<"AiCall"> | string | null
    confidenceScore?: FloatNullableFilter<"AiCall"> | number | null
    evaluatedAt?: DateTimeNullableFilter<"AiCall"> | Date | string | null
    phone?: StringNullableFilter<"AiCall"> | string | null
    alarm?: XOR<AlarmScalarRelationFilter, AlarmWhereInput>
  }, "id" | "shortId">

  export type AiCallOrderByWithAggregationInput = {
    id?: SortOrder
    shortId?: SortOrder
    alarmId?: SortOrder
    calledAt?: SortOrder
    callDuration?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    aiDecision?: SortOrderInput | SortOrder
    confidenceScore?: SortOrderInput | SortOrder
    evaluatedAt?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
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
    shortId?: IntWithAggregatesFilter<"AiCall"> | number
    alarmId?: StringWithAggregatesFilter<"AiCall"> | string
    calledAt?: DateTimeWithAggregatesFilter<"AiCall"> | Date | string
    callDuration?: StringNullableWithAggregatesFilter<"AiCall"> | string | null
    notes?: StringNullableWithAggregatesFilter<"AiCall"> | string | null
    aiDecision?: StringNullableWithAggregatesFilter<"AiCall"> | string | null
    confidenceScore?: FloatNullableWithAggregatesFilter<"AiCall"> | number | null
    evaluatedAt?: DateTimeNullableWithAggregatesFilter<"AiCall"> | Date | string | null
    phone?: StringNullableWithAggregatesFilter<"AiCall"> | string | null
  }

  export type DispatchWhereInput = {
    AND?: DispatchWhereInput | DispatchWhereInput[]
    OR?: DispatchWhereInput[]
    NOT?: DispatchWhereInput | DispatchWhereInput[]
    id?: StringFilter<"Dispatch"> | string
    shortId?: IntFilter<"Dispatch"> | number
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
    shortId?: SortOrder
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
    shortId?: number
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
  }, "id" | "shortId" | "alarmId">

  export type DispatchOrderByWithAggregationInput = {
    id?: SortOrder
    shortId?: SortOrder
    dispatchedAt?: SortOrder
    arrivalTime?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    responseNotes?: SortOrderInput | SortOrder
    alarmId?: SortOrder
    guardId?: SortOrderInput | SortOrder
    vehicleId?: SortOrderInput | SortOrder
    _count?: DispatchCountOrderByAggregateInput
    _avg?: DispatchAvgOrderByAggregateInput
    _max?: DispatchMaxOrderByAggregateInput
    _min?: DispatchMinOrderByAggregateInput
    _sum?: DispatchSumOrderByAggregateInput
  }

  export type DispatchScalarWhereWithAggregatesInput = {
    AND?: DispatchScalarWhereWithAggregatesInput | DispatchScalarWhereWithAggregatesInput[]
    OR?: DispatchScalarWhereWithAggregatesInput[]
    NOT?: DispatchScalarWhereWithAggregatesInput | DispatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dispatch"> | string
    shortId?: IntWithAggregatesFilter<"Dispatch"> | number
    dispatchedAt?: DateTimeWithAggregatesFilter<"Dispatch"> | Date | string
    arrivalTime?: DateTimeNullableWithAggregatesFilter<"Dispatch"> | Date | string | null
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Dispatch"> | Date | string | null
    responseNotes?: StringNullableWithAggregatesFilter<"Dispatch"> | string | null
    alarmId?: StringWithAggregatesFilter<"Dispatch"> | string
    guardId?: StringNullableWithAggregatesFilter<"Dispatch"> | string | null
    vehicleId?: StringNullableWithAggregatesFilter<"Dispatch"> | string | null
  }

  export type OBLogWhereInput = {
    AND?: OBLogWhereInput | OBLogWhereInput[]
    OR?: OBLogWhereInput[]
    NOT?: OBLogWhereInput | OBLogWhereInput[]
    id?: StringFilter<"OBLog"> | string
    shortId?: IntFilter<"OBLog"> | number
    logTime?: DateTimeFilter<"OBLog"> | Date | string
    guardId?: StringNullableFilter<"OBLog"> | string | null
    siteId?: StringNullableFilter<"OBLog"> | string | null
    actionLog?: StringFilter<"OBLog"> | string
    notes?: StringFilter<"OBLog"> | string
    guard?: XOR<GuardNullableScalarRelationFilter, GuardWhereInput> | null
    site?: XOR<SiteNullableScalarRelationFilter, SiteWhereInput> | null
  }

  export type OBLogOrderByWithRelationInput = {
    id?: SortOrder
    shortId?: SortOrder
    logTime?: SortOrder
    guardId?: SortOrderInput | SortOrder
    siteId?: SortOrderInput | SortOrder
    actionLog?: SortOrder
    notes?: SortOrder
    guard?: GuardOrderByWithRelationInput
    site?: SiteOrderByWithRelationInput
  }

  export type OBLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shortId?: number
    AND?: OBLogWhereInput | OBLogWhereInput[]
    OR?: OBLogWhereInput[]
    NOT?: OBLogWhereInput | OBLogWhereInput[]
    logTime?: DateTimeFilter<"OBLog"> | Date | string
    guardId?: StringNullableFilter<"OBLog"> | string | null
    siteId?: StringNullableFilter<"OBLog"> | string | null
    actionLog?: StringFilter<"OBLog"> | string
    notes?: StringFilter<"OBLog"> | string
    guard?: XOR<GuardNullableScalarRelationFilter, GuardWhereInput> | null
    site?: XOR<SiteNullableScalarRelationFilter, SiteWhereInput> | null
  }, "id" | "shortId">

  export type OBLogOrderByWithAggregationInput = {
    id?: SortOrder
    shortId?: SortOrder
    logTime?: SortOrder
    guardId?: SortOrderInput | SortOrder
    siteId?: SortOrderInput | SortOrder
    actionLog?: SortOrder
    notes?: SortOrder
    _count?: OBLogCountOrderByAggregateInput
    _avg?: OBLogAvgOrderByAggregateInput
    _max?: OBLogMaxOrderByAggregateInput
    _min?: OBLogMinOrderByAggregateInput
    _sum?: OBLogSumOrderByAggregateInput
  }

  export type OBLogScalarWhereWithAggregatesInput = {
    AND?: OBLogScalarWhereWithAggregatesInput | OBLogScalarWhereWithAggregatesInput[]
    OR?: OBLogScalarWhereWithAggregatesInput[]
    NOT?: OBLogScalarWhereWithAggregatesInput | OBLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OBLog"> | string
    shortId?: IntWithAggregatesFilter<"OBLog"> | number
    logTime?: DateTimeWithAggregatesFilter<"OBLog"> | Date | string
    guardId?: StringNullableWithAggregatesFilter<"OBLog"> | string | null
    siteId?: StringNullableWithAggregatesFilter<"OBLog"> | string | null
    actionLog?: StringWithAggregatesFilter<"OBLog"> | string
    notes?: StringWithAggregatesFilter<"OBLog"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    shortId?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    roleId?: StringFilter<"User"> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    shortId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    roleId?: SortOrder
    role?: RoleOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shortId?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    roleId?: StringFilter<"User"> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "shortId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    shortId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    roleId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    shortId?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    roleId?: StringWithAggregatesFilter<"User"> | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    shortId?: IntFilter<"Vehicle"> | number
    name?: StringFilter<"Vehicle"> | string
    plate?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    status?: StringFilter<"Vehicle"> | string
    dispatches?: DispatchListRelationFilter
    guards?: GuardListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    plate?: SortOrder
    model?: SortOrder
    status?: SortOrder
    dispatches?: DispatchOrderByRelationAggregateInput
    guards?: GuardOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shortId?: number
    plate?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    name?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    status?: StringFilter<"Vehicle"> | string
    dispatches?: DispatchListRelationFilter
    guards?: GuardListRelationFilter
  }, "id" | "shortId" | "plate">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    plate?: SortOrder
    model?: SortOrder
    status?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    shortId?: IntWithAggregatesFilter<"Vehicle"> | number
    name?: StringWithAggregatesFilter<"Vehicle"> | string
    plate?: StringWithAggregatesFilter<"Vehicle"> | string
    model?: StringWithAggregatesFilter<"Vehicle"> | string
    status?: StringWithAggregatesFilter<"Vehicle"> | string
  }

  export type GuardWhereInput = {
    AND?: GuardWhereInput | GuardWhereInput[]
    OR?: GuardWhereInput[]
    NOT?: GuardWhereInput | GuardWhereInput[]
    id?: StringFilter<"Guard"> | string
    shortId?: IntFilter<"Guard"> | number
    name?: StringFilter<"Guard"> | string
    phone?: StringFilter<"Guard"> | string
    status?: StringFilter<"Guard"> | string
    assignedVehicleId?: StringNullableFilter<"Guard"> | string | null
    assignedVehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
    dispatches?: DispatchListRelationFilter
    OBLogs?: OBLogListRelationFilter
  }

  export type GuardOrderByWithRelationInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    assignedVehicleId?: SortOrderInput | SortOrder
    assignedVehicle?: VehicleOrderByWithRelationInput
    dispatches?: DispatchOrderByRelationAggregateInput
    OBLogs?: OBLogOrderByRelationAggregateInput
  }

  export type GuardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shortId?: number
    AND?: GuardWhereInput | GuardWhereInput[]
    OR?: GuardWhereInput[]
    NOT?: GuardWhereInput | GuardWhereInput[]
    name?: StringFilter<"Guard"> | string
    phone?: StringFilter<"Guard"> | string
    status?: StringFilter<"Guard"> | string
    assignedVehicleId?: StringNullableFilter<"Guard"> | string | null
    assignedVehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
    dispatches?: DispatchListRelationFilter
    OBLogs?: OBLogListRelationFilter
  }, "id" | "shortId">

  export type GuardOrderByWithAggregationInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    assignedVehicleId?: SortOrderInput | SortOrder
    _count?: GuardCountOrderByAggregateInput
    _avg?: GuardAvgOrderByAggregateInput
    _max?: GuardMaxOrderByAggregateInput
    _min?: GuardMinOrderByAggregateInput
    _sum?: GuardSumOrderByAggregateInput
  }

  export type GuardScalarWhereWithAggregatesInput = {
    AND?: GuardScalarWhereWithAggregatesInput | GuardScalarWhereWithAggregatesInput[]
    OR?: GuardScalarWhereWithAggregatesInput[]
    NOT?: GuardScalarWhereWithAggregatesInput | GuardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guard"> | string
    shortId?: IntWithAggregatesFilter<"Guard"> | number
    name?: StringWithAggregatesFilter<"Guard"> | string
    phone?: StringWithAggregatesFilter<"Guard"> | string
    status?: StringWithAggregatesFilter<"Guard"> | string
    assignedVehicleId?: StringNullableWithAggregatesFilter<"Guard"> | string | null
  }

  export type ClientCreateInput = {
    id?: string
    shortId?: number
    surname: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    sites?: SiteCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    shortId?: number
    surname: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    sites?: SiteUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sites?: SiteUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sites?: SiteUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    shortId?: number
    surname: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteCreateInput = {
    id?: string
    shortId?: number
    name: string
    address: string
    client: ClientCreateNestedOneWithoutSitesInput
    transmitters?: TransmitterCreateNestedManyWithoutSiteInput
    OBLogs?: OBLogCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateInput = {
    id?: string
    shortId?: number
    name: string
    address: string
    clientId: string
    transmitters?: TransmitterUncheckedCreateNestedManyWithoutSiteInput
    OBLogs?: OBLogUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutSitesNestedInput
    transmitters?: TransmitterUpdateManyWithoutSiteNestedInput
    OBLogs?: OBLogUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    transmitters?: TransmitterUncheckedUpdateManyWithoutSiteNestedInput
    OBLogs?: OBLogUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteCreateManyInput = {
    id?: string
    shortId?: number
    name: string
    address: string
    clientId: string
  }

  export type SiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type SiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type TransmitterCreateInput = {
    id?: string
    referenceCode: string
    site: SiteCreateNestedOneWithoutTransmittersInput
    alarms?: AlarmCreateNestedManyWithoutTransmitterInput
  }

  export type TransmitterUncheckedCreateInput = {
    id?: string
    referenceCode: string
    siteId: string
    alarms?: AlarmUncheckedCreateNestedManyWithoutTransmitterInput
  }

  export type TransmitterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    site?: SiteUpdateOneRequiredWithoutTransmittersNestedInput
    alarms?: AlarmUpdateManyWithoutTransmitterNestedInput
  }

  export type TransmitterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    alarms?: AlarmUncheckedUpdateManyWithoutTransmitterNestedInput
  }

  export type TransmitterCreateManyInput = {
    id?: string
    referenceCode: string
    siteId: string
  }

  export type TransmitterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
  }

  export type TransmitterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
  }

  export type AlarmCreateInput = {
    id?: string
    shortId?: number
    triggeredAt: Date | string
    eventType: string
    source: string
    status?: string
    transmitter: TransmitterCreateNestedOneWithoutAlarmsInput
    aiCalls?: AiCallCreateNestedManyWithoutAlarmInput
    dispatch?: DispatchCreateNestedOneWithoutAlarmInput
  }

  export type AlarmUncheckedCreateInput = {
    id?: string
    shortId?: number
    triggeredAt: Date | string
    eventType: string
    source: string
    transmitterId: string
    status?: string
    aiCalls?: AiCallUncheckedCreateNestedManyWithoutAlarmInput
    dispatch?: DispatchUncheckedCreateNestedOneWithoutAlarmInput
  }

  export type AlarmUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transmitter?: TransmitterUpdateOneRequiredWithoutAlarmsNestedInput
    aiCalls?: AiCallUpdateManyWithoutAlarmNestedInput
    dispatch?: DispatchUpdateOneWithoutAlarmNestedInput
  }

  export type AlarmUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    transmitterId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiCalls?: AiCallUncheckedUpdateManyWithoutAlarmNestedInput
    dispatch?: DispatchUncheckedUpdateOneWithoutAlarmNestedInput
  }

  export type AlarmCreateManyInput = {
    id?: string
    shortId?: number
    triggeredAt: Date | string
    eventType: string
    source: string
    transmitterId: string
    status?: string
  }

  export type AlarmUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AlarmUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    transmitterId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AiCallCreateInput = {
    id?: string
    shortId?: number
    calledAt?: Date | string
    callDuration?: string | null
    notes?: string | null
    aiDecision?: string | null
    confidenceScore?: number | null
    evaluatedAt?: Date | string | null
    phone?: string | null
    alarm: AlarmCreateNestedOneWithoutAiCallsInput
  }

  export type AiCallUncheckedCreateInput = {
    id?: string
    shortId?: number
    alarmId: string
    calledAt?: Date | string
    callDuration?: string | null
    notes?: string | null
    aiDecision?: string | null
    confidenceScore?: number | null
    evaluatedAt?: Date | string | null
    phone?: string | null
  }

  export type AiCallUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    calledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callDuration?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiDecision?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    evaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    alarm?: AlarmUpdateOneRequiredWithoutAiCallsNestedInput
  }

  export type AiCallUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    alarmId?: StringFieldUpdateOperationsInput | string
    calledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callDuration?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiDecision?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    evaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AiCallCreateManyInput = {
    id?: string
    shortId?: number
    alarmId: string
    calledAt?: Date | string
    callDuration?: string | null
    notes?: string | null
    aiDecision?: string | null
    confidenceScore?: number | null
    evaluatedAt?: Date | string | null
    phone?: string | null
  }

  export type AiCallUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    calledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callDuration?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiDecision?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    evaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AiCallUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    alarmId?: StringFieldUpdateOperationsInput | string
    calledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callDuration?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiDecision?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    evaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispatchCreateInput = {
    id?: string
    shortId?: number
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
    shortId?: number
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
    shortId?: IntFieldUpdateOperationsInput | number
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
    shortId?: number
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
    shortId?: IntFieldUpdateOperationsInput | number
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNotes?: NullableStringFieldUpdateOperationsInput | string | null
    alarmId?: StringFieldUpdateOperationsInput | string
    guardId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OBLogCreateInput = {
    id?: string
    shortId?: number
    logTime: Date | string
    actionLog: string
    notes: string
    guard?: GuardCreateNestedOneWithoutOBLogsInput
    site?: SiteCreateNestedOneWithoutOBLogsInput
  }

  export type OBLogUncheckedCreateInput = {
    id?: string
    shortId?: number
    logTime: Date | string
    guardId?: string | null
    siteId?: string | null
    actionLog: string
    notes: string
  }

  export type OBLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actionLog?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    guard?: GuardUpdateOneWithoutOBLogsNestedInput
    site?: SiteUpdateOneWithoutOBLogsNestedInput
  }

  export type OBLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    guardId?: NullableStringFieldUpdateOperationsInput | string | null
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
    actionLog?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type OBLogCreateManyInput = {
    id?: string
    shortId?: number
    logTime: Date | string
    guardId?: string | null
    siteId?: string | null
    actionLog: string
    notes: string
  }

  export type OBLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actionLog?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type OBLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    guardId?: NullableStringFieldUpdateOperationsInput | string | null
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
    actionLog?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    shortId?: number
    email: string
    password: string
    name: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    shortId?: number
    email: string
    password: string
    name: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
    roleId: string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    shortId?: number
    email: string
    password: string
    name: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
    roleId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type RoleCreateInput = {
    id: string
    name: string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id: string
    name: string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id: string
    name: string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleCreateInput = {
    id?: string
    shortId?: number
    name: string
    plate: string
    model: string
    status: string
    dispatches?: DispatchCreateNestedManyWithoutVehicleInput
    guards?: GuardCreateNestedManyWithoutAssignedVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    shortId?: number
    name: string
    plate: string
    model: string
    status: string
    dispatches?: DispatchUncheckedCreateNestedManyWithoutVehicleInput
    guards?: GuardUncheckedCreateNestedManyWithoutAssignedVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dispatches?: DispatchUpdateManyWithoutVehicleNestedInput
    guards?: GuardUpdateManyWithoutAssignedVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dispatches?: DispatchUncheckedUpdateManyWithoutVehicleNestedInput
    guards?: GuardUncheckedUpdateManyWithoutAssignedVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    shortId?: number
    name: string
    plate: string
    model: string
    status: string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type GuardCreateInput = {
    id?: string
    shortId?: number
    name: string
    phone: string
    status: string
    assignedVehicle?: VehicleCreateNestedOneWithoutGuardsInput
    dispatches?: DispatchCreateNestedManyWithoutGuardInput
    OBLogs?: OBLogCreateNestedManyWithoutGuardInput
  }

  export type GuardUncheckedCreateInput = {
    id?: string
    shortId?: number
    name: string
    phone: string
    status: string
    assignedVehicleId?: string | null
    dispatches?: DispatchUncheckedCreateNestedManyWithoutGuardInput
    OBLogs?: OBLogUncheckedCreateNestedManyWithoutGuardInput
  }

  export type GuardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedVehicle?: VehicleUpdateOneWithoutGuardsNestedInput
    dispatches?: DispatchUpdateManyWithoutGuardNestedInput
    OBLogs?: OBLogUpdateManyWithoutGuardNestedInput
  }

  export type GuardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedVehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    dispatches?: DispatchUncheckedUpdateManyWithoutGuardNestedInput
    OBLogs?: OBLogUncheckedUpdateManyWithoutGuardNestedInput
  }

  export type GuardCreateManyInput = {
    id?: string
    shortId?: number
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
    shortId?: IntFieldUpdateOperationsInput | number
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

  export type SiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    surname?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    shortId?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    surname?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    surname?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    shortId?: SortOrder
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

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type TransmitterListRelationFilter = {
    every?: TransmitterWhereInput
    some?: TransmitterWhereInput
    none?: TransmitterWhereInput
  }

  export type OBLogListRelationFilter = {
    every?: OBLogWhereInput
    some?: OBLogWhereInput
    none?: OBLogWhereInput
  }

  export type TransmitterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OBLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SiteCountOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    clientId?: SortOrder
  }

  export type SiteAvgOrderByAggregateInput = {
    shortId?: SortOrder
  }

  export type SiteMaxOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    clientId?: SortOrder
  }

  export type SiteMinOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    address?: SortOrder
    clientId?: SortOrder
  }

  export type SiteSumOrderByAggregateInput = {
    shortId?: SortOrder
  }

  export type SiteScalarRelationFilter = {
    is?: SiteWhereInput
    isNot?: SiteWhereInput
  }

  export type AlarmListRelationFilter = {
    every?: AlarmWhereInput
    some?: AlarmWhereInput
    none?: AlarmWhereInput
  }

  export type AlarmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransmitterCountOrderByAggregateInput = {
    id?: SortOrder
    referenceCode?: SortOrder
    siteId?: SortOrder
  }

  export type TransmitterMaxOrderByAggregateInput = {
    id?: SortOrder
    referenceCode?: SortOrder
    siteId?: SortOrder
  }

  export type TransmitterMinOrderByAggregateInput = {
    id?: SortOrder
    referenceCode?: SortOrder
    siteId?: SortOrder
  }

  export type TransmitterScalarRelationFilter = {
    is?: TransmitterWhereInput
    isNot?: TransmitterWhereInput
  }

  export type AiCallListRelationFilter = {
    every?: AiCallWhereInput
    some?: AiCallWhereInput
    none?: AiCallWhereInput
  }

  export type DispatchNullableScalarRelationFilter = {
    is?: DispatchWhereInput | null
    isNot?: DispatchWhereInput | null
  }

  export type AiCallOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlarmCountOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    triggeredAt?: SortOrder
    eventType?: SortOrder
    source?: SortOrder
    transmitterId?: SortOrder
    status?: SortOrder
  }

  export type AlarmAvgOrderByAggregateInput = {
    shortId?: SortOrder
  }

  export type AlarmMaxOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    triggeredAt?: SortOrder
    eventType?: SortOrder
    source?: SortOrder
    transmitterId?: SortOrder
    status?: SortOrder
  }

  export type AlarmMinOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    triggeredAt?: SortOrder
    eventType?: SortOrder
    source?: SortOrder
    transmitterId?: SortOrder
    status?: SortOrder
  }

  export type AlarmSumOrderByAggregateInput = {
    shortId?: SortOrder
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

  export type AlarmScalarRelationFilter = {
    is?: AlarmWhereInput
    isNot?: AlarmWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AiCallCountOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    alarmId?: SortOrder
    calledAt?: SortOrder
    callDuration?: SortOrder
    notes?: SortOrder
    aiDecision?: SortOrder
    confidenceScore?: SortOrder
    evaluatedAt?: SortOrder
    phone?: SortOrder
  }

  export type AiCallAvgOrderByAggregateInput = {
    shortId?: SortOrder
    confidenceScore?: SortOrder
  }

  export type AiCallMaxOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    alarmId?: SortOrder
    calledAt?: SortOrder
    callDuration?: SortOrder
    notes?: SortOrder
    aiDecision?: SortOrder
    confidenceScore?: SortOrder
    evaluatedAt?: SortOrder
    phone?: SortOrder
  }

  export type AiCallMinOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    alarmId?: SortOrder
    calledAt?: SortOrder
    callDuration?: SortOrder
    notes?: SortOrder
    aiDecision?: SortOrder
    confidenceScore?: SortOrder
    evaluatedAt?: SortOrder
    phone?: SortOrder
  }

  export type AiCallSumOrderByAggregateInput = {
    shortId?: SortOrder
    confidenceScore?: SortOrder
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
    shortId?: SortOrder
    dispatchedAt?: SortOrder
    arrivalTime?: SortOrder
    resolvedAt?: SortOrder
    responseNotes?: SortOrder
    alarmId?: SortOrder
    guardId?: SortOrder
    vehicleId?: SortOrder
  }

  export type DispatchAvgOrderByAggregateInput = {
    shortId?: SortOrder
  }

  export type DispatchMaxOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
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
    shortId?: SortOrder
    dispatchedAt?: SortOrder
    arrivalTime?: SortOrder
    resolvedAt?: SortOrder
    responseNotes?: SortOrder
    alarmId?: SortOrder
    guardId?: SortOrder
    vehicleId?: SortOrder
  }

  export type DispatchSumOrderByAggregateInput = {
    shortId?: SortOrder
  }

  export type SiteNullableScalarRelationFilter = {
    is?: SiteWhereInput | null
    isNot?: SiteWhereInput | null
  }

  export type OBLogCountOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    logTime?: SortOrder
    guardId?: SortOrder
    siteId?: SortOrder
    actionLog?: SortOrder
    notes?: SortOrder
  }

  export type OBLogAvgOrderByAggregateInput = {
    shortId?: SortOrder
  }

  export type OBLogMaxOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    logTime?: SortOrder
    guardId?: SortOrder
    siteId?: SortOrder
    actionLog?: SortOrder
    notes?: SortOrder
  }

  export type OBLogMinOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    logTime?: SortOrder
    guardId?: SortOrder
    siteId?: SortOrder
    actionLog?: SortOrder
    notes?: SortOrder
  }

  export type OBLogSumOrderByAggregateInput = {
    shortId?: SortOrder
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    roleId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    shortId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    roleId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    roleId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    shortId?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
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
    shortId?: SortOrder
    name?: SortOrder
    plate?: SortOrder
    model?: SortOrder
    status?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    shortId?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    plate?: SortOrder
    model?: SortOrder
    status?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    plate?: SortOrder
    model?: SortOrder
    status?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    shortId?: SortOrder
  }

  export type GuardCountOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    assignedVehicleId?: SortOrder
  }

  export type GuardAvgOrderByAggregateInput = {
    shortId?: SortOrder
  }

  export type GuardMaxOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    assignedVehicleId?: SortOrder
  }

  export type GuardMinOrderByAggregateInput = {
    id?: SortOrder
    shortId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    assignedVehicleId?: SortOrder
  }

  export type GuardSumOrderByAggregateInput = {
    shortId?: SortOrder
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type TransmitterCreateNestedManyWithoutSiteInput = {
    create?: XOR<TransmitterCreateWithoutSiteInput, TransmitterUncheckedCreateWithoutSiteInput> | TransmitterCreateWithoutSiteInput[] | TransmitterUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: TransmitterCreateOrConnectWithoutSiteInput | TransmitterCreateOrConnectWithoutSiteInput[]
    createMany?: TransmitterCreateManySiteInputEnvelope
    connect?: TransmitterWhereUniqueInput | TransmitterWhereUniqueInput[]
  }

  export type OBLogCreateNestedManyWithoutSiteInput = {
    create?: XOR<OBLogCreateWithoutSiteInput, OBLogUncheckedCreateWithoutSiteInput> | OBLogCreateWithoutSiteInput[] | OBLogUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: OBLogCreateOrConnectWithoutSiteInput | OBLogCreateOrConnectWithoutSiteInput[]
    createMany?: OBLogCreateManySiteInputEnvelope
    connect?: OBLogWhereUniqueInput | OBLogWhereUniqueInput[]
  }

  export type TransmitterUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<TransmitterCreateWithoutSiteInput, TransmitterUncheckedCreateWithoutSiteInput> | TransmitterCreateWithoutSiteInput[] | TransmitterUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: TransmitterCreateOrConnectWithoutSiteInput | TransmitterCreateOrConnectWithoutSiteInput[]
    createMany?: TransmitterCreateManySiteInputEnvelope
    connect?: TransmitterWhereUniqueInput | TransmitterWhereUniqueInput[]
  }

  export type OBLogUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<OBLogCreateWithoutSiteInput, OBLogUncheckedCreateWithoutSiteInput> | OBLogCreateWithoutSiteInput[] | OBLogUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: OBLogCreateOrConnectWithoutSiteInput | OBLogCreateOrConnectWithoutSiteInput[]
    createMany?: OBLogCreateManySiteInputEnvelope
    connect?: OBLogWhereUniqueInput | OBLogWhereUniqueInput[]
  }

  export type ClientUpdateOneRequiredWithoutSitesNestedInput = {
    create?: XOR<ClientCreateWithoutSitesInput, ClientUncheckedCreateWithoutSitesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSitesInput
    upsert?: ClientUpsertWithoutSitesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutSitesInput, ClientUpdateWithoutSitesInput>, ClientUncheckedUpdateWithoutSitesInput>
  }

  export type TransmitterUpdateManyWithoutSiteNestedInput = {
    create?: XOR<TransmitterCreateWithoutSiteInput, TransmitterUncheckedCreateWithoutSiteInput> | TransmitterCreateWithoutSiteInput[] | TransmitterUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: TransmitterCreateOrConnectWithoutSiteInput | TransmitterCreateOrConnectWithoutSiteInput[]
    upsert?: TransmitterUpsertWithWhereUniqueWithoutSiteInput | TransmitterUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: TransmitterCreateManySiteInputEnvelope
    set?: TransmitterWhereUniqueInput | TransmitterWhereUniqueInput[]
    disconnect?: TransmitterWhereUniqueInput | TransmitterWhereUniqueInput[]
    delete?: TransmitterWhereUniqueInput | TransmitterWhereUniqueInput[]
    connect?: TransmitterWhereUniqueInput | TransmitterWhereUniqueInput[]
    update?: TransmitterUpdateWithWhereUniqueWithoutSiteInput | TransmitterUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: TransmitterUpdateManyWithWhereWithoutSiteInput | TransmitterUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: TransmitterScalarWhereInput | TransmitterScalarWhereInput[]
  }

  export type OBLogUpdateManyWithoutSiteNestedInput = {
    create?: XOR<OBLogCreateWithoutSiteInput, OBLogUncheckedCreateWithoutSiteInput> | OBLogCreateWithoutSiteInput[] | OBLogUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: OBLogCreateOrConnectWithoutSiteInput | OBLogCreateOrConnectWithoutSiteInput[]
    upsert?: OBLogUpsertWithWhereUniqueWithoutSiteInput | OBLogUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: OBLogCreateManySiteInputEnvelope
    set?: OBLogWhereUniqueInput | OBLogWhereUniqueInput[]
    disconnect?: OBLogWhereUniqueInput | OBLogWhereUniqueInput[]
    delete?: OBLogWhereUniqueInput | OBLogWhereUniqueInput[]
    connect?: OBLogWhereUniqueInput | OBLogWhereUniqueInput[]
    update?: OBLogUpdateWithWhereUniqueWithoutSiteInput | OBLogUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: OBLogUpdateManyWithWhereWithoutSiteInput | OBLogUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: OBLogScalarWhereInput | OBLogScalarWhereInput[]
  }

  export type TransmitterUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<TransmitterCreateWithoutSiteInput, TransmitterUncheckedCreateWithoutSiteInput> | TransmitterCreateWithoutSiteInput[] | TransmitterUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: TransmitterCreateOrConnectWithoutSiteInput | TransmitterCreateOrConnectWithoutSiteInput[]
    upsert?: TransmitterUpsertWithWhereUniqueWithoutSiteInput | TransmitterUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: TransmitterCreateManySiteInputEnvelope
    set?: TransmitterWhereUniqueInput | TransmitterWhereUniqueInput[]
    disconnect?: TransmitterWhereUniqueInput | TransmitterWhereUniqueInput[]
    delete?: TransmitterWhereUniqueInput | TransmitterWhereUniqueInput[]
    connect?: TransmitterWhereUniqueInput | TransmitterWhereUniqueInput[]
    update?: TransmitterUpdateWithWhereUniqueWithoutSiteInput | TransmitterUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: TransmitterUpdateManyWithWhereWithoutSiteInput | TransmitterUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: TransmitterScalarWhereInput | TransmitterScalarWhereInput[]
  }

  export type OBLogUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<OBLogCreateWithoutSiteInput, OBLogUncheckedCreateWithoutSiteInput> | OBLogCreateWithoutSiteInput[] | OBLogUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: OBLogCreateOrConnectWithoutSiteInput | OBLogCreateOrConnectWithoutSiteInput[]
    upsert?: OBLogUpsertWithWhereUniqueWithoutSiteInput | OBLogUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: OBLogCreateManySiteInputEnvelope
    set?: OBLogWhereUniqueInput | OBLogWhereUniqueInput[]
    disconnect?: OBLogWhereUniqueInput | OBLogWhereUniqueInput[]
    delete?: OBLogWhereUniqueInput | OBLogWhereUniqueInput[]
    connect?: OBLogWhereUniqueInput | OBLogWhereUniqueInput[]
    update?: OBLogUpdateWithWhereUniqueWithoutSiteInput | OBLogUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: OBLogUpdateManyWithWhereWithoutSiteInput | OBLogUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: OBLogScalarWhereInput | OBLogScalarWhereInput[]
  }

  export type SiteCreateNestedOneWithoutTransmittersInput = {
    create?: XOR<SiteCreateWithoutTransmittersInput, SiteUncheckedCreateWithoutTransmittersInput>
    connectOrCreate?: SiteCreateOrConnectWithoutTransmittersInput
    connect?: SiteWhereUniqueInput
  }

  export type AlarmCreateNestedManyWithoutTransmitterInput = {
    create?: XOR<AlarmCreateWithoutTransmitterInput, AlarmUncheckedCreateWithoutTransmitterInput> | AlarmCreateWithoutTransmitterInput[] | AlarmUncheckedCreateWithoutTransmitterInput[]
    connectOrCreate?: AlarmCreateOrConnectWithoutTransmitterInput | AlarmCreateOrConnectWithoutTransmitterInput[]
    createMany?: AlarmCreateManyTransmitterInputEnvelope
    connect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
  }

  export type AlarmUncheckedCreateNestedManyWithoutTransmitterInput = {
    create?: XOR<AlarmCreateWithoutTransmitterInput, AlarmUncheckedCreateWithoutTransmitterInput> | AlarmCreateWithoutTransmitterInput[] | AlarmUncheckedCreateWithoutTransmitterInput[]
    connectOrCreate?: AlarmCreateOrConnectWithoutTransmitterInput | AlarmCreateOrConnectWithoutTransmitterInput[]
    createMany?: AlarmCreateManyTransmitterInputEnvelope
    connect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
  }

  export type SiteUpdateOneRequiredWithoutTransmittersNestedInput = {
    create?: XOR<SiteCreateWithoutTransmittersInput, SiteUncheckedCreateWithoutTransmittersInput>
    connectOrCreate?: SiteCreateOrConnectWithoutTransmittersInput
    upsert?: SiteUpsertWithoutTransmittersInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutTransmittersInput, SiteUpdateWithoutTransmittersInput>, SiteUncheckedUpdateWithoutTransmittersInput>
  }

  export type AlarmUpdateManyWithoutTransmitterNestedInput = {
    create?: XOR<AlarmCreateWithoutTransmitterInput, AlarmUncheckedCreateWithoutTransmitterInput> | AlarmCreateWithoutTransmitterInput[] | AlarmUncheckedCreateWithoutTransmitterInput[]
    connectOrCreate?: AlarmCreateOrConnectWithoutTransmitterInput | AlarmCreateOrConnectWithoutTransmitterInput[]
    upsert?: AlarmUpsertWithWhereUniqueWithoutTransmitterInput | AlarmUpsertWithWhereUniqueWithoutTransmitterInput[]
    createMany?: AlarmCreateManyTransmitterInputEnvelope
    set?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    disconnect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    delete?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    connect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    update?: AlarmUpdateWithWhereUniqueWithoutTransmitterInput | AlarmUpdateWithWhereUniqueWithoutTransmitterInput[]
    updateMany?: AlarmUpdateManyWithWhereWithoutTransmitterInput | AlarmUpdateManyWithWhereWithoutTransmitterInput[]
    deleteMany?: AlarmScalarWhereInput | AlarmScalarWhereInput[]
  }

  export type AlarmUncheckedUpdateManyWithoutTransmitterNestedInput = {
    create?: XOR<AlarmCreateWithoutTransmitterInput, AlarmUncheckedCreateWithoutTransmitterInput> | AlarmCreateWithoutTransmitterInput[] | AlarmUncheckedCreateWithoutTransmitterInput[]
    connectOrCreate?: AlarmCreateOrConnectWithoutTransmitterInput | AlarmCreateOrConnectWithoutTransmitterInput[]
    upsert?: AlarmUpsertWithWhereUniqueWithoutTransmitterInput | AlarmUpsertWithWhereUniqueWithoutTransmitterInput[]
    createMany?: AlarmCreateManyTransmitterInputEnvelope
    set?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    disconnect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    delete?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    connect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    update?: AlarmUpdateWithWhereUniqueWithoutTransmitterInput | AlarmUpdateWithWhereUniqueWithoutTransmitterInput[]
    updateMany?: AlarmUpdateManyWithWhereWithoutTransmitterInput | AlarmUpdateManyWithWhereWithoutTransmitterInput[]
    deleteMany?: AlarmScalarWhereInput | AlarmScalarWhereInput[]
  }

  export type TransmitterCreateNestedOneWithoutAlarmsInput = {
    create?: XOR<TransmitterCreateWithoutAlarmsInput, TransmitterUncheckedCreateWithoutAlarmsInput>
    connectOrCreate?: TransmitterCreateOrConnectWithoutAlarmsInput
    connect?: TransmitterWhereUniqueInput
  }

  export type AiCallCreateNestedManyWithoutAlarmInput = {
    create?: XOR<AiCallCreateWithoutAlarmInput, AiCallUncheckedCreateWithoutAlarmInput> | AiCallCreateWithoutAlarmInput[] | AiCallUncheckedCreateWithoutAlarmInput[]
    connectOrCreate?: AiCallCreateOrConnectWithoutAlarmInput | AiCallCreateOrConnectWithoutAlarmInput[]
    createMany?: AiCallCreateManyAlarmInputEnvelope
    connect?: AiCallWhereUniqueInput | AiCallWhereUniqueInput[]
  }

  export type DispatchCreateNestedOneWithoutAlarmInput = {
    create?: XOR<DispatchCreateWithoutAlarmInput, DispatchUncheckedCreateWithoutAlarmInput>
    connectOrCreate?: DispatchCreateOrConnectWithoutAlarmInput
    connect?: DispatchWhereUniqueInput
  }

  export type AiCallUncheckedCreateNestedManyWithoutAlarmInput = {
    create?: XOR<AiCallCreateWithoutAlarmInput, AiCallUncheckedCreateWithoutAlarmInput> | AiCallCreateWithoutAlarmInput[] | AiCallUncheckedCreateWithoutAlarmInput[]
    connectOrCreate?: AiCallCreateOrConnectWithoutAlarmInput | AiCallCreateOrConnectWithoutAlarmInput[]
    createMany?: AiCallCreateManyAlarmInputEnvelope
    connect?: AiCallWhereUniqueInput | AiCallWhereUniqueInput[]
  }

  export type DispatchUncheckedCreateNestedOneWithoutAlarmInput = {
    create?: XOR<DispatchCreateWithoutAlarmInput, DispatchUncheckedCreateWithoutAlarmInput>
    connectOrCreate?: DispatchCreateOrConnectWithoutAlarmInput
    connect?: DispatchWhereUniqueInput
  }

  export type TransmitterUpdateOneRequiredWithoutAlarmsNestedInput = {
    create?: XOR<TransmitterCreateWithoutAlarmsInput, TransmitterUncheckedCreateWithoutAlarmsInput>
    connectOrCreate?: TransmitterCreateOrConnectWithoutAlarmsInput
    upsert?: TransmitterUpsertWithoutAlarmsInput
    connect?: TransmitterWhereUniqueInput
    update?: XOR<XOR<TransmitterUpdateToOneWithWhereWithoutAlarmsInput, TransmitterUpdateWithoutAlarmsInput>, TransmitterUncheckedUpdateWithoutAlarmsInput>
  }

  export type AiCallUpdateManyWithoutAlarmNestedInput = {
    create?: XOR<AiCallCreateWithoutAlarmInput, AiCallUncheckedCreateWithoutAlarmInput> | AiCallCreateWithoutAlarmInput[] | AiCallUncheckedCreateWithoutAlarmInput[]
    connectOrCreate?: AiCallCreateOrConnectWithoutAlarmInput | AiCallCreateOrConnectWithoutAlarmInput[]
    upsert?: AiCallUpsertWithWhereUniqueWithoutAlarmInput | AiCallUpsertWithWhereUniqueWithoutAlarmInput[]
    createMany?: AiCallCreateManyAlarmInputEnvelope
    set?: AiCallWhereUniqueInput | AiCallWhereUniqueInput[]
    disconnect?: AiCallWhereUniqueInput | AiCallWhereUniqueInput[]
    delete?: AiCallWhereUniqueInput | AiCallWhereUniqueInput[]
    connect?: AiCallWhereUniqueInput | AiCallWhereUniqueInput[]
    update?: AiCallUpdateWithWhereUniqueWithoutAlarmInput | AiCallUpdateWithWhereUniqueWithoutAlarmInput[]
    updateMany?: AiCallUpdateManyWithWhereWithoutAlarmInput | AiCallUpdateManyWithWhereWithoutAlarmInput[]
    deleteMany?: AiCallScalarWhereInput | AiCallScalarWhereInput[]
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

  export type AiCallUncheckedUpdateManyWithoutAlarmNestedInput = {
    create?: XOR<AiCallCreateWithoutAlarmInput, AiCallUncheckedCreateWithoutAlarmInput> | AiCallCreateWithoutAlarmInput[] | AiCallUncheckedCreateWithoutAlarmInput[]
    connectOrCreate?: AiCallCreateOrConnectWithoutAlarmInput | AiCallCreateOrConnectWithoutAlarmInput[]
    upsert?: AiCallUpsertWithWhereUniqueWithoutAlarmInput | AiCallUpsertWithWhereUniqueWithoutAlarmInput[]
    createMany?: AiCallCreateManyAlarmInputEnvelope
    set?: AiCallWhereUniqueInput | AiCallWhereUniqueInput[]
    disconnect?: AiCallWhereUniqueInput | AiCallWhereUniqueInput[]
    delete?: AiCallWhereUniqueInput | AiCallWhereUniqueInput[]
    connect?: AiCallWhereUniqueInput | AiCallWhereUniqueInput[]
    update?: AiCallUpdateWithWhereUniqueWithoutAlarmInput | AiCallUpdateWithWhereUniqueWithoutAlarmInput[]
    updateMany?: AiCallUpdateManyWithWhereWithoutAlarmInput | AiCallUpdateManyWithWhereWithoutAlarmInput[]
    deleteMany?: AiCallScalarWhereInput | AiCallScalarWhereInput[]
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

  export type AlarmCreateNestedOneWithoutAiCallsInput = {
    create?: XOR<AlarmCreateWithoutAiCallsInput, AlarmUncheckedCreateWithoutAiCallsInput>
    connectOrCreate?: AlarmCreateOrConnectWithoutAiCallsInput
    connect?: AlarmWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AlarmUpdateOneRequiredWithoutAiCallsNestedInput = {
    create?: XOR<AlarmCreateWithoutAiCallsInput, AlarmUncheckedCreateWithoutAiCallsInput>
    connectOrCreate?: AlarmCreateOrConnectWithoutAiCallsInput
    upsert?: AlarmUpsertWithoutAiCallsInput
    connect?: AlarmWhereUniqueInput
    update?: XOR<XOR<AlarmUpdateToOneWithWhereWithoutAiCallsInput, AlarmUpdateWithoutAiCallsInput>, AlarmUncheckedUpdateWithoutAiCallsInput>
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

  export type GuardCreateNestedOneWithoutOBLogsInput = {
    create?: XOR<GuardCreateWithoutOBLogsInput, GuardUncheckedCreateWithoutOBLogsInput>
    connectOrCreate?: GuardCreateOrConnectWithoutOBLogsInput
    connect?: GuardWhereUniqueInput
  }

  export type SiteCreateNestedOneWithoutOBLogsInput = {
    create?: XOR<SiteCreateWithoutOBLogsInput, SiteUncheckedCreateWithoutOBLogsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutOBLogsInput
    connect?: SiteWhereUniqueInput
  }

  export type GuardUpdateOneWithoutOBLogsNestedInput = {
    create?: XOR<GuardCreateWithoutOBLogsInput, GuardUncheckedCreateWithoutOBLogsInput>
    connectOrCreate?: GuardCreateOrConnectWithoutOBLogsInput
    upsert?: GuardUpsertWithoutOBLogsInput
    disconnect?: GuardWhereInput | boolean
    delete?: GuardWhereInput | boolean
    connect?: GuardWhereUniqueInput
    update?: XOR<XOR<GuardUpdateToOneWithWhereWithoutOBLogsInput, GuardUpdateWithoutOBLogsInput>, GuardUncheckedUpdateWithoutOBLogsInput>
  }

  export type SiteUpdateOneWithoutOBLogsNestedInput = {
    create?: XOR<SiteCreateWithoutOBLogsInput, SiteUncheckedCreateWithoutOBLogsInput>
    connectOrCreate?: SiteCreateOrConnectWithoutOBLogsInput
    upsert?: SiteUpsertWithoutOBLogsInput
    disconnect?: SiteWhereInput | boolean
    delete?: SiteWhereInput | boolean
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutOBLogsInput, SiteUpdateWithoutOBLogsInput>, SiteUncheckedUpdateWithoutOBLogsInput>
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
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

  export type OBLogCreateNestedManyWithoutGuardInput = {
    create?: XOR<OBLogCreateWithoutGuardInput, OBLogUncheckedCreateWithoutGuardInput> | OBLogCreateWithoutGuardInput[] | OBLogUncheckedCreateWithoutGuardInput[]
    connectOrCreate?: OBLogCreateOrConnectWithoutGuardInput | OBLogCreateOrConnectWithoutGuardInput[]
    createMany?: OBLogCreateManyGuardInputEnvelope
    connect?: OBLogWhereUniqueInput | OBLogWhereUniqueInput[]
  }

  export type DispatchUncheckedCreateNestedManyWithoutGuardInput = {
    create?: XOR<DispatchCreateWithoutGuardInput, DispatchUncheckedCreateWithoutGuardInput> | DispatchCreateWithoutGuardInput[] | DispatchUncheckedCreateWithoutGuardInput[]
    connectOrCreate?: DispatchCreateOrConnectWithoutGuardInput | DispatchCreateOrConnectWithoutGuardInput[]
    createMany?: DispatchCreateManyGuardInputEnvelope
    connect?: DispatchWhereUniqueInput | DispatchWhereUniqueInput[]
  }

  export type OBLogUncheckedCreateNestedManyWithoutGuardInput = {
    create?: XOR<OBLogCreateWithoutGuardInput, OBLogUncheckedCreateWithoutGuardInput> | OBLogCreateWithoutGuardInput[] | OBLogUncheckedCreateWithoutGuardInput[]
    connectOrCreate?: OBLogCreateOrConnectWithoutGuardInput | OBLogCreateOrConnectWithoutGuardInput[]
    createMany?: OBLogCreateManyGuardInputEnvelope
    connect?: OBLogWhereUniqueInput | OBLogWhereUniqueInput[]
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

  export type OBLogUpdateManyWithoutGuardNestedInput = {
    create?: XOR<OBLogCreateWithoutGuardInput, OBLogUncheckedCreateWithoutGuardInput> | OBLogCreateWithoutGuardInput[] | OBLogUncheckedCreateWithoutGuardInput[]
    connectOrCreate?: OBLogCreateOrConnectWithoutGuardInput | OBLogCreateOrConnectWithoutGuardInput[]
    upsert?: OBLogUpsertWithWhereUniqueWithoutGuardInput | OBLogUpsertWithWhereUniqueWithoutGuardInput[]
    createMany?: OBLogCreateManyGuardInputEnvelope
    set?: OBLogWhereUniqueInput | OBLogWhereUniqueInput[]
    disconnect?: OBLogWhereUniqueInput | OBLogWhereUniqueInput[]
    delete?: OBLogWhereUniqueInput | OBLogWhereUniqueInput[]
    connect?: OBLogWhereUniqueInput | OBLogWhereUniqueInput[]
    update?: OBLogUpdateWithWhereUniqueWithoutGuardInput | OBLogUpdateWithWhereUniqueWithoutGuardInput[]
    updateMany?: OBLogUpdateManyWithWhereWithoutGuardInput | OBLogUpdateManyWithWhereWithoutGuardInput[]
    deleteMany?: OBLogScalarWhereInput | OBLogScalarWhereInput[]
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

  export type OBLogUncheckedUpdateManyWithoutGuardNestedInput = {
    create?: XOR<OBLogCreateWithoutGuardInput, OBLogUncheckedCreateWithoutGuardInput> | OBLogCreateWithoutGuardInput[] | OBLogUncheckedCreateWithoutGuardInput[]
    connectOrCreate?: OBLogCreateOrConnectWithoutGuardInput | OBLogCreateOrConnectWithoutGuardInput[]
    upsert?: OBLogUpsertWithWhereUniqueWithoutGuardInput | OBLogUpsertWithWhereUniqueWithoutGuardInput[]
    createMany?: OBLogCreateManyGuardInputEnvelope
    set?: OBLogWhereUniqueInput | OBLogWhereUniqueInput[]
    disconnect?: OBLogWhereUniqueInput | OBLogWhereUniqueInput[]
    delete?: OBLogWhereUniqueInput | OBLogWhereUniqueInput[]
    connect?: OBLogWhereUniqueInput | OBLogWhereUniqueInput[]
    update?: OBLogUpdateWithWhereUniqueWithoutGuardInput | OBLogUpdateWithWhereUniqueWithoutGuardInput[]
    updateMany?: OBLogUpdateManyWithWhereWithoutGuardInput | OBLogUpdateManyWithWhereWithoutGuardInput[]
    deleteMany?: OBLogScalarWhereInput | OBLogScalarWhereInput[]
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
    shortId?: number
    name: string
    address: string
    transmitters?: TransmitterCreateNestedManyWithoutSiteInput
    OBLogs?: OBLogCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutClientInput = {
    id?: string
    shortId?: number
    name: string
    address: string
    transmitters?: TransmitterUncheckedCreateNestedManyWithoutSiteInput
    OBLogs?: OBLogUncheckedCreateNestedManyWithoutSiteInput
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
    shortId?: IntFilter<"Site"> | number
    name?: StringFilter<"Site"> | string
    address?: StringFilter<"Site"> | string
    clientId?: StringFilter<"Site"> | string
  }

  export type ClientCreateWithoutSitesInput = {
    id?: string
    shortId?: number
    surname: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
  }

  export type ClientUncheckedCreateWithoutSitesInput = {
    id?: string
    shortId?: number
    surname: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutSitesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutSitesInput, ClientUncheckedCreateWithoutSitesInput>
  }

  export type TransmitterCreateWithoutSiteInput = {
    id?: string
    referenceCode: string
    alarms?: AlarmCreateNestedManyWithoutTransmitterInput
  }

  export type TransmitterUncheckedCreateWithoutSiteInput = {
    id?: string
    referenceCode: string
    alarms?: AlarmUncheckedCreateNestedManyWithoutTransmitterInput
  }

  export type TransmitterCreateOrConnectWithoutSiteInput = {
    where: TransmitterWhereUniqueInput
    create: XOR<TransmitterCreateWithoutSiteInput, TransmitterUncheckedCreateWithoutSiteInput>
  }

  export type TransmitterCreateManySiteInputEnvelope = {
    data: TransmitterCreateManySiteInput | TransmitterCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type OBLogCreateWithoutSiteInput = {
    id?: string
    shortId?: number
    logTime: Date | string
    actionLog: string
    notes: string
    guard?: GuardCreateNestedOneWithoutOBLogsInput
  }

  export type OBLogUncheckedCreateWithoutSiteInput = {
    id?: string
    shortId?: number
    logTime: Date | string
    guardId?: string | null
    actionLog: string
    notes: string
  }

  export type OBLogCreateOrConnectWithoutSiteInput = {
    where: OBLogWhereUniqueInput
    create: XOR<OBLogCreateWithoutSiteInput, OBLogUncheckedCreateWithoutSiteInput>
  }

  export type OBLogCreateManySiteInputEnvelope = {
    data: OBLogCreateManySiteInput | OBLogCreateManySiteInput[]
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
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    surname?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransmitterUpsertWithWhereUniqueWithoutSiteInput = {
    where: TransmitterWhereUniqueInput
    update: XOR<TransmitterUpdateWithoutSiteInput, TransmitterUncheckedUpdateWithoutSiteInput>
    create: XOR<TransmitterCreateWithoutSiteInput, TransmitterUncheckedCreateWithoutSiteInput>
  }

  export type TransmitterUpdateWithWhereUniqueWithoutSiteInput = {
    where: TransmitterWhereUniqueInput
    data: XOR<TransmitterUpdateWithoutSiteInput, TransmitterUncheckedUpdateWithoutSiteInput>
  }

  export type TransmitterUpdateManyWithWhereWithoutSiteInput = {
    where: TransmitterScalarWhereInput
    data: XOR<TransmitterUpdateManyMutationInput, TransmitterUncheckedUpdateManyWithoutSiteInput>
  }

  export type TransmitterScalarWhereInput = {
    AND?: TransmitterScalarWhereInput | TransmitterScalarWhereInput[]
    OR?: TransmitterScalarWhereInput[]
    NOT?: TransmitterScalarWhereInput | TransmitterScalarWhereInput[]
    id?: StringFilter<"Transmitter"> | string
    referenceCode?: StringFilter<"Transmitter"> | string
    siteId?: StringFilter<"Transmitter"> | string
  }

  export type OBLogUpsertWithWhereUniqueWithoutSiteInput = {
    where: OBLogWhereUniqueInput
    update: XOR<OBLogUpdateWithoutSiteInput, OBLogUncheckedUpdateWithoutSiteInput>
    create: XOR<OBLogCreateWithoutSiteInput, OBLogUncheckedCreateWithoutSiteInput>
  }

  export type OBLogUpdateWithWhereUniqueWithoutSiteInput = {
    where: OBLogWhereUniqueInput
    data: XOR<OBLogUpdateWithoutSiteInput, OBLogUncheckedUpdateWithoutSiteInput>
  }

  export type OBLogUpdateManyWithWhereWithoutSiteInput = {
    where: OBLogScalarWhereInput
    data: XOR<OBLogUpdateManyMutationInput, OBLogUncheckedUpdateManyWithoutSiteInput>
  }

  export type OBLogScalarWhereInput = {
    AND?: OBLogScalarWhereInput | OBLogScalarWhereInput[]
    OR?: OBLogScalarWhereInput[]
    NOT?: OBLogScalarWhereInput | OBLogScalarWhereInput[]
    id?: StringFilter<"OBLog"> | string
    shortId?: IntFilter<"OBLog"> | number
    logTime?: DateTimeFilter<"OBLog"> | Date | string
    guardId?: StringNullableFilter<"OBLog"> | string | null
    siteId?: StringNullableFilter<"OBLog"> | string | null
    actionLog?: StringFilter<"OBLog"> | string
    notes?: StringFilter<"OBLog"> | string
  }

  export type SiteCreateWithoutTransmittersInput = {
    id?: string
    shortId?: number
    name: string
    address: string
    client: ClientCreateNestedOneWithoutSitesInput
    OBLogs?: OBLogCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutTransmittersInput = {
    id?: string
    shortId?: number
    name: string
    address: string
    clientId: string
    OBLogs?: OBLogUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutTransmittersInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutTransmittersInput, SiteUncheckedCreateWithoutTransmittersInput>
  }

  export type AlarmCreateWithoutTransmitterInput = {
    id?: string
    shortId?: number
    triggeredAt: Date | string
    eventType: string
    source: string
    status?: string
    aiCalls?: AiCallCreateNestedManyWithoutAlarmInput
    dispatch?: DispatchCreateNestedOneWithoutAlarmInput
  }

  export type AlarmUncheckedCreateWithoutTransmitterInput = {
    id?: string
    shortId?: number
    triggeredAt: Date | string
    eventType: string
    source: string
    status?: string
    aiCalls?: AiCallUncheckedCreateNestedManyWithoutAlarmInput
    dispatch?: DispatchUncheckedCreateNestedOneWithoutAlarmInput
  }

  export type AlarmCreateOrConnectWithoutTransmitterInput = {
    where: AlarmWhereUniqueInput
    create: XOR<AlarmCreateWithoutTransmitterInput, AlarmUncheckedCreateWithoutTransmitterInput>
  }

  export type AlarmCreateManyTransmitterInputEnvelope = {
    data: AlarmCreateManyTransmitterInput | AlarmCreateManyTransmitterInput[]
    skipDuplicates?: boolean
  }

  export type SiteUpsertWithoutTransmittersInput = {
    update: XOR<SiteUpdateWithoutTransmittersInput, SiteUncheckedUpdateWithoutTransmittersInput>
    create: XOR<SiteCreateWithoutTransmittersInput, SiteUncheckedCreateWithoutTransmittersInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutTransmittersInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutTransmittersInput, SiteUncheckedUpdateWithoutTransmittersInput>
  }

  export type SiteUpdateWithoutTransmittersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutSitesNestedInput
    OBLogs?: OBLogUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutTransmittersInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    OBLogs?: OBLogUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type AlarmUpsertWithWhereUniqueWithoutTransmitterInput = {
    where: AlarmWhereUniqueInput
    update: XOR<AlarmUpdateWithoutTransmitterInput, AlarmUncheckedUpdateWithoutTransmitterInput>
    create: XOR<AlarmCreateWithoutTransmitterInput, AlarmUncheckedCreateWithoutTransmitterInput>
  }

  export type AlarmUpdateWithWhereUniqueWithoutTransmitterInput = {
    where: AlarmWhereUniqueInput
    data: XOR<AlarmUpdateWithoutTransmitterInput, AlarmUncheckedUpdateWithoutTransmitterInput>
  }

  export type AlarmUpdateManyWithWhereWithoutTransmitterInput = {
    where: AlarmScalarWhereInput
    data: XOR<AlarmUpdateManyMutationInput, AlarmUncheckedUpdateManyWithoutTransmitterInput>
  }

  export type AlarmScalarWhereInput = {
    AND?: AlarmScalarWhereInput | AlarmScalarWhereInput[]
    OR?: AlarmScalarWhereInput[]
    NOT?: AlarmScalarWhereInput | AlarmScalarWhereInput[]
    id?: StringFilter<"Alarm"> | string
    shortId?: IntFilter<"Alarm"> | number
    triggeredAt?: DateTimeFilter<"Alarm"> | Date | string
    eventType?: StringFilter<"Alarm"> | string
    source?: StringFilter<"Alarm"> | string
    transmitterId?: StringFilter<"Alarm"> | string
    status?: StringFilter<"Alarm"> | string
  }

  export type TransmitterCreateWithoutAlarmsInput = {
    id?: string
    referenceCode: string
    site: SiteCreateNestedOneWithoutTransmittersInput
  }

  export type TransmitterUncheckedCreateWithoutAlarmsInput = {
    id?: string
    referenceCode: string
    siteId: string
  }

  export type TransmitterCreateOrConnectWithoutAlarmsInput = {
    where: TransmitterWhereUniqueInput
    create: XOR<TransmitterCreateWithoutAlarmsInput, TransmitterUncheckedCreateWithoutAlarmsInput>
  }

  export type AiCallCreateWithoutAlarmInput = {
    id?: string
    shortId?: number
    calledAt?: Date | string
    callDuration?: string | null
    notes?: string | null
    aiDecision?: string | null
    confidenceScore?: number | null
    evaluatedAt?: Date | string | null
    phone?: string | null
  }

  export type AiCallUncheckedCreateWithoutAlarmInput = {
    id?: string
    shortId?: number
    calledAt?: Date | string
    callDuration?: string | null
    notes?: string | null
    aiDecision?: string | null
    confidenceScore?: number | null
    evaluatedAt?: Date | string | null
    phone?: string | null
  }

  export type AiCallCreateOrConnectWithoutAlarmInput = {
    where: AiCallWhereUniqueInput
    create: XOR<AiCallCreateWithoutAlarmInput, AiCallUncheckedCreateWithoutAlarmInput>
  }

  export type AiCallCreateManyAlarmInputEnvelope = {
    data: AiCallCreateManyAlarmInput | AiCallCreateManyAlarmInput[]
    skipDuplicates?: boolean
  }

  export type DispatchCreateWithoutAlarmInput = {
    id?: string
    shortId?: number
    dispatchedAt: Date | string
    arrivalTime?: Date | string | null
    resolvedAt?: Date | string | null
    responseNotes?: string | null
    guard?: GuardCreateNestedOneWithoutDispatchesInput
    vehicle?: VehicleCreateNestedOneWithoutDispatchesInput
  }

  export type DispatchUncheckedCreateWithoutAlarmInput = {
    id?: string
    shortId?: number
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

  export type TransmitterUpsertWithoutAlarmsInput = {
    update: XOR<TransmitterUpdateWithoutAlarmsInput, TransmitterUncheckedUpdateWithoutAlarmsInput>
    create: XOR<TransmitterCreateWithoutAlarmsInput, TransmitterUncheckedCreateWithoutAlarmsInput>
    where?: TransmitterWhereInput
  }

  export type TransmitterUpdateToOneWithWhereWithoutAlarmsInput = {
    where?: TransmitterWhereInput
    data: XOR<TransmitterUpdateWithoutAlarmsInput, TransmitterUncheckedUpdateWithoutAlarmsInput>
  }

  export type TransmitterUpdateWithoutAlarmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    site?: SiteUpdateOneRequiredWithoutTransmittersNestedInput
  }

  export type TransmitterUncheckedUpdateWithoutAlarmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
  }

  export type AiCallUpsertWithWhereUniqueWithoutAlarmInput = {
    where: AiCallWhereUniqueInput
    update: XOR<AiCallUpdateWithoutAlarmInput, AiCallUncheckedUpdateWithoutAlarmInput>
    create: XOR<AiCallCreateWithoutAlarmInput, AiCallUncheckedCreateWithoutAlarmInput>
  }

  export type AiCallUpdateWithWhereUniqueWithoutAlarmInput = {
    where: AiCallWhereUniqueInput
    data: XOR<AiCallUpdateWithoutAlarmInput, AiCallUncheckedUpdateWithoutAlarmInput>
  }

  export type AiCallUpdateManyWithWhereWithoutAlarmInput = {
    where: AiCallScalarWhereInput
    data: XOR<AiCallUpdateManyMutationInput, AiCallUncheckedUpdateManyWithoutAlarmInput>
  }

  export type AiCallScalarWhereInput = {
    AND?: AiCallScalarWhereInput | AiCallScalarWhereInput[]
    OR?: AiCallScalarWhereInput[]
    NOT?: AiCallScalarWhereInput | AiCallScalarWhereInput[]
    id?: StringFilter<"AiCall"> | string
    shortId?: IntFilter<"AiCall"> | number
    alarmId?: StringFilter<"AiCall"> | string
    calledAt?: DateTimeFilter<"AiCall"> | Date | string
    callDuration?: StringNullableFilter<"AiCall"> | string | null
    notes?: StringNullableFilter<"AiCall"> | string | null
    aiDecision?: StringNullableFilter<"AiCall"> | string | null
    confidenceScore?: FloatNullableFilter<"AiCall"> | number | null
    evaluatedAt?: DateTimeNullableFilter<"AiCall"> | Date | string | null
    phone?: StringNullableFilter<"AiCall"> | string | null
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
    shortId?: IntFieldUpdateOperationsInput | number
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNotes?: NullableStringFieldUpdateOperationsInput | string | null
    guardId?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlarmCreateWithoutAiCallsInput = {
    id?: string
    shortId?: number
    triggeredAt: Date | string
    eventType: string
    source: string
    status?: string
    transmitter: TransmitterCreateNestedOneWithoutAlarmsInput
    dispatch?: DispatchCreateNestedOneWithoutAlarmInput
  }

  export type AlarmUncheckedCreateWithoutAiCallsInput = {
    id?: string
    shortId?: number
    triggeredAt: Date | string
    eventType: string
    source: string
    transmitterId: string
    status?: string
    dispatch?: DispatchUncheckedCreateNestedOneWithoutAlarmInput
  }

  export type AlarmCreateOrConnectWithoutAiCallsInput = {
    where: AlarmWhereUniqueInput
    create: XOR<AlarmCreateWithoutAiCallsInput, AlarmUncheckedCreateWithoutAiCallsInput>
  }

  export type AlarmUpsertWithoutAiCallsInput = {
    update: XOR<AlarmUpdateWithoutAiCallsInput, AlarmUncheckedUpdateWithoutAiCallsInput>
    create: XOR<AlarmCreateWithoutAiCallsInput, AlarmUncheckedCreateWithoutAiCallsInput>
    where?: AlarmWhereInput
  }

  export type AlarmUpdateToOneWithWhereWithoutAiCallsInput = {
    where?: AlarmWhereInput
    data: XOR<AlarmUpdateWithoutAiCallsInput, AlarmUncheckedUpdateWithoutAiCallsInput>
  }

  export type AlarmUpdateWithoutAiCallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transmitter?: TransmitterUpdateOneRequiredWithoutAlarmsNestedInput
    dispatch?: DispatchUpdateOneWithoutAlarmNestedInput
  }

  export type AlarmUncheckedUpdateWithoutAiCallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    transmitterId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dispatch?: DispatchUncheckedUpdateOneWithoutAlarmNestedInput
  }

  export type AlarmCreateWithoutDispatchInput = {
    id?: string
    shortId?: number
    triggeredAt: Date | string
    eventType: string
    source: string
    status?: string
    transmitter: TransmitterCreateNestedOneWithoutAlarmsInput
    aiCalls?: AiCallCreateNestedManyWithoutAlarmInput
  }

  export type AlarmUncheckedCreateWithoutDispatchInput = {
    id?: string
    shortId?: number
    triggeredAt: Date | string
    eventType: string
    source: string
    transmitterId: string
    status?: string
    aiCalls?: AiCallUncheckedCreateNestedManyWithoutAlarmInput
  }

  export type AlarmCreateOrConnectWithoutDispatchInput = {
    where: AlarmWhereUniqueInput
    create: XOR<AlarmCreateWithoutDispatchInput, AlarmUncheckedCreateWithoutDispatchInput>
  }

  export type GuardCreateWithoutDispatchesInput = {
    id?: string
    shortId?: number
    name: string
    phone: string
    status: string
    assignedVehicle?: VehicleCreateNestedOneWithoutGuardsInput
    OBLogs?: OBLogCreateNestedManyWithoutGuardInput
  }

  export type GuardUncheckedCreateWithoutDispatchesInput = {
    id?: string
    shortId?: number
    name: string
    phone: string
    status: string
    assignedVehicleId?: string | null
    OBLogs?: OBLogUncheckedCreateNestedManyWithoutGuardInput
  }

  export type GuardCreateOrConnectWithoutDispatchesInput = {
    where: GuardWhereUniqueInput
    create: XOR<GuardCreateWithoutDispatchesInput, GuardUncheckedCreateWithoutDispatchesInput>
  }

  export type VehicleCreateWithoutDispatchesInput = {
    id?: string
    shortId?: number
    name: string
    plate: string
    model: string
    status: string
    guards?: GuardCreateNestedManyWithoutAssignedVehicleInput
  }

  export type VehicleUncheckedCreateWithoutDispatchesInput = {
    id?: string
    shortId?: number
    name: string
    plate: string
    model: string
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
    eventType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transmitter?: TransmitterUpdateOneRequiredWithoutAlarmsNestedInput
    aiCalls?: AiCallUpdateManyWithoutAlarmNestedInput
  }

  export type AlarmUncheckedUpdateWithoutDispatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    transmitterId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiCalls?: AiCallUncheckedUpdateManyWithoutAlarmNestedInput
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
    OBLogs?: OBLogUpdateManyWithoutGuardNestedInput
  }

  export type GuardUncheckedUpdateWithoutDispatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedVehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    OBLogs?: OBLogUncheckedUpdateManyWithoutGuardNestedInput
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
    name?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    guards?: GuardUpdateManyWithoutAssignedVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutDispatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    guards?: GuardUncheckedUpdateManyWithoutAssignedVehicleNestedInput
  }

  export type GuardCreateWithoutOBLogsInput = {
    id?: string
    shortId?: number
    name: string
    phone: string
    status: string
    assignedVehicle?: VehicleCreateNestedOneWithoutGuardsInput
    dispatches?: DispatchCreateNestedManyWithoutGuardInput
  }

  export type GuardUncheckedCreateWithoutOBLogsInput = {
    id?: string
    shortId?: number
    name: string
    phone: string
    status: string
    assignedVehicleId?: string | null
    dispatches?: DispatchUncheckedCreateNestedManyWithoutGuardInput
  }

  export type GuardCreateOrConnectWithoutOBLogsInput = {
    where: GuardWhereUniqueInput
    create: XOR<GuardCreateWithoutOBLogsInput, GuardUncheckedCreateWithoutOBLogsInput>
  }

  export type SiteCreateWithoutOBLogsInput = {
    id?: string
    shortId?: number
    name: string
    address: string
    client: ClientCreateNestedOneWithoutSitesInput
    transmitters?: TransmitterCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutOBLogsInput = {
    id?: string
    shortId?: number
    name: string
    address: string
    clientId: string
    transmitters?: TransmitterUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutOBLogsInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutOBLogsInput, SiteUncheckedCreateWithoutOBLogsInput>
  }

  export type GuardUpsertWithoutOBLogsInput = {
    update: XOR<GuardUpdateWithoutOBLogsInput, GuardUncheckedUpdateWithoutOBLogsInput>
    create: XOR<GuardCreateWithoutOBLogsInput, GuardUncheckedCreateWithoutOBLogsInput>
    where?: GuardWhereInput
  }

  export type GuardUpdateToOneWithWhereWithoutOBLogsInput = {
    where?: GuardWhereInput
    data: XOR<GuardUpdateWithoutOBLogsInput, GuardUncheckedUpdateWithoutOBLogsInput>
  }

  export type GuardUpdateWithoutOBLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedVehicle?: VehicleUpdateOneWithoutGuardsNestedInput
    dispatches?: DispatchUpdateManyWithoutGuardNestedInput
  }

  export type GuardUncheckedUpdateWithoutOBLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    assignedVehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    dispatches?: DispatchUncheckedUpdateManyWithoutGuardNestedInput
  }

  export type SiteUpsertWithoutOBLogsInput = {
    update: XOR<SiteUpdateWithoutOBLogsInput, SiteUncheckedUpdateWithoutOBLogsInput>
    create: XOR<SiteCreateWithoutOBLogsInput, SiteUncheckedCreateWithoutOBLogsInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutOBLogsInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutOBLogsInput, SiteUncheckedUpdateWithoutOBLogsInput>
  }

  export type SiteUpdateWithoutOBLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutSitesNestedInput
    transmitters?: TransmitterUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutOBLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    transmitters?: TransmitterUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type RoleCreateWithoutUsersInput = {
    id: string
    name: string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id: string
    name: string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    shortId?: number
    email: string
    password: string
    name: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    shortId?: number
    email: string
    password: string
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
    shortId?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    roleId?: StringFilter<"User"> | string
  }

  export type DispatchCreateWithoutVehicleInput = {
    id?: string
    shortId?: number
    dispatchedAt: Date | string
    arrivalTime?: Date | string | null
    resolvedAt?: Date | string | null
    responseNotes?: string | null
    alarm: AlarmCreateNestedOneWithoutDispatchInput
    guard?: GuardCreateNestedOneWithoutDispatchesInput
  }

  export type DispatchUncheckedCreateWithoutVehicleInput = {
    id?: string
    shortId?: number
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
    shortId?: number
    name: string
    phone: string
    status: string
    dispatches?: DispatchCreateNestedManyWithoutGuardInput
    OBLogs?: OBLogCreateNestedManyWithoutGuardInput
  }

  export type GuardUncheckedCreateWithoutAssignedVehicleInput = {
    id?: string
    shortId?: number
    name: string
    phone: string
    status: string
    dispatches?: DispatchUncheckedCreateNestedManyWithoutGuardInput
    OBLogs?: OBLogUncheckedCreateNestedManyWithoutGuardInput
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
    shortId?: IntFilter<"Dispatch"> | number
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
    shortId?: IntFilter<"Guard"> | number
    name?: StringFilter<"Guard"> | string
    phone?: StringFilter<"Guard"> | string
    status?: StringFilter<"Guard"> | string
    assignedVehicleId?: StringNullableFilter<"Guard"> | string | null
  }

  export type VehicleCreateWithoutGuardsInput = {
    id?: string
    shortId?: number
    name: string
    plate: string
    model: string
    status: string
    dispatches?: DispatchCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutGuardsInput = {
    id?: string
    shortId?: number
    name: string
    plate: string
    model: string
    status: string
    dispatches?: DispatchUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutGuardsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutGuardsInput, VehicleUncheckedCreateWithoutGuardsInput>
  }

  export type DispatchCreateWithoutGuardInput = {
    id?: string
    shortId?: number
    dispatchedAt: Date | string
    arrivalTime?: Date | string | null
    resolvedAt?: Date | string | null
    responseNotes?: string | null
    alarm: AlarmCreateNestedOneWithoutDispatchInput
    vehicle?: VehicleCreateNestedOneWithoutDispatchesInput
  }

  export type DispatchUncheckedCreateWithoutGuardInput = {
    id?: string
    shortId?: number
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

  export type OBLogCreateWithoutGuardInput = {
    id?: string
    shortId?: number
    logTime: Date | string
    actionLog: string
    notes: string
    site?: SiteCreateNestedOneWithoutOBLogsInput
  }

  export type OBLogUncheckedCreateWithoutGuardInput = {
    id?: string
    shortId?: number
    logTime: Date | string
    siteId?: string | null
    actionLog: string
    notes: string
  }

  export type OBLogCreateOrConnectWithoutGuardInput = {
    where: OBLogWhereUniqueInput
    create: XOR<OBLogCreateWithoutGuardInput, OBLogUncheckedCreateWithoutGuardInput>
  }

  export type OBLogCreateManyGuardInputEnvelope = {
    data: OBLogCreateManyGuardInput | OBLogCreateManyGuardInput[]
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
    name?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dispatches?: DispatchUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutGuardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
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

  export type OBLogUpsertWithWhereUniqueWithoutGuardInput = {
    where: OBLogWhereUniqueInput
    update: XOR<OBLogUpdateWithoutGuardInput, OBLogUncheckedUpdateWithoutGuardInput>
    create: XOR<OBLogCreateWithoutGuardInput, OBLogUncheckedCreateWithoutGuardInput>
  }

  export type OBLogUpdateWithWhereUniqueWithoutGuardInput = {
    where: OBLogWhereUniqueInput
    data: XOR<OBLogUpdateWithoutGuardInput, OBLogUncheckedUpdateWithoutGuardInput>
  }

  export type OBLogUpdateManyWithWhereWithoutGuardInput = {
    where: OBLogScalarWhereInput
    data: XOR<OBLogUpdateManyMutationInput, OBLogUncheckedUpdateManyWithoutGuardInput>
  }

  export type SiteCreateManyClientInput = {
    id?: string
    shortId?: number
    name: string
    address: string
  }

  export type SiteUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    transmitters?: TransmitterUpdateManyWithoutSiteNestedInput
    OBLogs?: OBLogUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    transmitters?: TransmitterUncheckedUpdateManyWithoutSiteNestedInput
    OBLogs?: OBLogUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type TransmitterCreateManySiteInput = {
    id?: string
    referenceCode: string
  }

  export type OBLogCreateManySiteInput = {
    id?: string
    shortId?: number
    logTime: Date | string
    guardId?: string | null
    actionLog: string
    notes: string
  }

  export type TransmitterUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    alarms?: AlarmUpdateManyWithoutTransmitterNestedInput
  }

  export type TransmitterUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    alarms?: AlarmUncheckedUpdateManyWithoutTransmitterNestedInput
  }

  export type TransmitterUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
  }

  export type OBLogUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actionLog?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    guard?: GuardUpdateOneWithoutOBLogsNestedInput
  }

  export type OBLogUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    guardId?: NullableStringFieldUpdateOperationsInput | string | null
    actionLog?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type OBLogUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    guardId?: NullableStringFieldUpdateOperationsInput | string | null
    actionLog?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type AlarmCreateManyTransmitterInput = {
    id?: string
    shortId?: number
    triggeredAt: Date | string
    eventType: string
    source: string
    status?: string
  }

  export type AlarmUpdateWithoutTransmitterInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiCalls?: AiCallUpdateManyWithoutAlarmNestedInput
    dispatch?: DispatchUpdateOneWithoutAlarmNestedInput
  }

  export type AlarmUncheckedUpdateWithoutTransmitterInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiCalls?: AiCallUncheckedUpdateManyWithoutAlarmNestedInput
    dispatch?: DispatchUncheckedUpdateOneWithoutAlarmNestedInput
  }

  export type AlarmUncheckedUpdateManyWithoutTransmitterInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    triggeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AiCallCreateManyAlarmInput = {
    id?: string
    shortId?: number
    calledAt?: Date | string
    callDuration?: string | null
    notes?: string | null
    aiDecision?: string | null
    confidenceScore?: number | null
    evaluatedAt?: Date | string | null
    phone?: string | null
  }

  export type AiCallUpdateWithoutAlarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    calledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callDuration?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiDecision?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    evaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AiCallUncheckedUpdateWithoutAlarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    calledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callDuration?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiDecision?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    evaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AiCallUncheckedUpdateManyWithoutAlarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    calledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callDuration?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    aiDecision?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    evaluatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyRoleInput = {
    id?: string
    shortId?: number
    email: string
    password: string
    name: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DispatchCreateManyVehicleInput = {
    id?: string
    shortId?: number
    dispatchedAt: Date | string
    arrivalTime?: Date | string | null
    resolvedAt?: Date | string | null
    responseNotes?: string | null
    alarmId: string
    guardId?: string | null
  }

  export type GuardCreateManyAssignedVehicleInput = {
    id?: string
    shortId?: number
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
    shortId?: IntFieldUpdateOperationsInput | number
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNotes?: NullableStringFieldUpdateOperationsInput | string | null
    alarmId?: StringFieldUpdateOperationsInput | string
    guardId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispatchUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
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
    OBLogs?: OBLogUpdateManyWithoutGuardNestedInput
  }

  export type GuardUncheckedUpdateWithoutAssignedVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dispatches?: DispatchUncheckedUpdateManyWithoutGuardNestedInput
    OBLogs?: OBLogUncheckedUpdateManyWithoutGuardNestedInput
  }

  export type GuardUncheckedUpdateManyWithoutAssignedVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type DispatchCreateManyGuardInput = {
    id?: string
    shortId?: number
    dispatchedAt: Date | string
    arrivalTime?: Date | string | null
    resolvedAt?: Date | string | null
    responseNotes?: string | null
    alarmId: string
    vehicleId?: string | null
  }

  export type OBLogCreateManyGuardInput = {
    id?: string
    shortId?: number
    logTime: Date | string
    siteId?: string | null
    actionLog: string
    notes: string
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
    shortId?: IntFieldUpdateOperationsInput | number
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNotes?: NullableStringFieldUpdateOperationsInput | string | null
    alarmId?: StringFieldUpdateOperationsInput | string
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispatchUncheckedUpdateManyWithoutGuardInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responseNotes?: NullableStringFieldUpdateOperationsInput | string | null
    alarmId?: StringFieldUpdateOperationsInput | string
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OBLogUpdateWithoutGuardInput = {
    id?: StringFieldUpdateOperationsInput | string
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actionLog?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    site?: SiteUpdateOneWithoutOBLogsNestedInput
  }

  export type OBLogUncheckedUpdateWithoutGuardInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
    actionLog?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type OBLogUncheckedUpdateManyWithoutGuardInput = {
    id?: StringFieldUpdateOperationsInput | string
    shortId?: IntFieldUpdateOperationsInput | number
    logTime?: DateTimeFieldUpdateOperationsInput | Date | string
    siteId?: NullableStringFieldUpdateOperationsInput | string | null
    actionLog?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
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