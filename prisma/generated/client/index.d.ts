
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
 * Model Equipment
 * 
 */
export type Equipment = $Result.DefaultSelection<Prisma.$EquipmentPayload>
/**
 * Model ChecklistItem
 * 
 */
export type ChecklistItem = $Result.DefaultSelection<Prisma.$ChecklistItemPayload>
/**
 * Model RemarkEntry
 * 
 */
export type RemarkEntry = $Result.DefaultSelection<Prisma.$RemarkEntryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  superadmin: 'superadmin',
  admin: 'admin',
  volunteer: 'volunteer'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const InventoryStatus: {
  available: 'available',
  in_use: 'in_use',
  needs_repair: 'needs_repair',
  broken: 'broken'
};

export type InventoryStatus = (typeof InventoryStatus)[keyof typeof InventoryStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type InventoryStatus = $Enums.InventoryStatus

export const InventoryStatus: typeof $Enums.InventoryStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Equipment
 * const equipment = await prisma.equipment.findMany()
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
   * // Fetch zero or more Equipment
   * const equipment = await prisma.equipment.findMany()
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
   * `prisma.equipment`: Exposes CRUD operations for the **Equipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipment
    * const equipment = await prisma.equipment.findMany()
    * ```
    */
  get equipment(): Prisma.EquipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checklistItem`: Exposes CRUD operations for the **ChecklistItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChecklistItems
    * const checklistItems = await prisma.checklistItem.findMany()
    * ```
    */
  get checklistItem(): Prisma.ChecklistItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.remarkEntry`: Exposes CRUD operations for the **RemarkEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RemarkEntries
    * const remarkEntries = await prisma.remarkEntry.findMany()
    * ```
    */
  get remarkEntry(): Prisma.RemarkEntryDelegate<ExtArgs, ClientOptions>;
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
    Equipment: 'Equipment',
    ChecklistItem: 'ChecklistItem',
    RemarkEntry: 'RemarkEntry'
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
      modelProps: "equipment" | "checklistItem" | "remarkEntry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Equipment: {
        payload: Prisma.$EquipmentPayload<ExtArgs>
        fields: Prisma.EquipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findFirst: {
            args: Prisma.EquipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findMany: {
            args: Prisma.EquipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          create: {
            args: Prisma.EquipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          createMany: {
            args: Prisma.EquipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          delete: {
            args: Prisma.EquipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          update: {
            args: Prisma.EquipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          aggregate: {
            args: Prisma.EquipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipment>
          }
          groupBy: {
            args: Prisma.EquipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentCountAggregateOutputType> | number
          }
        }
      }
      ChecklistItem: {
        payload: Prisma.$ChecklistItemPayload<ExtArgs>
        fields: Prisma.ChecklistItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChecklistItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChecklistItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>
          }
          findFirst: {
            args: Prisma.ChecklistItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChecklistItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>
          }
          findMany: {
            args: Prisma.ChecklistItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>[]
          }
          create: {
            args: Prisma.ChecklistItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>
          }
          createMany: {
            args: Prisma.ChecklistItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChecklistItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>[]
          }
          delete: {
            args: Prisma.ChecklistItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>
          }
          update: {
            args: Prisma.ChecklistItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>
          }
          deleteMany: {
            args: Prisma.ChecklistItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChecklistItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChecklistItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>[]
          }
          upsert: {
            args: Prisma.ChecklistItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>
          }
          aggregate: {
            args: Prisma.ChecklistItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChecklistItem>
          }
          groupBy: {
            args: Prisma.ChecklistItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChecklistItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChecklistItemCountArgs<ExtArgs>
            result: $Utils.Optional<ChecklistItemCountAggregateOutputType> | number
          }
        }
      }
      RemarkEntry: {
        payload: Prisma.$RemarkEntryPayload<ExtArgs>
        fields: Prisma.RemarkEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RemarkEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RemarkEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkEntryPayload>
          }
          findFirst: {
            args: Prisma.RemarkEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RemarkEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkEntryPayload>
          }
          findMany: {
            args: Prisma.RemarkEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkEntryPayload>[]
          }
          create: {
            args: Prisma.RemarkEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkEntryPayload>
          }
          createMany: {
            args: Prisma.RemarkEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RemarkEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkEntryPayload>[]
          }
          delete: {
            args: Prisma.RemarkEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkEntryPayload>
          }
          update: {
            args: Prisma.RemarkEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkEntryPayload>
          }
          deleteMany: {
            args: Prisma.RemarkEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RemarkEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RemarkEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkEntryPayload>[]
          }
          upsert: {
            args: Prisma.RemarkEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkEntryPayload>
          }
          aggregate: {
            args: Prisma.RemarkEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRemarkEntry>
          }
          groupBy: {
            args: Prisma.RemarkEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RemarkEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RemarkEntryCountArgs<ExtArgs>
            result: $Utils.Optional<RemarkEntryCountAggregateOutputType> | number
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
    equipment?: EquipmentOmit
    checklistItem?: ChecklistItemOmit
    remarkEntry?: RemarkEntryOmit
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
   * Count Type EquipmentCountOutputType
   */

  export type EquipmentCountOutputType = {
    notes: number
  }

  export type EquipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | EquipmentCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCountOutputType
     */
    select?: EquipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RemarkEntryWhereInput
  }


  /**
   * Count Type ChecklistItemCountOutputType
   */

  export type ChecklistItemCountOutputType = {
    remarksHistory: number
  }

  export type ChecklistItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    remarksHistory?: boolean | ChecklistItemCountOutputTypeCountRemarksHistoryArgs
  }

  // Custom InputTypes
  /**
   * ChecklistItemCountOutputType without action
   */
  export type ChecklistItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItemCountOutputType
     */
    select?: ChecklistItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChecklistItemCountOutputType without action
   */
  export type ChecklistItemCountOutputTypeCountRemarksHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RemarkEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Equipment
   */

  export type AggregateEquipment = {
    _count: EquipmentCountAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  export type EquipmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    status: $Enums.InventoryStatus | null
    location: string | null
    categoryColor: string | null
    createdAt: Date | null
  }

  export type EquipmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    status: $Enums.InventoryStatus | null
    location: string | null
    categoryColor: string | null
    createdAt: Date | null
  }

  export type EquipmentCountAggregateOutputType = {
    id: number
    name: number
    category: number
    status: number
    location: number
    categoryColor: number
    createdAt: number
    _all: number
  }


  export type EquipmentMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    status?: true
    location?: true
    categoryColor?: true
    createdAt?: true
  }

  export type EquipmentMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    status?: true
    location?: true
    categoryColor?: true
    createdAt?: true
  }

  export type EquipmentCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    status?: true
    location?: true
    categoryColor?: true
    createdAt?: true
    _all?: true
  }

  export type EquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to aggregate.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipment
    **/
    _count?: true | EquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentMaxAggregateInputType
  }

  export type GetEquipmentAggregateType<T extends EquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipment[P]>
      : GetScalarType<T[P], AggregateEquipment[P]>
  }




  export type EquipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithAggregationInput | EquipmentOrderByWithAggregationInput[]
    by: EquipmentScalarFieldEnum[] | EquipmentScalarFieldEnum
    having?: EquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentCountAggregateInputType | true
    _min?: EquipmentMinAggregateInputType
    _max?: EquipmentMaxAggregateInputType
  }

  export type EquipmentGroupByOutputType = {
    id: string
    name: string
    category: string
    status: $Enums.InventoryStatus
    location: string
    categoryColor: string | null
    createdAt: Date
    _count: EquipmentCountAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  type GetEquipmentGroupByPayload<T extends EquipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    status?: boolean
    location?: boolean
    categoryColor?: boolean
    createdAt?: boolean
    notes?: boolean | Equipment$notesArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    status?: boolean
    location?: boolean
    categoryColor?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    status?: boolean
    location?: boolean
    categoryColor?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    status?: boolean
    location?: boolean
    categoryColor?: boolean
    createdAt?: boolean
  }

  export type EquipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "status" | "location" | "categoryColor" | "createdAt", ExtArgs["result"]["equipment"]>
  export type EquipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | Equipment$notesArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EquipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipment"
    objects: {
      notes: Prisma.$RemarkEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string
      status: $Enums.InventoryStatus
      location: string
      categoryColor: string | null
      createdAt: Date
    }, ExtArgs["result"]["equipment"]>
    composites: {}
  }

  type EquipmentGetPayload<S extends boolean | null | undefined | EquipmentDefaultArgs> = $Result.GetResult<Prisma.$EquipmentPayload, S>

  type EquipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentCountAggregateInputType | true
    }

  export interface EquipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipment'], meta: { name: 'Equipment' } }
    /**
     * Find zero or one Equipment that matches the filter.
     * @param {EquipmentFindUniqueArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentFindUniqueArgs>(args: SelectSubset<T, EquipmentFindUniqueArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentFindUniqueOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentFindFirstArgs>(args?: SelectSubset<T, EquipmentFindFirstArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipment
     * const equipment = await prisma.equipment.findMany()
     * 
     * // Get first 10 Equipment
     * const equipment = await prisma.equipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentWithIdOnly = await prisma.equipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentFindManyArgs>(args?: SelectSubset<T, EquipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipment.
     * @param {EquipmentCreateArgs} args - Arguments to create a Equipment.
     * @example
     * // Create one Equipment
     * const Equipment = await prisma.equipment.create({
     *   data: {
     *     // ... data to create a Equipment
     *   }
     * })
     * 
     */
    create<T extends EquipmentCreateArgs>(args: SelectSubset<T, EquipmentCreateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipment.
     * @param {EquipmentCreateManyArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentCreateManyArgs>(args?: SelectSubset<T, EquipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipment and returns the data saved in the database.
     * @param {EquipmentCreateManyAndReturnArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipment.
     * @param {EquipmentDeleteArgs} args - Arguments to delete one Equipment.
     * @example
     * // Delete one Equipment
     * const Equipment = await prisma.equipment.delete({
     *   where: {
     *     // ... filter to delete one Equipment
     *   }
     * })
     * 
     */
    delete<T extends EquipmentDeleteArgs>(args: SelectSubset<T, EquipmentDeleteArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipment.
     * @param {EquipmentUpdateArgs} args - Arguments to update one Equipment.
     * @example
     * // Update one Equipment
     * const equipment = await prisma.equipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentUpdateArgs>(args: SelectSubset<T, EquipmentUpdateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipment.
     * @param {EquipmentDeleteManyArgs} args - Arguments to filter Equipment to delete.
     * @example
     * // Delete a few Equipment
     * const { count } = await prisma.equipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentDeleteManyArgs>(args?: SelectSubset<T, EquipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentUpdateManyArgs>(args: SelectSubset<T, EquipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment and returns the data updated in the database.
     * @param {EquipmentUpdateManyAndReturnArgs} args - Arguments to update many Equipment.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.updateManyAndReturn({
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
    updateManyAndReturn<T extends EquipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipment.
     * @param {EquipmentUpsertArgs} args - Arguments to update or create a Equipment.
     * @example
     * // Update or create a Equipment
     * const equipment = await prisma.equipment.upsert({
     *   create: {
     *     // ... data to create a Equipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipment we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentUpsertArgs>(args: SelectSubset<T, EquipmentUpsertArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCountArgs} args - Arguments to filter Equipment to count.
     * @example
     * // Count the number of Equipment
     * const count = await prisma.equipment.count({
     *   where: {
     *     // ... the filter for the Equipment we want to count
     *   }
     * })
    **/
    count<T extends EquipmentCountArgs>(
      args?: Subset<T, EquipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipmentAggregateArgs>(args: Subset<T, EquipmentAggregateArgs>): Prisma.PrismaPromise<GetEquipmentAggregateType<T>>

    /**
     * Group by Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentGroupByArgs} args - Group by arguments.
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
      T extends EquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipment model
   */
  readonly fields: EquipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notes<T extends Equipment$notesArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemarkEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Equipment model
   */
  interface EquipmentFieldRefs {
    readonly id: FieldRef<"Equipment", 'String'>
    readonly name: FieldRef<"Equipment", 'String'>
    readonly category: FieldRef<"Equipment", 'String'>
    readonly status: FieldRef<"Equipment", 'InventoryStatus'>
    readonly location: FieldRef<"Equipment", 'String'>
    readonly categoryColor: FieldRef<"Equipment", 'String'>
    readonly createdAt: FieldRef<"Equipment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Equipment findUnique
   */
  export type EquipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findUniqueOrThrow
   */
  export type EquipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findFirst
   */
  export type EquipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findFirstOrThrow
   */
  export type EquipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findMany
   */
  export type EquipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment create
   */
  export type EquipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipment.
     */
    data: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
  }

  /**
   * Equipment createMany
   */
  export type EquipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment createManyAndReturn
   */
  export type EquipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment update
   */
  export type EquipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipment.
     */
    data: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
    /**
     * Choose, which Equipment to update.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment updateMany
   */
  export type EquipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
  }

  /**
   * Equipment updateManyAndReturn
   */
  export type EquipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
  }

  /**
   * Equipment upsert
   */
  export type EquipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipment to update in case it exists.
     */
    where: EquipmentWhereUniqueInput
    /**
     * In case the Equipment found by the `where` argument doesn't exist, create a new Equipment with this data.
     */
    create: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
    /**
     * In case the Equipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
  }

  /**
   * Equipment delete
   */
  export type EquipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter which Equipment to delete.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment deleteMany
   */
  export type EquipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to delete
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to delete.
     */
    limit?: number
  }

  /**
   * Equipment.notes
   */
  export type Equipment$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkEntry
     */
    select?: RemarkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkEntry
     */
    omit?: RemarkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkEntryInclude<ExtArgs> | null
    where?: RemarkEntryWhereInput
    orderBy?: RemarkEntryOrderByWithRelationInput | RemarkEntryOrderByWithRelationInput[]
    cursor?: RemarkEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RemarkEntryScalarFieldEnum | RemarkEntryScalarFieldEnum[]
  }

  /**
   * Equipment without action
   */
  export type EquipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
  }


  /**
   * Model ChecklistItem
   */

  export type AggregateChecklistItem = {
    _count: ChecklistItemCountAggregateOutputType | null
    _min: ChecklistItemMinAggregateOutputType | null
    _max: ChecklistItemMaxAggregateOutputType | null
  }

  export type ChecklistItemMinAggregateOutputType = {
    id: string | null
    gearName: string | null
    category: string | null
    isChecked: boolean | null
    remarks: string | null
    requestedStatus: $Enums.InventoryStatus | null
    createdAt: Date | null
  }

  export type ChecklistItemMaxAggregateOutputType = {
    id: string | null
    gearName: string | null
    category: string | null
    isChecked: boolean | null
    remarks: string | null
    requestedStatus: $Enums.InventoryStatus | null
    createdAt: Date | null
  }

  export type ChecklistItemCountAggregateOutputType = {
    id: number
    gearName: number
    category: number
    isChecked: number
    remarks: number
    requestedStatus: number
    createdAt: number
    _all: number
  }


  export type ChecklistItemMinAggregateInputType = {
    id?: true
    gearName?: true
    category?: true
    isChecked?: true
    remarks?: true
    requestedStatus?: true
    createdAt?: true
  }

  export type ChecklistItemMaxAggregateInputType = {
    id?: true
    gearName?: true
    category?: true
    isChecked?: true
    remarks?: true
    requestedStatus?: true
    createdAt?: true
  }

  export type ChecklistItemCountAggregateInputType = {
    id?: true
    gearName?: true
    category?: true
    isChecked?: true
    remarks?: true
    requestedStatus?: true
    createdAt?: true
    _all?: true
  }

  export type ChecklistItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChecklistItem to aggregate.
     */
    where?: ChecklistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistItems to fetch.
     */
    orderBy?: ChecklistItemOrderByWithRelationInput | ChecklistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChecklistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChecklistItems
    **/
    _count?: true | ChecklistItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChecklistItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChecklistItemMaxAggregateInputType
  }

  export type GetChecklistItemAggregateType<T extends ChecklistItemAggregateArgs> = {
        [P in keyof T & keyof AggregateChecklistItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChecklistItem[P]>
      : GetScalarType<T[P], AggregateChecklistItem[P]>
  }




  export type ChecklistItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistItemWhereInput
    orderBy?: ChecklistItemOrderByWithAggregationInput | ChecklistItemOrderByWithAggregationInput[]
    by: ChecklistItemScalarFieldEnum[] | ChecklistItemScalarFieldEnum
    having?: ChecklistItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChecklistItemCountAggregateInputType | true
    _min?: ChecklistItemMinAggregateInputType
    _max?: ChecklistItemMaxAggregateInputType
  }

  export type ChecklistItemGroupByOutputType = {
    id: string
    gearName: string
    category: string
    isChecked: boolean
    remarks: string | null
    requestedStatus: $Enums.InventoryStatus | null
    createdAt: Date
    _count: ChecklistItemCountAggregateOutputType | null
    _min: ChecklistItemMinAggregateOutputType | null
    _max: ChecklistItemMaxAggregateOutputType | null
  }

  type GetChecklistItemGroupByPayload<T extends ChecklistItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChecklistItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChecklistItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChecklistItemGroupByOutputType[P]>
            : GetScalarType<T[P], ChecklistItemGroupByOutputType[P]>
        }
      >
    >


  export type ChecklistItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gearName?: boolean
    category?: boolean
    isChecked?: boolean
    remarks?: boolean
    requestedStatus?: boolean
    createdAt?: boolean
    remarksHistory?: boolean | ChecklistItem$remarksHistoryArgs<ExtArgs>
    _count?: boolean | ChecklistItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklistItem"]>

  export type ChecklistItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gearName?: boolean
    category?: boolean
    isChecked?: boolean
    remarks?: boolean
    requestedStatus?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["checklistItem"]>

  export type ChecklistItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gearName?: boolean
    category?: boolean
    isChecked?: boolean
    remarks?: boolean
    requestedStatus?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["checklistItem"]>

  export type ChecklistItemSelectScalar = {
    id?: boolean
    gearName?: boolean
    category?: boolean
    isChecked?: boolean
    remarks?: boolean
    requestedStatus?: boolean
    createdAt?: boolean
  }

  export type ChecklistItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gearName" | "category" | "isChecked" | "remarks" | "requestedStatus" | "createdAt", ExtArgs["result"]["checklistItem"]>
  export type ChecklistItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    remarksHistory?: boolean | ChecklistItem$remarksHistoryArgs<ExtArgs>
    _count?: boolean | ChecklistItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChecklistItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChecklistItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChecklistItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChecklistItem"
    objects: {
      remarksHistory: Prisma.$RemarkEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gearName: string
      category: string
      isChecked: boolean
      remarks: string | null
      requestedStatus: $Enums.InventoryStatus | null
      createdAt: Date
    }, ExtArgs["result"]["checklistItem"]>
    composites: {}
  }

  type ChecklistItemGetPayload<S extends boolean | null | undefined | ChecklistItemDefaultArgs> = $Result.GetResult<Prisma.$ChecklistItemPayload, S>

  type ChecklistItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChecklistItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChecklistItemCountAggregateInputType | true
    }

  export interface ChecklistItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChecklistItem'], meta: { name: 'ChecklistItem' } }
    /**
     * Find zero or one ChecklistItem that matches the filter.
     * @param {ChecklistItemFindUniqueArgs} args - Arguments to find a ChecklistItem
     * @example
     * // Get one ChecklistItem
     * const checklistItem = await prisma.checklistItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChecklistItemFindUniqueArgs>(args: SelectSubset<T, ChecklistItemFindUniqueArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChecklistItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChecklistItemFindUniqueOrThrowArgs} args - Arguments to find a ChecklistItem
     * @example
     * // Get one ChecklistItem
     * const checklistItem = await prisma.checklistItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChecklistItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ChecklistItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChecklistItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemFindFirstArgs} args - Arguments to find a ChecklistItem
     * @example
     * // Get one ChecklistItem
     * const checklistItem = await prisma.checklistItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChecklistItemFindFirstArgs>(args?: SelectSubset<T, ChecklistItemFindFirstArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChecklistItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemFindFirstOrThrowArgs} args - Arguments to find a ChecklistItem
     * @example
     * // Get one ChecklistItem
     * const checklistItem = await prisma.checklistItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChecklistItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ChecklistItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChecklistItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChecklistItems
     * const checklistItems = await prisma.checklistItem.findMany()
     * 
     * // Get first 10 ChecklistItems
     * const checklistItems = await prisma.checklistItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checklistItemWithIdOnly = await prisma.checklistItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChecklistItemFindManyArgs>(args?: SelectSubset<T, ChecklistItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChecklistItem.
     * @param {ChecklistItemCreateArgs} args - Arguments to create a ChecklistItem.
     * @example
     * // Create one ChecklistItem
     * const ChecklistItem = await prisma.checklistItem.create({
     *   data: {
     *     // ... data to create a ChecklistItem
     *   }
     * })
     * 
     */
    create<T extends ChecklistItemCreateArgs>(args: SelectSubset<T, ChecklistItemCreateArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChecklistItems.
     * @param {ChecklistItemCreateManyArgs} args - Arguments to create many ChecklistItems.
     * @example
     * // Create many ChecklistItems
     * const checklistItem = await prisma.checklistItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChecklistItemCreateManyArgs>(args?: SelectSubset<T, ChecklistItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChecklistItems and returns the data saved in the database.
     * @param {ChecklistItemCreateManyAndReturnArgs} args - Arguments to create many ChecklistItems.
     * @example
     * // Create many ChecklistItems
     * const checklistItem = await prisma.checklistItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChecklistItems and only return the `id`
     * const checklistItemWithIdOnly = await prisma.checklistItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChecklistItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ChecklistItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChecklistItem.
     * @param {ChecklistItemDeleteArgs} args - Arguments to delete one ChecklistItem.
     * @example
     * // Delete one ChecklistItem
     * const ChecklistItem = await prisma.checklistItem.delete({
     *   where: {
     *     // ... filter to delete one ChecklistItem
     *   }
     * })
     * 
     */
    delete<T extends ChecklistItemDeleteArgs>(args: SelectSubset<T, ChecklistItemDeleteArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChecklistItem.
     * @param {ChecklistItemUpdateArgs} args - Arguments to update one ChecklistItem.
     * @example
     * // Update one ChecklistItem
     * const checklistItem = await prisma.checklistItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChecklistItemUpdateArgs>(args: SelectSubset<T, ChecklistItemUpdateArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChecklistItems.
     * @param {ChecklistItemDeleteManyArgs} args - Arguments to filter ChecklistItems to delete.
     * @example
     * // Delete a few ChecklistItems
     * const { count } = await prisma.checklistItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChecklistItemDeleteManyArgs>(args?: SelectSubset<T, ChecklistItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChecklistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChecklistItems
     * const checklistItem = await prisma.checklistItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChecklistItemUpdateManyArgs>(args: SelectSubset<T, ChecklistItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChecklistItems and returns the data updated in the database.
     * @param {ChecklistItemUpdateManyAndReturnArgs} args - Arguments to update many ChecklistItems.
     * @example
     * // Update many ChecklistItems
     * const checklistItem = await prisma.checklistItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChecklistItems and only return the `id`
     * const checklistItemWithIdOnly = await prisma.checklistItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChecklistItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ChecklistItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChecklistItem.
     * @param {ChecklistItemUpsertArgs} args - Arguments to update or create a ChecklistItem.
     * @example
     * // Update or create a ChecklistItem
     * const checklistItem = await prisma.checklistItem.upsert({
     *   create: {
     *     // ... data to create a ChecklistItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChecklistItem we want to update
     *   }
     * })
     */
    upsert<T extends ChecklistItemUpsertArgs>(args: SelectSubset<T, ChecklistItemUpsertArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChecklistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemCountArgs} args - Arguments to filter ChecklistItems to count.
     * @example
     * // Count the number of ChecklistItems
     * const count = await prisma.checklistItem.count({
     *   where: {
     *     // ... the filter for the ChecklistItems we want to count
     *   }
     * })
    **/
    count<T extends ChecklistItemCountArgs>(
      args?: Subset<T, ChecklistItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChecklistItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChecklistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChecklistItemAggregateArgs>(args: Subset<T, ChecklistItemAggregateArgs>): Prisma.PrismaPromise<GetChecklistItemAggregateType<T>>

    /**
     * Group by ChecklistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemGroupByArgs} args - Group by arguments.
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
      T extends ChecklistItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChecklistItemGroupByArgs['orderBy'] }
        : { orderBy?: ChecklistItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChecklistItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChecklistItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChecklistItem model
   */
  readonly fields: ChecklistItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChecklistItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChecklistItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    remarksHistory<T extends ChecklistItem$remarksHistoryArgs<ExtArgs> = {}>(args?: Subset<T, ChecklistItem$remarksHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemarkEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ChecklistItem model
   */
  interface ChecklistItemFieldRefs {
    readonly id: FieldRef<"ChecklistItem", 'String'>
    readonly gearName: FieldRef<"ChecklistItem", 'String'>
    readonly category: FieldRef<"ChecklistItem", 'String'>
    readonly isChecked: FieldRef<"ChecklistItem", 'Boolean'>
    readonly remarks: FieldRef<"ChecklistItem", 'String'>
    readonly requestedStatus: FieldRef<"ChecklistItem", 'InventoryStatus'>
    readonly createdAt: FieldRef<"ChecklistItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChecklistItem findUnique
   */
  export type ChecklistItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistItem to fetch.
     */
    where: ChecklistItemWhereUniqueInput
  }

  /**
   * ChecklistItem findUniqueOrThrow
   */
  export type ChecklistItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistItem to fetch.
     */
    where: ChecklistItemWhereUniqueInput
  }

  /**
   * ChecklistItem findFirst
   */
  export type ChecklistItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistItem to fetch.
     */
    where?: ChecklistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistItems to fetch.
     */
    orderBy?: ChecklistItemOrderByWithRelationInput | ChecklistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChecklistItems.
     */
    cursor?: ChecklistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChecklistItems.
     */
    distinct?: ChecklistItemScalarFieldEnum | ChecklistItemScalarFieldEnum[]
  }

  /**
   * ChecklistItem findFirstOrThrow
   */
  export type ChecklistItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistItem to fetch.
     */
    where?: ChecklistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistItems to fetch.
     */
    orderBy?: ChecklistItemOrderByWithRelationInput | ChecklistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChecklistItems.
     */
    cursor?: ChecklistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChecklistItems.
     */
    distinct?: ChecklistItemScalarFieldEnum | ChecklistItemScalarFieldEnum[]
  }

  /**
   * ChecklistItem findMany
   */
  export type ChecklistItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistItems to fetch.
     */
    where?: ChecklistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistItems to fetch.
     */
    orderBy?: ChecklistItemOrderByWithRelationInput | ChecklistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChecklistItems.
     */
    cursor?: ChecklistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistItems.
     */
    skip?: number
    distinct?: ChecklistItemScalarFieldEnum | ChecklistItemScalarFieldEnum[]
  }

  /**
   * ChecklistItem create
   */
  export type ChecklistItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ChecklistItem.
     */
    data: XOR<ChecklistItemCreateInput, ChecklistItemUncheckedCreateInput>
  }

  /**
   * ChecklistItem createMany
   */
  export type ChecklistItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChecklistItems.
     */
    data: ChecklistItemCreateManyInput | ChecklistItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChecklistItem createManyAndReturn
   */
  export type ChecklistItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * The data used to create many ChecklistItems.
     */
    data: ChecklistItemCreateManyInput | ChecklistItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChecklistItem update
   */
  export type ChecklistItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ChecklistItem.
     */
    data: XOR<ChecklistItemUpdateInput, ChecklistItemUncheckedUpdateInput>
    /**
     * Choose, which ChecklistItem to update.
     */
    where: ChecklistItemWhereUniqueInput
  }

  /**
   * ChecklistItem updateMany
   */
  export type ChecklistItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChecklistItems.
     */
    data: XOR<ChecklistItemUpdateManyMutationInput, ChecklistItemUncheckedUpdateManyInput>
    /**
     * Filter which ChecklistItems to update
     */
    where?: ChecklistItemWhereInput
    /**
     * Limit how many ChecklistItems to update.
     */
    limit?: number
  }

  /**
   * ChecklistItem updateManyAndReturn
   */
  export type ChecklistItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * The data used to update ChecklistItems.
     */
    data: XOR<ChecklistItemUpdateManyMutationInput, ChecklistItemUncheckedUpdateManyInput>
    /**
     * Filter which ChecklistItems to update
     */
    where?: ChecklistItemWhereInput
    /**
     * Limit how many ChecklistItems to update.
     */
    limit?: number
  }

  /**
   * ChecklistItem upsert
   */
  export type ChecklistItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ChecklistItem to update in case it exists.
     */
    where: ChecklistItemWhereUniqueInput
    /**
     * In case the ChecklistItem found by the `where` argument doesn't exist, create a new ChecklistItem with this data.
     */
    create: XOR<ChecklistItemCreateInput, ChecklistItemUncheckedCreateInput>
    /**
     * In case the ChecklistItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChecklistItemUpdateInput, ChecklistItemUncheckedUpdateInput>
  }

  /**
   * ChecklistItem delete
   */
  export type ChecklistItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * Filter which ChecklistItem to delete.
     */
    where: ChecklistItemWhereUniqueInput
  }

  /**
   * ChecklistItem deleteMany
   */
  export type ChecklistItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChecklistItems to delete
     */
    where?: ChecklistItemWhereInput
    /**
     * Limit how many ChecklistItems to delete.
     */
    limit?: number
  }

  /**
   * ChecklistItem.remarksHistory
   */
  export type ChecklistItem$remarksHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkEntry
     */
    select?: RemarkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkEntry
     */
    omit?: RemarkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkEntryInclude<ExtArgs> | null
    where?: RemarkEntryWhereInput
    orderBy?: RemarkEntryOrderByWithRelationInput | RemarkEntryOrderByWithRelationInput[]
    cursor?: RemarkEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RemarkEntryScalarFieldEnum | RemarkEntryScalarFieldEnum[]
  }

  /**
   * ChecklistItem without action
   */
  export type ChecklistItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
  }


  /**
   * Model RemarkEntry
   */

  export type AggregateRemarkEntry = {
    _count: RemarkEntryCountAggregateOutputType | null
    _min: RemarkEntryMinAggregateOutputType | null
    _max: RemarkEntryMaxAggregateOutputType | null
  }

  export type RemarkEntryMinAggregateOutputType = {
    id: string | null
    author: string | null
    role: $Enums.UserRole | null
    text: string | null
    requestedStatus: $Enums.InventoryStatus | null
    createdAt: string | null
    equipmentId: string | null
    checklistItemId: string | null
  }

  export type RemarkEntryMaxAggregateOutputType = {
    id: string | null
    author: string | null
    role: $Enums.UserRole | null
    text: string | null
    requestedStatus: $Enums.InventoryStatus | null
    createdAt: string | null
    equipmentId: string | null
    checklistItemId: string | null
  }

  export type RemarkEntryCountAggregateOutputType = {
    id: number
    author: number
    role: number
    text: number
    requestedStatus: number
    createdAt: number
    equipmentId: number
    checklistItemId: number
    _all: number
  }


  export type RemarkEntryMinAggregateInputType = {
    id?: true
    author?: true
    role?: true
    text?: true
    requestedStatus?: true
    createdAt?: true
    equipmentId?: true
    checklistItemId?: true
  }

  export type RemarkEntryMaxAggregateInputType = {
    id?: true
    author?: true
    role?: true
    text?: true
    requestedStatus?: true
    createdAt?: true
    equipmentId?: true
    checklistItemId?: true
  }

  export type RemarkEntryCountAggregateInputType = {
    id?: true
    author?: true
    role?: true
    text?: true
    requestedStatus?: true
    createdAt?: true
    equipmentId?: true
    checklistItemId?: true
    _all?: true
  }

  export type RemarkEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RemarkEntry to aggregate.
     */
    where?: RemarkEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemarkEntries to fetch.
     */
    orderBy?: RemarkEntryOrderByWithRelationInput | RemarkEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RemarkEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemarkEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemarkEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RemarkEntries
    **/
    _count?: true | RemarkEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RemarkEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RemarkEntryMaxAggregateInputType
  }

  export type GetRemarkEntryAggregateType<T extends RemarkEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateRemarkEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRemarkEntry[P]>
      : GetScalarType<T[P], AggregateRemarkEntry[P]>
  }




  export type RemarkEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RemarkEntryWhereInput
    orderBy?: RemarkEntryOrderByWithAggregationInput | RemarkEntryOrderByWithAggregationInput[]
    by: RemarkEntryScalarFieldEnum[] | RemarkEntryScalarFieldEnum
    having?: RemarkEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RemarkEntryCountAggregateInputType | true
    _min?: RemarkEntryMinAggregateInputType
    _max?: RemarkEntryMaxAggregateInputType
  }

  export type RemarkEntryGroupByOutputType = {
    id: string
    author: string
    role: $Enums.UserRole
    text: string
    requestedStatus: $Enums.InventoryStatus | null
    createdAt: string
    equipmentId: string | null
    checklistItemId: string | null
    _count: RemarkEntryCountAggregateOutputType | null
    _min: RemarkEntryMinAggregateOutputType | null
    _max: RemarkEntryMaxAggregateOutputType | null
  }

  type GetRemarkEntryGroupByPayload<T extends RemarkEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RemarkEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RemarkEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RemarkEntryGroupByOutputType[P]>
            : GetScalarType<T[P], RemarkEntryGroupByOutputType[P]>
        }
      >
    >


  export type RemarkEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    role?: boolean
    text?: boolean
    requestedStatus?: boolean
    createdAt?: boolean
    equipmentId?: boolean
    checklistItemId?: boolean
    equipment?: boolean | RemarkEntry$equipmentArgs<ExtArgs>
    checklistItem?: boolean | RemarkEntry$checklistItemArgs<ExtArgs>
  }, ExtArgs["result"]["remarkEntry"]>

  export type RemarkEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    role?: boolean
    text?: boolean
    requestedStatus?: boolean
    createdAt?: boolean
    equipmentId?: boolean
    checklistItemId?: boolean
    equipment?: boolean | RemarkEntry$equipmentArgs<ExtArgs>
    checklistItem?: boolean | RemarkEntry$checklistItemArgs<ExtArgs>
  }, ExtArgs["result"]["remarkEntry"]>

  export type RemarkEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    role?: boolean
    text?: boolean
    requestedStatus?: boolean
    createdAt?: boolean
    equipmentId?: boolean
    checklistItemId?: boolean
    equipment?: boolean | RemarkEntry$equipmentArgs<ExtArgs>
    checklistItem?: boolean | RemarkEntry$checklistItemArgs<ExtArgs>
  }, ExtArgs["result"]["remarkEntry"]>

  export type RemarkEntrySelectScalar = {
    id?: boolean
    author?: boolean
    role?: boolean
    text?: boolean
    requestedStatus?: boolean
    createdAt?: boolean
    equipmentId?: boolean
    checklistItemId?: boolean
  }

  export type RemarkEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "author" | "role" | "text" | "requestedStatus" | "createdAt" | "equipmentId" | "checklistItemId", ExtArgs["result"]["remarkEntry"]>
  export type RemarkEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | RemarkEntry$equipmentArgs<ExtArgs>
    checklistItem?: boolean | RemarkEntry$checklistItemArgs<ExtArgs>
  }
  export type RemarkEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | RemarkEntry$equipmentArgs<ExtArgs>
    checklistItem?: boolean | RemarkEntry$checklistItemArgs<ExtArgs>
  }
  export type RemarkEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | RemarkEntry$equipmentArgs<ExtArgs>
    checklistItem?: boolean | RemarkEntry$checklistItemArgs<ExtArgs>
  }

  export type $RemarkEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RemarkEntry"
    objects: {
      equipment: Prisma.$EquipmentPayload<ExtArgs> | null
      checklistItem: Prisma.$ChecklistItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      author: string
      role: $Enums.UserRole
      text: string
      requestedStatus: $Enums.InventoryStatus | null
      createdAt: string
      equipmentId: string | null
      checklistItemId: string | null
    }, ExtArgs["result"]["remarkEntry"]>
    composites: {}
  }

  type RemarkEntryGetPayload<S extends boolean | null | undefined | RemarkEntryDefaultArgs> = $Result.GetResult<Prisma.$RemarkEntryPayload, S>

  type RemarkEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RemarkEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RemarkEntryCountAggregateInputType | true
    }

  export interface RemarkEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RemarkEntry'], meta: { name: 'RemarkEntry' } }
    /**
     * Find zero or one RemarkEntry that matches the filter.
     * @param {RemarkEntryFindUniqueArgs} args - Arguments to find a RemarkEntry
     * @example
     * // Get one RemarkEntry
     * const remarkEntry = await prisma.remarkEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RemarkEntryFindUniqueArgs>(args: SelectSubset<T, RemarkEntryFindUniqueArgs<ExtArgs>>): Prisma__RemarkEntryClient<$Result.GetResult<Prisma.$RemarkEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RemarkEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RemarkEntryFindUniqueOrThrowArgs} args - Arguments to find a RemarkEntry
     * @example
     * // Get one RemarkEntry
     * const remarkEntry = await prisma.remarkEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RemarkEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, RemarkEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RemarkEntryClient<$Result.GetResult<Prisma.$RemarkEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RemarkEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarkEntryFindFirstArgs} args - Arguments to find a RemarkEntry
     * @example
     * // Get one RemarkEntry
     * const remarkEntry = await prisma.remarkEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RemarkEntryFindFirstArgs>(args?: SelectSubset<T, RemarkEntryFindFirstArgs<ExtArgs>>): Prisma__RemarkEntryClient<$Result.GetResult<Prisma.$RemarkEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RemarkEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarkEntryFindFirstOrThrowArgs} args - Arguments to find a RemarkEntry
     * @example
     * // Get one RemarkEntry
     * const remarkEntry = await prisma.remarkEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RemarkEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, RemarkEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RemarkEntryClient<$Result.GetResult<Prisma.$RemarkEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RemarkEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarkEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RemarkEntries
     * const remarkEntries = await prisma.remarkEntry.findMany()
     * 
     * // Get first 10 RemarkEntries
     * const remarkEntries = await prisma.remarkEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const remarkEntryWithIdOnly = await prisma.remarkEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RemarkEntryFindManyArgs>(args?: SelectSubset<T, RemarkEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemarkEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RemarkEntry.
     * @param {RemarkEntryCreateArgs} args - Arguments to create a RemarkEntry.
     * @example
     * // Create one RemarkEntry
     * const RemarkEntry = await prisma.remarkEntry.create({
     *   data: {
     *     // ... data to create a RemarkEntry
     *   }
     * })
     * 
     */
    create<T extends RemarkEntryCreateArgs>(args: SelectSubset<T, RemarkEntryCreateArgs<ExtArgs>>): Prisma__RemarkEntryClient<$Result.GetResult<Prisma.$RemarkEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RemarkEntries.
     * @param {RemarkEntryCreateManyArgs} args - Arguments to create many RemarkEntries.
     * @example
     * // Create many RemarkEntries
     * const remarkEntry = await prisma.remarkEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RemarkEntryCreateManyArgs>(args?: SelectSubset<T, RemarkEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RemarkEntries and returns the data saved in the database.
     * @param {RemarkEntryCreateManyAndReturnArgs} args - Arguments to create many RemarkEntries.
     * @example
     * // Create many RemarkEntries
     * const remarkEntry = await prisma.remarkEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RemarkEntries and only return the `id`
     * const remarkEntryWithIdOnly = await prisma.remarkEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RemarkEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, RemarkEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemarkEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RemarkEntry.
     * @param {RemarkEntryDeleteArgs} args - Arguments to delete one RemarkEntry.
     * @example
     * // Delete one RemarkEntry
     * const RemarkEntry = await prisma.remarkEntry.delete({
     *   where: {
     *     // ... filter to delete one RemarkEntry
     *   }
     * })
     * 
     */
    delete<T extends RemarkEntryDeleteArgs>(args: SelectSubset<T, RemarkEntryDeleteArgs<ExtArgs>>): Prisma__RemarkEntryClient<$Result.GetResult<Prisma.$RemarkEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RemarkEntry.
     * @param {RemarkEntryUpdateArgs} args - Arguments to update one RemarkEntry.
     * @example
     * // Update one RemarkEntry
     * const remarkEntry = await prisma.remarkEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RemarkEntryUpdateArgs>(args: SelectSubset<T, RemarkEntryUpdateArgs<ExtArgs>>): Prisma__RemarkEntryClient<$Result.GetResult<Prisma.$RemarkEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RemarkEntries.
     * @param {RemarkEntryDeleteManyArgs} args - Arguments to filter RemarkEntries to delete.
     * @example
     * // Delete a few RemarkEntries
     * const { count } = await prisma.remarkEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RemarkEntryDeleteManyArgs>(args?: SelectSubset<T, RemarkEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RemarkEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarkEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RemarkEntries
     * const remarkEntry = await prisma.remarkEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RemarkEntryUpdateManyArgs>(args: SelectSubset<T, RemarkEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RemarkEntries and returns the data updated in the database.
     * @param {RemarkEntryUpdateManyAndReturnArgs} args - Arguments to update many RemarkEntries.
     * @example
     * // Update many RemarkEntries
     * const remarkEntry = await prisma.remarkEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RemarkEntries and only return the `id`
     * const remarkEntryWithIdOnly = await prisma.remarkEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends RemarkEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, RemarkEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemarkEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RemarkEntry.
     * @param {RemarkEntryUpsertArgs} args - Arguments to update or create a RemarkEntry.
     * @example
     * // Update or create a RemarkEntry
     * const remarkEntry = await prisma.remarkEntry.upsert({
     *   create: {
     *     // ... data to create a RemarkEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RemarkEntry we want to update
     *   }
     * })
     */
    upsert<T extends RemarkEntryUpsertArgs>(args: SelectSubset<T, RemarkEntryUpsertArgs<ExtArgs>>): Prisma__RemarkEntryClient<$Result.GetResult<Prisma.$RemarkEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RemarkEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarkEntryCountArgs} args - Arguments to filter RemarkEntries to count.
     * @example
     * // Count the number of RemarkEntries
     * const count = await prisma.remarkEntry.count({
     *   where: {
     *     // ... the filter for the RemarkEntries we want to count
     *   }
     * })
    **/
    count<T extends RemarkEntryCountArgs>(
      args?: Subset<T, RemarkEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RemarkEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RemarkEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarkEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RemarkEntryAggregateArgs>(args: Subset<T, RemarkEntryAggregateArgs>): Prisma.PrismaPromise<GetRemarkEntryAggregateType<T>>

    /**
     * Group by RemarkEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarkEntryGroupByArgs} args - Group by arguments.
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
      T extends RemarkEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RemarkEntryGroupByArgs['orderBy'] }
        : { orderBy?: RemarkEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RemarkEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRemarkEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RemarkEntry model
   */
  readonly fields: RemarkEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RemarkEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RemarkEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipment<T extends RemarkEntry$equipmentArgs<ExtArgs> = {}>(args?: Subset<T, RemarkEntry$equipmentArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    checklistItem<T extends RemarkEntry$checklistItemArgs<ExtArgs> = {}>(args?: Subset<T, RemarkEntry$checklistItemArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RemarkEntry model
   */
  interface RemarkEntryFieldRefs {
    readonly id: FieldRef<"RemarkEntry", 'String'>
    readonly author: FieldRef<"RemarkEntry", 'String'>
    readonly role: FieldRef<"RemarkEntry", 'UserRole'>
    readonly text: FieldRef<"RemarkEntry", 'String'>
    readonly requestedStatus: FieldRef<"RemarkEntry", 'InventoryStatus'>
    readonly createdAt: FieldRef<"RemarkEntry", 'String'>
    readonly equipmentId: FieldRef<"RemarkEntry", 'String'>
    readonly checklistItemId: FieldRef<"RemarkEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RemarkEntry findUnique
   */
  export type RemarkEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkEntry
     */
    select?: RemarkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkEntry
     */
    omit?: RemarkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkEntryInclude<ExtArgs> | null
    /**
     * Filter, which RemarkEntry to fetch.
     */
    where: RemarkEntryWhereUniqueInput
  }

  /**
   * RemarkEntry findUniqueOrThrow
   */
  export type RemarkEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkEntry
     */
    select?: RemarkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkEntry
     */
    omit?: RemarkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkEntryInclude<ExtArgs> | null
    /**
     * Filter, which RemarkEntry to fetch.
     */
    where: RemarkEntryWhereUniqueInput
  }

  /**
   * RemarkEntry findFirst
   */
  export type RemarkEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkEntry
     */
    select?: RemarkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkEntry
     */
    omit?: RemarkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkEntryInclude<ExtArgs> | null
    /**
     * Filter, which RemarkEntry to fetch.
     */
    where?: RemarkEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemarkEntries to fetch.
     */
    orderBy?: RemarkEntryOrderByWithRelationInput | RemarkEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RemarkEntries.
     */
    cursor?: RemarkEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemarkEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemarkEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemarkEntries.
     */
    distinct?: RemarkEntryScalarFieldEnum | RemarkEntryScalarFieldEnum[]
  }

  /**
   * RemarkEntry findFirstOrThrow
   */
  export type RemarkEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkEntry
     */
    select?: RemarkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkEntry
     */
    omit?: RemarkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkEntryInclude<ExtArgs> | null
    /**
     * Filter, which RemarkEntry to fetch.
     */
    where?: RemarkEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemarkEntries to fetch.
     */
    orderBy?: RemarkEntryOrderByWithRelationInput | RemarkEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RemarkEntries.
     */
    cursor?: RemarkEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemarkEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemarkEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemarkEntries.
     */
    distinct?: RemarkEntryScalarFieldEnum | RemarkEntryScalarFieldEnum[]
  }

  /**
   * RemarkEntry findMany
   */
  export type RemarkEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkEntry
     */
    select?: RemarkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkEntry
     */
    omit?: RemarkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkEntryInclude<ExtArgs> | null
    /**
     * Filter, which RemarkEntries to fetch.
     */
    where?: RemarkEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemarkEntries to fetch.
     */
    orderBy?: RemarkEntryOrderByWithRelationInput | RemarkEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RemarkEntries.
     */
    cursor?: RemarkEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemarkEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemarkEntries.
     */
    skip?: number
    distinct?: RemarkEntryScalarFieldEnum | RemarkEntryScalarFieldEnum[]
  }

  /**
   * RemarkEntry create
   */
  export type RemarkEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkEntry
     */
    select?: RemarkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkEntry
     */
    omit?: RemarkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a RemarkEntry.
     */
    data: XOR<RemarkEntryCreateInput, RemarkEntryUncheckedCreateInput>
  }

  /**
   * RemarkEntry createMany
   */
  export type RemarkEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RemarkEntries.
     */
    data: RemarkEntryCreateManyInput | RemarkEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RemarkEntry createManyAndReturn
   */
  export type RemarkEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkEntry
     */
    select?: RemarkEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkEntry
     */
    omit?: RemarkEntryOmit<ExtArgs> | null
    /**
     * The data used to create many RemarkEntries.
     */
    data: RemarkEntryCreateManyInput | RemarkEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RemarkEntry update
   */
  export type RemarkEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkEntry
     */
    select?: RemarkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkEntry
     */
    omit?: RemarkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a RemarkEntry.
     */
    data: XOR<RemarkEntryUpdateInput, RemarkEntryUncheckedUpdateInput>
    /**
     * Choose, which RemarkEntry to update.
     */
    where: RemarkEntryWhereUniqueInput
  }

  /**
   * RemarkEntry updateMany
   */
  export type RemarkEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RemarkEntries.
     */
    data: XOR<RemarkEntryUpdateManyMutationInput, RemarkEntryUncheckedUpdateManyInput>
    /**
     * Filter which RemarkEntries to update
     */
    where?: RemarkEntryWhereInput
    /**
     * Limit how many RemarkEntries to update.
     */
    limit?: number
  }

  /**
   * RemarkEntry updateManyAndReturn
   */
  export type RemarkEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkEntry
     */
    select?: RemarkEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkEntry
     */
    omit?: RemarkEntryOmit<ExtArgs> | null
    /**
     * The data used to update RemarkEntries.
     */
    data: XOR<RemarkEntryUpdateManyMutationInput, RemarkEntryUncheckedUpdateManyInput>
    /**
     * Filter which RemarkEntries to update
     */
    where?: RemarkEntryWhereInput
    /**
     * Limit how many RemarkEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RemarkEntry upsert
   */
  export type RemarkEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkEntry
     */
    select?: RemarkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkEntry
     */
    omit?: RemarkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the RemarkEntry to update in case it exists.
     */
    where: RemarkEntryWhereUniqueInput
    /**
     * In case the RemarkEntry found by the `where` argument doesn't exist, create a new RemarkEntry with this data.
     */
    create: XOR<RemarkEntryCreateInput, RemarkEntryUncheckedCreateInput>
    /**
     * In case the RemarkEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RemarkEntryUpdateInput, RemarkEntryUncheckedUpdateInput>
  }

  /**
   * RemarkEntry delete
   */
  export type RemarkEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkEntry
     */
    select?: RemarkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkEntry
     */
    omit?: RemarkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkEntryInclude<ExtArgs> | null
    /**
     * Filter which RemarkEntry to delete.
     */
    where: RemarkEntryWhereUniqueInput
  }

  /**
   * RemarkEntry deleteMany
   */
  export type RemarkEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RemarkEntries to delete
     */
    where?: RemarkEntryWhereInput
    /**
     * Limit how many RemarkEntries to delete.
     */
    limit?: number
  }

  /**
   * RemarkEntry.equipment
   */
  export type RemarkEntry$equipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
  }

  /**
   * RemarkEntry.checklistItem
   */
  export type RemarkEntry$checklistItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    where?: ChecklistItemWhereInput
  }

  /**
   * RemarkEntry without action
   */
  export type RemarkEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkEntry
     */
    select?: RemarkEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkEntry
     */
    omit?: RemarkEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkEntryInclude<ExtArgs> | null
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


  export const EquipmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    status: 'status',
    location: 'location',
    categoryColor: 'categoryColor',
    createdAt: 'createdAt'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


  export const ChecklistItemScalarFieldEnum: {
    id: 'id',
    gearName: 'gearName',
    category: 'category',
    isChecked: 'isChecked',
    remarks: 'remarks',
    requestedStatus: 'requestedStatus',
    createdAt: 'createdAt'
  };

  export type ChecklistItemScalarFieldEnum = (typeof ChecklistItemScalarFieldEnum)[keyof typeof ChecklistItemScalarFieldEnum]


  export const RemarkEntryScalarFieldEnum: {
    id: 'id',
    author: 'author',
    role: 'role',
    text: 'text',
    requestedStatus: 'requestedStatus',
    createdAt: 'createdAt',
    equipmentId: 'equipmentId',
    checklistItemId: 'checklistItemId'
  };

  export type RemarkEntryScalarFieldEnum = (typeof RemarkEntryScalarFieldEnum)[keyof typeof RemarkEntryScalarFieldEnum]


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
   * Reference to a field of type 'InventoryStatus'
   */
  export type EnumInventoryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InventoryStatus'>
    


  /**
   * Reference to a field of type 'InventoryStatus[]'
   */
  export type ListEnumInventoryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InventoryStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


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


  export type EquipmentWhereInput = {
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    id?: StringFilter<"Equipment"> | string
    name?: StringFilter<"Equipment"> | string
    category?: StringFilter<"Equipment"> | string
    status?: EnumInventoryStatusFilter<"Equipment"> | $Enums.InventoryStatus
    location?: StringFilter<"Equipment"> | string
    categoryColor?: StringNullableFilter<"Equipment"> | string | null
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    notes?: RemarkEntryListRelationFilter
  }

  export type EquipmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    status?: SortOrder
    location?: SortOrder
    categoryColor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    notes?: RemarkEntryOrderByRelationAggregateInput
  }

  export type EquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    name?: StringFilter<"Equipment"> | string
    category?: StringFilter<"Equipment"> | string
    status?: EnumInventoryStatusFilter<"Equipment"> | $Enums.InventoryStatus
    location?: StringFilter<"Equipment"> | string
    categoryColor?: StringNullableFilter<"Equipment"> | string | null
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    notes?: RemarkEntryListRelationFilter
  }, "id">

  export type EquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    status?: SortOrder
    location?: SortOrder
    categoryColor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EquipmentCountOrderByAggregateInput
    _max?: EquipmentMaxOrderByAggregateInput
    _min?: EquipmentMinOrderByAggregateInput
  }

  export type EquipmentScalarWhereWithAggregatesInput = {
    AND?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    OR?: EquipmentScalarWhereWithAggregatesInput[]
    NOT?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Equipment"> | string
    name?: StringWithAggregatesFilter<"Equipment"> | string
    category?: StringWithAggregatesFilter<"Equipment"> | string
    status?: EnumInventoryStatusWithAggregatesFilter<"Equipment"> | $Enums.InventoryStatus
    location?: StringWithAggregatesFilter<"Equipment"> | string
    categoryColor?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Equipment"> | Date | string
  }

  export type ChecklistItemWhereInput = {
    AND?: ChecklistItemWhereInput | ChecklistItemWhereInput[]
    OR?: ChecklistItemWhereInput[]
    NOT?: ChecklistItemWhereInput | ChecklistItemWhereInput[]
    id?: StringFilter<"ChecklistItem"> | string
    gearName?: StringFilter<"ChecklistItem"> | string
    category?: StringFilter<"ChecklistItem"> | string
    isChecked?: BoolFilter<"ChecklistItem"> | boolean
    remarks?: StringNullableFilter<"ChecklistItem"> | string | null
    requestedStatus?: EnumInventoryStatusNullableFilter<"ChecklistItem"> | $Enums.InventoryStatus | null
    createdAt?: DateTimeFilter<"ChecklistItem"> | Date | string
    remarksHistory?: RemarkEntryListRelationFilter
  }

  export type ChecklistItemOrderByWithRelationInput = {
    id?: SortOrder
    gearName?: SortOrder
    category?: SortOrder
    isChecked?: SortOrder
    remarks?: SortOrderInput | SortOrder
    requestedStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    remarksHistory?: RemarkEntryOrderByRelationAggregateInput
  }

  export type ChecklistItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChecklistItemWhereInput | ChecklistItemWhereInput[]
    OR?: ChecklistItemWhereInput[]
    NOT?: ChecklistItemWhereInput | ChecklistItemWhereInput[]
    gearName?: StringFilter<"ChecklistItem"> | string
    category?: StringFilter<"ChecklistItem"> | string
    isChecked?: BoolFilter<"ChecklistItem"> | boolean
    remarks?: StringNullableFilter<"ChecklistItem"> | string | null
    requestedStatus?: EnumInventoryStatusNullableFilter<"ChecklistItem"> | $Enums.InventoryStatus | null
    createdAt?: DateTimeFilter<"ChecklistItem"> | Date | string
    remarksHistory?: RemarkEntryListRelationFilter
  }, "id">

  export type ChecklistItemOrderByWithAggregationInput = {
    id?: SortOrder
    gearName?: SortOrder
    category?: SortOrder
    isChecked?: SortOrder
    remarks?: SortOrderInput | SortOrder
    requestedStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ChecklistItemCountOrderByAggregateInput
    _max?: ChecklistItemMaxOrderByAggregateInput
    _min?: ChecklistItemMinOrderByAggregateInput
  }

  export type ChecklistItemScalarWhereWithAggregatesInput = {
    AND?: ChecklistItemScalarWhereWithAggregatesInput | ChecklistItemScalarWhereWithAggregatesInput[]
    OR?: ChecklistItemScalarWhereWithAggregatesInput[]
    NOT?: ChecklistItemScalarWhereWithAggregatesInput | ChecklistItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChecklistItem"> | string
    gearName?: StringWithAggregatesFilter<"ChecklistItem"> | string
    category?: StringWithAggregatesFilter<"ChecklistItem"> | string
    isChecked?: BoolWithAggregatesFilter<"ChecklistItem"> | boolean
    remarks?: StringNullableWithAggregatesFilter<"ChecklistItem"> | string | null
    requestedStatus?: EnumInventoryStatusNullableWithAggregatesFilter<"ChecklistItem"> | $Enums.InventoryStatus | null
    createdAt?: DateTimeWithAggregatesFilter<"ChecklistItem"> | Date | string
  }

  export type RemarkEntryWhereInput = {
    AND?: RemarkEntryWhereInput | RemarkEntryWhereInput[]
    OR?: RemarkEntryWhereInput[]
    NOT?: RemarkEntryWhereInput | RemarkEntryWhereInput[]
    id?: StringFilter<"RemarkEntry"> | string
    author?: StringFilter<"RemarkEntry"> | string
    role?: EnumUserRoleFilter<"RemarkEntry"> | $Enums.UserRole
    text?: StringFilter<"RemarkEntry"> | string
    requestedStatus?: EnumInventoryStatusNullableFilter<"RemarkEntry"> | $Enums.InventoryStatus | null
    createdAt?: StringFilter<"RemarkEntry"> | string
    equipmentId?: StringNullableFilter<"RemarkEntry"> | string | null
    checklistItemId?: StringNullableFilter<"RemarkEntry"> | string | null
    equipment?: XOR<EquipmentNullableScalarRelationFilter, EquipmentWhereInput> | null
    checklistItem?: XOR<ChecklistItemNullableScalarRelationFilter, ChecklistItemWhereInput> | null
  }

  export type RemarkEntryOrderByWithRelationInput = {
    id?: SortOrder
    author?: SortOrder
    role?: SortOrder
    text?: SortOrder
    requestedStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    equipmentId?: SortOrderInput | SortOrder
    checklistItemId?: SortOrderInput | SortOrder
    equipment?: EquipmentOrderByWithRelationInput
    checklistItem?: ChecklistItemOrderByWithRelationInput
  }

  export type RemarkEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RemarkEntryWhereInput | RemarkEntryWhereInput[]
    OR?: RemarkEntryWhereInput[]
    NOT?: RemarkEntryWhereInput | RemarkEntryWhereInput[]
    author?: StringFilter<"RemarkEntry"> | string
    role?: EnumUserRoleFilter<"RemarkEntry"> | $Enums.UserRole
    text?: StringFilter<"RemarkEntry"> | string
    requestedStatus?: EnumInventoryStatusNullableFilter<"RemarkEntry"> | $Enums.InventoryStatus | null
    createdAt?: StringFilter<"RemarkEntry"> | string
    equipmentId?: StringNullableFilter<"RemarkEntry"> | string | null
    checklistItemId?: StringNullableFilter<"RemarkEntry"> | string | null
    equipment?: XOR<EquipmentNullableScalarRelationFilter, EquipmentWhereInput> | null
    checklistItem?: XOR<ChecklistItemNullableScalarRelationFilter, ChecklistItemWhereInput> | null
  }, "id">

  export type RemarkEntryOrderByWithAggregationInput = {
    id?: SortOrder
    author?: SortOrder
    role?: SortOrder
    text?: SortOrder
    requestedStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    equipmentId?: SortOrderInput | SortOrder
    checklistItemId?: SortOrderInput | SortOrder
    _count?: RemarkEntryCountOrderByAggregateInput
    _max?: RemarkEntryMaxOrderByAggregateInput
    _min?: RemarkEntryMinOrderByAggregateInput
  }

  export type RemarkEntryScalarWhereWithAggregatesInput = {
    AND?: RemarkEntryScalarWhereWithAggregatesInput | RemarkEntryScalarWhereWithAggregatesInput[]
    OR?: RemarkEntryScalarWhereWithAggregatesInput[]
    NOT?: RemarkEntryScalarWhereWithAggregatesInput | RemarkEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RemarkEntry"> | string
    author?: StringWithAggregatesFilter<"RemarkEntry"> | string
    role?: EnumUserRoleWithAggregatesFilter<"RemarkEntry"> | $Enums.UserRole
    text?: StringWithAggregatesFilter<"RemarkEntry"> | string
    requestedStatus?: EnumInventoryStatusNullableWithAggregatesFilter<"RemarkEntry"> | $Enums.InventoryStatus | null
    createdAt?: StringWithAggregatesFilter<"RemarkEntry"> | string
    equipmentId?: StringNullableWithAggregatesFilter<"RemarkEntry"> | string | null
    checklistItemId?: StringNullableWithAggregatesFilter<"RemarkEntry"> | string | null
  }

  export type EquipmentCreateInput = {
    id?: string
    name: string
    category: string
    status?: $Enums.InventoryStatus
    location: string
    categoryColor?: string | null
    createdAt?: Date | string
    notes?: RemarkEntryCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateInput = {
    id?: string
    name: string
    category: string
    status?: $Enums.InventoryStatus
    location: string
    categoryColor?: string | null
    createdAt?: Date | string
    notes?: RemarkEntryUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    location?: StringFieldUpdateOperationsInput | string
    categoryColor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: RemarkEntryUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    location?: StringFieldUpdateOperationsInput | string
    categoryColor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: RemarkEntryUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentCreateManyInput = {
    id?: string
    name: string
    category: string
    status?: $Enums.InventoryStatus
    location: string
    categoryColor?: string | null
    createdAt?: Date | string
  }

  export type EquipmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    location?: StringFieldUpdateOperationsInput | string
    categoryColor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    location?: StringFieldUpdateOperationsInput | string
    categoryColor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistItemCreateInput = {
    id?: string
    gearName: string
    category: string
    isChecked?: boolean
    remarks?: string | null
    requestedStatus?: $Enums.InventoryStatus | null
    createdAt?: Date | string
    remarksHistory?: RemarkEntryCreateNestedManyWithoutChecklistItemInput
  }

  export type ChecklistItemUncheckedCreateInput = {
    id?: string
    gearName: string
    category: string
    isChecked?: boolean
    remarks?: string | null
    requestedStatus?: $Enums.InventoryStatus | null
    createdAt?: Date | string
    remarksHistory?: RemarkEntryUncheckedCreateNestedManyWithoutChecklistItemInput
  }

  export type ChecklistItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gearName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    requestedStatus?: NullableEnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    remarksHistory?: RemarkEntryUpdateManyWithoutChecklistItemNestedInput
  }

  export type ChecklistItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gearName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    requestedStatus?: NullableEnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    remarksHistory?: RemarkEntryUncheckedUpdateManyWithoutChecklistItemNestedInput
  }

  export type ChecklistItemCreateManyInput = {
    id?: string
    gearName: string
    category: string
    isChecked?: boolean
    remarks?: string | null
    requestedStatus?: $Enums.InventoryStatus | null
    createdAt?: Date | string
  }

  export type ChecklistItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gearName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    requestedStatus?: NullableEnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gearName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    requestedStatus?: NullableEnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemarkEntryCreateInput = {
    id?: string
    author: string
    role: $Enums.UserRole
    text: string
    requestedStatus?: $Enums.InventoryStatus | null
    createdAt: string
    equipment?: EquipmentCreateNestedOneWithoutNotesInput
    checklistItem?: ChecklistItemCreateNestedOneWithoutRemarksHistoryInput
  }

  export type RemarkEntryUncheckedCreateInput = {
    id?: string
    author: string
    role: $Enums.UserRole
    text: string
    requestedStatus?: $Enums.InventoryStatus | null
    createdAt: string
    equipmentId?: string | null
    checklistItemId?: string | null
  }

  export type RemarkEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    text?: StringFieldUpdateOperationsInput | string
    requestedStatus?: NullableEnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus | null
    createdAt?: StringFieldUpdateOperationsInput | string
    equipment?: EquipmentUpdateOneWithoutNotesNestedInput
    checklistItem?: ChecklistItemUpdateOneWithoutRemarksHistoryNestedInput
  }

  export type RemarkEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    text?: StringFieldUpdateOperationsInput | string
    requestedStatus?: NullableEnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus | null
    createdAt?: StringFieldUpdateOperationsInput | string
    equipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    checklistItemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RemarkEntryCreateManyInput = {
    id?: string
    author: string
    role: $Enums.UserRole
    text: string
    requestedStatus?: $Enums.InventoryStatus | null
    createdAt: string
    equipmentId?: string | null
    checklistItemId?: string | null
  }

  export type RemarkEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    text?: StringFieldUpdateOperationsInput | string
    requestedStatus?: NullableEnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus | null
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type RemarkEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    text?: StringFieldUpdateOperationsInput | string
    requestedStatus?: NullableEnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus | null
    createdAt?: StringFieldUpdateOperationsInput | string
    equipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    checklistItemId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumInventoryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryStatus | EnumInventoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryStatus[] | ListEnumInventoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryStatus[] | ListEnumInventoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryStatusFilter<$PrismaModel> | $Enums.InventoryStatus
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

  export type RemarkEntryListRelationFilter = {
    every?: RemarkEntryWhereInput
    some?: RemarkEntryWhereInput
    none?: RemarkEntryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RemarkEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    status?: SortOrder
    location?: SortOrder
    categoryColor?: SortOrder
    createdAt?: SortOrder
  }

  export type EquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    status?: SortOrder
    location?: SortOrder
    categoryColor?: SortOrder
    createdAt?: SortOrder
  }

  export type EquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    status?: SortOrder
    location?: SortOrder
    categoryColor?: SortOrder
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

  export type EnumInventoryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryStatus | EnumInventoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryStatus[] | ListEnumInventoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryStatus[] | ListEnumInventoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryStatusWithAggregatesFilter<$PrismaModel> | $Enums.InventoryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInventoryStatusFilter<$PrismaModel>
    _max?: NestedEnumInventoryStatusFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumInventoryStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryStatus | EnumInventoryStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.InventoryStatus[] | ListEnumInventoryStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InventoryStatus[] | ListEnumInventoryStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInventoryStatusNullableFilter<$PrismaModel> | $Enums.InventoryStatus | null
  }

  export type ChecklistItemCountOrderByAggregateInput = {
    id?: SortOrder
    gearName?: SortOrder
    category?: SortOrder
    isChecked?: SortOrder
    remarks?: SortOrder
    requestedStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type ChecklistItemMaxOrderByAggregateInput = {
    id?: SortOrder
    gearName?: SortOrder
    category?: SortOrder
    isChecked?: SortOrder
    remarks?: SortOrder
    requestedStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type ChecklistItemMinOrderByAggregateInput = {
    id?: SortOrder
    gearName?: SortOrder
    category?: SortOrder
    isChecked?: SortOrder
    remarks?: SortOrder
    requestedStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumInventoryStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryStatus | EnumInventoryStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.InventoryStatus[] | ListEnumInventoryStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InventoryStatus[] | ListEnumInventoryStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInventoryStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.InventoryStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumInventoryStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumInventoryStatusNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EquipmentNullableScalarRelationFilter = {
    is?: EquipmentWhereInput | null
    isNot?: EquipmentWhereInput | null
  }

  export type ChecklistItemNullableScalarRelationFilter = {
    is?: ChecklistItemWhereInput | null
    isNot?: ChecklistItemWhereInput | null
  }

  export type RemarkEntryCountOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    role?: SortOrder
    text?: SortOrder
    requestedStatus?: SortOrder
    createdAt?: SortOrder
    equipmentId?: SortOrder
    checklistItemId?: SortOrder
  }

  export type RemarkEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    role?: SortOrder
    text?: SortOrder
    requestedStatus?: SortOrder
    createdAt?: SortOrder
    equipmentId?: SortOrder
    checklistItemId?: SortOrder
  }

  export type RemarkEntryMinOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    role?: SortOrder
    text?: SortOrder
    requestedStatus?: SortOrder
    createdAt?: SortOrder
    equipmentId?: SortOrder
    checklistItemId?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type RemarkEntryCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<RemarkEntryCreateWithoutEquipmentInput, RemarkEntryUncheckedCreateWithoutEquipmentInput> | RemarkEntryCreateWithoutEquipmentInput[] | RemarkEntryUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: RemarkEntryCreateOrConnectWithoutEquipmentInput | RemarkEntryCreateOrConnectWithoutEquipmentInput[]
    createMany?: RemarkEntryCreateManyEquipmentInputEnvelope
    connect?: RemarkEntryWhereUniqueInput | RemarkEntryWhereUniqueInput[]
  }

  export type RemarkEntryUncheckedCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<RemarkEntryCreateWithoutEquipmentInput, RemarkEntryUncheckedCreateWithoutEquipmentInput> | RemarkEntryCreateWithoutEquipmentInput[] | RemarkEntryUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: RemarkEntryCreateOrConnectWithoutEquipmentInput | RemarkEntryCreateOrConnectWithoutEquipmentInput[]
    createMany?: RemarkEntryCreateManyEquipmentInputEnvelope
    connect?: RemarkEntryWhereUniqueInput | RemarkEntryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumInventoryStatusFieldUpdateOperationsInput = {
    set?: $Enums.InventoryStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RemarkEntryUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<RemarkEntryCreateWithoutEquipmentInput, RemarkEntryUncheckedCreateWithoutEquipmentInput> | RemarkEntryCreateWithoutEquipmentInput[] | RemarkEntryUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: RemarkEntryCreateOrConnectWithoutEquipmentInput | RemarkEntryCreateOrConnectWithoutEquipmentInput[]
    upsert?: RemarkEntryUpsertWithWhereUniqueWithoutEquipmentInput | RemarkEntryUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: RemarkEntryCreateManyEquipmentInputEnvelope
    set?: RemarkEntryWhereUniqueInput | RemarkEntryWhereUniqueInput[]
    disconnect?: RemarkEntryWhereUniqueInput | RemarkEntryWhereUniqueInput[]
    delete?: RemarkEntryWhereUniqueInput | RemarkEntryWhereUniqueInput[]
    connect?: RemarkEntryWhereUniqueInput | RemarkEntryWhereUniqueInput[]
    update?: RemarkEntryUpdateWithWhereUniqueWithoutEquipmentInput | RemarkEntryUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: RemarkEntryUpdateManyWithWhereWithoutEquipmentInput | RemarkEntryUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: RemarkEntryScalarWhereInput | RemarkEntryScalarWhereInput[]
  }

  export type RemarkEntryUncheckedUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<RemarkEntryCreateWithoutEquipmentInput, RemarkEntryUncheckedCreateWithoutEquipmentInput> | RemarkEntryCreateWithoutEquipmentInput[] | RemarkEntryUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: RemarkEntryCreateOrConnectWithoutEquipmentInput | RemarkEntryCreateOrConnectWithoutEquipmentInput[]
    upsert?: RemarkEntryUpsertWithWhereUniqueWithoutEquipmentInput | RemarkEntryUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: RemarkEntryCreateManyEquipmentInputEnvelope
    set?: RemarkEntryWhereUniqueInput | RemarkEntryWhereUniqueInput[]
    disconnect?: RemarkEntryWhereUniqueInput | RemarkEntryWhereUniqueInput[]
    delete?: RemarkEntryWhereUniqueInput | RemarkEntryWhereUniqueInput[]
    connect?: RemarkEntryWhereUniqueInput | RemarkEntryWhereUniqueInput[]
    update?: RemarkEntryUpdateWithWhereUniqueWithoutEquipmentInput | RemarkEntryUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: RemarkEntryUpdateManyWithWhereWithoutEquipmentInput | RemarkEntryUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: RemarkEntryScalarWhereInput | RemarkEntryScalarWhereInput[]
  }

  export type RemarkEntryCreateNestedManyWithoutChecklistItemInput = {
    create?: XOR<RemarkEntryCreateWithoutChecklistItemInput, RemarkEntryUncheckedCreateWithoutChecklistItemInput> | RemarkEntryCreateWithoutChecklistItemInput[] | RemarkEntryUncheckedCreateWithoutChecklistItemInput[]
    connectOrCreate?: RemarkEntryCreateOrConnectWithoutChecklistItemInput | RemarkEntryCreateOrConnectWithoutChecklistItemInput[]
    createMany?: RemarkEntryCreateManyChecklistItemInputEnvelope
    connect?: RemarkEntryWhereUniqueInput | RemarkEntryWhereUniqueInput[]
  }

  export type RemarkEntryUncheckedCreateNestedManyWithoutChecklistItemInput = {
    create?: XOR<RemarkEntryCreateWithoutChecklistItemInput, RemarkEntryUncheckedCreateWithoutChecklistItemInput> | RemarkEntryCreateWithoutChecklistItemInput[] | RemarkEntryUncheckedCreateWithoutChecklistItemInput[]
    connectOrCreate?: RemarkEntryCreateOrConnectWithoutChecklistItemInput | RemarkEntryCreateOrConnectWithoutChecklistItemInput[]
    createMany?: RemarkEntryCreateManyChecklistItemInputEnvelope
    connect?: RemarkEntryWhereUniqueInput | RemarkEntryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableEnumInventoryStatusFieldUpdateOperationsInput = {
    set?: $Enums.InventoryStatus | null
  }

  export type RemarkEntryUpdateManyWithoutChecklistItemNestedInput = {
    create?: XOR<RemarkEntryCreateWithoutChecklistItemInput, RemarkEntryUncheckedCreateWithoutChecklistItemInput> | RemarkEntryCreateWithoutChecklistItemInput[] | RemarkEntryUncheckedCreateWithoutChecklistItemInput[]
    connectOrCreate?: RemarkEntryCreateOrConnectWithoutChecklistItemInput | RemarkEntryCreateOrConnectWithoutChecklistItemInput[]
    upsert?: RemarkEntryUpsertWithWhereUniqueWithoutChecklistItemInput | RemarkEntryUpsertWithWhereUniqueWithoutChecklistItemInput[]
    createMany?: RemarkEntryCreateManyChecklistItemInputEnvelope
    set?: RemarkEntryWhereUniqueInput | RemarkEntryWhereUniqueInput[]
    disconnect?: RemarkEntryWhereUniqueInput | RemarkEntryWhereUniqueInput[]
    delete?: RemarkEntryWhereUniqueInput | RemarkEntryWhereUniqueInput[]
    connect?: RemarkEntryWhereUniqueInput | RemarkEntryWhereUniqueInput[]
    update?: RemarkEntryUpdateWithWhereUniqueWithoutChecklistItemInput | RemarkEntryUpdateWithWhereUniqueWithoutChecklistItemInput[]
    updateMany?: RemarkEntryUpdateManyWithWhereWithoutChecklistItemInput | RemarkEntryUpdateManyWithWhereWithoutChecklistItemInput[]
    deleteMany?: RemarkEntryScalarWhereInput | RemarkEntryScalarWhereInput[]
  }

  export type RemarkEntryUncheckedUpdateManyWithoutChecklistItemNestedInput = {
    create?: XOR<RemarkEntryCreateWithoutChecklistItemInput, RemarkEntryUncheckedCreateWithoutChecklistItemInput> | RemarkEntryCreateWithoutChecklistItemInput[] | RemarkEntryUncheckedCreateWithoutChecklistItemInput[]
    connectOrCreate?: RemarkEntryCreateOrConnectWithoutChecklistItemInput | RemarkEntryCreateOrConnectWithoutChecklistItemInput[]
    upsert?: RemarkEntryUpsertWithWhereUniqueWithoutChecklistItemInput | RemarkEntryUpsertWithWhereUniqueWithoutChecklistItemInput[]
    createMany?: RemarkEntryCreateManyChecklistItemInputEnvelope
    set?: RemarkEntryWhereUniqueInput | RemarkEntryWhereUniqueInput[]
    disconnect?: RemarkEntryWhereUniqueInput | RemarkEntryWhereUniqueInput[]
    delete?: RemarkEntryWhereUniqueInput | RemarkEntryWhereUniqueInput[]
    connect?: RemarkEntryWhereUniqueInput | RemarkEntryWhereUniqueInput[]
    update?: RemarkEntryUpdateWithWhereUniqueWithoutChecklistItemInput | RemarkEntryUpdateWithWhereUniqueWithoutChecklistItemInput[]
    updateMany?: RemarkEntryUpdateManyWithWhereWithoutChecklistItemInput | RemarkEntryUpdateManyWithWhereWithoutChecklistItemInput[]
    deleteMany?: RemarkEntryScalarWhereInput | RemarkEntryScalarWhereInput[]
  }

  export type EquipmentCreateNestedOneWithoutNotesInput = {
    create?: XOR<EquipmentCreateWithoutNotesInput, EquipmentUncheckedCreateWithoutNotesInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutNotesInput
    connect?: EquipmentWhereUniqueInput
  }

  export type ChecklistItemCreateNestedOneWithoutRemarksHistoryInput = {
    create?: XOR<ChecklistItemCreateWithoutRemarksHistoryInput, ChecklistItemUncheckedCreateWithoutRemarksHistoryInput>
    connectOrCreate?: ChecklistItemCreateOrConnectWithoutRemarksHistoryInput
    connect?: ChecklistItemWhereUniqueInput
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EquipmentUpdateOneWithoutNotesNestedInput = {
    create?: XOR<EquipmentCreateWithoutNotesInput, EquipmentUncheckedCreateWithoutNotesInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutNotesInput
    upsert?: EquipmentUpsertWithoutNotesInput
    disconnect?: EquipmentWhereInput | boolean
    delete?: EquipmentWhereInput | boolean
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutNotesInput, EquipmentUpdateWithoutNotesInput>, EquipmentUncheckedUpdateWithoutNotesInput>
  }

  export type ChecklistItemUpdateOneWithoutRemarksHistoryNestedInput = {
    create?: XOR<ChecklistItemCreateWithoutRemarksHistoryInput, ChecklistItemUncheckedCreateWithoutRemarksHistoryInput>
    connectOrCreate?: ChecklistItemCreateOrConnectWithoutRemarksHistoryInput
    upsert?: ChecklistItemUpsertWithoutRemarksHistoryInput
    disconnect?: ChecklistItemWhereInput | boolean
    delete?: ChecklistItemWhereInput | boolean
    connect?: ChecklistItemWhereUniqueInput
    update?: XOR<XOR<ChecklistItemUpdateToOneWithWhereWithoutRemarksHistoryInput, ChecklistItemUpdateWithoutRemarksHistoryInput>, ChecklistItemUncheckedUpdateWithoutRemarksHistoryInput>
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

  export type NestedEnumInventoryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryStatus | EnumInventoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryStatus[] | ListEnumInventoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryStatus[] | ListEnumInventoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryStatusFilter<$PrismaModel> | $Enums.InventoryStatus
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

  export type NestedEnumInventoryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryStatus | EnumInventoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryStatus[] | ListEnumInventoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryStatus[] | ListEnumInventoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryStatusWithAggregatesFilter<$PrismaModel> | $Enums.InventoryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInventoryStatusFilter<$PrismaModel>
    _max?: NestedEnumInventoryStatusFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumInventoryStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryStatus | EnumInventoryStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.InventoryStatus[] | ListEnumInventoryStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InventoryStatus[] | ListEnumInventoryStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInventoryStatusNullableFilter<$PrismaModel> | $Enums.InventoryStatus | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumInventoryStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryStatus | EnumInventoryStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.InventoryStatus[] | ListEnumInventoryStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InventoryStatus[] | ListEnumInventoryStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInventoryStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.InventoryStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumInventoryStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumInventoryStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type RemarkEntryCreateWithoutEquipmentInput = {
    id?: string
    author: string
    role: $Enums.UserRole
    text: string
    requestedStatus?: $Enums.InventoryStatus | null
    createdAt: string
    checklistItem?: ChecklistItemCreateNestedOneWithoutRemarksHistoryInput
  }

  export type RemarkEntryUncheckedCreateWithoutEquipmentInput = {
    id?: string
    author: string
    role: $Enums.UserRole
    text: string
    requestedStatus?: $Enums.InventoryStatus | null
    createdAt: string
    checklistItemId?: string | null
  }

  export type RemarkEntryCreateOrConnectWithoutEquipmentInput = {
    where: RemarkEntryWhereUniqueInput
    create: XOR<RemarkEntryCreateWithoutEquipmentInput, RemarkEntryUncheckedCreateWithoutEquipmentInput>
  }

  export type RemarkEntryCreateManyEquipmentInputEnvelope = {
    data: RemarkEntryCreateManyEquipmentInput | RemarkEntryCreateManyEquipmentInput[]
    skipDuplicates?: boolean
  }

  export type RemarkEntryUpsertWithWhereUniqueWithoutEquipmentInput = {
    where: RemarkEntryWhereUniqueInput
    update: XOR<RemarkEntryUpdateWithoutEquipmentInput, RemarkEntryUncheckedUpdateWithoutEquipmentInput>
    create: XOR<RemarkEntryCreateWithoutEquipmentInput, RemarkEntryUncheckedCreateWithoutEquipmentInput>
  }

  export type RemarkEntryUpdateWithWhereUniqueWithoutEquipmentInput = {
    where: RemarkEntryWhereUniqueInput
    data: XOR<RemarkEntryUpdateWithoutEquipmentInput, RemarkEntryUncheckedUpdateWithoutEquipmentInput>
  }

  export type RemarkEntryUpdateManyWithWhereWithoutEquipmentInput = {
    where: RemarkEntryScalarWhereInput
    data: XOR<RemarkEntryUpdateManyMutationInput, RemarkEntryUncheckedUpdateManyWithoutEquipmentInput>
  }

  export type RemarkEntryScalarWhereInput = {
    AND?: RemarkEntryScalarWhereInput | RemarkEntryScalarWhereInput[]
    OR?: RemarkEntryScalarWhereInput[]
    NOT?: RemarkEntryScalarWhereInput | RemarkEntryScalarWhereInput[]
    id?: StringFilter<"RemarkEntry"> | string
    author?: StringFilter<"RemarkEntry"> | string
    role?: EnumUserRoleFilter<"RemarkEntry"> | $Enums.UserRole
    text?: StringFilter<"RemarkEntry"> | string
    requestedStatus?: EnumInventoryStatusNullableFilter<"RemarkEntry"> | $Enums.InventoryStatus | null
    createdAt?: StringFilter<"RemarkEntry"> | string
    equipmentId?: StringNullableFilter<"RemarkEntry"> | string | null
    checklistItemId?: StringNullableFilter<"RemarkEntry"> | string | null
  }

  export type RemarkEntryCreateWithoutChecklistItemInput = {
    id?: string
    author: string
    role: $Enums.UserRole
    text: string
    requestedStatus?: $Enums.InventoryStatus | null
    createdAt: string
    equipment?: EquipmentCreateNestedOneWithoutNotesInput
  }

  export type RemarkEntryUncheckedCreateWithoutChecklistItemInput = {
    id?: string
    author: string
    role: $Enums.UserRole
    text: string
    requestedStatus?: $Enums.InventoryStatus | null
    createdAt: string
    equipmentId?: string | null
  }

  export type RemarkEntryCreateOrConnectWithoutChecklistItemInput = {
    where: RemarkEntryWhereUniqueInput
    create: XOR<RemarkEntryCreateWithoutChecklistItemInput, RemarkEntryUncheckedCreateWithoutChecklistItemInput>
  }

  export type RemarkEntryCreateManyChecklistItemInputEnvelope = {
    data: RemarkEntryCreateManyChecklistItemInput | RemarkEntryCreateManyChecklistItemInput[]
    skipDuplicates?: boolean
  }

  export type RemarkEntryUpsertWithWhereUniqueWithoutChecklistItemInput = {
    where: RemarkEntryWhereUniqueInput
    update: XOR<RemarkEntryUpdateWithoutChecklistItemInput, RemarkEntryUncheckedUpdateWithoutChecklistItemInput>
    create: XOR<RemarkEntryCreateWithoutChecklistItemInput, RemarkEntryUncheckedCreateWithoutChecklistItemInput>
  }

  export type RemarkEntryUpdateWithWhereUniqueWithoutChecklistItemInput = {
    where: RemarkEntryWhereUniqueInput
    data: XOR<RemarkEntryUpdateWithoutChecklistItemInput, RemarkEntryUncheckedUpdateWithoutChecklistItemInput>
  }

  export type RemarkEntryUpdateManyWithWhereWithoutChecklistItemInput = {
    where: RemarkEntryScalarWhereInput
    data: XOR<RemarkEntryUpdateManyMutationInput, RemarkEntryUncheckedUpdateManyWithoutChecklistItemInput>
  }

  export type EquipmentCreateWithoutNotesInput = {
    id?: string
    name: string
    category: string
    status?: $Enums.InventoryStatus
    location: string
    categoryColor?: string | null
    createdAt?: Date | string
  }

  export type EquipmentUncheckedCreateWithoutNotesInput = {
    id?: string
    name: string
    category: string
    status?: $Enums.InventoryStatus
    location: string
    categoryColor?: string | null
    createdAt?: Date | string
  }

  export type EquipmentCreateOrConnectWithoutNotesInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutNotesInput, EquipmentUncheckedCreateWithoutNotesInput>
  }

  export type ChecklistItemCreateWithoutRemarksHistoryInput = {
    id?: string
    gearName: string
    category: string
    isChecked?: boolean
    remarks?: string | null
    requestedStatus?: $Enums.InventoryStatus | null
    createdAt?: Date | string
  }

  export type ChecklistItemUncheckedCreateWithoutRemarksHistoryInput = {
    id?: string
    gearName: string
    category: string
    isChecked?: boolean
    remarks?: string | null
    requestedStatus?: $Enums.InventoryStatus | null
    createdAt?: Date | string
  }

  export type ChecklistItemCreateOrConnectWithoutRemarksHistoryInput = {
    where: ChecklistItemWhereUniqueInput
    create: XOR<ChecklistItemCreateWithoutRemarksHistoryInput, ChecklistItemUncheckedCreateWithoutRemarksHistoryInput>
  }

  export type EquipmentUpsertWithoutNotesInput = {
    update: XOR<EquipmentUpdateWithoutNotesInput, EquipmentUncheckedUpdateWithoutNotesInput>
    create: XOR<EquipmentCreateWithoutNotesInput, EquipmentUncheckedCreateWithoutNotesInput>
    where?: EquipmentWhereInput
  }

  export type EquipmentUpdateToOneWithWhereWithoutNotesInput = {
    where?: EquipmentWhereInput
    data: XOR<EquipmentUpdateWithoutNotesInput, EquipmentUncheckedUpdateWithoutNotesInput>
  }

  export type EquipmentUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    location?: StringFieldUpdateOperationsInput | string
    categoryColor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    location?: StringFieldUpdateOperationsInput | string
    categoryColor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistItemUpsertWithoutRemarksHistoryInput = {
    update: XOR<ChecklistItemUpdateWithoutRemarksHistoryInput, ChecklistItemUncheckedUpdateWithoutRemarksHistoryInput>
    create: XOR<ChecklistItemCreateWithoutRemarksHistoryInput, ChecklistItemUncheckedCreateWithoutRemarksHistoryInput>
    where?: ChecklistItemWhereInput
  }

  export type ChecklistItemUpdateToOneWithWhereWithoutRemarksHistoryInput = {
    where?: ChecklistItemWhereInput
    data: XOR<ChecklistItemUpdateWithoutRemarksHistoryInput, ChecklistItemUncheckedUpdateWithoutRemarksHistoryInput>
  }

  export type ChecklistItemUpdateWithoutRemarksHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    gearName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    requestedStatus?: NullableEnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistItemUncheckedUpdateWithoutRemarksHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    gearName?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    requestedStatus?: NullableEnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemarkEntryCreateManyEquipmentInput = {
    id?: string
    author: string
    role: $Enums.UserRole
    text: string
    requestedStatus?: $Enums.InventoryStatus | null
    createdAt: string
    checklistItemId?: string | null
  }

  export type RemarkEntryUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    text?: StringFieldUpdateOperationsInput | string
    requestedStatus?: NullableEnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus | null
    createdAt?: StringFieldUpdateOperationsInput | string
    checklistItem?: ChecklistItemUpdateOneWithoutRemarksHistoryNestedInput
  }

  export type RemarkEntryUncheckedUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    text?: StringFieldUpdateOperationsInput | string
    requestedStatus?: NullableEnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus | null
    createdAt?: StringFieldUpdateOperationsInput | string
    checklistItemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RemarkEntryUncheckedUpdateManyWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    text?: StringFieldUpdateOperationsInput | string
    requestedStatus?: NullableEnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus | null
    createdAt?: StringFieldUpdateOperationsInput | string
    checklistItemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RemarkEntryCreateManyChecklistItemInput = {
    id?: string
    author: string
    role: $Enums.UserRole
    text: string
    requestedStatus?: $Enums.InventoryStatus | null
    createdAt: string
    equipmentId?: string | null
  }

  export type RemarkEntryUpdateWithoutChecklistItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    text?: StringFieldUpdateOperationsInput | string
    requestedStatus?: NullableEnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus | null
    createdAt?: StringFieldUpdateOperationsInput | string
    equipment?: EquipmentUpdateOneWithoutNotesNestedInput
  }

  export type RemarkEntryUncheckedUpdateWithoutChecklistItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    text?: StringFieldUpdateOperationsInput | string
    requestedStatus?: NullableEnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus | null
    createdAt?: StringFieldUpdateOperationsInput | string
    equipmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RemarkEntryUncheckedUpdateManyWithoutChecklistItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    text?: StringFieldUpdateOperationsInput | string
    requestedStatus?: NullableEnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus | null
    createdAt?: StringFieldUpdateOperationsInput | string
    equipmentId?: NullableStringFieldUpdateOperationsInput | string | null
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