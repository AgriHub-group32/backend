
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
 * Model chat_room
 * 
 */
export type chat_room = $Result.DefaultSelection<Prisma.$chat_roomPayload>
/**
 * Model harvest
 * 
 */
export type harvest = $Result.DefaultSelection<Prisma.$harvestPayload>
/**
 * Model harvest_category
 * 
 */
export type harvest_category = $Result.DefaultSelection<Prisma.$harvest_categoryPayload>
/**
 * Model harvest_image
 * 
 */
export type harvest_image = $Result.DefaultSelection<Prisma.$harvest_imagePayload>
/**
 * Model message
 * 
 */
export type message = $Result.DefaultSelection<Prisma.$messagePayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model order
 * 
 */
export type order = $Result.DefaultSelection<Prisma.$orderPayload>
/**
 * Model payment
 * 
 */
export type payment = $Result.DefaultSelection<Prisma.$paymentPayload>
/**
 * Model review
 * 
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const user_type: {
  farmer: 'farmer',
  wholesaler: 'wholesaler',
  admin: 'admin'
};

export type user_type = (typeof user_type)[keyof typeof user_type]


export const order_status: {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type order_status = (typeof order_status)[keyof typeof order_status]


export const payment_method: {
  mobile_money: 'mobile_money',
  bank_transfer: 'bank_transfer',
  cash: 'cash',
  platform_wallet: 'platform_wallet'
};

export type payment_method = (typeof payment_method)[keyof typeof payment_method]


export const payment_status: {
  pending: 'pending',
  completed: 'completed',
  failed: 'failed',
  refunded: 'refunded'
};

export type payment_status = (typeof payment_status)[keyof typeof payment_status]

}

export type user_type = $Enums.user_type

export const user_type: typeof $Enums.user_type

export type order_status = $Enums.order_status

export const order_status: typeof $Enums.order_status

export type payment_method = $Enums.payment_method

export const payment_method: typeof $Enums.payment_method

export type payment_status = $Enums.payment_status

export const payment_status: typeof $Enums.payment_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Chat_rooms
 * const chat_rooms = await prisma.chat_room.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Chat_rooms
   * const chat_rooms = await prisma.chat_room.findMany()
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
   * `prisma.chat_room`: Exposes CRUD operations for the **chat_room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chat_rooms
    * const chat_rooms = await prisma.chat_room.findMany()
    * ```
    */
  get chat_room(): Prisma.chat_roomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.harvest`: Exposes CRUD operations for the **harvest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Harvests
    * const harvests = await prisma.harvest.findMany()
    * ```
    */
  get harvest(): Prisma.harvestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.harvest_category`: Exposes CRUD operations for the **harvest_category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Harvest_categories
    * const harvest_categories = await prisma.harvest_category.findMany()
    * ```
    */
  get harvest_category(): Prisma.harvest_categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.harvest_image`: Exposes CRUD operations for the **harvest_image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Harvest_images
    * const harvest_images = await prisma.harvest_image.findMany()
    * ```
    */
  get harvest_image(): Prisma.harvest_imageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.messageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.orderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.paymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.reviewDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    chat_room: 'chat_room',
    harvest: 'harvest',
    harvest_category: 'harvest_category',
    harvest_image: 'harvest_image',
    message: 'message',
    user: 'user',
    order: 'order',
    payment: 'payment',
    review: 'review'
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
      modelProps: "chat_room" | "harvest" | "harvest_category" | "harvest_image" | "message" | "user" | "order" | "payment" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      chat_room: {
        payload: Prisma.$chat_roomPayload<ExtArgs>
        fields: Prisma.chat_roomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chat_roomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_roomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chat_roomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_roomPayload>
          }
          findFirst: {
            args: Prisma.chat_roomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_roomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chat_roomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_roomPayload>
          }
          findMany: {
            args: Prisma.chat_roomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_roomPayload>[]
          }
          create: {
            args: Prisma.chat_roomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_roomPayload>
          }
          createMany: {
            args: Prisma.chat_roomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.chat_roomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_roomPayload>
          }
          update: {
            args: Prisma.chat_roomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_roomPayload>
          }
          deleteMany: {
            args: Prisma.chat_roomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chat_roomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.chat_roomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_roomPayload>
          }
          aggregate: {
            args: Prisma.Chat_roomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat_room>
          }
          groupBy: {
            args: Prisma.chat_roomGroupByArgs<ExtArgs>
            result: $Utils.Optional<Chat_roomGroupByOutputType>[]
          }
          count: {
            args: Prisma.chat_roomCountArgs<ExtArgs>
            result: $Utils.Optional<Chat_roomCountAggregateOutputType> | number
          }
        }
      }
      harvest: {
        payload: Prisma.$harvestPayload<ExtArgs>
        fields: Prisma.harvestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.harvestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.harvestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvestPayload>
          }
          findFirst: {
            args: Prisma.harvestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.harvestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvestPayload>
          }
          findMany: {
            args: Prisma.harvestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvestPayload>[]
          }
          create: {
            args: Prisma.harvestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvestPayload>
          }
          createMany: {
            args: Prisma.harvestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.harvestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvestPayload>
          }
          update: {
            args: Prisma.harvestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvestPayload>
          }
          deleteMany: {
            args: Prisma.harvestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.harvestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.harvestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvestPayload>
          }
          aggregate: {
            args: Prisma.HarvestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHarvest>
          }
          groupBy: {
            args: Prisma.harvestGroupByArgs<ExtArgs>
            result: $Utils.Optional<HarvestGroupByOutputType>[]
          }
          count: {
            args: Prisma.harvestCountArgs<ExtArgs>
            result: $Utils.Optional<HarvestCountAggregateOutputType> | number
          }
        }
      }
      harvest_category: {
        payload: Prisma.$harvest_categoryPayload<ExtArgs>
        fields: Prisma.harvest_categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.harvest_categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvest_categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.harvest_categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvest_categoryPayload>
          }
          findFirst: {
            args: Prisma.harvest_categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvest_categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.harvest_categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvest_categoryPayload>
          }
          findMany: {
            args: Prisma.harvest_categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvest_categoryPayload>[]
          }
          create: {
            args: Prisma.harvest_categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvest_categoryPayload>
          }
          createMany: {
            args: Prisma.harvest_categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.harvest_categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvest_categoryPayload>
          }
          update: {
            args: Prisma.harvest_categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvest_categoryPayload>
          }
          deleteMany: {
            args: Prisma.harvest_categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.harvest_categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.harvest_categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvest_categoryPayload>
          }
          aggregate: {
            args: Prisma.Harvest_categoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHarvest_category>
          }
          groupBy: {
            args: Prisma.harvest_categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Harvest_categoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.harvest_categoryCountArgs<ExtArgs>
            result: $Utils.Optional<Harvest_categoryCountAggregateOutputType> | number
          }
        }
      }
      harvest_image: {
        payload: Prisma.$harvest_imagePayload<ExtArgs>
        fields: Prisma.harvest_imageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.harvest_imageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvest_imagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.harvest_imageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvest_imagePayload>
          }
          findFirst: {
            args: Prisma.harvest_imageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvest_imagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.harvest_imageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvest_imagePayload>
          }
          findMany: {
            args: Prisma.harvest_imageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvest_imagePayload>[]
          }
          create: {
            args: Prisma.harvest_imageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvest_imagePayload>
          }
          createMany: {
            args: Prisma.harvest_imageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.harvest_imageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvest_imagePayload>
          }
          update: {
            args: Prisma.harvest_imageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvest_imagePayload>
          }
          deleteMany: {
            args: Prisma.harvest_imageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.harvest_imageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.harvest_imageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$harvest_imagePayload>
          }
          aggregate: {
            args: Prisma.Harvest_imageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHarvest_image>
          }
          groupBy: {
            args: Prisma.harvest_imageGroupByArgs<ExtArgs>
            result: $Utils.Optional<Harvest_imageGroupByOutputType>[]
          }
          count: {
            args: Prisma.harvest_imageCountArgs<ExtArgs>
            result: $Utils.Optional<Harvest_imageCountAggregateOutputType> | number
          }
        }
      }
      message: {
        payload: Prisma.$messagePayload<ExtArgs>
        fields: Prisma.messageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          findFirst: {
            args: Prisma.messageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          findMany: {
            args: Prisma.messageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>[]
          }
          create: {
            args: Prisma.messageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          createMany: {
            args: Prisma.messageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.messageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          update: {
            args: Prisma.messageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          deleteMany: {
            args: Prisma.messageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.messageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.messageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.messageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      order: {
        payload: Prisma.$orderPayload<ExtArgs>
        fields: Prisma.orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findFirst: {
            args: Prisma.orderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findMany: {
            args: Prisma.orderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          create: {
            args: Prisma.orderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          createMany: {
            args: Prisma.orderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.orderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          update: {
            args: Prisma.orderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          deleteMany: {
            args: Prisma.orderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.orderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.orderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      payment: {
        payload: Prisma.$paymentPayload<ExtArgs>
        fields: Prisma.paymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          findFirst: {
            args: Prisma.paymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          findMany: {
            args: Prisma.paymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          create: {
            args: Prisma.paymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          createMany: {
            args: Prisma.paymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.paymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          update: {
            args: Prisma.paymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          deleteMany: {
            args: Prisma.paymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.paymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.paymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>
        fields: Prisma.reviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    chat_room?: chat_roomOmit
    harvest?: harvestOmit
    harvest_category?: harvest_categoryOmit
    harvest_image?: harvest_imageOmit
    message?: messageOmit
    user?: userOmit
    order?: orderOmit
    payment?: paymentOmit
    review?: reviewOmit
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
   * Count Type Chat_roomCountOutputType
   */

  export type Chat_roomCountOutputType = {
    message: number
  }

  export type Chat_roomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | Chat_roomCountOutputTypeCountMessageArgs
  }

  // Custom InputTypes
  /**
   * Chat_roomCountOutputType without action
   */
  export type Chat_roomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat_roomCountOutputType
     */
    select?: Chat_roomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Chat_roomCountOutputType without action
   */
  export type Chat_roomCountOutputTypeCountMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
  }


  /**
   * Count Type HarvestCountOutputType
   */

  export type HarvestCountOutputType = {
    harvest_image: number
    order: number
  }

  export type HarvestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    harvest_image?: boolean | HarvestCountOutputTypeCountHarvest_imageArgs
    order?: boolean | HarvestCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * HarvestCountOutputType without action
   */
  export type HarvestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HarvestCountOutputType
     */
    select?: HarvestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HarvestCountOutputType without action
   */
  export type HarvestCountOutputTypeCountHarvest_imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: harvest_imageWhereInput
  }

  /**
   * HarvestCountOutputType without action
   */
  export type HarvestCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
  }


  /**
   * Count Type Harvest_categoryCountOutputType
   */

  export type Harvest_categoryCountOutputType = {
    harvest: number
  }

  export type Harvest_categoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    harvest?: boolean | Harvest_categoryCountOutputTypeCountHarvestArgs
  }

  // Custom InputTypes
  /**
   * Harvest_categoryCountOutputType without action
   */
  export type Harvest_categoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Harvest_categoryCountOutputType
     */
    select?: Harvest_categoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Harvest_categoryCountOutputType without action
   */
  export type Harvest_categoryCountOutputTypeCountHarvestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: harvestWhereInput
  }


  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    other_message: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other_message?: boolean | MessageCountOutputTypeCountOther_messageArgs
  }

  // Custom InputTypes
  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountOther_messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    chat_room_chat_room_user1Touser: number
    chat_room_chat_room_user2Touser: number
    harvest: number
    message_message_sender_idTouser: number
    message_message_recipient_idTouser: number
    order_order_buyer_idTouser: number
    review_review_reviewer_idTouser: number
    review_review_reviewee_idTouser: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_room_chat_room_user1Touser?: boolean | UserCountOutputTypeCountChat_room_chat_room_user1TouserArgs
    chat_room_chat_room_user2Touser?: boolean | UserCountOutputTypeCountChat_room_chat_room_user2TouserArgs
    harvest?: boolean | UserCountOutputTypeCountHarvestArgs
    message_message_sender_idTouser?: boolean | UserCountOutputTypeCountMessage_message_sender_idTouserArgs
    message_message_recipient_idTouser?: boolean | UserCountOutputTypeCountMessage_message_recipient_idTouserArgs
    order_order_buyer_idTouser?: boolean | UserCountOutputTypeCountOrder_order_buyer_idTouserArgs
    review_review_reviewer_idTouser?: boolean | UserCountOutputTypeCountReview_review_reviewer_idTouserArgs
    review_review_reviewee_idTouser?: boolean | UserCountOutputTypeCountReview_review_reviewee_idTouserArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChat_room_chat_room_user1TouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_roomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChat_room_chat_room_user2TouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_roomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHarvestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: harvestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessage_message_sender_idTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessage_message_recipient_idTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrder_order_buyer_idTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReview_review_reviewer_idTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReview_review_reviewee_idTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    payment: number
    review: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | OrderCountOutputTypeCountPaymentArgs
    review?: boolean | OrderCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model chat_room
   */

  export type AggregateChat_room = {
    _count: Chat_roomCountAggregateOutputType | null
    _avg: Chat_roomAvgAggregateOutputType | null
    _sum: Chat_roomSumAggregateOutputType | null
    _min: Chat_roomMinAggregateOutputType | null
    _max: Chat_roomMaxAggregateOutputType | null
  }

  export type Chat_roomAvgAggregateOutputType = {
    id: number | null
    user1: number | null
    user2: number | null
  }

  export type Chat_roomSumAggregateOutputType = {
    id: number | null
    user1: number | null
    user2: number | null
  }

  export type Chat_roomMinAggregateOutputType = {
    id: number | null
    user1: number | null
    user2: number | null
    created_at: Date | null
  }

  export type Chat_roomMaxAggregateOutputType = {
    id: number | null
    user1: number | null
    user2: number | null
    created_at: Date | null
  }

  export type Chat_roomCountAggregateOutputType = {
    id: number
    user1: number
    user2: number
    created_at: number
    _all: number
  }


  export type Chat_roomAvgAggregateInputType = {
    id?: true
    user1?: true
    user2?: true
  }

  export type Chat_roomSumAggregateInputType = {
    id?: true
    user1?: true
    user2?: true
  }

  export type Chat_roomMinAggregateInputType = {
    id?: true
    user1?: true
    user2?: true
    created_at?: true
  }

  export type Chat_roomMaxAggregateInputType = {
    id?: true
    user1?: true
    user2?: true
    created_at?: true
  }

  export type Chat_roomCountAggregateInputType = {
    id?: true
    user1?: true
    user2?: true
    created_at?: true
    _all?: true
  }

  export type Chat_roomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat_room to aggregate.
     */
    where?: chat_roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_rooms to fetch.
     */
    orderBy?: chat_roomOrderByWithRelationInput | chat_roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chat_roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chat_rooms
    **/
    _count?: true | Chat_roomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Chat_roomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Chat_roomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Chat_roomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Chat_roomMaxAggregateInputType
  }

  export type GetChat_roomAggregateType<T extends Chat_roomAggregateArgs> = {
        [P in keyof T & keyof AggregateChat_room]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat_room[P]>
      : GetScalarType<T[P], AggregateChat_room[P]>
  }




  export type chat_roomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_roomWhereInput
    orderBy?: chat_roomOrderByWithAggregationInput | chat_roomOrderByWithAggregationInput[]
    by: Chat_roomScalarFieldEnum[] | Chat_roomScalarFieldEnum
    having?: chat_roomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Chat_roomCountAggregateInputType | true
    _avg?: Chat_roomAvgAggregateInputType
    _sum?: Chat_roomSumAggregateInputType
    _min?: Chat_roomMinAggregateInputType
    _max?: Chat_roomMaxAggregateInputType
  }

  export type Chat_roomGroupByOutputType = {
    id: number
    user1: number
    user2: number
    created_at: Date | null
    _count: Chat_roomCountAggregateOutputType | null
    _avg: Chat_roomAvgAggregateOutputType | null
    _sum: Chat_roomSumAggregateOutputType | null
    _min: Chat_roomMinAggregateOutputType | null
    _max: Chat_roomMaxAggregateOutputType | null
  }

  type GetChat_roomGroupByPayload<T extends chat_roomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Chat_roomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Chat_roomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Chat_roomGroupByOutputType[P]>
            : GetScalarType<T[P], Chat_roomGroupByOutputType[P]>
        }
      >
    >


  export type chat_roomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user1?: boolean
    user2?: boolean
    created_at?: boolean
    user_chat_room_user1Touser?: boolean | userDefaultArgs<ExtArgs>
    user_chat_room_user2Touser?: boolean | userDefaultArgs<ExtArgs>
    message?: boolean | chat_room$messageArgs<ExtArgs>
    _count?: boolean | Chat_roomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat_room"]>



  export type chat_roomSelectScalar = {
    id?: boolean
    user1?: boolean
    user2?: boolean
    created_at?: boolean
  }

  export type chat_roomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user1" | "user2" | "created_at", ExtArgs["result"]["chat_room"]>
  export type chat_roomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_chat_room_user1Touser?: boolean | userDefaultArgs<ExtArgs>
    user_chat_room_user2Touser?: boolean | userDefaultArgs<ExtArgs>
    message?: boolean | chat_room$messageArgs<ExtArgs>
    _count?: boolean | Chat_roomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $chat_roomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chat_room"
    objects: {
      user_chat_room_user1Touser: Prisma.$userPayload<ExtArgs>
      user_chat_room_user2Touser: Prisma.$userPayload<ExtArgs>
      message: Prisma.$messagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user1: number
      user2: number
      created_at: Date | null
    }, ExtArgs["result"]["chat_room"]>
    composites: {}
  }

  type chat_roomGetPayload<S extends boolean | null | undefined | chat_roomDefaultArgs> = $Result.GetResult<Prisma.$chat_roomPayload, S>

  type chat_roomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chat_roomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Chat_roomCountAggregateInputType | true
    }

  export interface chat_roomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chat_room'], meta: { name: 'chat_room' } }
    /**
     * Find zero or one Chat_room that matches the filter.
     * @param {chat_roomFindUniqueArgs} args - Arguments to find a Chat_room
     * @example
     * // Get one Chat_room
     * const chat_room = await prisma.chat_room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chat_roomFindUniqueArgs>(args: SelectSubset<T, chat_roomFindUniqueArgs<ExtArgs>>): Prisma__chat_roomClient<$Result.GetResult<Prisma.$chat_roomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat_room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chat_roomFindUniqueOrThrowArgs} args - Arguments to find a Chat_room
     * @example
     * // Get one Chat_room
     * const chat_room = await prisma.chat_room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chat_roomFindUniqueOrThrowArgs>(args: SelectSubset<T, chat_roomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chat_roomClient<$Result.GetResult<Prisma.$chat_roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat_room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_roomFindFirstArgs} args - Arguments to find a Chat_room
     * @example
     * // Get one Chat_room
     * const chat_room = await prisma.chat_room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chat_roomFindFirstArgs>(args?: SelectSubset<T, chat_roomFindFirstArgs<ExtArgs>>): Prisma__chat_roomClient<$Result.GetResult<Prisma.$chat_roomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat_room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_roomFindFirstOrThrowArgs} args - Arguments to find a Chat_room
     * @example
     * // Get one Chat_room
     * const chat_room = await prisma.chat_room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chat_roomFindFirstOrThrowArgs>(args?: SelectSubset<T, chat_roomFindFirstOrThrowArgs<ExtArgs>>): Prisma__chat_roomClient<$Result.GetResult<Prisma.$chat_roomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chat_rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_roomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chat_rooms
     * const chat_rooms = await prisma.chat_room.findMany()
     * 
     * // Get first 10 Chat_rooms
     * const chat_rooms = await prisma.chat_room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chat_roomWithIdOnly = await prisma.chat_room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chat_roomFindManyArgs>(args?: SelectSubset<T, chat_roomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_roomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat_room.
     * @param {chat_roomCreateArgs} args - Arguments to create a Chat_room.
     * @example
     * // Create one Chat_room
     * const Chat_room = await prisma.chat_room.create({
     *   data: {
     *     // ... data to create a Chat_room
     *   }
     * })
     * 
     */
    create<T extends chat_roomCreateArgs>(args: SelectSubset<T, chat_roomCreateArgs<ExtArgs>>): Prisma__chat_roomClient<$Result.GetResult<Prisma.$chat_roomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chat_rooms.
     * @param {chat_roomCreateManyArgs} args - Arguments to create many Chat_rooms.
     * @example
     * // Create many Chat_rooms
     * const chat_room = await prisma.chat_room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chat_roomCreateManyArgs>(args?: SelectSubset<T, chat_roomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chat_room.
     * @param {chat_roomDeleteArgs} args - Arguments to delete one Chat_room.
     * @example
     * // Delete one Chat_room
     * const Chat_room = await prisma.chat_room.delete({
     *   where: {
     *     // ... filter to delete one Chat_room
     *   }
     * })
     * 
     */
    delete<T extends chat_roomDeleteArgs>(args: SelectSubset<T, chat_roomDeleteArgs<ExtArgs>>): Prisma__chat_roomClient<$Result.GetResult<Prisma.$chat_roomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat_room.
     * @param {chat_roomUpdateArgs} args - Arguments to update one Chat_room.
     * @example
     * // Update one Chat_room
     * const chat_room = await prisma.chat_room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chat_roomUpdateArgs>(args: SelectSubset<T, chat_roomUpdateArgs<ExtArgs>>): Prisma__chat_roomClient<$Result.GetResult<Prisma.$chat_roomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chat_rooms.
     * @param {chat_roomDeleteManyArgs} args - Arguments to filter Chat_rooms to delete.
     * @example
     * // Delete a few Chat_rooms
     * const { count } = await prisma.chat_room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chat_roomDeleteManyArgs>(args?: SelectSubset<T, chat_roomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chat_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_roomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chat_rooms
     * const chat_room = await prisma.chat_room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chat_roomUpdateManyArgs>(args: SelectSubset<T, chat_roomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chat_room.
     * @param {chat_roomUpsertArgs} args - Arguments to update or create a Chat_room.
     * @example
     * // Update or create a Chat_room
     * const chat_room = await prisma.chat_room.upsert({
     *   create: {
     *     // ... data to create a Chat_room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat_room we want to update
     *   }
     * })
     */
    upsert<T extends chat_roomUpsertArgs>(args: SelectSubset<T, chat_roomUpsertArgs<ExtArgs>>): Prisma__chat_roomClient<$Result.GetResult<Prisma.$chat_roomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chat_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_roomCountArgs} args - Arguments to filter Chat_rooms to count.
     * @example
     * // Count the number of Chat_rooms
     * const count = await prisma.chat_room.count({
     *   where: {
     *     // ... the filter for the Chat_rooms we want to count
     *   }
     * })
    **/
    count<T extends chat_roomCountArgs>(
      args?: Subset<T, chat_roomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Chat_roomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat_room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chat_roomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Chat_roomAggregateArgs>(args: Subset<T, Chat_roomAggregateArgs>): Prisma.PrismaPromise<GetChat_roomAggregateType<T>>

    /**
     * Group by Chat_room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_roomGroupByArgs} args - Group by arguments.
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
      T extends chat_roomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chat_roomGroupByArgs['orderBy'] }
        : { orderBy?: chat_roomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chat_roomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChat_roomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chat_room model
   */
  readonly fields: chat_roomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chat_room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chat_roomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_chat_room_user1Touser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_chat_room_user2Touser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    message<T extends chat_room$messageArgs<ExtArgs> = {}>(args?: Subset<T, chat_room$messageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the chat_room model
   */
  interface chat_roomFieldRefs {
    readonly id: FieldRef<"chat_room", 'Int'>
    readonly user1: FieldRef<"chat_room", 'Int'>
    readonly user2: FieldRef<"chat_room", 'Int'>
    readonly created_at: FieldRef<"chat_room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chat_room findUnique
   */
  export type chat_roomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_room
     */
    select?: chat_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_room
     */
    omit?: chat_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_roomInclude<ExtArgs> | null
    /**
     * Filter, which chat_room to fetch.
     */
    where: chat_roomWhereUniqueInput
  }

  /**
   * chat_room findUniqueOrThrow
   */
  export type chat_roomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_room
     */
    select?: chat_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_room
     */
    omit?: chat_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_roomInclude<ExtArgs> | null
    /**
     * Filter, which chat_room to fetch.
     */
    where: chat_roomWhereUniqueInput
  }

  /**
   * chat_room findFirst
   */
  export type chat_roomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_room
     */
    select?: chat_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_room
     */
    omit?: chat_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_roomInclude<ExtArgs> | null
    /**
     * Filter, which chat_room to fetch.
     */
    where?: chat_roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_rooms to fetch.
     */
    orderBy?: chat_roomOrderByWithRelationInput | chat_roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chat_rooms.
     */
    cursor?: chat_roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chat_rooms.
     */
    distinct?: Chat_roomScalarFieldEnum | Chat_roomScalarFieldEnum[]
  }

  /**
   * chat_room findFirstOrThrow
   */
  export type chat_roomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_room
     */
    select?: chat_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_room
     */
    omit?: chat_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_roomInclude<ExtArgs> | null
    /**
     * Filter, which chat_room to fetch.
     */
    where?: chat_roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_rooms to fetch.
     */
    orderBy?: chat_roomOrderByWithRelationInput | chat_roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chat_rooms.
     */
    cursor?: chat_roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chat_rooms.
     */
    distinct?: Chat_roomScalarFieldEnum | Chat_roomScalarFieldEnum[]
  }

  /**
   * chat_room findMany
   */
  export type chat_roomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_room
     */
    select?: chat_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_room
     */
    omit?: chat_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_roomInclude<ExtArgs> | null
    /**
     * Filter, which chat_rooms to fetch.
     */
    where?: chat_roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_rooms to fetch.
     */
    orderBy?: chat_roomOrderByWithRelationInput | chat_roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chat_rooms.
     */
    cursor?: chat_roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_rooms.
     */
    skip?: number
    distinct?: Chat_roomScalarFieldEnum | Chat_roomScalarFieldEnum[]
  }

  /**
   * chat_room create
   */
  export type chat_roomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_room
     */
    select?: chat_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_room
     */
    omit?: chat_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_roomInclude<ExtArgs> | null
    /**
     * The data needed to create a chat_room.
     */
    data: XOR<chat_roomCreateInput, chat_roomUncheckedCreateInput>
  }

  /**
   * chat_room createMany
   */
  export type chat_roomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chat_rooms.
     */
    data: chat_roomCreateManyInput | chat_roomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chat_room update
   */
  export type chat_roomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_room
     */
    select?: chat_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_room
     */
    omit?: chat_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_roomInclude<ExtArgs> | null
    /**
     * The data needed to update a chat_room.
     */
    data: XOR<chat_roomUpdateInput, chat_roomUncheckedUpdateInput>
    /**
     * Choose, which chat_room to update.
     */
    where: chat_roomWhereUniqueInput
  }

  /**
   * chat_room updateMany
   */
  export type chat_roomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chat_rooms.
     */
    data: XOR<chat_roomUpdateManyMutationInput, chat_roomUncheckedUpdateManyInput>
    /**
     * Filter which chat_rooms to update
     */
    where?: chat_roomWhereInput
    /**
     * Limit how many chat_rooms to update.
     */
    limit?: number
  }

  /**
   * chat_room upsert
   */
  export type chat_roomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_room
     */
    select?: chat_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_room
     */
    omit?: chat_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_roomInclude<ExtArgs> | null
    /**
     * The filter to search for the chat_room to update in case it exists.
     */
    where: chat_roomWhereUniqueInput
    /**
     * In case the chat_room found by the `where` argument doesn't exist, create a new chat_room with this data.
     */
    create: XOR<chat_roomCreateInput, chat_roomUncheckedCreateInput>
    /**
     * In case the chat_room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chat_roomUpdateInput, chat_roomUncheckedUpdateInput>
  }

  /**
   * chat_room delete
   */
  export type chat_roomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_room
     */
    select?: chat_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_room
     */
    omit?: chat_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_roomInclude<ExtArgs> | null
    /**
     * Filter which chat_room to delete.
     */
    where: chat_roomWhereUniqueInput
  }

  /**
   * chat_room deleteMany
   */
  export type chat_roomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat_rooms to delete
     */
    where?: chat_roomWhereInput
    /**
     * Limit how many chat_rooms to delete.
     */
    limit?: number
  }

  /**
   * chat_room.message
   */
  export type chat_room$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    where?: messageWhereInput
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    cursor?: messageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * chat_room without action
   */
  export type chat_roomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_room
     */
    select?: chat_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_room
     */
    omit?: chat_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_roomInclude<ExtArgs> | null
  }


  /**
   * Model harvest
   */

  export type AggregateHarvest = {
    _count: HarvestCountAggregateOutputType | null
    _avg: HarvestAvgAggregateOutputType | null
    _sum: HarvestSumAggregateOutputType | null
    _min: HarvestMinAggregateOutputType | null
    _max: HarvestMaxAggregateOutputType | null
  }

  export type HarvestAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    owner_id: number | null
    unit_price: Decimal | null
  }

  export type HarvestSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    owner_id: number | null
    unit_price: Decimal | null
  }

  export type HarvestMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    unit: string | null
    owner_id: number | null
    name: string | null
    category: string | null
    unit_price: Decimal | null
    description: string | null
    location: string | null
    is_available: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HarvestMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    unit: string | null
    owner_id: number | null
    name: string | null
    category: string | null
    unit_price: Decimal | null
    description: string | null
    location: string | null
    is_available: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HarvestCountAggregateOutputType = {
    id: number
    quantity: number
    unit: number
    owner_id: number
    name: number
    category: number
    unit_price: number
    description: number
    location: number
    is_available: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type HarvestAvgAggregateInputType = {
    id?: true
    quantity?: true
    owner_id?: true
    unit_price?: true
  }

  export type HarvestSumAggregateInputType = {
    id?: true
    quantity?: true
    owner_id?: true
    unit_price?: true
  }

  export type HarvestMinAggregateInputType = {
    id?: true
    quantity?: true
    unit?: true
    owner_id?: true
    name?: true
    category?: true
    unit_price?: true
    description?: true
    location?: true
    is_available?: true
    created_at?: true
    updated_at?: true
  }

  export type HarvestMaxAggregateInputType = {
    id?: true
    quantity?: true
    unit?: true
    owner_id?: true
    name?: true
    category?: true
    unit_price?: true
    description?: true
    location?: true
    is_available?: true
    created_at?: true
    updated_at?: true
  }

  export type HarvestCountAggregateInputType = {
    id?: true
    quantity?: true
    unit?: true
    owner_id?: true
    name?: true
    category?: true
    unit_price?: true
    description?: true
    location?: true
    is_available?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type HarvestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which harvest to aggregate.
     */
    where?: harvestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of harvests to fetch.
     */
    orderBy?: harvestOrderByWithRelationInput | harvestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: harvestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` harvests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` harvests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned harvests
    **/
    _count?: true | HarvestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HarvestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HarvestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HarvestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HarvestMaxAggregateInputType
  }

  export type GetHarvestAggregateType<T extends HarvestAggregateArgs> = {
        [P in keyof T & keyof AggregateHarvest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHarvest[P]>
      : GetScalarType<T[P], AggregateHarvest[P]>
  }




  export type harvestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: harvestWhereInput
    orderBy?: harvestOrderByWithAggregationInput | harvestOrderByWithAggregationInput[]
    by: HarvestScalarFieldEnum[] | HarvestScalarFieldEnum
    having?: harvestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HarvestCountAggregateInputType | true
    _avg?: HarvestAvgAggregateInputType
    _sum?: HarvestSumAggregateInputType
    _min?: HarvestMinAggregateInputType
    _max?: HarvestMaxAggregateInputType
  }

  export type HarvestGroupByOutputType = {
    id: number
    quantity: number
    unit: string
    owner_id: number
    name: string
    category: string
    unit_price: Decimal
    description: string | null
    location: string | null
    is_available: boolean
    created_at: Date | null
    updated_at: Date | null
    _count: HarvestCountAggregateOutputType | null
    _avg: HarvestAvgAggregateOutputType | null
    _sum: HarvestSumAggregateOutputType | null
    _min: HarvestMinAggregateOutputType | null
    _max: HarvestMaxAggregateOutputType | null
  }

  type GetHarvestGroupByPayload<T extends harvestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HarvestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HarvestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HarvestGroupByOutputType[P]>
            : GetScalarType<T[P], HarvestGroupByOutputType[P]>
        }
      >
    >


  export type harvestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    unit?: boolean
    owner_id?: boolean
    name?: boolean
    category?: boolean
    unit_price?: boolean
    description?: boolean
    location?: boolean
    is_available?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    harvest_category?: boolean | harvest_categoryDefaultArgs<ExtArgs>
    harvest_image?: boolean | harvest$harvest_imageArgs<ExtArgs>
    order?: boolean | harvest$orderArgs<ExtArgs>
    _count?: boolean | HarvestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["harvest"]>



  export type harvestSelectScalar = {
    id?: boolean
    quantity?: boolean
    unit?: boolean
    owner_id?: boolean
    name?: boolean
    category?: boolean
    unit_price?: boolean
    description?: boolean
    location?: boolean
    is_available?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type harvestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "unit" | "owner_id" | "name" | "category" | "unit_price" | "description" | "location" | "is_available" | "created_at" | "updated_at", ExtArgs["result"]["harvest"]>
  export type harvestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    harvest_category?: boolean | harvest_categoryDefaultArgs<ExtArgs>
    harvest_image?: boolean | harvest$harvest_imageArgs<ExtArgs>
    order?: boolean | harvest$orderArgs<ExtArgs>
    _count?: boolean | HarvestCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $harvestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "harvest"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      harvest_category: Prisma.$harvest_categoryPayload<ExtArgs>
      harvest_image: Prisma.$harvest_imagePayload<ExtArgs>[]
      order: Prisma.$orderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
      unit: string
      owner_id: number
      name: string
      category: string
      unit_price: Prisma.Decimal
      description: string | null
      location: string | null
      is_available: boolean
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["harvest"]>
    composites: {}
  }

  type harvestGetPayload<S extends boolean | null | undefined | harvestDefaultArgs> = $Result.GetResult<Prisma.$harvestPayload, S>

  type harvestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<harvestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HarvestCountAggregateInputType | true
    }

  export interface harvestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['harvest'], meta: { name: 'harvest' } }
    /**
     * Find zero or one Harvest that matches the filter.
     * @param {harvestFindUniqueArgs} args - Arguments to find a Harvest
     * @example
     * // Get one Harvest
     * const harvest = await prisma.harvest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends harvestFindUniqueArgs>(args: SelectSubset<T, harvestFindUniqueArgs<ExtArgs>>): Prisma__harvestClient<$Result.GetResult<Prisma.$harvestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Harvest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {harvestFindUniqueOrThrowArgs} args - Arguments to find a Harvest
     * @example
     * // Get one Harvest
     * const harvest = await prisma.harvest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends harvestFindUniqueOrThrowArgs>(args: SelectSubset<T, harvestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__harvestClient<$Result.GetResult<Prisma.$harvestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Harvest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {harvestFindFirstArgs} args - Arguments to find a Harvest
     * @example
     * // Get one Harvest
     * const harvest = await prisma.harvest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends harvestFindFirstArgs>(args?: SelectSubset<T, harvestFindFirstArgs<ExtArgs>>): Prisma__harvestClient<$Result.GetResult<Prisma.$harvestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Harvest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {harvestFindFirstOrThrowArgs} args - Arguments to find a Harvest
     * @example
     * // Get one Harvest
     * const harvest = await prisma.harvest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends harvestFindFirstOrThrowArgs>(args?: SelectSubset<T, harvestFindFirstOrThrowArgs<ExtArgs>>): Prisma__harvestClient<$Result.GetResult<Prisma.$harvestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Harvests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {harvestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Harvests
     * const harvests = await prisma.harvest.findMany()
     * 
     * // Get first 10 Harvests
     * const harvests = await prisma.harvest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const harvestWithIdOnly = await prisma.harvest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends harvestFindManyArgs>(args?: SelectSubset<T, harvestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$harvestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Harvest.
     * @param {harvestCreateArgs} args - Arguments to create a Harvest.
     * @example
     * // Create one Harvest
     * const Harvest = await prisma.harvest.create({
     *   data: {
     *     // ... data to create a Harvest
     *   }
     * })
     * 
     */
    create<T extends harvestCreateArgs>(args: SelectSubset<T, harvestCreateArgs<ExtArgs>>): Prisma__harvestClient<$Result.GetResult<Prisma.$harvestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Harvests.
     * @param {harvestCreateManyArgs} args - Arguments to create many Harvests.
     * @example
     * // Create many Harvests
     * const harvest = await prisma.harvest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends harvestCreateManyArgs>(args?: SelectSubset<T, harvestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Harvest.
     * @param {harvestDeleteArgs} args - Arguments to delete one Harvest.
     * @example
     * // Delete one Harvest
     * const Harvest = await prisma.harvest.delete({
     *   where: {
     *     // ... filter to delete one Harvest
     *   }
     * })
     * 
     */
    delete<T extends harvestDeleteArgs>(args: SelectSubset<T, harvestDeleteArgs<ExtArgs>>): Prisma__harvestClient<$Result.GetResult<Prisma.$harvestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Harvest.
     * @param {harvestUpdateArgs} args - Arguments to update one Harvest.
     * @example
     * // Update one Harvest
     * const harvest = await prisma.harvest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends harvestUpdateArgs>(args: SelectSubset<T, harvestUpdateArgs<ExtArgs>>): Prisma__harvestClient<$Result.GetResult<Prisma.$harvestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Harvests.
     * @param {harvestDeleteManyArgs} args - Arguments to filter Harvests to delete.
     * @example
     * // Delete a few Harvests
     * const { count } = await prisma.harvest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends harvestDeleteManyArgs>(args?: SelectSubset<T, harvestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Harvests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {harvestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Harvests
     * const harvest = await prisma.harvest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends harvestUpdateManyArgs>(args: SelectSubset<T, harvestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Harvest.
     * @param {harvestUpsertArgs} args - Arguments to update or create a Harvest.
     * @example
     * // Update or create a Harvest
     * const harvest = await prisma.harvest.upsert({
     *   create: {
     *     // ... data to create a Harvest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Harvest we want to update
     *   }
     * })
     */
    upsert<T extends harvestUpsertArgs>(args: SelectSubset<T, harvestUpsertArgs<ExtArgs>>): Prisma__harvestClient<$Result.GetResult<Prisma.$harvestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Harvests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {harvestCountArgs} args - Arguments to filter Harvests to count.
     * @example
     * // Count the number of Harvests
     * const count = await prisma.harvest.count({
     *   where: {
     *     // ... the filter for the Harvests we want to count
     *   }
     * })
    **/
    count<T extends harvestCountArgs>(
      args?: Subset<T, harvestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HarvestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Harvest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HarvestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HarvestAggregateArgs>(args: Subset<T, HarvestAggregateArgs>): Prisma.PrismaPromise<GetHarvestAggregateType<T>>

    /**
     * Group by Harvest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {harvestGroupByArgs} args - Group by arguments.
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
      T extends harvestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: harvestGroupByArgs['orderBy'] }
        : { orderBy?: harvestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, harvestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHarvestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the harvest model
   */
  readonly fields: harvestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for harvest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__harvestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    harvest_category<T extends harvest_categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, harvest_categoryDefaultArgs<ExtArgs>>): Prisma__harvest_categoryClient<$Result.GetResult<Prisma.$harvest_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    harvest_image<T extends harvest$harvest_imageArgs<ExtArgs> = {}>(args?: Subset<T, harvest$harvest_imageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$harvest_imagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order<T extends harvest$orderArgs<ExtArgs> = {}>(args?: Subset<T, harvest$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the harvest model
   */
  interface harvestFieldRefs {
    readonly id: FieldRef<"harvest", 'Int'>
    readonly quantity: FieldRef<"harvest", 'Int'>
    readonly unit: FieldRef<"harvest", 'String'>
    readonly owner_id: FieldRef<"harvest", 'Int'>
    readonly name: FieldRef<"harvest", 'String'>
    readonly category: FieldRef<"harvest", 'String'>
    readonly unit_price: FieldRef<"harvest", 'Decimal'>
    readonly description: FieldRef<"harvest", 'String'>
    readonly location: FieldRef<"harvest", 'String'>
    readonly is_available: FieldRef<"harvest", 'Boolean'>
    readonly created_at: FieldRef<"harvest", 'DateTime'>
    readonly updated_at: FieldRef<"harvest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * harvest findUnique
   */
  export type harvestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest
     */
    select?: harvestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest
     */
    omit?: harvestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvestInclude<ExtArgs> | null
    /**
     * Filter, which harvest to fetch.
     */
    where: harvestWhereUniqueInput
  }

  /**
   * harvest findUniqueOrThrow
   */
  export type harvestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest
     */
    select?: harvestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest
     */
    omit?: harvestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvestInclude<ExtArgs> | null
    /**
     * Filter, which harvest to fetch.
     */
    where: harvestWhereUniqueInput
  }

  /**
   * harvest findFirst
   */
  export type harvestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest
     */
    select?: harvestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest
     */
    omit?: harvestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvestInclude<ExtArgs> | null
    /**
     * Filter, which harvest to fetch.
     */
    where?: harvestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of harvests to fetch.
     */
    orderBy?: harvestOrderByWithRelationInput | harvestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for harvests.
     */
    cursor?: harvestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` harvests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` harvests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of harvests.
     */
    distinct?: HarvestScalarFieldEnum | HarvestScalarFieldEnum[]
  }

  /**
   * harvest findFirstOrThrow
   */
  export type harvestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest
     */
    select?: harvestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest
     */
    omit?: harvestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvestInclude<ExtArgs> | null
    /**
     * Filter, which harvest to fetch.
     */
    where?: harvestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of harvests to fetch.
     */
    orderBy?: harvestOrderByWithRelationInput | harvestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for harvests.
     */
    cursor?: harvestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` harvests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` harvests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of harvests.
     */
    distinct?: HarvestScalarFieldEnum | HarvestScalarFieldEnum[]
  }

  /**
   * harvest findMany
   */
  export type harvestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest
     */
    select?: harvestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest
     */
    omit?: harvestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvestInclude<ExtArgs> | null
    /**
     * Filter, which harvests to fetch.
     */
    where?: harvestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of harvests to fetch.
     */
    orderBy?: harvestOrderByWithRelationInput | harvestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing harvests.
     */
    cursor?: harvestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` harvests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` harvests.
     */
    skip?: number
    distinct?: HarvestScalarFieldEnum | HarvestScalarFieldEnum[]
  }

  /**
   * harvest create
   */
  export type harvestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest
     */
    select?: harvestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest
     */
    omit?: harvestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvestInclude<ExtArgs> | null
    /**
     * The data needed to create a harvest.
     */
    data: XOR<harvestCreateInput, harvestUncheckedCreateInput>
  }

  /**
   * harvest createMany
   */
  export type harvestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many harvests.
     */
    data: harvestCreateManyInput | harvestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * harvest update
   */
  export type harvestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest
     */
    select?: harvestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest
     */
    omit?: harvestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvestInclude<ExtArgs> | null
    /**
     * The data needed to update a harvest.
     */
    data: XOR<harvestUpdateInput, harvestUncheckedUpdateInput>
    /**
     * Choose, which harvest to update.
     */
    where: harvestWhereUniqueInput
  }

  /**
   * harvest updateMany
   */
  export type harvestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update harvests.
     */
    data: XOR<harvestUpdateManyMutationInput, harvestUncheckedUpdateManyInput>
    /**
     * Filter which harvests to update
     */
    where?: harvestWhereInput
    /**
     * Limit how many harvests to update.
     */
    limit?: number
  }

  /**
   * harvest upsert
   */
  export type harvestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest
     */
    select?: harvestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest
     */
    omit?: harvestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvestInclude<ExtArgs> | null
    /**
     * The filter to search for the harvest to update in case it exists.
     */
    where: harvestWhereUniqueInput
    /**
     * In case the harvest found by the `where` argument doesn't exist, create a new harvest with this data.
     */
    create: XOR<harvestCreateInput, harvestUncheckedCreateInput>
    /**
     * In case the harvest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<harvestUpdateInput, harvestUncheckedUpdateInput>
  }

  /**
   * harvest delete
   */
  export type harvestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest
     */
    select?: harvestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest
     */
    omit?: harvestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvestInclude<ExtArgs> | null
    /**
     * Filter which harvest to delete.
     */
    where: harvestWhereUniqueInput
  }

  /**
   * harvest deleteMany
   */
  export type harvestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which harvests to delete
     */
    where?: harvestWhereInput
    /**
     * Limit how many harvests to delete.
     */
    limit?: number
  }

  /**
   * harvest.harvest_image
   */
  export type harvest$harvest_imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_image
     */
    select?: harvest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_image
     */
    omit?: harvest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_imageInclude<ExtArgs> | null
    where?: harvest_imageWhereInput
    orderBy?: harvest_imageOrderByWithRelationInput | harvest_imageOrderByWithRelationInput[]
    cursor?: harvest_imageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Harvest_imageScalarFieldEnum | Harvest_imageScalarFieldEnum[]
  }

  /**
   * harvest.order
   */
  export type harvest$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    where?: orderWhereInput
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    cursor?: orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * harvest without action
   */
  export type harvestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest
     */
    select?: harvestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest
     */
    omit?: harvestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvestInclude<ExtArgs> | null
  }


  /**
   * Model harvest_category
   */

  export type AggregateHarvest_category = {
    _count: Harvest_categoryCountAggregateOutputType | null
    _min: Harvest_categoryMinAggregateOutputType | null
    _max: Harvest_categoryMaxAggregateOutputType | null
  }

  export type Harvest_categoryMinAggregateOutputType = {
    category: string | null
  }

  export type Harvest_categoryMaxAggregateOutputType = {
    category: string | null
  }

  export type Harvest_categoryCountAggregateOutputType = {
    category: number
    _all: number
  }


  export type Harvest_categoryMinAggregateInputType = {
    category?: true
  }

  export type Harvest_categoryMaxAggregateInputType = {
    category?: true
  }

  export type Harvest_categoryCountAggregateInputType = {
    category?: true
    _all?: true
  }

  export type Harvest_categoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which harvest_category to aggregate.
     */
    where?: harvest_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of harvest_categories to fetch.
     */
    orderBy?: harvest_categoryOrderByWithRelationInput | harvest_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: harvest_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` harvest_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` harvest_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned harvest_categories
    **/
    _count?: true | Harvest_categoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Harvest_categoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Harvest_categoryMaxAggregateInputType
  }

  export type GetHarvest_categoryAggregateType<T extends Harvest_categoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHarvest_category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHarvest_category[P]>
      : GetScalarType<T[P], AggregateHarvest_category[P]>
  }




  export type harvest_categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: harvest_categoryWhereInput
    orderBy?: harvest_categoryOrderByWithAggregationInput | harvest_categoryOrderByWithAggregationInput[]
    by: Harvest_categoryScalarFieldEnum[] | Harvest_categoryScalarFieldEnum
    having?: harvest_categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Harvest_categoryCountAggregateInputType | true
    _min?: Harvest_categoryMinAggregateInputType
    _max?: Harvest_categoryMaxAggregateInputType
  }

  export type Harvest_categoryGroupByOutputType = {
    category: string
    _count: Harvest_categoryCountAggregateOutputType | null
    _min: Harvest_categoryMinAggregateOutputType | null
    _max: Harvest_categoryMaxAggregateOutputType | null
  }

  type GetHarvest_categoryGroupByPayload<T extends harvest_categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Harvest_categoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Harvest_categoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Harvest_categoryGroupByOutputType[P]>
            : GetScalarType<T[P], Harvest_categoryGroupByOutputType[P]>
        }
      >
    >


  export type harvest_categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category?: boolean
    harvest?: boolean | harvest_category$harvestArgs<ExtArgs>
    _count?: boolean | Harvest_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["harvest_category"]>



  export type harvest_categorySelectScalar = {
    category?: boolean
  }

  export type harvest_categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category", ExtArgs["result"]["harvest_category"]>
  export type harvest_categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    harvest?: boolean | harvest_category$harvestArgs<ExtArgs>
    _count?: boolean | Harvest_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $harvest_categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "harvest_category"
    objects: {
      harvest: Prisma.$harvestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category: string
    }, ExtArgs["result"]["harvest_category"]>
    composites: {}
  }

  type harvest_categoryGetPayload<S extends boolean | null | undefined | harvest_categoryDefaultArgs> = $Result.GetResult<Prisma.$harvest_categoryPayload, S>

  type harvest_categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<harvest_categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Harvest_categoryCountAggregateInputType | true
    }

  export interface harvest_categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['harvest_category'], meta: { name: 'harvest_category' } }
    /**
     * Find zero or one Harvest_category that matches the filter.
     * @param {harvest_categoryFindUniqueArgs} args - Arguments to find a Harvest_category
     * @example
     * // Get one Harvest_category
     * const harvest_category = await prisma.harvest_category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends harvest_categoryFindUniqueArgs>(args: SelectSubset<T, harvest_categoryFindUniqueArgs<ExtArgs>>): Prisma__harvest_categoryClient<$Result.GetResult<Prisma.$harvest_categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Harvest_category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {harvest_categoryFindUniqueOrThrowArgs} args - Arguments to find a Harvest_category
     * @example
     * // Get one Harvest_category
     * const harvest_category = await prisma.harvest_category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends harvest_categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, harvest_categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__harvest_categoryClient<$Result.GetResult<Prisma.$harvest_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Harvest_category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {harvest_categoryFindFirstArgs} args - Arguments to find a Harvest_category
     * @example
     * // Get one Harvest_category
     * const harvest_category = await prisma.harvest_category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends harvest_categoryFindFirstArgs>(args?: SelectSubset<T, harvest_categoryFindFirstArgs<ExtArgs>>): Prisma__harvest_categoryClient<$Result.GetResult<Prisma.$harvest_categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Harvest_category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {harvest_categoryFindFirstOrThrowArgs} args - Arguments to find a Harvest_category
     * @example
     * // Get one Harvest_category
     * const harvest_category = await prisma.harvest_category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends harvest_categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, harvest_categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__harvest_categoryClient<$Result.GetResult<Prisma.$harvest_categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Harvest_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {harvest_categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Harvest_categories
     * const harvest_categories = await prisma.harvest_category.findMany()
     * 
     * // Get first 10 Harvest_categories
     * const harvest_categories = await prisma.harvest_category.findMany({ take: 10 })
     * 
     * // Only select the `category`
     * const harvest_categoryWithCategoryOnly = await prisma.harvest_category.findMany({ select: { category: true } })
     * 
     */
    findMany<T extends harvest_categoryFindManyArgs>(args?: SelectSubset<T, harvest_categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$harvest_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Harvest_category.
     * @param {harvest_categoryCreateArgs} args - Arguments to create a Harvest_category.
     * @example
     * // Create one Harvest_category
     * const Harvest_category = await prisma.harvest_category.create({
     *   data: {
     *     // ... data to create a Harvest_category
     *   }
     * })
     * 
     */
    create<T extends harvest_categoryCreateArgs>(args: SelectSubset<T, harvest_categoryCreateArgs<ExtArgs>>): Prisma__harvest_categoryClient<$Result.GetResult<Prisma.$harvest_categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Harvest_categories.
     * @param {harvest_categoryCreateManyArgs} args - Arguments to create many Harvest_categories.
     * @example
     * // Create many Harvest_categories
     * const harvest_category = await prisma.harvest_category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends harvest_categoryCreateManyArgs>(args?: SelectSubset<T, harvest_categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Harvest_category.
     * @param {harvest_categoryDeleteArgs} args - Arguments to delete one Harvest_category.
     * @example
     * // Delete one Harvest_category
     * const Harvest_category = await prisma.harvest_category.delete({
     *   where: {
     *     // ... filter to delete one Harvest_category
     *   }
     * })
     * 
     */
    delete<T extends harvest_categoryDeleteArgs>(args: SelectSubset<T, harvest_categoryDeleteArgs<ExtArgs>>): Prisma__harvest_categoryClient<$Result.GetResult<Prisma.$harvest_categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Harvest_category.
     * @param {harvest_categoryUpdateArgs} args - Arguments to update one Harvest_category.
     * @example
     * // Update one Harvest_category
     * const harvest_category = await prisma.harvest_category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends harvest_categoryUpdateArgs>(args: SelectSubset<T, harvest_categoryUpdateArgs<ExtArgs>>): Prisma__harvest_categoryClient<$Result.GetResult<Prisma.$harvest_categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Harvest_categories.
     * @param {harvest_categoryDeleteManyArgs} args - Arguments to filter Harvest_categories to delete.
     * @example
     * // Delete a few Harvest_categories
     * const { count } = await prisma.harvest_category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends harvest_categoryDeleteManyArgs>(args?: SelectSubset<T, harvest_categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Harvest_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {harvest_categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Harvest_categories
     * const harvest_category = await prisma.harvest_category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends harvest_categoryUpdateManyArgs>(args: SelectSubset<T, harvest_categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Harvest_category.
     * @param {harvest_categoryUpsertArgs} args - Arguments to update or create a Harvest_category.
     * @example
     * // Update or create a Harvest_category
     * const harvest_category = await prisma.harvest_category.upsert({
     *   create: {
     *     // ... data to create a Harvest_category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Harvest_category we want to update
     *   }
     * })
     */
    upsert<T extends harvest_categoryUpsertArgs>(args: SelectSubset<T, harvest_categoryUpsertArgs<ExtArgs>>): Prisma__harvest_categoryClient<$Result.GetResult<Prisma.$harvest_categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Harvest_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {harvest_categoryCountArgs} args - Arguments to filter Harvest_categories to count.
     * @example
     * // Count the number of Harvest_categories
     * const count = await prisma.harvest_category.count({
     *   where: {
     *     // ... the filter for the Harvest_categories we want to count
     *   }
     * })
    **/
    count<T extends harvest_categoryCountArgs>(
      args?: Subset<T, harvest_categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Harvest_categoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Harvest_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Harvest_categoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Harvest_categoryAggregateArgs>(args: Subset<T, Harvest_categoryAggregateArgs>): Prisma.PrismaPromise<GetHarvest_categoryAggregateType<T>>

    /**
     * Group by Harvest_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {harvest_categoryGroupByArgs} args - Group by arguments.
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
      T extends harvest_categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: harvest_categoryGroupByArgs['orderBy'] }
        : { orderBy?: harvest_categoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, harvest_categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHarvest_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the harvest_category model
   */
  readonly fields: harvest_categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for harvest_category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__harvest_categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    harvest<T extends harvest_category$harvestArgs<ExtArgs> = {}>(args?: Subset<T, harvest_category$harvestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$harvestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the harvest_category model
   */
  interface harvest_categoryFieldRefs {
    readonly category: FieldRef<"harvest_category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * harvest_category findUnique
   */
  export type harvest_categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_category
     */
    select?: harvest_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_category
     */
    omit?: harvest_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_categoryInclude<ExtArgs> | null
    /**
     * Filter, which harvest_category to fetch.
     */
    where: harvest_categoryWhereUniqueInput
  }

  /**
   * harvest_category findUniqueOrThrow
   */
  export type harvest_categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_category
     */
    select?: harvest_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_category
     */
    omit?: harvest_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_categoryInclude<ExtArgs> | null
    /**
     * Filter, which harvest_category to fetch.
     */
    where: harvest_categoryWhereUniqueInput
  }

  /**
   * harvest_category findFirst
   */
  export type harvest_categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_category
     */
    select?: harvest_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_category
     */
    omit?: harvest_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_categoryInclude<ExtArgs> | null
    /**
     * Filter, which harvest_category to fetch.
     */
    where?: harvest_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of harvest_categories to fetch.
     */
    orderBy?: harvest_categoryOrderByWithRelationInput | harvest_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for harvest_categories.
     */
    cursor?: harvest_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` harvest_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` harvest_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of harvest_categories.
     */
    distinct?: Harvest_categoryScalarFieldEnum | Harvest_categoryScalarFieldEnum[]
  }

  /**
   * harvest_category findFirstOrThrow
   */
  export type harvest_categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_category
     */
    select?: harvest_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_category
     */
    omit?: harvest_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_categoryInclude<ExtArgs> | null
    /**
     * Filter, which harvest_category to fetch.
     */
    where?: harvest_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of harvest_categories to fetch.
     */
    orderBy?: harvest_categoryOrderByWithRelationInput | harvest_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for harvest_categories.
     */
    cursor?: harvest_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` harvest_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` harvest_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of harvest_categories.
     */
    distinct?: Harvest_categoryScalarFieldEnum | Harvest_categoryScalarFieldEnum[]
  }

  /**
   * harvest_category findMany
   */
  export type harvest_categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_category
     */
    select?: harvest_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_category
     */
    omit?: harvest_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_categoryInclude<ExtArgs> | null
    /**
     * Filter, which harvest_categories to fetch.
     */
    where?: harvest_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of harvest_categories to fetch.
     */
    orderBy?: harvest_categoryOrderByWithRelationInput | harvest_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing harvest_categories.
     */
    cursor?: harvest_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` harvest_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` harvest_categories.
     */
    skip?: number
    distinct?: Harvest_categoryScalarFieldEnum | Harvest_categoryScalarFieldEnum[]
  }

  /**
   * harvest_category create
   */
  export type harvest_categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_category
     */
    select?: harvest_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_category
     */
    omit?: harvest_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a harvest_category.
     */
    data: XOR<harvest_categoryCreateInput, harvest_categoryUncheckedCreateInput>
  }

  /**
   * harvest_category createMany
   */
  export type harvest_categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many harvest_categories.
     */
    data: harvest_categoryCreateManyInput | harvest_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * harvest_category update
   */
  export type harvest_categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_category
     */
    select?: harvest_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_category
     */
    omit?: harvest_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a harvest_category.
     */
    data: XOR<harvest_categoryUpdateInput, harvest_categoryUncheckedUpdateInput>
    /**
     * Choose, which harvest_category to update.
     */
    where: harvest_categoryWhereUniqueInput
  }

  /**
   * harvest_category updateMany
   */
  export type harvest_categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update harvest_categories.
     */
    data: XOR<harvest_categoryUpdateManyMutationInput, harvest_categoryUncheckedUpdateManyInput>
    /**
     * Filter which harvest_categories to update
     */
    where?: harvest_categoryWhereInput
    /**
     * Limit how many harvest_categories to update.
     */
    limit?: number
  }

  /**
   * harvest_category upsert
   */
  export type harvest_categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_category
     */
    select?: harvest_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_category
     */
    omit?: harvest_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the harvest_category to update in case it exists.
     */
    where: harvest_categoryWhereUniqueInput
    /**
     * In case the harvest_category found by the `where` argument doesn't exist, create a new harvest_category with this data.
     */
    create: XOR<harvest_categoryCreateInput, harvest_categoryUncheckedCreateInput>
    /**
     * In case the harvest_category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<harvest_categoryUpdateInput, harvest_categoryUncheckedUpdateInput>
  }

  /**
   * harvest_category delete
   */
  export type harvest_categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_category
     */
    select?: harvest_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_category
     */
    omit?: harvest_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_categoryInclude<ExtArgs> | null
    /**
     * Filter which harvest_category to delete.
     */
    where: harvest_categoryWhereUniqueInput
  }

  /**
   * harvest_category deleteMany
   */
  export type harvest_categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which harvest_categories to delete
     */
    where?: harvest_categoryWhereInput
    /**
     * Limit how many harvest_categories to delete.
     */
    limit?: number
  }

  /**
   * harvest_category.harvest
   */
  export type harvest_category$harvestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest
     */
    select?: harvestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest
     */
    omit?: harvestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvestInclude<ExtArgs> | null
    where?: harvestWhereInput
    orderBy?: harvestOrderByWithRelationInput | harvestOrderByWithRelationInput[]
    cursor?: harvestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HarvestScalarFieldEnum | HarvestScalarFieldEnum[]
  }

  /**
   * harvest_category without action
   */
  export type harvest_categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_category
     */
    select?: harvest_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_category
     */
    omit?: harvest_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_categoryInclude<ExtArgs> | null
  }


  /**
   * Model harvest_image
   */

  export type AggregateHarvest_image = {
    _count: Harvest_imageCountAggregateOutputType | null
    _avg: Harvest_imageAvgAggregateOutputType | null
    _sum: Harvest_imageSumAggregateOutputType | null
    _min: Harvest_imageMinAggregateOutputType | null
    _max: Harvest_imageMaxAggregateOutputType | null
  }

  export type Harvest_imageAvgAggregateOutputType = {
    id: number | null
    harvest_id: number | null
  }

  export type Harvest_imageSumAggregateOutputType = {
    id: number | null
    harvest_id: number | null
  }

  export type Harvest_imageMinAggregateOutputType = {
    id: number | null
    harvest_id: number | null
    img_url: string | null
  }

  export type Harvest_imageMaxAggregateOutputType = {
    id: number | null
    harvest_id: number | null
    img_url: string | null
  }

  export type Harvest_imageCountAggregateOutputType = {
    id: number
    harvest_id: number
    img_url: number
    _all: number
  }


  export type Harvest_imageAvgAggregateInputType = {
    id?: true
    harvest_id?: true
  }

  export type Harvest_imageSumAggregateInputType = {
    id?: true
    harvest_id?: true
  }

  export type Harvest_imageMinAggregateInputType = {
    id?: true
    harvest_id?: true
    img_url?: true
  }

  export type Harvest_imageMaxAggregateInputType = {
    id?: true
    harvest_id?: true
    img_url?: true
  }

  export type Harvest_imageCountAggregateInputType = {
    id?: true
    harvest_id?: true
    img_url?: true
    _all?: true
  }

  export type Harvest_imageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which harvest_image to aggregate.
     */
    where?: harvest_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of harvest_images to fetch.
     */
    orderBy?: harvest_imageOrderByWithRelationInput | harvest_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: harvest_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` harvest_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` harvest_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned harvest_images
    **/
    _count?: true | Harvest_imageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Harvest_imageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Harvest_imageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Harvest_imageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Harvest_imageMaxAggregateInputType
  }

  export type GetHarvest_imageAggregateType<T extends Harvest_imageAggregateArgs> = {
        [P in keyof T & keyof AggregateHarvest_image]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHarvest_image[P]>
      : GetScalarType<T[P], AggregateHarvest_image[P]>
  }




  export type harvest_imageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: harvest_imageWhereInput
    orderBy?: harvest_imageOrderByWithAggregationInput | harvest_imageOrderByWithAggregationInput[]
    by: Harvest_imageScalarFieldEnum[] | Harvest_imageScalarFieldEnum
    having?: harvest_imageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Harvest_imageCountAggregateInputType | true
    _avg?: Harvest_imageAvgAggregateInputType
    _sum?: Harvest_imageSumAggregateInputType
    _min?: Harvest_imageMinAggregateInputType
    _max?: Harvest_imageMaxAggregateInputType
  }

  export type Harvest_imageGroupByOutputType = {
    id: number
    harvest_id: number
    img_url: string
    _count: Harvest_imageCountAggregateOutputType | null
    _avg: Harvest_imageAvgAggregateOutputType | null
    _sum: Harvest_imageSumAggregateOutputType | null
    _min: Harvest_imageMinAggregateOutputType | null
    _max: Harvest_imageMaxAggregateOutputType | null
  }

  type GetHarvest_imageGroupByPayload<T extends harvest_imageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Harvest_imageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Harvest_imageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Harvest_imageGroupByOutputType[P]>
            : GetScalarType<T[P], Harvest_imageGroupByOutputType[P]>
        }
      >
    >


  export type harvest_imageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    harvest_id?: boolean
    img_url?: boolean
    harvest?: boolean | harvestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["harvest_image"]>



  export type harvest_imageSelectScalar = {
    id?: boolean
    harvest_id?: boolean
    img_url?: boolean
  }

  export type harvest_imageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "harvest_id" | "img_url", ExtArgs["result"]["harvest_image"]>
  export type harvest_imageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    harvest?: boolean | harvestDefaultArgs<ExtArgs>
  }

  export type $harvest_imagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "harvest_image"
    objects: {
      harvest: Prisma.$harvestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      harvest_id: number
      img_url: string
    }, ExtArgs["result"]["harvest_image"]>
    composites: {}
  }

  type harvest_imageGetPayload<S extends boolean | null | undefined | harvest_imageDefaultArgs> = $Result.GetResult<Prisma.$harvest_imagePayload, S>

  type harvest_imageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<harvest_imageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Harvest_imageCountAggregateInputType | true
    }

  export interface harvest_imageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['harvest_image'], meta: { name: 'harvest_image' } }
    /**
     * Find zero or one Harvest_image that matches the filter.
     * @param {harvest_imageFindUniqueArgs} args - Arguments to find a Harvest_image
     * @example
     * // Get one Harvest_image
     * const harvest_image = await prisma.harvest_image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends harvest_imageFindUniqueArgs>(args: SelectSubset<T, harvest_imageFindUniqueArgs<ExtArgs>>): Prisma__harvest_imageClient<$Result.GetResult<Prisma.$harvest_imagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Harvest_image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {harvest_imageFindUniqueOrThrowArgs} args - Arguments to find a Harvest_image
     * @example
     * // Get one Harvest_image
     * const harvest_image = await prisma.harvest_image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends harvest_imageFindUniqueOrThrowArgs>(args: SelectSubset<T, harvest_imageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__harvest_imageClient<$Result.GetResult<Prisma.$harvest_imagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Harvest_image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {harvest_imageFindFirstArgs} args - Arguments to find a Harvest_image
     * @example
     * // Get one Harvest_image
     * const harvest_image = await prisma.harvest_image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends harvest_imageFindFirstArgs>(args?: SelectSubset<T, harvest_imageFindFirstArgs<ExtArgs>>): Prisma__harvest_imageClient<$Result.GetResult<Prisma.$harvest_imagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Harvest_image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {harvest_imageFindFirstOrThrowArgs} args - Arguments to find a Harvest_image
     * @example
     * // Get one Harvest_image
     * const harvest_image = await prisma.harvest_image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends harvest_imageFindFirstOrThrowArgs>(args?: SelectSubset<T, harvest_imageFindFirstOrThrowArgs<ExtArgs>>): Prisma__harvest_imageClient<$Result.GetResult<Prisma.$harvest_imagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Harvest_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {harvest_imageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Harvest_images
     * const harvest_images = await prisma.harvest_image.findMany()
     * 
     * // Get first 10 Harvest_images
     * const harvest_images = await prisma.harvest_image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const harvest_imageWithIdOnly = await prisma.harvest_image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends harvest_imageFindManyArgs>(args?: SelectSubset<T, harvest_imageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$harvest_imagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Harvest_image.
     * @param {harvest_imageCreateArgs} args - Arguments to create a Harvest_image.
     * @example
     * // Create one Harvest_image
     * const Harvest_image = await prisma.harvest_image.create({
     *   data: {
     *     // ... data to create a Harvest_image
     *   }
     * })
     * 
     */
    create<T extends harvest_imageCreateArgs>(args: SelectSubset<T, harvest_imageCreateArgs<ExtArgs>>): Prisma__harvest_imageClient<$Result.GetResult<Prisma.$harvest_imagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Harvest_images.
     * @param {harvest_imageCreateManyArgs} args - Arguments to create many Harvest_images.
     * @example
     * // Create many Harvest_images
     * const harvest_image = await prisma.harvest_image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends harvest_imageCreateManyArgs>(args?: SelectSubset<T, harvest_imageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Harvest_image.
     * @param {harvest_imageDeleteArgs} args - Arguments to delete one Harvest_image.
     * @example
     * // Delete one Harvest_image
     * const Harvest_image = await prisma.harvest_image.delete({
     *   where: {
     *     // ... filter to delete one Harvest_image
     *   }
     * })
     * 
     */
    delete<T extends harvest_imageDeleteArgs>(args: SelectSubset<T, harvest_imageDeleteArgs<ExtArgs>>): Prisma__harvest_imageClient<$Result.GetResult<Prisma.$harvest_imagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Harvest_image.
     * @param {harvest_imageUpdateArgs} args - Arguments to update one Harvest_image.
     * @example
     * // Update one Harvest_image
     * const harvest_image = await prisma.harvest_image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends harvest_imageUpdateArgs>(args: SelectSubset<T, harvest_imageUpdateArgs<ExtArgs>>): Prisma__harvest_imageClient<$Result.GetResult<Prisma.$harvest_imagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Harvest_images.
     * @param {harvest_imageDeleteManyArgs} args - Arguments to filter Harvest_images to delete.
     * @example
     * // Delete a few Harvest_images
     * const { count } = await prisma.harvest_image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends harvest_imageDeleteManyArgs>(args?: SelectSubset<T, harvest_imageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Harvest_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {harvest_imageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Harvest_images
     * const harvest_image = await prisma.harvest_image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends harvest_imageUpdateManyArgs>(args: SelectSubset<T, harvest_imageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Harvest_image.
     * @param {harvest_imageUpsertArgs} args - Arguments to update or create a Harvest_image.
     * @example
     * // Update or create a Harvest_image
     * const harvest_image = await prisma.harvest_image.upsert({
     *   create: {
     *     // ... data to create a Harvest_image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Harvest_image we want to update
     *   }
     * })
     */
    upsert<T extends harvest_imageUpsertArgs>(args: SelectSubset<T, harvest_imageUpsertArgs<ExtArgs>>): Prisma__harvest_imageClient<$Result.GetResult<Prisma.$harvest_imagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Harvest_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {harvest_imageCountArgs} args - Arguments to filter Harvest_images to count.
     * @example
     * // Count the number of Harvest_images
     * const count = await prisma.harvest_image.count({
     *   where: {
     *     // ... the filter for the Harvest_images we want to count
     *   }
     * })
    **/
    count<T extends harvest_imageCountArgs>(
      args?: Subset<T, harvest_imageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Harvest_imageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Harvest_image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Harvest_imageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Harvest_imageAggregateArgs>(args: Subset<T, Harvest_imageAggregateArgs>): Prisma.PrismaPromise<GetHarvest_imageAggregateType<T>>

    /**
     * Group by Harvest_image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {harvest_imageGroupByArgs} args - Group by arguments.
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
      T extends harvest_imageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: harvest_imageGroupByArgs['orderBy'] }
        : { orderBy?: harvest_imageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, harvest_imageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHarvest_imageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the harvest_image model
   */
  readonly fields: harvest_imageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for harvest_image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__harvest_imageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    harvest<T extends harvestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, harvestDefaultArgs<ExtArgs>>): Prisma__harvestClient<$Result.GetResult<Prisma.$harvestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the harvest_image model
   */
  interface harvest_imageFieldRefs {
    readonly id: FieldRef<"harvest_image", 'Int'>
    readonly harvest_id: FieldRef<"harvest_image", 'Int'>
    readonly img_url: FieldRef<"harvest_image", 'String'>
  }
    

  // Custom InputTypes
  /**
   * harvest_image findUnique
   */
  export type harvest_imageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_image
     */
    select?: harvest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_image
     */
    omit?: harvest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_imageInclude<ExtArgs> | null
    /**
     * Filter, which harvest_image to fetch.
     */
    where: harvest_imageWhereUniqueInput
  }

  /**
   * harvest_image findUniqueOrThrow
   */
  export type harvest_imageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_image
     */
    select?: harvest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_image
     */
    omit?: harvest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_imageInclude<ExtArgs> | null
    /**
     * Filter, which harvest_image to fetch.
     */
    where: harvest_imageWhereUniqueInput
  }

  /**
   * harvest_image findFirst
   */
  export type harvest_imageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_image
     */
    select?: harvest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_image
     */
    omit?: harvest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_imageInclude<ExtArgs> | null
    /**
     * Filter, which harvest_image to fetch.
     */
    where?: harvest_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of harvest_images to fetch.
     */
    orderBy?: harvest_imageOrderByWithRelationInput | harvest_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for harvest_images.
     */
    cursor?: harvest_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` harvest_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` harvest_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of harvest_images.
     */
    distinct?: Harvest_imageScalarFieldEnum | Harvest_imageScalarFieldEnum[]
  }

  /**
   * harvest_image findFirstOrThrow
   */
  export type harvest_imageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_image
     */
    select?: harvest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_image
     */
    omit?: harvest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_imageInclude<ExtArgs> | null
    /**
     * Filter, which harvest_image to fetch.
     */
    where?: harvest_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of harvest_images to fetch.
     */
    orderBy?: harvest_imageOrderByWithRelationInput | harvest_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for harvest_images.
     */
    cursor?: harvest_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` harvest_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` harvest_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of harvest_images.
     */
    distinct?: Harvest_imageScalarFieldEnum | Harvest_imageScalarFieldEnum[]
  }

  /**
   * harvest_image findMany
   */
  export type harvest_imageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_image
     */
    select?: harvest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_image
     */
    omit?: harvest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_imageInclude<ExtArgs> | null
    /**
     * Filter, which harvest_images to fetch.
     */
    where?: harvest_imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of harvest_images to fetch.
     */
    orderBy?: harvest_imageOrderByWithRelationInput | harvest_imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing harvest_images.
     */
    cursor?: harvest_imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` harvest_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` harvest_images.
     */
    skip?: number
    distinct?: Harvest_imageScalarFieldEnum | Harvest_imageScalarFieldEnum[]
  }

  /**
   * harvest_image create
   */
  export type harvest_imageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_image
     */
    select?: harvest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_image
     */
    omit?: harvest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_imageInclude<ExtArgs> | null
    /**
     * The data needed to create a harvest_image.
     */
    data: XOR<harvest_imageCreateInput, harvest_imageUncheckedCreateInput>
  }

  /**
   * harvest_image createMany
   */
  export type harvest_imageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many harvest_images.
     */
    data: harvest_imageCreateManyInput | harvest_imageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * harvest_image update
   */
  export type harvest_imageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_image
     */
    select?: harvest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_image
     */
    omit?: harvest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_imageInclude<ExtArgs> | null
    /**
     * The data needed to update a harvest_image.
     */
    data: XOR<harvest_imageUpdateInput, harvest_imageUncheckedUpdateInput>
    /**
     * Choose, which harvest_image to update.
     */
    where: harvest_imageWhereUniqueInput
  }

  /**
   * harvest_image updateMany
   */
  export type harvest_imageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update harvest_images.
     */
    data: XOR<harvest_imageUpdateManyMutationInput, harvest_imageUncheckedUpdateManyInput>
    /**
     * Filter which harvest_images to update
     */
    where?: harvest_imageWhereInput
    /**
     * Limit how many harvest_images to update.
     */
    limit?: number
  }

  /**
   * harvest_image upsert
   */
  export type harvest_imageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_image
     */
    select?: harvest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_image
     */
    omit?: harvest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_imageInclude<ExtArgs> | null
    /**
     * The filter to search for the harvest_image to update in case it exists.
     */
    where: harvest_imageWhereUniqueInput
    /**
     * In case the harvest_image found by the `where` argument doesn't exist, create a new harvest_image with this data.
     */
    create: XOR<harvest_imageCreateInput, harvest_imageUncheckedCreateInput>
    /**
     * In case the harvest_image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<harvest_imageUpdateInput, harvest_imageUncheckedUpdateInput>
  }

  /**
   * harvest_image delete
   */
  export type harvest_imageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_image
     */
    select?: harvest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_image
     */
    omit?: harvest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_imageInclude<ExtArgs> | null
    /**
     * Filter which harvest_image to delete.
     */
    where: harvest_imageWhereUniqueInput
  }

  /**
   * harvest_image deleteMany
   */
  export type harvest_imageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which harvest_images to delete
     */
    where?: harvest_imageWhereInput
    /**
     * Limit how many harvest_images to delete.
     */
    limit?: number
  }

  /**
   * harvest_image without action
   */
  export type harvest_imageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest_image
     */
    select?: harvest_imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest_image
     */
    omit?: harvest_imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvest_imageInclude<ExtArgs> | null
  }


  /**
   * Model message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    chat_room_id: number | null
    sender_id: number | null
    recipient_id: number | null
    reply_to_id: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    chat_room_id: number | null
    sender_id: number | null
    recipient_id: number | null
    reply_to_id: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    chat_room_id: number | null
    sender_id: number | null
    recipient_id: number | null
    text: string | null
    read: boolean | null
    received: boolean | null
    reply_to_id: number | null
    created_at: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    chat_room_id: number | null
    sender_id: number | null
    recipient_id: number | null
    text: string | null
    read: boolean | null
    received: boolean | null
    reply_to_id: number | null
    created_at: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    chat_room_id: number
    sender_id: number
    recipient_id: number
    text: number
    read: number
    received: number
    reply_to_id: number
    created_at: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    chat_room_id?: true
    sender_id?: true
    recipient_id?: true
    reply_to_id?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    chat_room_id?: true
    sender_id?: true
    recipient_id?: true
    reply_to_id?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    chat_room_id?: true
    sender_id?: true
    recipient_id?: true
    text?: true
    read?: true
    received?: true
    reply_to_id?: true
    created_at?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    chat_room_id?: true
    sender_id?: true
    recipient_id?: true
    text?: true
    read?: true
    received?: true
    reply_to_id?: true
    created_at?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    chat_room_id?: true
    sender_id?: true
    recipient_id?: true
    text?: true
    read?: true
    received?: true
    reply_to_id?: true
    created_at?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which message to aggregate.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type messageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
    orderBy?: messageOrderByWithAggregationInput | messageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: messageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    chat_room_id: number
    sender_id: number
    recipient_id: number
    text: string
    read: boolean
    received: boolean
    reply_to_id: number | null
    created_at: Date | null
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends messageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type messageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chat_room_id?: boolean
    sender_id?: boolean
    recipient_id?: boolean
    text?: boolean
    read?: boolean
    received?: boolean
    reply_to_id?: boolean
    created_at?: boolean
    chat_room?: boolean | chat_roomDefaultArgs<ExtArgs>
    user_message_sender_idTouser?: boolean | userDefaultArgs<ExtArgs>
    user_message_recipient_idTouser?: boolean | userDefaultArgs<ExtArgs>
    message?: boolean | message$messageArgs<ExtArgs>
    other_message?: boolean | message$other_messageArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>



  export type messageSelectScalar = {
    id?: boolean
    chat_room_id?: boolean
    sender_id?: boolean
    recipient_id?: boolean
    text?: boolean
    read?: boolean
    received?: boolean
    reply_to_id?: boolean
    created_at?: boolean
  }

  export type messageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chat_room_id" | "sender_id" | "recipient_id" | "text" | "read" | "received" | "reply_to_id" | "created_at", ExtArgs["result"]["message"]>
  export type messageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_room?: boolean | chat_roomDefaultArgs<ExtArgs>
    user_message_sender_idTouser?: boolean | userDefaultArgs<ExtArgs>
    user_message_recipient_idTouser?: boolean | userDefaultArgs<ExtArgs>
    message?: boolean | message$messageArgs<ExtArgs>
    other_message?: boolean | message$other_messageArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $messagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "message"
    objects: {
      chat_room: Prisma.$chat_roomPayload<ExtArgs>
      user_message_sender_idTouser: Prisma.$userPayload<ExtArgs>
      user_message_recipient_idTouser: Prisma.$userPayload<ExtArgs>
      message: Prisma.$messagePayload<ExtArgs> | null
      other_message: Prisma.$messagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chat_room_id: number
      sender_id: number
      recipient_id: number
      text: string
      read: boolean
      received: boolean
      reply_to_id: number | null
      created_at: Date | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type messageGetPayload<S extends boolean | null | undefined | messageDefaultArgs> = $Result.GetResult<Prisma.$messagePayload, S>

  type messageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface messageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['message'], meta: { name: 'message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {messageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messageFindUniqueArgs>(args: SelectSubset<T, messageFindUniqueArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messageFindUniqueOrThrowArgs>(args: SelectSubset<T, messageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messageFindFirstArgs>(args?: SelectSubset<T, messageFindFirstArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messageFindFirstOrThrowArgs>(args?: SelectSubset<T, messageFindFirstOrThrowArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messageFindManyArgs>(args?: SelectSubset<T, messageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {messageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends messageCreateArgs>(args: SelectSubset<T, messageCreateArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messageCreateManyArgs>(args?: SelectSubset<T, messageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {messageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends messageDeleteArgs>(args: SelectSubset<T, messageDeleteArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {messageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messageUpdateArgs>(args: SelectSubset<T, messageUpdateArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messageDeleteManyArgs>(args?: SelectSubset<T, messageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messageUpdateManyArgs>(args: SelectSubset<T, messageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {messageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends messageUpsertArgs>(args: SelectSubset<T, messageUpsertArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messageCountArgs>(
      args?: Subset<T, messageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageGroupByArgs} args - Group by arguments.
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
      T extends messageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messageGroupByArgs['orderBy'] }
        : { orderBy?: messageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, messageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the message model
   */
  readonly fields: messageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat_room<T extends chat_roomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, chat_roomDefaultArgs<ExtArgs>>): Prisma__chat_roomClient<$Result.GetResult<Prisma.$chat_roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_message_sender_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_message_recipient_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    message<T extends message$messageArgs<ExtArgs> = {}>(args?: Subset<T, message$messageArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_message<T extends message$other_messageArgs<ExtArgs> = {}>(args?: Subset<T, message$other_messageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the message model
   */
  interface messageFieldRefs {
    readonly id: FieldRef<"message", 'Int'>
    readonly chat_room_id: FieldRef<"message", 'Int'>
    readonly sender_id: FieldRef<"message", 'Int'>
    readonly recipient_id: FieldRef<"message", 'Int'>
    readonly text: FieldRef<"message", 'String'>
    readonly read: FieldRef<"message", 'Boolean'>
    readonly received: FieldRef<"message", 'Boolean'>
    readonly reply_to_id: FieldRef<"message", 'Int'>
    readonly created_at: FieldRef<"message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * message findUnique
   */
  export type messageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message findUniqueOrThrow
   */
  export type messageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message findFirst
   */
  export type messageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message findFirstOrThrow
   */
  export type messageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message findMany
   */
  export type messageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message create
   */
  export type messageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The data needed to create a message.
     */
    data: XOR<messageCreateInput, messageUncheckedCreateInput>
  }

  /**
   * message createMany
   */
  export type messageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messageCreateManyInput | messageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * message update
   */
  export type messageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The data needed to update a message.
     */
    data: XOR<messageUpdateInput, messageUncheckedUpdateInput>
    /**
     * Choose, which message to update.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message updateMany
   */
  export type messageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messageWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * message upsert
   */
  export type messageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The filter to search for the message to update in case it exists.
     */
    where: messageWhereUniqueInput
    /**
     * In case the message found by the `where` argument doesn't exist, create a new message with this data.
     */
    create: XOR<messageCreateInput, messageUncheckedCreateInput>
    /**
     * In case the message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messageUpdateInput, messageUncheckedUpdateInput>
  }

  /**
   * message delete
   */
  export type messageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter which message to delete.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message deleteMany
   */
  export type messageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messageWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * message.message
   */
  export type message$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    where?: messageWhereInput
  }

  /**
   * message.other_message
   */
  export type message$other_messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    where?: messageWhereInput
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    cursor?: messageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message without action
   */
  export type messageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    full_name: string | null
    email: string | null
    passwd: string | null
    profile: string | null
    phone: string | null
    location: string | null
    bio: string | null
    farm_name: string | null
    business_name: string | null
    is_verified: boolean | null
    is_active: boolean | null
    type: $Enums.user_type | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    full_name: string | null
    email: string | null
    passwd: string | null
    profile: string | null
    phone: string | null
    location: string | null
    bio: string | null
    farm_name: string | null
    business_name: string | null
    is_verified: boolean | null
    is_active: boolean | null
    type: $Enums.user_type | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    full_name: number
    email: number
    passwd: number
    profile: number
    phone: number
    location: number
    bio: number
    farm_name: number
    business_name: number
    is_verified: number
    is_active: number
    type: number
    created_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    passwd?: true
    profile?: true
    phone?: true
    location?: true
    bio?: true
    farm_name?: true
    business_name?: true
    is_verified?: true
    is_active?: true
    type?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    passwd?: true
    profile?: true
    phone?: true
    location?: true
    bio?: true
    farm_name?: true
    business_name?: true
    is_verified?: true
    is_active?: true
    type?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    passwd?: true
    profile?: true
    phone?: true
    location?: true
    bio?: true
    farm_name?: true
    business_name?: true
    is_verified?: true
    is_active?: true
    type?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    full_name: string
    email: string
    passwd: string
    profile: string | null
    phone: string | null
    location: string | null
    bio: string | null
    farm_name: string | null
    business_name: string | null
    is_verified: boolean
    is_active: boolean
    type: $Enums.user_type
    created_at: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    passwd?: boolean
    profile?: boolean
    phone?: boolean
    location?: boolean
    bio?: boolean
    farm_name?: boolean
    business_name?: boolean
    is_verified?: boolean
    is_active?: boolean
    type?: boolean
    created_at?: boolean
    chat_room_chat_room_user1Touser?: boolean | user$chat_room_chat_room_user1TouserArgs<ExtArgs>
    chat_room_chat_room_user2Touser?: boolean | user$chat_room_chat_room_user2TouserArgs<ExtArgs>
    harvest?: boolean | user$harvestArgs<ExtArgs>
    message_message_sender_idTouser?: boolean | user$message_message_sender_idTouserArgs<ExtArgs>
    message_message_recipient_idTouser?: boolean | user$message_message_recipient_idTouserArgs<ExtArgs>
    order_order_buyer_idTouser?: boolean | user$order_order_buyer_idTouserArgs<ExtArgs>
    review_review_reviewer_idTouser?: boolean | user$review_review_reviewer_idTouserArgs<ExtArgs>
    review_review_reviewee_idTouser?: boolean | user$review_review_reviewee_idTouserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    full_name?: boolean
    email?: boolean
    passwd?: boolean
    profile?: boolean
    phone?: boolean
    location?: boolean
    bio?: boolean
    farm_name?: boolean
    business_name?: boolean
    is_verified?: boolean
    is_active?: boolean
    type?: boolean
    created_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "email" | "passwd" | "profile" | "phone" | "location" | "bio" | "farm_name" | "business_name" | "is_verified" | "is_active" | "type" | "created_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_room_chat_room_user1Touser?: boolean | user$chat_room_chat_room_user1TouserArgs<ExtArgs>
    chat_room_chat_room_user2Touser?: boolean | user$chat_room_chat_room_user2TouserArgs<ExtArgs>
    harvest?: boolean | user$harvestArgs<ExtArgs>
    message_message_sender_idTouser?: boolean | user$message_message_sender_idTouserArgs<ExtArgs>
    message_message_recipient_idTouser?: boolean | user$message_message_recipient_idTouserArgs<ExtArgs>
    order_order_buyer_idTouser?: boolean | user$order_order_buyer_idTouserArgs<ExtArgs>
    review_review_reviewer_idTouser?: boolean | user$review_review_reviewer_idTouserArgs<ExtArgs>
    review_review_reviewee_idTouser?: boolean | user$review_review_reviewee_idTouserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      chat_room_chat_room_user1Touser: Prisma.$chat_roomPayload<ExtArgs>[]
      chat_room_chat_room_user2Touser: Prisma.$chat_roomPayload<ExtArgs>[]
      harvest: Prisma.$harvestPayload<ExtArgs>[]
      message_message_sender_idTouser: Prisma.$messagePayload<ExtArgs>[]
      message_message_recipient_idTouser: Prisma.$messagePayload<ExtArgs>[]
      order_order_buyer_idTouser: Prisma.$orderPayload<ExtArgs>[]
      review_review_reviewer_idTouser: Prisma.$reviewPayload<ExtArgs>[]
      review_review_reviewee_idTouser: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      full_name: string
      email: string
      passwd: string
      profile: string | null
      phone: string | null
      location: string | null
      bio: string | null
      farm_name: string | null
      business_name: string | null
      is_verified: boolean
      is_active: boolean
      type: $Enums.user_type
      created_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat_room_chat_room_user1Touser<T extends user$chat_room_chat_room_user1TouserArgs<ExtArgs> = {}>(args?: Subset<T, user$chat_room_chat_room_user1TouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_roomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chat_room_chat_room_user2Touser<T extends user$chat_room_chat_room_user2TouserArgs<ExtArgs> = {}>(args?: Subset<T, user$chat_room_chat_room_user2TouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_roomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    harvest<T extends user$harvestArgs<ExtArgs> = {}>(args?: Subset<T, user$harvestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$harvestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    message_message_sender_idTouser<T extends user$message_message_sender_idTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$message_message_sender_idTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    message_message_recipient_idTouser<T extends user$message_message_recipient_idTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$message_message_recipient_idTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_order_buyer_idTouser<T extends user$order_order_buyer_idTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$order_order_buyer_idTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review_review_reviewer_idTouser<T extends user$review_review_reviewer_idTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$review_review_reviewer_idTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review_review_reviewee_idTouser<T extends user$review_review_reviewee_idTouserArgs<ExtArgs> = {}>(args?: Subset<T, user$review_review_reviewee_idTouserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly full_name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly passwd: FieldRef<"user", 'String'>
    readonly profile: FieldRef<"user", 'String'>
    readonly phone: FieldRef<"user", 'String'>
    readonly location: FieldRef<"user", 'String'>
    readonly bio: FieldRef<"user", 'String'>
    readonly farm_name: FieldRef<"user", 'String'>
    readonly business_name: FieldRef<"user", 'String'>
    readonly is_verified: FieldRef<"user", 'Boolean'>
    readonly is_active: FieldRef<"user", 'Boolean'>
    readonly type: FieldRef<"user", 'user_type'>
    readonly created_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.chat_room_chat_room_user1Touser
   */
  export type user$chat_room_chat_room_user1TouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_room
     */
    select?: chat_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_room
     */
    omit?: chat_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_roomInclude<ExtArgs> | null
    where?: chat_roomWhereInput
    orderBy?: chat_roomOrderByWithRelationInput | chat_roomOrderByWithRelationInput[]
    cursor?: chat_roomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Chat_roomScalarFieldEnum | Chat_roomScalarFieldEnum[]
  }

  /**
   * user.chat_room_chat_room_user2Touser
   */
  export type user$chat_room_chat_room_user2TouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_room
     */
    select?: chat_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_room
     */
    omit?: chat_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_roomInclude<ExtArgs> | null
    where?: chat_roomWhereInput
    orderBy?: chat_roomOrderByWithRelationInput | chat_roomOrderByWithRelationInput[]
    cursor?: chat_roomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Chat_roomScalarFieldEnum | Chat_roomScalarFieldEnum[]
  }

  /**
   * user.harvest
   */
  export type user$harvestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the harvest
     */
    select?: harvestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the harvest
     */
    omit?: harvestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: harvestInclude<ExtArgs> | null
    where?: harvestWhereInput
    orderBy?: harvestOrderByWithRelationInput | harvestOrderByWithRelationInput[]
    cursor?: harvestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HarvestScalarFieldEnum | HarvestScalarFieldEnum[]
  }

  /**
   * user.message_message_sender_idTouser
   */
  export type user$message_message_sender_idTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    where?: messageWhereInput
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    cursor?: messageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * user.message_message_recipient_idTouser
   */
  export type user$message_message_recipient_idTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    where?: messageWhereInput
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    cursor?: messageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * user.order_order_buyer_idTouser
   */
  export type user$order_order_buyer_idTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    where?: orderWhereInput
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    cursor?: orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * user.review_review_reviewer_idTouser
   */
  export type user$review_review_reviewer_idTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * user.review_review_reviewee_idTouser
   */
  export type user$review_review_reviewee_idTouserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    buyer_id: number | null
    harvest_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    buyer_id: number | null
    harvest_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    buyer_id: number | null
    harvest_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
    status: $Enums.order_status | null
    note: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    buyer_id: number | null
    harvest_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
    status: $Enums.order_status | null
    note: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    buyer_id: number
    harvest_id: number
    quantity: number
    unit_price: number
    total_price: number
    status: number
    note: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    buyer_id?: true
    harvest_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    buyer_id?: true
    harvest_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    buyer_id?: true
    harvest_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
    status?: true
    note?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    buyer_id?: true
    harvest_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
    status?: true
    note?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    buyer_id?: true
    harvest_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
    status?: true
    note?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order to aggregate.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
    orderBy?: orderOrderByWithAggregationInput | orderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    buyer_id: number
    harvest_id: number
    quantity: number
    unit_price: Decimal
    total_price: Decimal
    status: $Enums.order_status
    note: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buyer_id?: boolean
    harvest_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    status?: boolean
    note?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_order_buyer_idTouser?: boolean | userDefaultArgs<ExtArgs>
    harvest?: boolean | harvestDefaultArgs<ExtArgs>
    payment?: boolean | order$paymentArgs<ExtArgs>
    review?: boolean | order$reviewArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>



  export type orderSelectScalar = {
    id?: boolean
    buyer_id?: boolean
    harvest_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    status?: boolean
    note?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type orderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "buyer_id" | "harvest_id" | "quantity" | "unit_price" | "total_price" | "status" | "note" | "created_at" | "updated_at", ExtArgs["result"]["order"]>
  export type orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_order_buyer_idTouser?: boolean | userDefaultArgs<ExtArgs>
    harvest?: boolean | harvestDefaultArgs<ExtArgs>
    payment?: boolean | order$paymentArgs<ExtArgs>
    review?: boolean | order$reviewArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order"
    objects: {
      user_order_buyer_idTouser: Prisma.$userPayload<ExtArgs>
      harvest: Prisma.$harvestPayload<ExtArgs>
      payment: Prisma.$paymentPayload<ExtArgs>[]
      review: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      buyer_id: number
      harvest_id: number
      quantity: number
      unit_price: Prisma.Decimal
      total_price: Prisma.Decimal
      status: $Enums.order_status
      note: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type orderGetPayload<S extends boolean | null | undefined | orderDefaultArgs> = $Result.GetResult<Prisma.$orderPayload, S>

  type orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order'], meta: { name: 'order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {orderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderFindUniqueArgs>(args: SelectSubset<T, orderFindUniqueArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderFindUniqueOrThrowArgs>(args: SelectSubset<T, orderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderFindFirstArgs>(args?: SelectSubset<T, orderFindFirstArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderFindFirstOrThrowArgs>(args?: SelectSubset<T, orderFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends orderFindManyArgs>(args?: SelectSubset<T, orderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {orderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends orderCreateArgs>(args: SelectSubset<T, orderCreateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {orderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderCreateManyArgs>(args?: SelectSubset<T, orderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {orderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends orderDeleteArgs>(args: SelectSubset<T, orderDeleteArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {orderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderUpdateArgs>(args: SelectSubset<T, orderUpdateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {orderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderDeleteManyArgs>(args?: SelectSubset<T, orderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderUpdateManyArgs>(args: SelectSubset<T, orderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {orderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends orderUpsertArgs>(args: SelectSubset<T, orderUpsertArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends orderCountArgs>(
      args?: Subset<T, orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderGroupByArgs} args - Group by arguments.
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
      T extends orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderGroupByArgs['orderBy'] }
        : { orderBy?: orderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order model
   */
  readonly fields: orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_order_buyer_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    harvest<T extends harvestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, harvestDefaultArgs<ExtArgs>>): Prisma__harvestClient<$Result.GetResult<Prisma.$harvestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends order$paymentArgs<ExtArgs> = {}>(args?: Subset<T, order$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review<T extends order$reviewArgs<ExtArgs> = {}>(args?: Subset<T, order$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the order model
   */
  interface orderFieldRefs {
    readonly id: FieldRef<"order", 'Int'>
    readonly buyer_id: FieldRef<"order", 'Int'>
    readonly harvest_id: FieldRef<"order", 'Int'>
    readonly quantity: FieldRef<"order", 'Int'>
    readonly unit_price: FieldRef<"order", 'Decimal'>
    readonly total_price: FieldRef<"order", 'Decimal'>
    readonly status: FieldRef<"order", 'order_status'>
    readonly note: FieldRef<"order", 'String'>
    readonly created_at: FieldRef<"order", 'DateTime'>
    readonly updated_at: FieldRef<"order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order findUnique
   */
  export type orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findUniqueOrThrow
   */
  export type orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findFirst
   */
  export type orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findFirstOrThrow
   */
  export type orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findMany
   */
  export type orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order create
   */
  export type orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to create a order.
     */
    data: XOR<orderCreateInput, orderUncheckedCreateInput>
  }

  /**
   * order createMany
   */
  export type orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order update
   */
  export type orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to update a order.
     */
    data: XOR<orderUpdateInput, orderUncheckedUpdateInput>
    /**
     * Choose, which order to update.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order updateMany
   */
  export type orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * order upsert
   */
  export type orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The filter to search for the order to update in case it exists.
     */
    where: orderWhereUniqueInput
    /**
     * In case the order found by the `where` argument doesn't exist, create a new order with this data.
     */
    create: XOR<orderCreateInput, orderUncheckedCreateInput>
    /**
     * In case the order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderUpdateInput, orderUncheckedUpdateInput>
  }

  /**
   * order delete
   */
  export type orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter which order to delete.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order deleteMany
   */
  export type orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * order.payment
   */
  export type order$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    cursor?: paymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * order.review
   */
  export type order$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * order without action
   */
  export type orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
  }


  /**
   * Model payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    order_id: number | null
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    amount: Decimal | null
    method: $Enums.payment_method | null
    status: $Enums.payment_status | null
    transaction_ref: string | null
    created_at: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    amount: Decimal | null
    method: $Enums.payment_method | null
    status: $Enums.payment_status | null
    transaction_ref: string | null
    created_at: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    order_id: number
    amount: number
    method: number
    status: number
    transaction_ref: number
    created_at: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
    method?: true
    status?: true
    transaction_ref?: true
    created_at?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
    method?: true
    status?: true
    transaction_ref?: true
    created_at?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    order_id?: true
    amount?: true
    method?: true
    status?: true
    transaction_ref?: true
    created_at?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment to aggregate.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type paymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithAggregationInput | paymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: paymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    order_id: number
    amount: Decimal
    method: $Enums.payment_method
    status: $Enums.payment_status
    transaction_ref: string | null
    created_at: Date | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends paymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type paymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    transaction_ref?: boolean
    created_at?: boolean
    order?: boolean | orderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type paymentSelectScalar = {
    id?: boolean
    order_id?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    transaction_ref?: boolean
    created_at?: boolean
  }

  export type paymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "amount" | "method" | "status" | "transaction_ref" | "created_at", ExtArgs["result"]["payment"]>
  export type paymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | orderDefaultArgs<ExtArgs>
  }

  export type $paymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment"
    objects: {
      order: Prisma.$orderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number
      amount: Prisma.Decimal
      method: $Enums.payment_method
      status: $Enums.payment_status
      transaction_ref: string | null
      created_at: Date | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type paymentGetPayload<S extends boolean | null | undefined | paymentDefaultArgs> = $Result.GetResult<Prisma.$paymentPayload, S>

  type paymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface paymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment'], meta: { name: 'payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {paymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentFindUniqueArgs>(args: SelectSubset<T, paymentFindUniqueArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentFindFirstArgs>(args?: SelectSubset<T, paymentFindFirstArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentFindManyArgs>(args?: SelectSubset<T, paymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {paymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends paymentCreateArgs>(args: SelectSubset<T, paymentCreateArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentCreateManyArgs>(args?: SelectSubset<T, paymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {paymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends paymentDeleteArgs>(args: SelectSubset<T, paymentDeleteArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {paymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentUpdateArgs>(args: SelectSubset<T, paymentUpdateArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentDeleteManyArgs>(args?: SelectSubset<T, paymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentUpdateManyArgs>(args: SelectSubset<T, paymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {paymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends paymentUpsertArgs>(args: SelectSubset<T, paymentUpsertArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentCountArgs>(
      args?: Subset<T, paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentGroupByArgs} args - Group by arguments.
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
      T extends paymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentGroupByArgs['orderBy'] }
        : { orderBy?: paymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment model
   */
  readonly fields: paymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends orderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, orderDefaultArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the payment model
   */
  interface paymentFieldRefs {
    readonly id: FieldRef<"payment", 'Int'>
    readonly order_id: FieldRef<"payment", 'Int'>
    readonly amount: FieldRef<"payment", 'Decimal'>
    readonly method: FieldRef<"payment", 'payment_method'>
    readonly status: FieldRef<"payment", 'payment_status'>
    readonly transaction_ref: FieldRef<"payment", 'String'>
    readonly created_at: FieldRef<"payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payment findUnique
   */
  export type paymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findUniqueOrThrow
   */
  export type paymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findFirst
   */
  export type paymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment findFirstOrThrow
   */
  export type paymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment findMany
   */
  export type paymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment create
   */
  export type paymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The data needed to create a payment.
     */
    data: XOR<paymentCreateInput, paymentUncheckedCreateInput>
  }

  /**
   * payment createMany
   */
  export type paymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment update
   */
  export type paymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The data needed to update a payment.
     */
    data: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
    /**
     * Choose, which payment to update.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment updateMany
   */
  export type paymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payment upsert
   */
  export type paymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The filter to search for the payment to update in case it exists.
     */
    where: paymentWhereUniqueInput
    /**
     * In case the payment found by the `where` argument doesn't exist, create a new payment with this data.
     */
    create: XOR<paymentCreateInput, paymentUncheckedCreateInput>
    /**
     * In case the payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
  }

  /**
   * payment delete
   */
  export type paymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter which payment to delete.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment deleteMany
   */
  export type paymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payment without action
   */
  export type paymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
  }


  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    reviewer_id: number | null
    reviewee_id: number | null
    order_id: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    reviewer_id: number | null
    reviewee_id: number | null
    order_id: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    reviewer_id: number | null
    reviewee_id: number | null
    order_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    reviewer_id: number | null
    reviewee_id: number | null
    order_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    reviewer_id: number
    reviewee_id: number
    order_id: number
    rating: number
    comment: number
    created_at: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    reviewer_id?: true
    reviewee_id?: true
    order_id?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    reviewer_id?: true
    reviewee_id?: true
    order_id?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    reviewer_id?: true
    reviewee_id?: true
    order_id?: true
    rating?: true
    comment?: true
    created_at?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    reviewer_id?: true
    reviewee_id?: true
    order_id?: true
    rating?: true
    comment?: true
    created_at?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    reviewer_id?: true
    reviewee_id?: true
    order_id?: true
    rating?: true
    comment?: true
    created_at?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: reviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    reviewer_id: number
    reviewee_id: number
    order_id: number
    rating: number
    comment: string | null
    created_at: Date | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewer_id?: boolean
    reviewee_id?: boolean
    order_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    user_review_reviewer_idTouser?: boolean | userDefaultArgs<ExtArgs>
    user_review_reviewee_idTouser?: boolean | userDefaultArgs<ExtArgs>
    order?: boolean | orderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type reviewSelectScalar = {
    id?: boolean
    reviewer_id?: boolean
    reviewee_id?: boolean
    order_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
  }

  export type reviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewer_id" | "reviewee_id" | "order_id" | "rating" | "comment" | "created_at", ExtArgs["result"]["review"]>
  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_review_reviewer_idTouser?: boolean | userDefaultArgs<ExtArgs>
    user_review_reviewee_idTouser?: boolean | userDefaultArgs<ExtArgs>
    order?: boolean | orderDefaultArgs<ExtArgs>
  }

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "review"
    objects: {
      user_review_reviewer_idTouser: Prisma.$userPayload<ExtArgs>
      user_review_reviewee_idTouser: Prisma.$userPayload<ExtArgs>
      order: Prisma.$orderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reviewer_id: number
      reviewee_id: number
      order_id: number
      rating: number
      comment: string | null
      created_at: Date | null
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<Prisma.$reviewPayload, S>

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review'], meta: { name: 'review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewFindUniqueArgs>(args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewFindFirstArgs>(args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends reviewFindManyArgs>(args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends reviewCreateArgs>(args: SelectSubset<T, reviewCreateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewCreateManyArgs>(args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends reviewDeleteArgs>(args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewUpdateArgs>(args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewDeleteManyArgs>(args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewUpdateManyArgs>(args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends reviewUpsertArgs>(args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
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
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the review model
   */
  readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_review_reviewer_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_review_reviewee_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends orderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, orderDefaultArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly id: FieldRef<"review", 'Int'>
    readonly reviewer_id: FieldRef<"review", 'Int'>
    readonly reviewee_id: FieldRef<"review", 'Int'>
    readonly order_id: FieldRef<"review", 'Int'>
    readonly rating: FieldRef<"review", 'Int'>
    readonly comment: FieldRef<"review", 'String'>
    readonly created_at: FieldRef<"review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>
  }

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
  }

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
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


  export const Chat_roomScalarFieldEnum: {
    id: 'id',
    user1: 'user1',
    user2: 'user2',
    created_at: 'created_at'
  };

  export type Chat_roomScalarFieldEnum = (typeof Chat_roomScalarFieldEnum)[keyof typeof Chat_roomScalarFieldEnum]


  export const HarvestScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    unit: 'unit',
    owner_id: 'owner_id',
    name: 'name',
    category: 'category',
    unit_price: 'unit_price',
    description: 'description',
    location: 'location',
    is_available: 'is_available',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type HarvestScalarFieldEnum = (typeof HarvestScalarFieldEnum)[keyof typeof HarvestScalarFieldEnum]


  export const Harvest_categoryScalarFieldEnum: {
    category: 'category'
  };

  export type Harvest_categoryScalarFieldEnum = (typeof Harvest_categoryScalarFieldEnum)[keyof typeof Harvest_categoryScalarFieldEnum]


  export const Harvest_imageScalarFieldEnum: {
    id: 'id',
    harvest_id: 'harvest_id',
    img_url: 'img_url'
  };

  export type Harvest_imageScalarFieldEnum = (typeof Harvest_imageScalarFieldEnum)[keyof typeof Harvest_imageScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    chat_room_id: 'chat_room_id',
    sender_id: 'sender_id',
    recipient_id: 'recipient_id',
    text: 'text',
    read: 'read',
    received: 'received',
    reply_to_id: 'reply_to_id',
    created_at: 'created_at'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    email: 'email',
    passwd: 'passwd',
    profile: 'profile',
    phone: 'phone',
    location: 'location',
    bio: 'bio',
    farm_name: 'farm_name',
    business_name: 'business_name',
    is_verified: 'is_verified',
    is_active: 'is_active',
    type: 'type',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    buyer_id: 'buyer_id',
    harvest_id: 'harvest_id',
    quantity: 'quantity',
    unit_price: 'unit_price',
    total_price: 'total_price',
    status: 'status',
    note: 'note',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    amount: 'amount',
    method: 'method',
    status: 'status',
    transaction_ref: 'transaction_ref',
    created_at: 'created_at'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    reviewer_id: 'reviewer_id',
    reviewee_id: 'reviewee_id',
    order_id: 'order_id',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const harvestOrderByRelevanceFieldEnum: {
    unit: 'unit',
    name: 'name',
    category: 'category',
    description: 'description',
    location: 'location'
  };

  export type harvestOrderByRelevanceFieldEnum = (typeof harvestOrderByRelevanceFieldEnum)[keyof typeof harvestOrderByRelevanceFieldEnum]


  export const harvest_categoryOrderByRelevanceFieldEnum: {
    category: 'category'
  };

  export type harvest_categoryOrderByRelevanceFieldEnum = (typeof harvest_categoryOrderByRelevanceFieldEnum)[keyof typeof harvest_categoryOrderByRelevanceFieldEnum]


  export const harvest_imageOrderByRelevanceFieldEnum: {
    img_url: 'img_url'
  };

  export type harvest_imageOrderByRelevanceFieldEnum = (typeof harvest_imageOrderByRelevanceFieldEnum)[keyof typeof harvest_imageOrderByRelevanceFieldEnum]


  export const messageOrderByRelevanceFieldEnum: {
    text: 'text'
  };

  export type messageOrderByRelevanceFieldEnum = (typeof messageOrderByRelevanceFieldEnum)[keyof typeof messageOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    full_name: 'full_name',
    email: 'email',
    passwd: 'passwd',
    profile: 'profile',
    phone: 'phone',
    location: 'location',
    bio: 'bio',
    farm_name: 'farm_name',
    business_name: 'business_name'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const orderOrderByRelevanceFieldEnum: {
    note: 'note'
  };

  export type orderOrderByRelevanceFieldEnum = (typeof orderOrderByRelevanceFieldEnum)[keyof typeof orderOrderByRelevanceFieldEnum]


  export const paymentOrderByRelevanceFieldEnum: {
    transaction_ref: 'transaction_ref'
  };

  export type paymentOrderByRelevanceFieldEnum = (typeof paymentOrderByRelevanceFieldEnum)[keyof typeof paymentOrderByRelevanceFieldEnum]


  export const reviewOrderByRelevanceFieldEnum: {
    comment: 'comment'
  };

  export type reviewOrderByRelevanceFieldEnum = (typeof reviewOrderByRelevanceFieldEnum)[keyof typeof reviewOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'user_type'
   */
  export type Enumuser_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_type'>
    


  /**
   * Reference to a field of type 'order_status'
   */
  export type Enumorder_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_status'>
    


  /**
   * Reference to a field of type 'payment_method'
   */
  export type Enumpayment_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_method'>
    


  /**
   * Reference to a field of type 'payment_status'
   */
  export type Enumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type chat_roomWhereInput = {
    AND?: chat_roomWhereInput | chat_roomWhereInput[]
    OR?: chat_roomWhereInput[]
    NOT?: chat_roomWhereInput | chat_roomWhereInput[]
    id?: IntFilter<"chat_room"> | number
    user1?: IntFilter<"chat_room"> | number
    user2?: IntFilter<"chat_room"> | number
    created_at?: DateTimeNullableFilter<"chat_room"> | Date | string | null
    user_chat_room_user1Touser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_chat_room_user2Touser?: XOR<UserScalarRelationFilter, userWhereInput>
    message?: MessageListRelationFilter
  }

  export type chat_roomOrderByWithRelationInput = {
    id?: SortOrder
    user1?: SortOrder
    user2?: SortOrder
    created_at?: SortOrderInput | SortOrder
    user_chat_room_user1Touser?: userOrderByWithRelationInput
    user_chat_room_user2Touser?: userOrderByWithRelationInput
    message?: messageOrderByRelationAggregateInput
  }

  export type chat_roomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user1_user2?: chat_roomUser1User2CompoundUniqueInput
    AND?: chat_roomWhereInput | chat_roomWhereInput[]
    OR?: chat_roomWhereInput[]
    NOT?: chat_roomWhereInput | chat_roomWhereInput[]
    user1?: IntFilter<"chat_room"> | number
    user2?: IntFilter<"chat_room"> | number
    created_at?: DateTimeNullableFilter<"chat_room"> | Date | string | null
    user_chat_room_user1Touser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_chat_room_user2Touser?: XOR<UserScalarRelationFilter, userWhereInput>
    message?: MessageListRelationFilter
  }, "id" | "user1_user2">

  export type chat_roomOrderByWithAggregationInput = {
    id?: SortOrder
    user1?: SortOrder
    user2?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: chat_roomCountOrderByAggregateInput
    _avg?: chat_roomAvgOrderByAggregateInput
    _max?: chat_roomMaxOrderByAggregateInput
    _min?: chat_roomMinOrderByAggregateInput
    _sum?: chat_roomSumOrderByAggregateInput
  }

  export type chat_roomScalarWhereWithAggregatesInput = {
    AND?: chat_roomScalarWhereWithAggregatesInput | chat_roomScalarWhereWithAggregatesInput[]
    OR?: chat_roomScalarWhereWithAggregatesInput[]
    NOT?: chat_roomScalarWhereWithAggregatesInput | chat_roomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chat_room"> | number
    user1?: IntWithAggregatesFilter<"chat_room"> | number
    user2?: IntWithAggregatesFilter<"chat_room"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"chat_room"> | Date | string | null
  }

  export type harvestWhereInput = {
    AND?: harvestWhereInput | harvestWhereInput[]
    OR?: harvestWhereInput[]
    NOT?: harvestWhereInput | harvestWhereInput[]
    id?: IntFilter<"harvest"> | number
    quantity?: IntFilter<"harvest"> | number
    unit?: StringFilter<"harvest"> | string
    owner_id?: IntFilter<"harvest"> | number
    name?: StringFilter<"harvest"> | string
    category?: StringFilter<"harvest"> | string
    unit_price?: DecimalFilter<"harvest"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"harvest"> | string | null
    location?: StringNullableFilter<"harvest"> | string | null
    is_available?: BoolFilter<"harvest"> | boolean
    created_at?: DateTimeNullableFilter<"harvest"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"harvest"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    harvest_category?: XOR<Harvest_categoryScalarRelationFilter, harvest_categoryWhereInput>
    harvest_image?: Harvest_imageListRelationFilter
    order?: OrderListRelationFilter
  }

  export type harvestOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    unit_price?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    is_available?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    harvest_category?: harvest_categoryOrderByWithRelationInput
    harvest_image?: harvest_imageOrderByRelationAggregateInput
    order?: orderOrderByRelationAggregateInput
    _relevance?: harvestOrderByRelevanceInput
  }

  export type harvestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: harvestWhereInput | harvestWhereInput[]
    OR?: harvestWhereInput[]
    NOT?: harvestWhereInput | harvestWhereInput[]
    quantity?: IntFilter<"harvest"> | number
    unit?: StringFilter<"harvest"> | string
    owner_id?: IntFilter<"harvest"> | number
    name?: StringFilter<"harvest"> | string
    category?: StringFilter<"harvest"> | string
    unit_price?: DecimalFilter<"harvest"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"harvest"> | string | null
    location?: StringNullableFilter<"harvest"> | string | null
    is_available?: BoolFilter<"harvest"> | boolean
    created_at?: DateTimeNullableFilter<"harvest"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"harvest"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    harvest_category?: XOR<Harvest_categoryScalarRelationFilter, harvest_categoryWhereInput>
    harvest_image?: Harvest_imageListRelationFilter
    order?: OrderListRelationFilter
  }, "id">

  export type harvestOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    unit_price?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    is_available?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: harvestCountOrderByAggregateInput
    _avg?: harvestAvgOrderByAggregateInput
    _max?: harvestMaxOrderByAggregateInput
    _min?: harvestMinOrderByAggregateInput
    _sum?: harvestSumOrderByAggregateInput
  }

  export type harvestScalarWhereWithAggregatesInput = {
    AND?: harvestScalarWhereWithAggregatesInput | harvestScalarWhereWithAggregatesInput[]
    OR?: harvestScalarWhereWithAggregatesInput[]
    NOT?: harvestScalarWhereWithAggregatesInput | harvestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"harvest"> | number
    quantity?: IntWithAggregatesFilter<"harvest"> | number
    unit?: StringWithAggregatesFilter<"harvest"> | string
    owner_id?: IntWithAggregatesFilter<"harvest"> | number
    name?: StringWithAggregatesFilter<"harvest"> | string
    category?: StringWithAggregatesFilter<"harvest"> | string
    unit_price?: DecimalWithAggregatesFilter<"harvest"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"harvest"> | string | null
    location?: StringNullableWithAggregatesFilter<"harvest"> | string | null
    is_available?: BoolWithAggregatesFilter<"harvest"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"harvest"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"harvest"> | Date | string | null
  }

  export type harvest_categoryWhereInput = {
    AND?: harvest_categoryWhereInput | harvest_categoryWhereInput[]
    OR?: harvest_categoryWhereInput[]
    NOT?: harvest_categoryWhereInput | harvest_categoryWhereInput[]
    category?: StringFilter<"harvest_category"> | string
    harvest?: HarvestListRelationFilter
  }

  export type harvest_categoryOrderByWithRelationInput = {
    category?: SortOrder
    harvest?: harvestOrderByRelationAggregateInput
    _relevance?: harvest_categoryOrderByRelevanceInput
  }

  export type harvest_categoryWhereUniqueInput = Prisma.AtLeast<{
    category?: string
    AND?: harvest_categoryWhereInput | harvest_categoryWhereInput[]
    OR?: harvest_categoryWhereInput[]
    NOT?: harvest_categoryWhereInput | harvest_categoryWhereInput[]
    harvest?: HarvestListRelationFilter
  }, "category">

  export type harvest_categoryOrderByWithAggregationInput = {
    category?: SortOrder
    _count?: harvest_categoryCountOrderByAggregateInput
    _max?: harvest_categoryMaxOrderByAggregateInput
    _min?: harvest_categoryMinOrderByAggregateInput
  }

  export type harvest_categoryScalarWhereWithAggregatesInput = {
    AND?: harvest_categoryScalarWhereWithAggregatesInput | harvest_categoryScalarWhereWithAggregatesInput[]
    OR?: harvest_categoryScalarWhereWithAggregatesInput[]
    NOT?: harvest_categoryScalarWhereWithAggregatesInput | harvest_categoryScalarWhereWithAggregatesInput[]
    category?: StringWithAggregatesFilter<"harvest_category"> | string
  }

  export type harvest_imageWhereInput = {
    AND?: harvest_imageWhereInput | harvest_imageWhereInput[]
    OR?: harvest_imageWhereInput[]
    NOT?: harvest_imageWhereInput | harvest_imageWhereInput[]
    id?: IntFilter<"harvest_image"> | number
    harvest_id?: IntFilter<"harvest_image"> | number
    img_url?: StringFilter<"harvest_image"> | string
    harvest?: XOR<HarvestScalarRelationFilter, harvestWhereInput>
  }

  export type harvest_imageOrderByWithRelationInput = {
    id?: SortOrder
    harvest_id?: SortOrder
    img_url?: SortOrder
    harvest?: harvestOrderByWithRelationInput
    _relevance?: harvest_imageOrderByRelevanceInput
  }

  export type harvest_imageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: harvest_imageWhereInput | harvest_imageWhereInput[]
    OR?: harvest_imageWhereInput[]
    NOT?: harvest_imageWhereInput | harvest_imageWhereInput[]
    harvest_id?: IntFilter<"harvest_image"> | number
    img_url?: StringFilter<"harvest_image"> | string
    harvest?: XOR<HarvestScalarRelationFilter, harvestWhereInput>
  }, "id">

  export type harvest_imageOrderByWithAggregationInput = {
    id?: SortOrder
    harvest_id?: SortOrder
    img_url?: SortOrder
    _count?: harvest_imageCountOrderByAggregateInput
    _avg?: harvest_imageAvgOrderByAggregateInput
    _max?: harvest_imageMaxOrderByAggregateInput
    _min?: harvest_imageMinOrderByAggregateInput
    _sum?: harvest_imageSumOrderByAggregateInput
  }

  export type harvest_imageScalarWhereWithAggregatesInput = {
    AND?: harvest_imageScalarWhereWithAggregatesInput | harvest_imageScalarWhereWithAggregatesInput[]
    OR?: harvest_imageScalarWhereWithAggregatesInput[]
    NOT?: harvest_imageScalarWhereWithAggregatesInput | harvest_imageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"harvest_image"> | number
    harvest_id?: IntWithAggregatesFilter<"harvest_image"> | number
    img_url?: StringWithAggregatesFilter<"harvest_image"> | string
  }

  export type messageWhereInput = {
    AND?: messageWhereInput | messageWhereInput[]
    OR?: messageWhereInput[]
    NOT?: messageWhereInput | messageWhereInput[]
    id?: IntFilter<"message"> | number
    chat_room_id?: IntFilter<"message"> | number
    sender_id?: IntFilter<"message"> | number
    recipient_id?: IntFilter<"message"> | number
    text?: StringFilter<"message"> | string
    read?: BoolFilter<"message"> | boolean
    received?: BoolFilter<"message"> | boolean
    reply_to_id?: IntNullableFilter<"message"> | number | null
    created_at?: DateTimeNullableFilter<"message"> | Date | string | null
    chat_room?: XOR<Chat_roomScalarRelationFilter, chat_roomWhereInput>
    user_message_sender_idTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_message_recipient_idTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    message?: XOR<MessageNullableScalarRelationFilter, messageWhereInput> | null
    other_message?: MessageListRelationFilter
  }

  export type messageOrderByWithRelationInput = {
    id?: SortOrder
    chat_room_id?: SortOrder
    sender_id?: SortOrder
    recipient_id?: SortOrder
    text?: SortOrder
    read?: SortOrder
    received?: SortOrder
    reply_to_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    chat_room?: chat_roomOrderByWithRelationInput
    user_message_sender_idTouser?: userOrderByWithRelationInput
    user_message_recipient_idTouser?: userOrderByWithRelationInput
    message?: messageOrderByWithRelationInput
    other_message?: messageOrderByRelationAggregateInput
    _relevance?: messageOrderByRelevanceInput
  }

  export type messageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: messageWhereInput | messageWhereInput[]
    OR?: messageWhereInput[]
    NOT?: messageWhereInput | messageWhereInput[]
    chat_room_id?: IntFilter<"message"> | number
    sender_id?: IntFilter<"message"> | number
    recipient_id?: IntFilter<"message"> | number
    text?: StringFilter<"message"> | string
    read?: BoolFilter<"message"> | boolean
    received?: BoolFilter<"message"> | boolean
    reply_to_id?: IntNullableFilter<"message"> | number | null
    created_at?: DateTimeNullableFilter<"message"> | Date | string | null
    chat_room?: XOR<Chat_roomScalarRelationFilter, chat_roomWhereInput>
    user_message_sender_idTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_message_recipient_idTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    message?: XOR<MessageNullableScalarRelationFilter, messageWhereInput> | null
    other_message?: MessageListRelationFilter
  }, "id">

  export type messageOrderByWithAggregationInput = {
    id?: SortOrder
    chat_room_id?: SortOrder
    sender_id?: SortOrder
    recipient_id?: SortOrder
    text?: SortOrder
    read?: SortOrder
    received?: SortOrder
    reply_to_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: messageCountOrderByAggregateInput
    _avg?: messageAvgOrderByAggregateInput
    _max?: messageMaxOrderByAggregateInput
    _min?: messageMinOrderByAggregateInput
    _sum?: messageSumOrderByAggregateInput
  }

  export type messageScalarWhereWithAggregatesInput = {
    AND?: messageScalarWhereWithAggregatesInput | messageScalarWhereWithAggregatesInput[]
    OR?: messageScalarWhereWithAggregatesInput[]
    NOT?: messageScalarWhereWithAggregatesInput | messageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"message"> | number
    chat_room_id?: IntWithAggregatesFilter<"message"> | number
    sender_id?: IntWithAggregatesFilter<"message"> | number
    recipient_id?: IntWithAggregatesFilter<"message"> | number
    text?: StringWithAggregatesFilter<"message"> | string
    read?: BoolWithAggregatesFilter<"message"> | boolean
    received?: BoolWithAggregatesFilter<"message"> | boolean
    reply_to_id?: IntNullableWithAggregatesFilter<"message"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"message"> | Date | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    full_name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    passwd?: StringFilter<"user"> | string
    profile?: StringNullableFilter<"user"> | string | null
    phone?: StringNullableFilter<"user"> | string | null
    location?: StringNullableFilter<"user"> | string | null
    bio?: StringNullableFilter<"user"> | string | null
    farm_name?: StringNullableFilter<"user"> | string | null
    business_name?: StringNullableFilter<"user"> | string | null
    is_verified?: BoolFilter<"user"> | boolean
    is_active?: BoolFilter<"user"> | boolean
    type?: Enumuser_typeFilter<"user"> | $Enums.user_type
    created_at?: DateTimeNullableFilter<"user"> | Date | string | null
    chat_room_chat_room_user1Touser?: Chat_roomListRelationFilter
    chat_room_chat_room_user2Touser?: Chat_roomListRelationFilter
    harvest?: HarvestListRelationFilter
    message_message_sender_idTouser?: MessageListRelationFilter
    message_message_recipient_idTouser?: MessageListRelationFilter
    order_order_buyer_idTouser?: OrderListRelationFilter
    review_review_reviewer_idTouser?: ReviewListRelationFilter
    review_review_reviewee_idTouser?: ReviewListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    passwd?: SortOrder
    profile?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    farm_name?: SortOrderInput | SortOrder
    business_name?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    is_active?: SortOrder
    type?: SortOrder
    created_at?: SortOrderInput | SortOrder
    chat_room_chat_room_user1Touser?: chat_roomOrderByRelationAggregateInput
    chat_room_chat_room_user2Touser?: chat_roomOrderByRelationAggregateInput
    harvest?: harvestOrderByRelationAggregateInput
    message_message_sender_idTouser?: messageOrderByRelationAggregateInput
    message_message_recipient_idTouser?: messageOrderByRelationAggregateInput
    order_order_buyer_idTouser?: orderOrderByRelationAggregateInput
    review_review_reviewer_idTouser?: reviewOrderByRelationAggregateInput
    review_review_reviewee_idTouser?: reviewOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    full_name?: StringFilter<"user"> | string
    passwd?: StringFilter<"user"> | string
    profile?: StringNullableFilter<"user"> | string | null
    phone?: StringNullableFilter<"user"> | string | null
    location?: StringNullableFilter<"user"> | string | null
    bio?: StringNullableFilter<"user"> | string | null
    farm_name?: StringNullableFilter<"user"> | string | null
    business_name?: StringNullableFilter<"user"> | string | null
    is_verified?: BoolFilter<"user"> | boolean
    is_active?: BoolFilter<"user"> | boolean
    type?: Enumuser_typeFilter<"user"> | $Enums.user_type
    created_at?: DateTimeNullableFilter<"user"> | Date | string | null
    chat_room_chat_room_user1Touser?: Chat_roomListRelationFilter
    chat_room_chat_room_user2Touser?: Chat_roomListRelationFilter
    harvest?: HarvestListRelationFilter
    message_message_sender_idTouser?: MessageListRelationFilter
    message_message_recipient_idTouser?: MessageListRelationFilter
    order_order_buyer_idTouser?: OrderListRelationFilter
    review_review_reviewer_idTouser?: ReviewListRelationFilter
    review_review_reviewee_idTouser?: ReviewListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    passwd?: SortOrder
    profile?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    farm_name?: SortOrderInput | SortOrder
    business_name?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    is_active?: SortOrder
    type?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    full_name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    passwd?: StringWithAggregatesFilter<"user"> | string
    profile?: StringNullableWithAggregatesFilter<"user"> | string | null
    phone?: StringNullableWithAggregatesFilter<"user"> | string | null
    location?: StringNullableWithAggregatesFilter<"user"> | string | null
    bio?: StringNullableWithAggregatesFilter<"user"> | string | null
    farm_name?: StringNullableWithAggregatesFilter<"user"> | string | null
    business_name?: StringNullableWithAggregatesFilter<"user"> | string | null
    is_verified?: BoolWithAggregatesFilter<"user"> | boolean
    is_active?: BoolWithAggregatesFilter<"user"> | boolean
    type?: Enumuser_typeWithAggregatesFilter<"user"> | $Enums.user_type
    created_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type orderWhereInput = {
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    id?: IntFilter<"order"> | number
    buyer_id?: IntFilter<"order"> | number
    harvest_id?: IntFilter<"order"> | number
    quantity?: IntFilter<"order"> | number
    unit_price?: DecimalFilter<"order"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"order"> | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusFilter<"order"> | $Enums.order_status
    note?: StringNullableFilter<"order"> | string | null
    created_at?: DateTimeNullableFilter<"order"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"order"> | Date | string | null
    user_order_buyer_idTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    harvest?: XOR<HarvestScalarRelationFilter, harvestWhereInput>
    payment?: PaymentListRelationFilter
    review?: ReviewListRelationFilter
  }

  export type orderOrderByWithRelationInput = {
    id?: SortOrder
    buyer_id?: SortOrder
    harvest_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    user_order_buyer_idTouser?: userOrderByWithRelationInput
    harvest?: harvestOrderByWithRelationInput
    payment?: paymentOrderByRelationAggregateInput
    review?: reviewOrderByRelationAggregateInput
    _relevance?: orderOrderByRelevanceInput
  }

  export type orderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    buyer_id?: IntFilter<"order"> | number
    harvest_id?: IntFilter<"order"> | number
    quantity?: IntFilter<"order"> | number
    unit_price?: DecimalFilter<"order"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"order"> | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusFilter<"order"> | $Enums.order_status
    note?: StringNullableFilter<"order"> | string | null
    created_at?: DateTimeNullableFilter<"order"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"order"> | Date | string | null
    user_order_buyer_idTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    harvest?: XOR<HarvestScalarRelationFilter, harvestWhereInput>
    payment?: PaymentListRelationFilter
    review?: ReviewListRelationFilter
  }, "id">

  export type orderOrderByWithAggregationInput = {
    id?: SortOrder
    buyer_id?: SortOrder
    harvest_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: orderCountOrderByAggregateInput
    _avg?: orderAvgOrderByAggregateInput
    _max?: orderMaxOrderByAggregateInput
    _min?: orderMinOrderByAggregateInput
    _sum?: orderSumOrderByAggregateInput
  }

  export type orderScalarWhereWithAggregatesInput = {
    AND?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    OR?: orderScalarWhereWithAggregatesInput[]
    NOT?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order"> | number
    buyer_id?: IntWithAggregatesFilter<"order"> | number
    harvest_id?: IntWithAggregatesFilter<"order"> | number
    quantity?: IntWithAggregatesFilter<"order"> | number
    unit_price?: DecimalWithAggregatesFilter<"order"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalWithAggregatesFilter<"order"> | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusWithAggregatesFilter<"order"> | $Enums.order_status
    note?: StringNullableWithAggregatesFilter<"order"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"order"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"order"> | Date | string | null
  }

  export type paymentWhereInput = {
    AND?: paymentWhereInput | paymentWhereInput[]
    OR?: paymentWhereInput[]
    NOT?: paymentWhereInput | paymentWhereInput[]
    id?: IntFilter<"payment"> | number
    order_id?: IntFilter<"payment"> | number
    amount?: DecimalFilter<"payment"> | Decimal | DecimalJsLike | number | string
    method?: Enumpayment_methodFilter<"payment"> | $Enums.payment_method
    status?: Enumpayment_statusFilter<"payment"> | $Enums.payment_status
    transaction_ref?: StringNullableFilter<"payment"> | string | null
    created_at?: DateTimeNullableFilter<"payment"> | Date | string | null
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
  }

  export type paymentOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    transaction_ref?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    order?: orderOrderByWithRelationInput
    _relevance?: paymentOrderByRelevanceInput
  }

  export type paymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    transaction_ref?: string
    AND?: paymentWhereInput | paymentWhereInput[]
    OR?: paymentWhereInput[]
    NOT?: paymentWhereInput | paymentWhereInput[]
    order_id?: IntFilter<"payment"> | number
    amount?: DecimalFilter<"payment"> | Decimal | DecimalJsLike | number | string
    method?: Enumpayment_methodFilter<"payment"> | $Enums.payment_method
    status?: Enumpayment_statusFilter<"payment"> | $Enums.payment_status
    created_at?: DateTimeNullableFilter<"payment"> | Date | string | null
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
  }, "id" | "transaction_ref">

  export type paymentOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    transaction_ref?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: paymentCountOrderByAggregateInput
    _avg?: paymentAvgOrderByAggregateInput
    _max?: paymentMaxOrderByAggregateInput
    _min?: paymentMinOrderByAggregateInput
    _sum?: paymentSumOrderByAggregateInput
  }

  export type paymentScalarWhereWithAggregatesInput = {
    AND?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[]
    OR?: paymentScalarWhereWithAggregatesInput[]
    NOT?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"payment"> | number
    order_id?: IntWithAggregatesFilter<"payment"> | number
    amount?: DecimalWithAggregatesFilter<"payment"> | Decimal | DecimalJsLike | number | string
    method?: Enumpayment_methodWithAggregatesFilter<"payment"> | $Enums.payment_method
    status?: Enumpayment_statusWithAggregatesFilter<"payment"> | $Enums.payment_status
    transaction_ref?: StringNullableWithAggregatesFilter<"payment"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"payment"> | Date | string | null
  }

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    id?: IntFilter<"review"> | number
    reviewer_id?: IntFilter<"review"> | number
    reviewee_id?: IntFilter<"review"> | number
    order_id?: IntFilter<"review"> | number
    rating?: IntFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeNullableFilter<"review"> | Date | string | null
    user_review_reviewer_idTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_review_reviewee_idTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
  }

  export type reviewOrderByWithRelationInput = {
    id?: SortOrder
    reviewer_id?: SortOrder
    reviewee_id?: SortOrder
    order_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    user_review_reviewer_idTouser?: userOrderByWithRelationInput
    user_review_reviewee_idTouser?: userOrderByWithRelationInput
    order?: orderOrderByWithRelationInput
    _relevance?: reviewOrderByRelevanceInput
  }

  export type reviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reviewer_id_order_id?: reviewReviewer_idOrder_idCompoundUniqueInput
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    reviewer_id?: IntFilter<"review"> | number
    reviewee_id?: IntFilter<"review"> | number
    order_id?: IntFilter<"review"> | number
    rating?: IntFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeNullableFilter<"review"> | Date | string | null
    user_review_reviewer_idTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    user_review_reviewee_idTouser?: XOR<UserScalarRelationFilter, userWhereInput>
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
  }, "id" | "reviewer_id_order_id">

  export type reviewOrderByWithAggregationInput = {
    id?: SortOrder
    reviewer_id?: SortOrder
    reviewee_id?: SortOrder
    order_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: reviewCountOrderByAggregateInput
    _avg?: reviewAvgOrderByAggregateInput
    _max?: reviewMaxOrderByAggregateInput
    _min?: reviewMinOrderByAggregateInput
    _sum?: reviewSumOrderByAggregateInput
  }

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    OR?: reviewScalarWhereWithAggregatesInput[]
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"review"> | number
    reviewer_id?: IntWithAggregatesFilter<"review"> | number
    reviewee_id?: IntWithAggregatesFilter<"review"> | number
    order_id?: IntWithAggregatesFilter<"review"> | number
    rating?: IntWithAggregatesFilter<"review"> | number
    comment?: StringNullableWithAggregatesFilter<"review"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"review"> | Date | string | null
  }

  export type chat_roomCreateInput = {
    created_at?: Date | string | null
    user_chat_room_user1Touser: userCreateNestedOneWithoutChat_room_chat_room_user1TouserInput
    user_chat_room_user2Touser: userCreateNestedOneWithoutChat_room_chat_room_user2TouserInput
    message?: messageCreateNestedManyWithoutChat_roomInput
  }

  export type chat_roomUncheckedCreateInput = {
    id?: number
    user1: number
    user2: number
    created_at?: Date | string | null
    message?: messageUncheckedCreateNestedManyWithoutChat_roomInput
  }

  export type chat_roomUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_chat_room_user1Touser?: userUpdateOneRequiredWithoutChat_room_chat_room_user1TouserNestedInput
    user_chat_room_user2Touser?: userUpdateOneRequiredWithoutChat_room_chat_room_user2TouserNestedInput
    message?: messageUpdateManyWithoutChat_roomNestedInput
  }

  export type chat_roomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user1?: IntFieldUpdateOperationsInput | number
    user2?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: messageUncheckedUpdateManyWithoutChat_roomNestedInput
  }

  export type chat_roomCreateManyInput = {
    id?: number
    user1: number
    user2: number
    created_at?: Date | string | null
  }

  export type chat_roomUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type chat_roomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user1?: IntFieldUpdateOperationsInput | number
    user2?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type harvestCreateInput = {
    quantity: number
    unit: string
    name: string
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    location?: string | null
    is_available?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user: userCreateNestedOneWithoutHarvestInput
    harvest_category: harvest_categoryCreateNestedOneWithoutHarvestInput
    harvest_image?: harvest_imageCreateNestedManyWithoutHarvestInput
    order?: orderCreateNestedManyWithoutHarvestInput
  }

  export type harvestUncheckedCreateInput = {
    id?: number
    quantity: number
    unit: string
    owner_id: number
    name: string
    category: string
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    location?: string | null
    is_available?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    harvest_image?: harvest_imageUncheckedCreateNestedManyWithoutHarvestInput
    order?: orderUncheckedCreateNestedManyWithoutHarvestInput
  }

  export type harvestUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutHarvestNestedInput
    harvest_category?: harvest_categoryUpdateOneRequiredWithoutHarvestNestedInput
    harvest_image?: harvest_imageUpdateManyWithoutHarvestNestedInput
    order?: orderUpdateManyWithoutHarvestNestedInput
  }

  export type harvestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    harvest_image?: harvest_imageUncheckedUpdateManyWithoutHarvestNestedInput
    order?: orderUncheckedUpdateManyWithoutHarvestNestedInput
  }

  export type harvestCreateManyInput = {
    id?: number
    quantity: number
    unit: string
    owner_id: number
    name: string
    category: string
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    location?: string | null
    is_available?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type harvestUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type harvestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type harvest_categoryCreateInput = {
    category: string
    harvest?: harvestCreateNestedManyWithoutHarvest_categoryInput
  }

  export type harvest_categoryUncheckedCreateInput = {
    category: string
    harvest?: harvestUncheckedCreateNestedManyWithoutHarvest_categoryInput
  }

  export type harvest_categoryUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    harvest?: harvestUpdateManyWithoutHarvest_categoryNestedInput
  }

  export type harvest_categoryUncheckedUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    harvest?: harvestUncheckedUpdateManyWithoutHarvest_categoryNestedInput
  }

  export type harvest_categoryCreateManyInput = {
    category: string
  }

  export type harvest_categoryUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
  }

  export type harvest_categoryUncheckedUpdateManyInput = {
    category?: StringFieldUpdateOperationsInput | string
  }

  export type harvest_imageCreateInput = {
    img_url: string
    harvest: harvestCreateNestedOneWithoutHarvest_imageInput
  }

  export type harvest_imageUncheckedCreateInput = {
    id?: number
    harvest_id: number
    img_url: string
  }

  export type harvest_imageUpdateInput = {
    img_url?: StringFieldUpdateOperationsInput | string
    harvest?: harvestUpdateOneRequiredWithoutHarvest_imageNestedInput
  }

  export type harvest_imageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    harvest_id?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type harvest_imageCreateManyInput = {
    id?: number
    harvest_id: number
    img_url: string
  }

  export type harvest_imageUpdateManyMutationInput = {
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type harvest_imageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    harvest_id?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type messageCreateInput = {
    text: string
    read?: boolean
    received?: boolean
    created_at?: Date | string | null
    chat_room: chat_roomCreateNestedOneWithoutMessageInput
    user_message_sender_idTouser: userCreateNestedOneWithoutMessage_message_sender_idTouserInput
    user_message_recipient_idTouser: userCreateNestedOneWithoutMessage_message_recipient_idTouserInput
    message?: messageCreateNestedOneWithoutOther_messageInput
    other_message?: messageCreateNestedManyWithoutMessageInput
  }

  export type messageUncheckedCreateInput = {
    id?: number
    chat_room_id: number
    sender_id: number
    recipient_id: number
    text: string
    read?: boolean
    received?: boolean
    reply_to_id?: number | null
    created_at?: Date | string | null
    other_message?: messageUncheckedCreateNestedManyWithoutMessageInput
  }

  export type messageUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    received?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room?: chat_roomUpdateOneRequiredWithoutMessageNestedInput
    user_message_sender_idTouser?: userUpdateOneRequiredWithoutMessage_message_sender_idTouserNestedInput
    user_message_recipient_idTouser?: userUpdateOneRequiredWithoutMessage_message_recipient_idTouserNestedInput
    message?: messageUpdateOneWithoutOther_messageNestedInput
    other_message?: messageUpdateManyWithoutMessageNestedInput
  }

  export type messageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_room_id?: IntFieldUpdateOperationsInput | number
    sender_id?: IntFieldUpdateOperationsInput | number
    recipient_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    received?: BoolFieldUpdateOperationsInput | boolean
    reply_to_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_message?: messageUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type messageCreateManyInput = {
    id?: number
    chat_room_id: number
    sender_id: number
    recipient_id: number
    text: string
    read?: boolean
    received?: boolean
    reply_to_id?: number | null
    created_at?: Date | string | null
  }

  export type messageUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    received?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_room_id?: IntFieldUpdateOperationsInput | number
    sender_id?: IntFieldUpdateOperationsInput | number
    recipient_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    received?: BoolFieldUpdateOperationsInput | boolean
    reply_to_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateInput = {
    full_name: string
    email: string
    passwd: string
    profile?: string | null
    phone?: string | null
    location?: string | null
    bio?: string | null
    farm_name?: string | null
    business_name?: string | null
    is_verified?: boolean
    is_active?: boolean
    type: $Enums.user_type
    created_at?: Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomCreateNestedManyWithoutUser_chat_room_user1TouserInput
    chat_room_chat_room_user2Touser?: chat_roomCreateNestedManyWithoutUser_chat_room_user2TouserInput
    harvest?: harvestCreateNestedManyWithoutUserInput
    message_message_sender_idTouser?: messageCreateNestedManyWithoutUser_message_sender_idTouserInput
    message_message_recipient_idTouser?: messageCreateNestedManyWithoutUser_message_recipient_idTouserInput
    order_order_buyer_idTouser?: orderCreateNestedManyWithoutUser_order_buyer_idTouserInput
    review_review_reviewer_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewer_idTouserInput
    review_review_reviewee_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewee_idTouserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    full_name: string
    email: string
    passwd: string
    profile?: string | null
    phone?: string | null
    location?: string | null
    bio?: string | null
    farm_name?: string | null
    business_name?: string | null
    is_verified?: boolean
    is_active?: boolean
    type: $Enums.user_type
    created_at?: Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUncheckedCreateNestedManyWithoutUser_chat_room_user1TouserInput
    chat_room_chat_room_user2Touser?: chat_roomUncheckedCreateNestedManyWithoutUser_chat_room_user2TouserInput
    harvest?: harvestUncheckedCreateNestedManyWithoutUserInput
    message_message_sender_idTouser?: messageUncheckedCreateNestedManyWithoutUser_message_sender_idTouserInput
    message_message_recipient_idTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipient_idTouserInput
    order_order_buyer_idTouser?: orderUncheckedCreateNestedManyWithoutUser_order_buyer_idTouserInput
    review_review_reviewer_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewer_idTouserInput
    review_review_reviewee_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewee_idTouserInput
  }

  export type userUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    farm_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUpdateManyWithoutUser_chat_room_user1TouserNestedInput
    chat_room_chat_room_user2Touser?: chat_roomUpdateManyWithoutUser_chat_room_user2TouserNestedInput
    harvest?: harvestUpdateManyWithoutUserNestedInput
    message_message_sender_idTouser?: messageUpdateManyWithoutUser_message_sender_idTouserNestedInput
    message_message_recipient_idTouser?: messageUpdateManyWithoutUser_message_recipient_idTouserNestedInput
    order_order_buyer_idTouser?: orderUpdateManyWithoutUser_order_buyer_idTouserNestedInput
    review_review_reviewer_idTouser?: reviewUpdateManyWithoutUser_review_reviewer_idTouserNestedInput
    review_review_reviewee_idTouser?: reviewUpdateManyWithoutUser_review_reviewee_idTouserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    farm_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUncheckedUpdateManyWithoutUser_chat_room_user1TouserNestedInput
    chat_room_chat_room_user2Touser?: chat_roomUncheckedUpdateManyWithoutUser_chat_room_user2TouserNestedInput
    harvest?: harvestUncheckedUpdateManyWithoutUserNestedInput
    message_message_sender_idTouser?: messageUncheckedUpdateManyWithoutUser_message_sender_idTouserNestedInput
    message_message_recipient_idTouser?: messageUncheckedUpdateManyWithoutUser_message_recipient_idTouserNestedInput
    order_order_buyer_idTouser?: orderUncheckedUpdateManyWithoutUser_order_buyer_idTouserNestedInput
    review_review_reviewer_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewer_idTouserNestedInput
    review_review_reviewee_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewee_idTouserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    full_name: string
    email: string
    passwd: string
    profile?: string | null
    phone?: string | null
    location?: string | null
    bio?: string | null
    farm_name?: string | null
    business_name?: string | null
    is_verified?: boolean
    is_active?: boolean
    type: $Enums.user_type
    created_at?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    farm_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    farm_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type orderCreateInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_status
    note?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_order_buyer_idTouser: userCreateNestedOneWithoutOrder_order_buyer_idTouserInput
    harvest: harvestCreateNestedOneWithoutOrderInput
    payment?: paymentCreateNestedManyWithoutOrderInput
    review?: reviewCreateNestedManyWithoutOrderInput
  }

  export type orderUncheckedCreateInput = {
    id?: number
    buyer_id: number
    harvest_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_status
    note?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    payment?: paymentUncheckedCreateNestedManyWithoutOrderInput
    review?: reviewUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_order_buyer_idTouser?: userUpdateOneRequiredWithoutOrder_order_buyer_idTouserNestedInput
    harvest?: harvestUpdateOneRequiredWithoutOrderNestedInput
    payment?: paymentUpdateManyWithoutOrderNestedInput
    review?: reviewUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    harvest_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment?: paymentUncheckedUpdateManyWithoutOrderNestedInput
    review?: reviewUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderCreateManyInput = {
    id?: number
    buyer_id: number
    harvest_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_status
    note?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type orderUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type orderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    harvest_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.payment_method
    status?: $Enums.payment_status
    transaction_ref?: string | null
    created_at?: Date | string | null
    order: orderCreateNestedOneWithoutPaymentInput
  }

  export type paymentUncheckedCreateInput = {
    id?: number
    order_id: number
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.payment_method
    status?: $Enums.payment_status
    transaction_ref?: string | null
    created_at?: Date | string | null
  }

  export type paymentUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    transaction_ref?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: orderUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type paymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    transaction_ref?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentCreateManyInput = {
    id?: number
    order_id: number
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.payment_method
    status?: $Enums.payment_status
    transaction_ref?: string | null
    created_at?: Date | string | null
  }

  export type paymentUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    transaction_ref?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    transaction_ref?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewCreateInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string | null
    user_review_reviewer_idTouser: userCreateNestedOneWithoutReview_review_reviewer_idTouserInput
    user_review_reviewee_idTouser: userCreateNestedOneWithoutReview_review_reviewee_idTouserInput
    order: orderCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateInput = {
    id?: number
    reviewer_id: number
    reviewee_id: number
    order_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
  }

  export type reviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_review_reviewer_idTouser?: userUpdateOneRequiredWithoutReview_review_reviewer_idTouserNestedInput
    user_review_reviewee_idTouser?: userUpdateOneRequiredWithoutReview_review_reviewee_idTouserNestedInput
    order?: orderUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: IntFieldUpdateOperationsInput | number
    reviewee_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewCreateManyInput = {
    id?: number
    reviewer_id: number
    reviewee_id: number
    order_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
  }

  export type reviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: IntFieldUpdateOperationsInput | number
    reviewee_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type MessageListRelationFilter = {
    every?: messageWhereInput
    some?: messageWhereInput
    none?: messageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type messageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type chat_roomUser1User2CompoundUniqueInput = {
    user1: number
    user2: number
  }

  export type chat_roomCountOrderByAggregateInput = {
    id?: SortOrder
    user1?: SortOrder
    user2?: SortOrder
    created_at?: SortOrder
  }

  export type chat_roomAvgOrderByAggregateInput = {
    id?: SortOrder
    user1?: SortOrder
    user2?: SortOrder
  }

  export type chat_roomMaxOrderByAggregateInput = {
    id?: SortOrder
    user1?: SortOrder
    user2?: SortOrder
    created_at?: SortOrder
  }

  export type chat_roomMinOrderByAggregateInput = {
    id?: SortOrder
    user1?: SortOrder
    user2?: SortOrder
    created_at?: SortOrder
  }

  export type chat_roomSumOrderByAggregateInput = {
    id?: SortOrder
    user1?: SortOrder
    user2?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Harvest_categoryScalarRelationFilter = {
    is?: harvest_categoryWhereInput
    isNot?: harvest_categoryWhereInput
  }

  export type Harvest_imageListRelationFilter = {
    every?: harvest_imageWhereInput
    some?: harvest_imageWhereInput
    none?: harvest_imageWhereInput
  }

  export type OrderListRelationFilter = {
    every?: orderWhereInput
    some?: orderWhereInput
    none?: orderWhereInput
  }

  export type harvest_imageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type harvestOrderByRelevanceInput = {
    fields: harvestOrderByRelevanceFieldEnum | harvestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type harvestCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    unit_price?: SortOrder
    description?: SortOrder
    location?: SortOrder
    is_available?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type harvestAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    owner_id?: SortOrder
    unit_price?: SortOrder
  }

  export type harvestMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    unit_price?: SortOrder
    description?: SortOrder
    location?: SortOrder
    is_available?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type harvestMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    unit_price?: SortOrder
    description?: SortOrder
    location?: SortOrder
    is_available?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type harvestSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    owner_id?: SortOrder
    unit_price?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type HarvestListRelationFilter = {
    every?: harvestWhereInput
    some?: harvestWhereInput
    none?: harvestWhereInput
  }

  export type harvestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type harvest_categoryOrderByRelevanceInput = {
    fields: harvest_categoryOrderByRelevanceFieldEnum | harvest_categoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type harvest_categoryCountOrderByAggregateInput = {
    category?: SortOrder
  }

  export type harvest_categoryMaxOrderByAggregateInput = {
    category?: SortOrder
  }

  export type harvest_categoryMinOrderByAggregateInput = {
    category?: SortOrder
  }

  export type HarvestScalarRelationFilter = {
    is?: harvestWhereInput
    isNot?: harvestWhereInput
  }

  export type harvest_imageOrderByRelevanceInput = {
    fields: harvest_imageOrderByRelevanceFieldEnum | harvest_imageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type harvest_imageCountOrderByAggregateInput = {
    id?: SortOrder
    harvest_id?: SortOrder
    img_url?: SortOrder
  }

  export type harvest_imageAvgOrderByAggregateInput = {
    id?: SortOrder
    harvest_id?: SortOrder
  }

  export type harvest_imageMaxOrderByAggregateInput = {
    id?: SortOrder
    harvest_id?: SortOrder
    img_url?: SortOrder
  }

  export type harvest_imageMinOrderByAggregateInput = {
    id?: SortOrder
    harvest_id?: SortOrder
    img_url?: SortOrder
  }

  export type harvest_imageSumOrderByAggregateInput = {
    id?: SortOrder
    harvest_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Chat_roomScalarRelationFilter = {
    is?: chat_roomWhereInput
    isNot?: chat_roomWhereInput
  }

  export type MessageNullableScalarRelationFilter = {
    is?: messageWhereInput | null
    isNot?: messageWhereInput | null
  }

  export type messageOrderByRelevanceInput = {
    fields: messageOrderByRelevanceFieldEnum | messageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type messageCountOrderByAggregateInput = {
    id?: SortOrder
    chat_room_id?: SortOrder
    sender_id?: SortOrder
    recipient_id?: SortOrder
    text?: SortOrder
    read?: SortOrder
    received?: SortOrder
    reply_to_id?: SortOrder
    created_at?: SortOrder
  }

  export type messageAvgOrderByAggregateInput = {
    id?: SortOrder
    chat_room_id?: SortOrder
    sender_id?: SortOrder
    recipient_id?: SortOrder
    reply_to_id?: SortOrder
  }

  export type messageMaxOrderByAggregateInput = {
    id?: SortOrder
    chat_room_id?: SortOrder
    sender_id?: SortOrder
    recipient_id?: SortOrder
    text?: SortOrder
    read?: SortOrder
    received?: SortOrder
    reply_to_id?: SortOrder
    created_at?: SortOrder
  }

  export type messageMinOrderByAggregateInput = {
    id?: SortOrder
    chat_room_id?: SortOrder
    sender_id?: SortOrder
    recipient_id?: SortOrder
    text?: SortOrder
    read?: SortOrder
    received?: SortOrder
    reply_to_id?: SortOrder
    created_at?: SortOrder
  }

  export type messageSumOrderByAggregateInput = {
    id?: SortOrder
    chat_room_id?: SortOrder
    sender_id?: SortOrder
    recipient_id?: SortOrder
    reply_to_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Enumuser_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.user_type | Enumuser_typeFieldRefInput<$PrismaModel>
    in?: $Enums.user_type[]
    notIn?: $Enums.user_type[]
    not?: NestedEnumuser_typeFilter<$PrismaModel> | $Enums.user_type
  }

  export type Chat_roomListRelationFilter = {
    every?: chat_roomWhereInput
    some?: chat_roomWhereInput
    none?: chat_roomWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput
    some?: reviewWhereInput
    none?: reviewWhereInput
  }

  export type chat_roomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    passwd?: SortOrder
    profile?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    bio?: SortOrder
    farm_name?: SortOrder
    business_name?: SortOrder
    is_verified?: SortOrder
    is_active?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    passwd?: SortOrder
    profile?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    bio?: SortOrder
    farm_name?: SortOrder
    business_name?: SortOrder
    is_verified?: SortOrder
    is_active?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    passwd?: SortOrder
    profile?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    bio?: SortOrder
    farm_name?: SortOrder
    business_name?: SortOrder
    is_verified?: SortOrder
    is_active?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumuser_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_type | Enumuser_typeFieldRefInput<$PrismaModel>
    in?: $Enums.user_type[]
    notIn?: $Enums.user_type[]
    not?: NestedEnumuser_typeWithAggregatesFilter<$PrismaModel> | $Enums.user_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_typeFilter<$PrismaModel>
    _max?: NestedEnumuser_typeFilter<$PrismaModel>
  }

  export type Enumorder_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[]
    notIn?: $Enums.order_status[]
    not?: NestedEnumorder_statusFilter<$PrismaModel> | $Enums.order_status
  }

  export type PaymentListRelationFilter = {
    every?: paymentWhereInput
    some?: paymentWhereInput
    none?: paymentWhereInput
  }

  export type paymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orderOrderByRelevanceInput = {
    fields: orderOrderByRelevanceFieldEnum | orderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type orderCountOrderByAggregateInput = {
    id?: SortOrder
    buyer_id?: SortOrder
    harvest_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    note?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type orderAvgOrderByAggregateInput = {
    id?: SortOrder
    buyer_id?: SortOrder
    harvest_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
  }

  export type orderMaxOrderByAggregateInput = {
    id?: SortOrder
    buyer_id?: SortOrder
    harvest_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    note?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type orderMinOrderByAggregateInput = {
    id?: SortOrder
    buyer_id?: SortOrder
    harvest_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    status?: SortOrder
    note?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type orderSumOrderByAggregateInput = {
    id?: SortOrder
    buyer_id?: SortOrder
    harvest_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
  }

  export type Enumorder_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[]
    notIn?: $Enums.order_status[]
    not?: NestedEnumorder_statusWithAggregatesFilter<$PrismaModel> | $Enums.order_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_statusFilter<$PrismaModel>
    _max?: NestedEnumorder_statusFilter<$PrismaModel>
  }

  export type Enumpayment_methodFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payment_method[]
    notIn?: $Enums.payment_method[]
    not?: NestedEnumpayment_methodFilter<$PrismaModel> | $Enums.payment_method
  }

  export type Enumpayment_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[]
    notIn?: $Enums.payment_status[]
    not?: NestedEnumpayment_statusFilter<$PrismaModel> | $Enums.payment_status
  }

  export type OrderScalarRelationFilter = {
    is?: orderWhereInput
    isNot?: orderWhereInput
  }

  export type paymentOrderByRelevanceInput = {
    fields: paymentOrderByRelevanceFieldEnum | paymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type paymentCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    transaction_ref?: SortOrder
    created_at?: SortOrder
  }

  export type paymentAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
  }

  export type paymentMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    transaction_ref?: SortOrder
    created_at?: SortOrder
  }

  export type paymentMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    transaction_ref?: SortOrder
    created_at?: SortOrder
  }

  export type paymentSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
  }

  export type Enumpayment_methodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payment_method[]
    notIn?: $Enums.payment_method[]
    not?: NestedEnumpayment_methodWithAggregatesFilter<$PrismaModel> | $Enums.payment_method
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_methodFilter<$PrismaModel>
    _max?: NestedEnumpayment_methodFilter<$PrismaModel>
  }

  export type Enumpayment_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[]
    notIn?: $Enums.payment_status[]
    not?: NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel> | $Enums.payment_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_statusFilter<$PrismaModel>
    _max?: NestedEnumpayment_statusFilter<$PrismaModel>
  }

  export type reviewOrderByRelevanceInput = {
    fields: reviewOrderByRelevanceFieldEnum | reviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type reviewReviewer_idOrder_idCompoundUniqueInput = {
    reviewer_id: number
    order_id: number
  }

  export type reviewCountOrderByAggregateInput = {
    id?: SortOrder
    reviewer_id?: SortOrder
    reviewee_id?: SortOrder
    order_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type reviewAvgOrderByAggregateInput = {
    id?: SortOrder
    reviewer_id?: SortOrder
    reviewee_id?: SortOrder
    order_id?: SortOrder
    rating?: SortOrder
  }

  export type reviewMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewer_id?: SortOrder
    reviewee_id?: SortOrder
    order_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type reviewMinOrderByAggregateInput = {
    id?: SortOrder
    reviewer_id?: SortOrder
    reviewee_id?: SortOrder
    order_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type reviewSumOrderByAggregateInput = {
    id?: SortOrder
    reviewer_id?: SortOrder
    reviewee_id?: SortOrder
    order_id?: SortOrder
    rating?: SortOrder
  }

  export type userCreateNestedOneWithoutChat_room_chat_room_user1TouserInput = {
    create?: XOR<userCreateWithoutChat_room_chat_room_user1TouserInput, userUncheckedCreateWithoutChat_room_chat_room_user1TouserInput>
    connectOrCreate?: userCreateOrConnectWithoutChat_room_chat_room_user1TouserInput
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutChat_room_chat_room_user2TouserInput = {
    create?: XOR<userCreateWithoutChat_room_chat_room_user2TouserInput, userUncheckedCreateWithoutChat_room_chat_room_user2TouserInput>
    connectOrCreate?: userCreateOrConnectWithoutChat_room_chat_room_user2TouserInput
    connect?: userWhereUniqueInput
  }

  export type messageCreateNestedManyWithoutChat_roomInput = {
    create?: XOR<messageCreateWithoutChat_roomInput, messageUncheckedCreateWithoutChat_roomInput> | messageCreateWithoutChat_roomInput[] | messageUncheckedCreateWithoutChat_roomInput[]
    connectOrCreate?: messageCreateOrConnectWithoutChat_roomInput | messageCreateOrConnectWithoutChat_roomInput[]
    createMany?: messageCreateManyChat_roomInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type messageUncheckedCreateNestedManyWithoutChat_roomInput = {
    create?: XOR<messageCreateWithoutChat_roomInput, messageUncheckedCreateWithoutChat_roomInput> | messageCreateWithoutChat_roomInput[] | messageUncheckedCreateWithoutChat_roomInput[]
    connectOrCreate?: messageCreateOrConnectWithoutChat_roomInput | messageCreateOrConnectWithoutChat_roomInput[]
    createMany?: messageCreateManyChat_roomInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type userUpdateOneRequiredWithoutChat_room_chat_room_user1TouserNestedInput = {
    create?: XOR<userCreateWithoutChat_room_chat_room_user1TouserInput, userUncheckedCreateWithoutChat_room_chat_room_user1TouserInput>
    connectOrCreate?: userCreateOrConnectWithoutChat_room_chat_room_user1TouserInput
    upsert?: userUpsertWithoutChat_room_chat_room_user1TouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutChat_room_chat_room_user1TouserInput, userUpdateWithoutChat_room_chat_room_user1TouserInput>, userUncheckedUpdateWithoutChat_room_chat_room_user1TouserInput>
  }

  export type userUpdateOneRequiredWithoutChat_room_chat_room_user2TouserNestedInput = {
    create?: XOR<userCreateWithoutChat_room_chat_room_user2TouserInput, userUncheckedCreateWithoutChat_room_chat_room_user2TouserInput>
    connectOrCreate?: userCreateOrConnectWithoutChat_room_chat_room_user2TouserInput
    upsert?: userUpsertWithoutChat_room_chat_room_user2TouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutChat_room_chat_room_user2TouserInput, userUpdateWithoutChat_room_chat_room_user2TouserInput>, userUncheckedUpdateWithoutChat_room_chat_room_user2TouserInput>
  }

  export type messageUpdateManyWithoutChat_roomNestedInput = {
    create?: XOR<messageCreateWithoutChat_roomInput, messageUncheckedCreateWithoutChat_roomInput> | messageCreateWithoutChat_roomInput[] | messageUncheckedCreateWithoutChat_roomInput[]
    connectOrCreate?: messageCreateOrConnectWithoutChat_roomInput | messageCreateOrConnectWithoutChat_roomInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutChat_roomInput | messageUpsertWithWhereUniqueWithoutChat_roomInput[]
    createMany?: messageCreateManyChat_roomInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutChat_roomInput | messageUpdateWithWhereUniqueWithoutChat_roomInput[]
    updateMany?: messageUpdateManyWithWhereWithoutChat_roomInput | messageUpdateManyWithWhereWithoutChat_roomInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type messageUncheckedUpdateManyWithoutChat_roomNestedInput = {
    create?: XOR<messageCreateWithoutChat_roomInput, messageUncheckedCreateWithoutChat_roomInput> | messageCreateWithoutChat_roomInput[] | messageUncheckedCreateWithoutChat_roomInput[]
    connectOrCreate?: messageCreateOrConnectWithoutChat_roomInput | messageCreateOrConnectWithoutChat_roomInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutChat_roomInput | messageUpsertWithWhereUniqueWithoutChat_roomInput[]
    createMany?: messageCreateManyChat_roomInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutChat_roomInput | messageUpdateWithWhereUniqueWithoutChat_roomInput[]
    updateMany?: messageUpdateManyWithWhereWithoutChat_roomInput | messageUpdateManyWithWhereWithoutChat_roomInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutHarvestInput = {
    create?: XOR<userCreateWithoutHarvestInput, userUncheckedCreateWithoutHarvestInput>
    connectOrCreate?: userCreateOrConnectWithoutHarvestInput
    connect?: userWhereUniqueInput
  }

  export type harvest_categoryCreateNestedOneWithoutHarvestInput = {
    create?: XOR<harvest_categoryCreateWithoutHarvestInput, harvest_categoryUncheckedCreateWithoutHarvestInput>
    connectOrCreate?: harvest_categoryCreateOrConnectWithoutHarvestInput
    connect?: harvest_categoryWhereUniqueInput
  }

  export type harvest_imageCreateNestedManyWithoutHarvestInput = {
    create?: XOR<harvest_imageCreateWithoutHarvestInput, harvest_imageUncheckedCreateWithoutHarvestInput> | harvest_imageCreateWithoutHarvestInput[] | harvest_imageUncheckedCreateWithoutHarvestInput[]
    connectOrCreate?: harvest_imageCreateOrConnectWithoutHarvestInput | harvest_imageCreateOrConnectWithoutHarvestInput[]
    createMany?: harvest_imageCreateManyHarvestInputEnvelope
    connect?: harvest_imageWhereUniqueInput | harvest_imageWhereUniqueInput[]
  }

  export type orderCreateNestedManyWithoutHarvestInput = {
    create?: XOR<orderCreateWithoutHarvestInput, orderUncheckedCreateWithoutHarvestInput> | orderCreateWithoutHarvestInput[] | orderUncheckedCreateWithoutHarvestInput[]
    connectOrCreate?: orderCreateOrConnectWithoutHarvestInput | orderCreateOrConnectWithoutHarvestInput[]
    createMany?: orderCreateManyHarvestInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type harvest_imageUncheckedCreateNestedManyWithoutHarvestInput = {
    create?: XOR<harvest_imageCreateWithoutHarvestInput, harvest_imageUncheckedCreateWithoutHarvestInput> | harvest_imageCreateWithoutHarvestInput[] | harvest_imageUncheckedCreateWithoutHarvestInput[]
    connectOrCreate?: harvest_imageCreateOrConnectWithoutHarvestInput | harvest_imageCreateOrConnectWithoutHarvestInput[]
    createMany?: harvest_imageCreateManyHarvestInputEnvelope
    connect?: harvest_imageWhereUniqueInput | harvest_imageWhereUniqueInput[]
  }

  export type orderUncheckedCreateNestedManyWithoutHarvestInput = {
    create?: XOR<orderCreateWithoutHarvestInput, orderUncheckedCreateWithoutHarvestInput> | orderCreateWithoutHarvestInput[] | orderUncheckedCreateWithoutHarvestInput[]
    connectOrCreate?: orderCreateOrConnectWithoutHarvestInput | orderCreateOrConnectWithoutHarvestInput[]
    createMany?: orderCreateManyHarvestInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type userUpdateOneRequiredWithoutHarvestNestedInput = {
    create?: XOR<userCreateWithoutHarvestInput, userUncheckedCreateWithoutHarvestInput>
    connectOrCreate?: userCreateOrConnectWithoutHarvestInput
    upsert?: userUpsertWithoutHarvestInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutHarvestInput, userUpdateWithoutHarvestInput>, userUncheckedUpdateWithoutHarvestInput>
  }

  export type harvest_categoryUpdateOneRequiredWithoutHarvestNestedInput = {
    create?: XOR<harvest_categoryCreateWithoutHarvestInput, harvest_categoryUncheckedCreateWithoutHarvestInput>
    connectOrCreate?: harvest_categoryCreateOrConnectWithoutHarvestInput
    upsert?: harvest_categoryUpsertWithoutHarvestInput
    connect?: harvest_categoryWhereUniqueInput
    update?: XOR<XOR<harvest_categoryUpdateToOneWithWhereWithoutHarvestInput, harvest_categoryUpdateWithoutHarvestInput>, harvest_categoryUncheckedUpdateWithoutHarvestInput>
  }

  export type harvest_imageUpdateManyWithoutHarvestNestedInput = {
    create?: XOR<harvest_imageCreateWithoutHarvestInput, harvest_imageUncheckedCreateWithoutHarvestInput> | harvest_imageCreateWithoutHarvestInput[] | harvest_imageUncheckedCreateWithoutHarvestInput[]
    connectOrCreate?: harvest_imageCreateOrConnectWithoutHarvestInput | harvest_imageCreateOrConnectWithoutHarvestInput[]
    upsert?: harvest_imageUpsertWithWhereUniqueWithoutHarvestInput | harvest_imageUpsertWithWhereUniqueWithoutHarvestInput[]
    createMany?: harvest_imageCreateManyHarvestInputEnvelope
    set?: harvest_imageWhereUniqueInput | harvest_imageWhereUniqueInput[]
    disconnect?: harvest_imageWhereUniqueInput | harvest_imageWhereUniqueInput[]
    delete?: harvest_imageWhereUniqueInput | harvest_imageWhereUniqueInput[]
    connect?: harvest_imageWhereUniqueInput | harvest_imageWhereUniqueInput[]
    update?: harvest_imageUpdateWithWhereUniqueWithoutHarvestInput | harvest_imageUpdateWithWhereUniqueWithoutHarvestInput[]
    updateMany?: harvest_imageUpdateManyWithWhereWithoutHarvestInput | harvest_imageUpdateManyWithWhereWithoutHarvestInput[]
    deleteMany?: harvest_imageScalarWhereInput | harvest_imageScalarWhereInput[]
  }

  export type orderUpdateManyWithoutHarvestNestedInput = {
    create?: XOR<orderCreateWithoutHarvestInput, orderUncheckedCreateWithoutHarvestInput> | orderCreateWithoutHarvestInput[] | orderUncheckedCreateWithoutHarvestInput[]
    connectOrCreate?: orderCreateOrConnectWithoutHarvestInput | orderCreateOrConnectWithoutHarvestInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutHarvestInput | orderUpsertWithWhereUniqueWithoutHarvestInput[]
    createMany?: orderCreateManyHarvestInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutHarvestInput | orderUpdateWithWhereUniqueWithoutHarvestInput[]
    updateMany?: orderUpdateManyWithWhereWithoutHarvestInput | orderUpdateManyWithWhereWithoutHarvestInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type harvest_imageUncheckedUpdateManyWithoutHarvestNestedInput = {
    create?: XOR<harvest_imageCreateWithoutHarvestInput, harvest_imageUncheckedCreateWithoutHarvestInput> | harvest_imageCreateWithoutHarvestInput[] | harvest_imageUncheckedCreateWithoutHarvestInput[]
    connectOrCreate?: harvest_imageCreateOrConnectWithoutHarvestInput | harvest_imageCreateOrConnectWithoutHarvestInput[]
    upsert?: harvest_imageUpsertWithWhereUniqueWithoutHarvestInput | harvest_imageUpsertWithWhereUniqueWithoutHarvestInput[]
    createMany?: harvest_imageCreateManyHarvestInputEnvelope
    set?: harvest_imageWhereUniqueInput | harvest_imageWhereUniqueInput[]
    disconnect?: harvest_imageWhereUniqueInput | harvest_imageWhereUniqueInput[]
    delete?: harvest_imageWhereUniqueInput | harvest_imageWhereUniqueInput[]
    connect?: harvest_imageWhereUniqueInput | harvest_imageWhereUniqueInput[]
    update?: harvest_imageUpdateWithWhereUniqueWithoutHarvestInput | harvest_imageUpdateWithWhereUniqueWithoutHarvestInput[]
    updateMany?: harvest_imageUpdateManyWithWhereWithoutHarvestInput | harvest_imageUpdateManyWithWhereWithoutHarvestInput[]
    deleteMany?: harvest_imageScalarWhereInput | harvest_imageScalarWhereInput[]
  }

  export type orderUncheckedUpdateManyWithoutHarvestNestedInput = {
    create?: XOR<orderCreateWithoutHarvestInput, orderUncheckedCreateWithoutHarvestInput> | orderCreateWithoutHarvestInput[] | orderUncheckedCreateWithoutHarvestInput[]
    connectOrCreate?: orderCreateOrConnectWithoutHarvestInput | orderCreateOrConnectWithoutHarvestInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutHarvestInput | orderUpsertWithWhereUniqueWithoutHarvestInput[]
    createMany?: orderCreateManyHarvestInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutHarvestInput | orderUpdateWithWhereUniqueWithoutHarvestInput[]
    updateMany?: orderUpdateManyWithWhereWithoutHarvestInput | orderUpdateManyWithWhereWithoutHarvestInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type harvestCreateNestedManyWithoutHarvest_categoryInput = {
    create?: XOR<harvestCreateWithoutHarvest_categoryInput, harvestUncheckedCreateWithoutHarvest_categoryInput> | harvestCreateWithoutHarvest_categoryInput[] | harvestUncheckedCreateWithoutHarvest_categoryInput[]
    connectOrCreate?: harvestCreateOrConnectWithoutHarvest_categoryInput | harvestCreateOrConnectWithoutHarvest_categoryInput[]
    createMany?: harvestCreateManyHarvest_categoryInputEnvelope
    connect?: harvestWhereUniqueInput | harvestWhereUniqueInput[]
  }

  export type harvestUncheckedCreateNestedManyWithoutHarvest_categoryInput = {
    create?: XOR<harvestCreateWithoutHarvest_categoryInput, harvestUncheckedCreateWithoutHarvest_categoryInput> | harvestCreateWithoutHarvest_categoryInput[] | harvestUncheckedCreateWithoutHarvest_categoryInput[]
    connectOrCreate?: harvestCreateOrConnectWithoutHarvest_categoryInput | harvestCreateOrConnectWithoutHarvest_categoryInput[]
    createMany?: harvestCreateManyHarvest_categoryInputEnvelope
    connect?: harvestWhereUniqueInput | harvestWhereUniqueInput[]
  }

  export type harvestUpdateManyWithoutHarvest_categoryNestedInput = {
    create?: XOR<harvestCreateWithoutHarvest_categoryInput, harvestUncheckedCreateWithoutHarvest_categoryInput> | harvestCreateWithoutHarvest_categoryInput[] | harvestUncheckedCreateWithoutHarvest_categoryInput[]
    connectOrCreate?: harvestCreateOrConnectWithoutHarvest_categoryInput | harvestCreateOrConnectWithoutHarvest_categoryInput[]
    upsert?: harvestUpsertWithWhereUniqueWithoutHarvest_categoryInput | harvestUpsertWithWhereUniqueWithoutHarvest_categoryInput[]
    createMany?: harvestCreateManyHarvest_categoryInputEnvelope
    set?: harvestWhereUniqueInput | harvestWhereUniqueInput[]
    disconnect?: harvestWhereUniqueInput | harvestWhereUniqueInput[]
    delete?: harvestWhereUniqueInput | harvestWhereUniqueInput[]
    connect?: harvestWhereUniqueInput | harvestWhereUniqueInput[]
    update?: harvestUpdateWithWhereUniqueWithoutHarvest_categoryInput | harvestUpdateWithWhereUniqueWithoutHarvest_categoryInput[]
    updateMany?: harvestUpdateManyWithWhereWithoutHarvest_categoryInput | harvestUpdateManyWithWhereWithoutHarvest_categoryInput[]
    deleteMany?: harvestScalarWhereInput | harvestScalarWhereInput[]
  }

  export type harvestUncheckedUpdateManyWithoutHarvest_categoryNestedInput = {
    create?: XOR<harvestCreateWithoutHarvest_categoryInput, harvestUncheckedCreateWithoutHarvest_categoryInput> | harvestCreateWithoutHarvest_categoryInput[] | harvestUncheckedCreateWithoutHarvest_categoryInput[]
    connectOrCreate?: harvestCreateOrConnectWithoutHarvest_categoryInput | harvestCreateOrConnectWithoutHarvest_categoryInput[]
    upsert?: harvestUpsertWithWhereUniqueWithoutHarvest_categoryInput | harvestUpsertWithWhereUniqueWithoutHarvest_categoryInput[]
    createMany?: harvestCreateManyHarvest_categoryInputEnvelope
    set?: harvestWhereUniqueInput | harvestWhereUniqueInput[]
    disconnect?: harvestWhereUniqueInput | harvestWhereUniqueInput[]
    delete?: harvestWhereUniqueInput | harvestWhereUniqueInput[]
    connect?: harvestWhereUniqueInput | harvestWhereUniqueInput[]
    update?: harvestUpdateWithWhereUniqueWithoutHarvest_categoryInput | harvestUpdateWithWhereUniqueWithoutHarvest_categoryInput[]
    updateMany?: harvestUpdateManyWithWhereWithoutHarvest_categoryInput | harvestUpdateManyWithWhereWithoutHarvest_categoryInput[]
    deleteMany?: harvestScalarWhereInput | harvestScalarWhereInput[]
  }

  export type harvestCreateNestedOneWithoutHarvest_imageInput = {
    create?: XOR<harvestCreateWithoutHarvest_imageInput, harvestUncheckedCreateWithoutHarvest_imageInput>
    connectOrCreate?: harvestCreateOrConnectWithoutHarvest_imageInput
    connect?: harvestWhereUniqueInput
  }

  export type harvestUpdateOneRequiredWithoutHarvest_imageNestedInput = {
    create?: XOR<harvestCreateWithoutHarvest_imageInput, harvestUncheckedCreateWithoutHarvest_imageInput>
    connectOrCreate?: harvestCreateOrConnectWithoutHarvest_imageInput
    upsert?: harvestUpsertWithoutHarvest_imageInput
    connect?: harvestWhereUniqueInput
    update?: XOR<XOR<harvestUpdateToOneWithWhereWithoutHarvest_imageInput, harvestUpdateWithoutHarvest_imageInput>, harvestUncheckedUpdateWithoutHarvest_imageInput>
  }

  export type chat_roomCreateNestedOneWithoutMessageInput = {
    create?: XOR<chat_roomCreateWithoutMessageInput, chat_roomUncheckedCreateWithoutMessageInput>
    connectOrCreate?: chat_roomCreateOrConnectWithoutMessageInput
    connect?: chat_roomWhereUniqueInput
  }

  export type userCreateNestedOneWithoutMessage_message_sender_idTouserInput = {
    create?: XOR<userCreateWithoutMessage_message_sender_idTouserInput, userUncheckedCreateWithoutMessage_message_sender_idTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutMessage_message_sender_idTouserInput
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutMessage_message_recipient_idTouserInput = {
    create?: XOR<userCreateWithoutMessage_message_recipient_idTouserInput, userUncheckedCreateWithoutMessage_message_recipient_idTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutMessage_message_recipient_idTouserInput
    connect?: userWhereUniqueInput
  }

  export type messageCreateNestedOneWithoutOther_messageInput = {
    create?: XOR<messageCreateWithoutOther_messageInput, messageUncheckedCreateWithoutOther_messageInput>
    connectOrCreate?: messageCreateOrConnectWithoutOther_messageInput
    connect?: messageWhereUniqueInput
  }

  export type messageCreateNestedManyWithoutMessageInput = {
    create?: XOR<messageCreateWithoutMessageInput, messageUncheckedCreateWithoutMessageInput> | messageCreateWithoutMessageInput[] | messageUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: messageCreateOrConnectWithoutMessageInput | messageCreateOrConnectWithoutMessageInput[]
    createMany?: messageCreateManyMessageInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type messageUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<messageCreateWithoutMessageInput, messageUncheckedCreateWithoutMessageInput> | messageCreateWithoutMessageInput[] | messageUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: messageCreateOrConnectWithoutMessageInput | messageCreateOrConnectWithoutMessageInput[]
    createMany?: messageCreateManyMessageInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type chat_roomUpdateOneRequiredWithoutMessageNestedInput = {
    create?: XOR<chat_roomCreateWithoutMessageInput, chat_roomUncheckedCreateWithoutMessageInput>
    connectOrCreate?: chat_roomCreateOrConnectWithoutMessageInput
    upsert?: chat_roomUpsertWithoutMessageInput
    connect?: chat_roomWhereUniqueInput
    update?: XOR<XOR<chat_roomUpdateToOneWithWhereWithoutMessageInput, chat_roomUpdateWithoutMessageInput>, chat_roomUncheckedUpdateWithoutMessageInput>
  }

  export type userUpdateOneRequiredWithoutMessage_message_sender_idTouserNestedInput = {
    create?: XOR<userCreateWithoutMessage_message_sender_idTouserInput, userUncheckedCreateWithoutMessage_message_sender_idTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutMessage_message_sender_idTouserInput
    upsert?: userUpsertWithoutMessage_message_sender_idTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMessage_message_sender_idTouserInput, userUpdateWithoutMessage_message_sender_idTouserInput>, userUncheckedUpdateWithoutMessage_message_sender_idTouserInput>
  }

  export type userUpdateOneRequiredWithoutMessage_message_recipient_idTouserNestedInput = {
    create?: XOR<userCreateWithoutMessage_message_recipient_idTouserInput, userUncheckedCreateWithoutMessage_message_recipient_idTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutMessage_message_recipient_idTouserInput
    upsert?: userUpsertWithoutMessage_message_recipient_idTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutMessage_message_recipient_idTouserInput, userUpdateWithoutMessage_message_recipient_idTouserInput>, userUncheckedUpdateWithoutMessage_message_recipient_idTouserInput>
  }

  export type messageUpdateOneWithoutOther_messageNestedInput = {
    create?: XOR<messageCreateWithoutOther_messageInput, messageUncheckedCreateWithoutOther_messageInput>
    connectOrCreate?: messageCreateOrConnectWithoutOther_messageInput
    upsert?: messageUpsertWithoutOther_messageInput
    disconnect?: messageWhereInput | boolean
    delete?: messageWhereInput | boolean
    connect?: messageWhereUniqueInput
    update?: XOR<XOR<messageUpdateToOneWithWhereWithoutOther_messageInput, messageUpdateWithoutOther_messageInput>, messageUncheckedUpdateWithoutOther_messageInput>
  }

  export type messageUpdateManyWithoutMessageNestedInput = {
    create?: XOR<messageCreateWithoutMessageInput, messageUncheckedCreateWithoutMessageInput> | messageCreateWithoutMessageInput[] | messageUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: messageCreateOrConnectWithoutMessageInput | messageCreateOrConnectWithoutMessageInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutMessageInput | messageUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: messageCreateManyMessageInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutMessageInput | messageUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: messageUpdateManyWithWhereWithoutMessageInput | messageUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type messageUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<messageCreateWithoutMessageInput, messageUncheckedCreateWithoutMessageInput> | messageCreateWithoutMessageInput[] | messageUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: messageCreateOrConnectWithoutMessageInput | messageCreateOrConnectWithoutMessageInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutMessageInput | messageUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: messageCreateManyMessageInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutMessageInput | messageUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: messageUpdateManyWithWhereWithoutMessageInput | messageUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type chat_roomCreateNestedManyWithoutUser_chat_room_user1TouserInput = {
    create?: XOR<chat_roomCreateWithoutUser_chat_room_user1TouserInput, chat_roomUncheckedCreateWithoutUser_chat_room_user1TouserInput> | chat_roomCreateWithoutUser_chat_room_user1TouserInput[] | chat_roomUncheckedCreateWithoutUser_chat_room_user1TouserInput[]
    connectOrCreate?: chat_roomCreateOrConnectWithoutUser_chat_room_user1TouserInput | chat_roomCreateOrConnectWithoutUser_chat_room_user1TouserInput[]
    createMany?: chat_roomCreateManyUser_chat_room_user1TouserInputEnvelope
    connect?: chat_roomWhereUniqueInput | chat_roomWhereUniqueInput[]
  }

  export type chat_roomCreateNestedManyWithoutUser_chat_room_user2TouserInput = {
    create?: XOR<chat_roomCreateWithoutUser_chat_room_user2TouserInput, chat_roomUncheckedCreateWithoutUser_chat_room_user2TouserInput> | chat_roomCreateWithoutUser_chat_room_user2TouserInput[] | chat_roomUncheckedCreateWithoutUser_chat_room_user2TouserInput[]
    connectOrCreate?: chat_roomCreateOrConnectWithoutUser_chat_room_user2TouserInput | chat_roomCreateOrConnectWithoutUser_chat_room_user2TouserInput[]
    createMany?: chat_roomCreateManyUser_chat_room_user2TouserInputEnvelope
    connect?: chat_roomWhereUniqueInput | chat_roomWhereUniqueInput[]
  }

  export type harvestCreateNestedManyWithoutUserInput = {
    create?: XOR<harvestCreateWithoutUserInput, harvestUncheckedCreateWithoutUserInput> | harvestCreateWithoutUserInput[] | harvestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: harvestCreateOrConnectWithoutUserInput | harvestCreateOrConnectWithoutUserInput[]
    createMany?: harvestCreateManyUserInputEnvelope
    connect?: harvestWhereUniqueInput | harvestWhereUniqueInput[]
  }

  export type messageCreateNestedManyWithoutUser_message_sender_idTouserInput = {
    create?: XOR<messageCreateWithoutUser_message_sender_idTouserInput, messageUncheckedCreateWithoutUser_message_sender_idTouserInput> | messageCreateWithoutUser_message_sender_idTouserInput[] | messageUncheckedCreateWithoutUser_message_sender_idTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_sender_idTouserInput | messageCreateOrConnectWithoutUser_message_sender_idTouserInput[]
    createMany?: messageCreateManyUser_message_sender_idTouserInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type messageCreateNestedManyWithoutUser_message_recipient_idTouserInput = {
    create?: XOR<messageCreateWithoutUser_message_recipient_idTouserInput, messageUncheckedCreateWithoutUser_message_recipient_idTouserInput> | messageCreateWithoutUser_message_recipient_idTouserInput[] | messageUncheckedCreateWithoutUser_message_recipient_idTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_recipient_idTouserInput | messageCreateOrConnectWithoutUser_message_recipient_idTouserInput[]
    createMany?: messageCreateManyUser_message_recipient_idTouserInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type orderCreateNestedManyWithoutUser_order_buyer_idTouserInput = {
    create?: XOR<orderCreateWithoutUser_order_buyer_idTouserInput, orderUncheckedCreateWithoutUser_order_buyer_idTouserInput> | orderCreateWithoutUser_order_buyer_idTouserInput[] | orderUncheckedCreateWithoutUser_order_buyer_idTouserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUser_order_buyer_idTouserInput | orderCreateOrConnectWithoutUser_order_buyer_idTouserInput[]
    createMany?: orderCreateManyUser_order_buyer_idTouserInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutUser_review_reviewer_idTouserInput = {
    create?: XOR<reviewCreateWithoutUser_review_reviewer_idTouserInput, reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput> | reviewCreateWithoutUser_review_reviewer_idTouserInput[] | reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUser_review_reviewer_idTouserInput | reviewCreateOrConnectWithoutUser_review_reviewer_idTouserInput[]
    createMany?: reviewCreateManyUser_review_reviewer_idTouserInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutUser_review_reviewee_idTouserInput = {
    create?: XOR<reviewCreateWithoutUser_review_reviewee_idTouserInput, reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput> | reviewCreateWithoutUser_review_reviewee_idTouserInput[] | reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUser_review_reviewee_idTouserInput | reviewCreateOrConnectWithoutUser_review_reviewee_idTouserInput[]
    createMany?: reviewCreateManyUser_review_reviewee_idTouserInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type chat_roomUncheckedCreateNestedManyWithoutUser_chat_room_user1TouserInput = {
    create?: XOR<chat_roomCreateWithoutUser_chat_room_user1TouserInput, chat_roomUncheckedCreateWithoutUser_chat_room_user1TouserInput> | chat_roomCreateWithoutUser_chat_room_user1TouserInput[] | chat_roomUncheckedCreateWithoutUser_chat_room_user1TouserInput[]
    connectOrCreate?: chat_roomCreateOrConnectWithoutUser_chat_room_user1TouserInput | chat_roomCreateOrConnectWithoutUser_chat_room_user1TouserInput[]
    createMany?: chat_roomCreateManyUser_chat_room_user1TouserInputEnvelope
    connect?: chat_roomWhereUniqueInput | chat_roomWhereUniqueInput[]
  }

  export type chat_roomUncheckedCreateNestedManyWithoutUser_chat_room_user2TouserInput = {
    create?: XOR<chat_roomCreateWithoutUser_chat_room_user2TouserInput, chat_roomUncheckedCreateWithoutUser_chat_room_user2TouserInput> | chat_roomCreateWithoutUser_chat_room_user2TouserInput[] | chat_roomUncheckedCreateWithoutUser_chat_room_user2TouserInput[]
    connectOrCreate?: chat_roomCreateOrConnectWithoutUser_chat_room_user2TouserInput | chat_roomCreateOrConnectWithoutUser_chat_room_user2TouserInput[]
    createMany?: chat_roomCreateManyUser_chat_room_user2TouserInputEnvelope
    connect?: chat_roomWhereUniqueInput | chat_roomWhereUniqueInput[]
  }

  export type harvestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<harvestCreateWithoutUserInput, harvestUncheckedCreateWithoutUserInput> | harvestCreateWithoutUserInput[] | harvestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: harvestCreateOrConnectWithoutUserInput | harvestCreateOrConnectWithoutUserInput[]
    createMany?: harvestCreateManyUserInputEnvelope
    connect?: harvestWhereUniqueInput | harvestWhereUniqueInput[]
  }

  export type messageUncheckedCreateNestedManyWithoutUser_message_sender_idTouserInput = {
    create?: XOR<messageCreateWithoutUser_message_sender_idTouserInput, messageUncheckedCreateWithoutUser_message_sender_idTouserInput> | messageCreateWithoutUser_message_sender_idTouserInput[] | messageUncheckedCreateWithoutUser_message_sender_idTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_sender_idTouserInput | messageCreateOrConnectWithoutUser_message_sender_idTouserInput[]
    createMany?: messageCreateManyUser_message_sender_idTouserInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type messageUncheckedCreateNestedManyWithoutUser_message_recipient_idTouserInput = {
    create?: XOR<messageCreateWithoutUser_message_recipient_idTouserInput, messageUncheckedCreateWithoutUser_message_recipient_idTouserInput> | messageCreateWithoutUser_message_recipient_idTouserInput[] | messageUncheckedCreateWithoutUser_message_recipient_idTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_recipient_idTouserInput | messageCreateOrConnectWithoutUser_message_recipient_idTouserInput[]
    createMany?: messageCreateManyUser_message_recipient_idTouserInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type orderUncheckedCreateNestedManyWithoutUser_order_buyer_idTouserInput = {
    create?: XOR<orderCreateWithoutUser_order_buyer_idTouserInput, orderUncheckedCreateWithoutUser_order_buyer_idTouserInput> | orderCreateWithoutUser_order_buyer_idTouserInput[] | orderUncheckedCreateWithoutUser_order_buyer_idTouserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUser_order_buyer_idTouserInput | orderCreateOrConnectWithoutUser_order_buyer_idTouserInput[]
    createMany?: orderCreateManyUser_order_buyer_idTouserInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutUser_review_reviewer_idTouserInput = {
    create?: XOR<reviewCreateWithoutUser_review_reviewer_idTouserInput, reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput> | reviewCreateWithoutUser_review_reviewer_idTouserInput[] | reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUser_review_reviewer_idTouserInput | reviewCreateOrConnectWithoutUser_review_reviewer_idTouserInput[]
    createMany?: reviewCreateManyUser_review_reviewer_idTouserInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutUser_review_reviewee_idTouserInput = {
    create?: XOR<reviewCreateWithoutUser_review_reviewee_idTouserInput, reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput> | reviewCreateWithoutUser_review_reviewee_idTouserInput[] | reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUser_review_reviewee_idTouserInput | reviewCreateOrConnectWithoutUser_review_reviewee_idTouserInput[]
    createMany?: reviewCreateManyUser_review_reviewee_idTouserInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type Enumuser_typeFieldUpdateOperationsInput = {
    set?: $Enums.user_type
  }

  export type chat_roomUpdateManyWithoutUser_chat_room_user1TouserNestedInput = {
    create?: XOR<chat_roomCreateWithoutUser_chat_room_user1TouserInput, chat_roomUncheckedCreateWithoutUser_chat_room_user1TouserInput> | chat_roomCreateWithoutUser_chat_room_user1TouserInput[] | chat_roomUncheckedCreateWithoutUser_chat_room_user1TouserInput[]
    connectOrCreate?: chat_roomCreateOrConnectWithoutUser_chat_room_user1TouserInput | chat_roomCreateOrConnectWithoutUser_chat_room_user1TouserInput[]
    upsert?: chat_roomUpsertWithWhereUniqueWithoutUser_chat_room_user1TouserInput | chat_roomUpsertWithWhereUniqueWithoutUser_chat_room_user1TouserInput[]
    createMany?: chat_roomCreateManyUser_chat_room_user1TouserInputEnvelope
    set?: chat_roomWhereUniqueInput | chat_roomWhereUniqueInput[]
    disconnect?: chat_roomWhereUniqueInput | chat_roomWhereUniqueInput[]
    delete?: chat_roomWhereUniqueInput | chat_roomWhereUniqueInput[]
    connect?: chat_roomWhereUniqueInput | chat_roomWhereUniqueInput[]
    update?: chat_roomUpdateWithWhereUniqueWithoutUser_chat_room_user1TouserInput | chat_roomUpdateWithWhereUniqueWithoutUser_chat_room_user1TouserInput[]
    updateMany?: chat_roomUpdateManyWithWhereWithoutUser_chat_room_user1TouserInput | chat_roomUpdateManyWithWhereWithoutUser_chat_room_user1TouserInput[]
    deleteMany?: chat_roomScalarWhereInput | chat_roomScalarWhereInput[]
  }

  export type chat_roomUpdateManyWithoutUser_chat_room_user2TouserNestedInput = {
    create?: XOR<chat_roomCreateWithoutUser_chat_room_user2TouserInput, chat_roomUncheckedCreateWithoutUser_chat_room_user2TouserInput> | chat_roomCreateWithoutUser_chat_room_user2TouserInput[] | chat_roomUncheckedCreateWithoutUser_chat_room_user2TouserInput[]
    connectOrCreate?: chat_roomCreateOrConnectWithoutUser_chat_room_user2TouserInput | chat_roomCreateOrConnectWithoutUser_chat_room_user2TouserInput[]
    upsert?: chat_roomUpsertWithWhereUniqueWithoutUser_chat_room_user2TouserInput | chat_roomUpsertWithWhereUniqueWithoutUser_chat_room_user2TouserInput[]
    createMany?: chat_roomCreateManyUser_chat_room_user2TouserInputEnvelope
    set?: chat_roomWhereUniqueInput | chat_roomWhereUniqueInput[]
    disconnect?: chat_roomWhereUniqueInput | chat_roomWhereUniqueInput[]
    delete?: chat_roomWhereUniqueInput | chat_roomWhereUniqueInput[]
    connect?: chat_roomWhereUniqueInput | chat_roomWhereUniqueInput[]
    update?: chat_roomUpdateWithWhereUniqueWithoutUser_chat_room_user2TouserInput | chat_roomUpdateWithWhereUniqueWithoutUser_chat_room_user2TouserInput[]
    updateMany?: chat_roomUpdateManyWithWhereWithoutUser_chat_room_user2TouserInput | chat_roomUpdateManyWithWhereWithoutUser_chat_room_user2TouserInput[]
    deleteMany?: chat_roomScalarWhereInput | chat_roomScalarWhereInput[]
  }

  export type harvestUpdateManyWithoutUserNestedInput = {
    create?: XOR<harvestCreateWithoutUserInput, harvestUncheckedCreateWithoutUserInput> | harvestCreateWithoutUserInput[] | harvestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: harvestCreateOrConnectWithoutUserInput | harvestCreateOrConnectWithoutUserInput[]
    upsert?: harvestUpsertWithWhereUniqueWithoutUserInput | harvestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: harvestCreateManyUserInputEnvelope
    set?: harvestWhereUniqueInput | harvestWhereUniqueInput[]
    disconnect?: harvestWhereUniqueInput | harvestWhereUniqueInput[]
    delete?: harvestWhereUniqueInput | harvestWhereUniqueInput[]
    connect?: harvestWhereUniqueInput | harvestWhereUniqueInput[]
    update?: harvestUpdateWithWhereUniqueWithoutUserInput | harvestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: harvestUpdateManyWithWhereWithoutUserInput | harvestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: harvestScalarWhereInput | harvestScalarWhereInput[]
  }

  export type messageUpdateManyWithoutUser_message_sender_idTouserNestedInput = {
    create?: XOR<messageCreateWithoutUser_message_sender_idTouserInput, messageUncheckedCreateWithoutUser_message_sender_idTouserInput> | messageCreateWithoutUser_message_sender_idTouserInput[] | messageUncheckedCreateWithoutUser_message_sender_idTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_sender_idTouserInput | messageCreateOrConnectWithoutUser_message_sender_idTouserInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutUser_message_sender_idTouserInput | messageUpsertWithWhereUniqueWithoutUser_message_sender_idTouserInput[]
    createMany?: messageCreateManyUser_message_sender_idTouserInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutUser_message_sender_idTouserInput | messageUpdateWithWhereUniqueWithoutUser_message_sender_idTouserInput[]
    updateMany?: messageUpdateManyWithWhereWithoutUser_message_sender_idTouserInput | messageUpdateManyWithWhereWithoutUser_message_sender_idTouserInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type messageUpdateManyWithoutUser_message_recipient_idTouserNestedInput = {
    create?: XOR<messageCreateWithoutUser_message_recipient_idTouserInput, messageUncheckedCreateWithoutUser_message_recipient_idTouserInput> | messageCreateWithoutUser_message_recipient_idTouserInput[] | messageUncheckedCreateWithoutUser_message_recipient_idTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_recipient_idTouserInput | messageCreateOrConnectWithoutUser_message_recipient_idTouserInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutUser_message_recipient_idTouserInput | messageUpsertWithWhereUniqueWithoutUser_message_recipient_idTouserInput[]
    createMany?: messageCreateManyUser_message_recipient_idTouserInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutUser_message_recipient_idTouserInput | messageUpdateWithWhereUniqueWithoutUser_message_recipient_idTouserInput[]
    updateMany?: messageUpdateManyWithWhereWithoutUser_message_recipient_idTouserInput | messageUpdateManyWithWhereWithoutUser_message_recipient_idTouserInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type orderUpdateManyWithoutUser_order_buyer_idTouserNestedInput = {
    create?: XOR<orderCreateWithoutUser_order_buyer_idTouserInput, orderUncheckedCreateWithoutUser_order_buyer_idTouserInput> | orderCreateWithoutUser_order_buyer_idTouserInput[] | orderUncheckedCreateWithoutUser_order_buyer_idTouserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUser_order_buyer_idTouserInput | orderCreateOrConnectWithoutUser_order_buyer_idTouserInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutUser_order_buyer_idTouserInput | orderUpsertWithWhereUniqueWithoutUser_order_buyer_idTouserInput[]
    createMany?: orderCreateManyUser_order_buyer_idTouserInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutUser_order_buyer_idTouserInput | orderUpdateWithWhereUniqueWithoutUser_order_buyer_idTouserInput[]
    updateMany?: orderUpdateManyWithWhereWithoutUser_order_buyer_idTouserInput | orderUpdateManyWithWhereWithoutUser_order_buyer_idTouserInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutUser_review_reviewer_idTouserNestedInput = {
    create?: XOR<reviewCreateWithoutUser_review_reviewer_idTouserInput, reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput> | reviewCreateWithoutUser_review_reviewer_idTouserInput[] | reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUser_review_reviewer_idTouserInput | reviewCreateOrConnectWithoutUser_review_reviewer_idTouserInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUser_review_reviewer_idTouserInput | reviewUpsertWithWhereUniqueWithoutUser_review_reviewer_idTouserInput[]
    createMany?: reviewCreateManyUser_review_reviewer_idTouserInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUser_review_reviewer_idTouserInput | reviewUpdateWithWhereUniqueWithoutUser_review_reviewer_idTouserInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUser_review_reviewer_idTouserInput | reviewUpdateManyWithWhereWithoutUser_review_reviewer_idTouserInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutUser_review_reviewee_idTouserNestedInput = {
    create?: XOR<reviewCreateWithoutUser_review_reviewee_idTouserInput, reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput> | reviewCreateWithoutUser_review_reviewee_idTouserInput[] | reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUser_review_reviewee_idTouserInput | reviewCreateOrConnectWithoutUser_review_reviewee_idTouserInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUser_review_reviewee_idTouserInput | reviewUpsertWithWhereUniqueWithoutUser_review_reviewee_idTouserInput[]
    createMany?: reviewCreateManyUser_review_reviewee_idTouserInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUser_review_reviewee_idTouserInput | reviewUpdateWithWhereUniqueWithoutUser_review_reviewee_idTouserInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUser_review_reviewee_idTouserInput | reviewUpdateManyWithWhereWithoutUser_review_reviewee_idTouserInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type chat_roomUncheckedUpdateManyWithoutUser_chat_room_user1TouserNestedInput = {
    create?: XOR<chat_roomCreateWithoutUser_chat_room_user1TouserInput, chat_roomUncheckedCreateWithoutUser_chat_room_user1TouserInput> | chat_roomCreateWithoutUser_chat_room_user1TouserInput[] | chat_roomUncheckedCreateWithoutUser_chat_room_user1TouserInput[]
    connectOrCreate?: chat_roomCreateOrConnectWithoutUser_chat_room_user1TouserInput | chat_roomCreateOrConnectWithoutUser_chat_room_user1TouserInput[]
    upsert?: chat_roomUpsertWithWhereUniqueWithoutUser_chat_room_user1TouserInput | chat_roomUpsertWithWhereUniqueWithoutUser_chat_room_user1TouserInput[]
    createMany?: chat_roomCreateManyUser_chat_room_user1TouserInputEnvelope
    set?: chat_roomWhereUniqueInput | chat_roomWhereUniqueInput[]
    disconnect?: chat_roomWhereUniqueInput | chat_roomWhereUniqueInput[]
    delete?: chat_roomWhereUniqueInput | chat_roomWhereUniqueInput[]
    connect?: chat_roomWhereUniqueInput | chat_roomWhereUniqueInput[]
    update?: chat_roomUpdateWithWhereUniqueWithoutUser_chat_room_user1TouserInput | chat_roomUpdateWithWhereUniqueWithoutUser_chat_room_user1TouserInput[]
    updateMany?: chat_roomUpdateManyWithWhereWithoutUser_chat_room_user1TouserInput | chat_roomUpdateManyWithWhereWithoutUser_chat_room_user1TouserInput[]
    deleteMany?: chat_roomScalarWhereInput | chat_roomScalarWhereInput[]
  }

  export type chat_roomUncheckedUpdateManyWithoutUser_chat_room_user2TouserNestedInput = {
    create?: XOR<chat_roomCreateWithoutUser_chat_room_user2TouserInput, chat_roomUncheckedCreateWithoutUser_chat_room_user2TouserInput> | chat_roomCreateWithoutUser_chat_room_user2TouserInput[] | chat_roomUncheckedCreateWithoutUser_chat_room_user2TouserInput[]
    connectOrCreate?: chat_roomCreateOrConnectWithoutUser_chat_room_user2TouserInput | chat_roomCreateOrConnectWithoutUser_chat_room_user2TouserInput[]
    upsert?: chat_roomUpsertWithWhereUniqueWithoutUser_chat_room_user2TouserInput | chat_roomUpsertWithWhereUniqueWithoutUser_chat_room_user2TouserInput[]
    createMany?: chat_roomCreateManyUser_chat_room_user2TouserInputEnvelope
    set?: chat_roomWhereUniqueInput | chat_roomWhereUniqueInput[]
    disconnect?: chat_roomWhereUniqueInput | chat_roomWhereUniqueInput[]
    delete?: chat_roomWhereUniqueInput | chat_roomWhereUniqueInput[]
    connect?: chat_roomWhereUniqueInput | chat_roomWhereUniqueInput[]
    update?: chat_roomUpdateWithWhereUniqueWithoutUser_chat_room_user2TouserInput | chat_roomUpdateWithWhereUniqueWithoutUser_chat_room_user2TouserInput[]
    updateMany?: chat_roomUpdateManyWithWhereWithoutUser_chat_room_user2TouserInput | chat_roomUpdateManyWithWhereWithoutUser_chat_room_user2TouserInput[]
    deleteMany?: chat_roomScalarWhereInput | chat_roomScalarWhereInput[]
  }

  export type harvestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<harvestCreateWithoutUserInput, harvestUncheckedCreateWithoutUserInput> | harvestCreateWithoutUserInput[] | harvestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: harvestCreateOrConnectWithoutUserInput | harvestCreateOrConnectWithoutUserInput[]
    upsert?: harvestUpsertWithWhereUniqueWithoutUserInput | harvestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: harvestCreateManyUserInputEnvelope
    set?: harvestWhereUniqueInput | harvestWhereUniqueInput[]
    disconnect?: harvestWhereUniqueInput | harvestWhereUniqueInput[]
    delete?: harvestWhereUniqueInput | harvestWhereUniqueInput[]
    connect?: harvestWhereUniqueInput | harvestWhereUniqueInput[]
    update?: harvestUpdateWithWhereUniqueWithoutUserInput | harvestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: harvestUpdateManyWithWhereWithoutUserInput | harvestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: harvestScalarWhereInput | harvestScalarWhereInput[]
  }

  export type messageUncheckedUpdateManyWithoutUser_message_sender_idTouserNestedInput = {
    create?: XOR<messageCreateWithoutUser_message_sender_idTouserInput, messageUncheckedCreateWithoutUser_message_sender_idTouserInput> | messageCreateWithoutUser_message_sender_idTouserInput[] | messageUncheckedCreateWithoutUser_message_sender_idTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_sender_idTouserInput | messageCreateOrConnectWithoutUser_message_sender_idTouserInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutUser_message_sender_idTouserInput | messageUpsertWithWhereUniqueWithoutUser_message_sender_idTouserInput[]
    createMany?: messageCreateManyUser_message_sender_idTouserInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutUser_message_sender_idTouserInput | messageUpdateWithWhereUniqueWithoutUser_message_sender_idTouserInput[]
    updateMany?: messageUpdateManyWithWhereWithoutUser_message_sender_idTouserInput | messageUpdateManyWithWhereWithoutUser_message_sender_idTouserInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type messageUncheckedUpdateManyWithoutUser_message_recipient_idTouserNestedInput = {
    create?: XOR<messageCreateWithoutUser_message_recipient_idTouserInput, messageUncheckedCreateWithoutUser_message_recipient_idTouserInput> | messageCreateWithoutUser_message_recipient_idTouserInput[] | messageUncheckedCreateWithoutUser_message_recipient_idTouserInput[]
    connectOrCreate?: messageCreateOrConnectWithoutUser_message_recipient_idTouserInput | messageCreateOrConnectWithoutUser_message_recipient_idTouserInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutUser_message_recipient_idTouserInput | messageUpsertWithWhereUniqueWithoutUser_message_recipient_idTouserInput[]
    createMany?: messageCreateManyUser_message_recipient_idTouserInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutUser_message_recipient_idTouserInput | messageUpdateWithWhereUniqueWithoutUser_message_recipient_idTouserInput[]
    updateMany?: messageUpdateManyWithWhereWithoutUser_message_recipient_idTouserInput | messageUpdateManyWithWhereWithoutUser_message_recipient_idTouserInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type orderUncheckedUpdateManyWithoutUser_order_buyer_idTouserNestedInput = {
    create?: XOR<orderCreateWithoutUser_order_buyer_idTouserInput, orderUncheckedCreateWithoutUser_order_buyer_idTouserInput> | orderCreateWithoutUser_order_buyer_idTouserInput[] | orderUncheckedCreateWithoutUser_order_buyer_idTouserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUser_order_buyer_idTouserInput | orderCreateOrConnectWithoutUser_order_buyer_idTouserInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutUser_order_buyer_idTouserInput | orderUpsertWithWhereUniqueWithoutUser_order_buyer_idTouserInput[]
    createMany?: orderCreateManyUser_order_buyer_idTouserInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutUser_order_buyer_idTouserInput | orderUpdateWithWhereUniqueWithoutUser_order_buyer_idTouserInput[]
    updateMany?: orderUpdateManyWithWhereWithoutUser_order_buyer_idTouserInput | orderUpdateManyWithWhereWithoutUser_order_buyer_idTouserInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutUser_review_reviewer_idTouserNestedInput = {
    create?: XOR<reviewCreateWithoutUser_review_reviewer_idTouserInput, reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput> | reviewCreateWithoutUser_review_reviewer_idTouserInput[] | reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUser_review_reviewer_idTouserInput | reviewCreateOrConnectWithoutUser_review_reviewer_idTouserInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUser_review_reviewer_idTouserInput | reviewUpsertWithWhereUniqueWithoutUser_review_reviewer_idTouserInput[]
    createMany?: reviewCreateManyUser_review_reviewer_idTouserInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUser_review_reviewer_idTouserInput | reviewUpdateWithWhereUniqueWithoutUser_review_reviewer_idTouserInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUser_review_reviewer_idTouserInput | reviewUpdateManyWithWhereWithoutUser_review_reviewer_idTouserInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutUser_review_reviewee_idTouserNestedInput = {
    create?: XOR<reviewCreateWithoutUser_review_reviewee_idTouserInput, reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput> | reviewCreateWithoutUser_review_reviewee_idTouserInput[] | reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUser_review_reviewee_idTouserInput | reviewCreateOrConnectWithoutUser_review_reviewee_idTouserInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUser_review_reviewee_idTouserInput | reviewUpsertWithWhereUniqueWithoutUser_review_reviewee_idTouserInput[]
    createMany?: reviewCreateManyUser_review_reviewee_idTouserInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUser_review_reviewee_idTouserInput | reviewUpdateWithWhereUniqueWithoutUser_review_reviewee_idTouserInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUser_review_reviewee_idTouserInput | reviewUpdateManyWithWhereWithoutUser_review_reviewee_idTouserInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutOrder_order_buyer_idTouserInput = {
    create?: XOR<userCreateWithoutOrder_order_buyer_idTouserInput, userUncheckedCreateWithoutOrder_order_buyer_idTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutOrder_order_buyer_idTouserInput
    connect?: userWhereUniqueInput
  }

  export type harvestCreateNestedOneWithoutOrderInput = {
    create?: XOR<harvestCreateWithoutOrderInput, harvestUncheckedCreateWithoutOrderInput>
    connectOrCreate?: harvestCreateOrConnectWithoutOrderInput
    connect?: harvestWhereUniqueInput
  }

  export type paymentCreateNestedManyWithoutOrderInput = {
    create?: XOR<paymentCreateWithoutOrderInput, paymentUncheckedCreateWithoutOrderInput> | paymentCreateWithoutOrderInput[] | paymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutOrderInput | paymentCreateOrConnectWithoutOrderInput[]
    createMany?: paymentCreateManyOrderInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutOrderInput = {
    create?: XOR<reviewCreateWithoutOrderInput, reviewUncheckedCreateWithoutOrderInput> | reviewCreateWithoutOrderInput[] | reviewUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutOrderInput | reviewCreateOrConnectWithoutOrderInput[]
    createMany?: reviewCreateManyOrderInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type paymentUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<paymentCreateWithoutOrderInput, paymentUncheckedCreateWithoutOrderInput> | paymentCreateWithoutOrderInput[] | paymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutOrderInput | paymentCreateOrConnectWithoutOrderInput[]
    createMany?: paymentCreateManyOrderInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<reviewCreateWithoutOrderInput, reviewUncheckedCreateWithoutOrderInput> | reviewCreateWithoutOrderInput[] | reviewUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutOrderInput | reviewCreateOrConnectWithoutOrderInput[]
    createMany?: reviewCreateManyOrderInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type Enumorder_statusFieldUpdateOperationsInput = {
    set?: $Enums.order_status
  }

  export type userUpdateOneRequiredWithoutOrder_order_buyer_idTouserNestedInput = {
    create?: XOR<userCreateWithoutOrder_order_buyer_idTouserInput, userUncheckedCreateWithoutOrder_order_buyer_idTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutOrder_order_buyer_idTouserInput
    upsert?: userUpsertWithoutOrder_order_buyer_idTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutOrder_order_buyer_idTouserInput, userUpdateWithoutOrder_order_buyer_idTouserInput>, userUncheckedUpdateWithoutOrder_order_buyer_idTouserInput>
  }

  export type harvestUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<harvestCreateWithoutOrderInput, harvestUncheckedCreateWithoutOrderInput>
    connectOrCreate?: harvestCreateOrConnectWithoutOrderInput
    upsert?: harvestUpsertWithoutOrderInput
    connect?: harvestWhereUniqueInput
    update?: XOR<XOR<harvestUpdateToOneWithWhereWithoutOrderInput, harvestUpdateWithoutOrderInput>, harvestUncheckedUpdateWithoutOrderInput>
  }

  export type paymentUpdateManyWithoutOrderNestedInput = {
    create?: XOR<paymentCreateWithoutOrderInput, paymentUncheckedCreateWithoutOrderInput> | paymentCreateWithoutOrderInput[] | paymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutOrderInput | paymentCreateOrConnectWithoutOrderInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutOrderInput | paymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: paymentCreateManyOrderInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutOrderInput | paymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutOrderInput | paymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutOrderNestedInput = {
    create?: XOR<reviewCreateWithoutOrderInput, reviewUncheckedCreateWithoutOrderInput> | reviewCreateWithoutOrderInput[] | reviewUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutOrderInput | reviewCreateOrConnectWithoutOrderInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutOrderInput | reviewUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: reviewCreateManyOrderInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutOrderInput | reviewUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutOrderInput | reviewUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type paymentUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<paymentCreateWithoutOrderInput, paymentUncheckedCreateWithoutOrderInput> | paymentCreateWithoutOrderInput[] | paymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutOrderInput | paymentCreateOrConnectWithoutOrderInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutOrderInput | paymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: paymentCreateManyOrderInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutOrderInput | paymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutOrderInput | paymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<reviewCreateWithoutOrderInput, reviewUncheckedCreateWithoutOrderInput> | reviewCreateWithoutOrderInput[] | reviewUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutOrderInput | reviewCreateOrConnectWithoutOrderInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutOrderInput | reviewUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: reviewCreateManyOrderInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutOrderInput | reviewUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutOrderInput | reviewUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type orderCreateNestedOneWithoutPaymentInput = {
    create?: XOR<orderCreateWithoutPaymentInput, orderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: orderCreateOrConnectWithoutPaymentInput
    connect?: orderWhereUniqueInput
  }

  export type Enumpayment_methodFieldUpdateOperationsInput = {
    set?: $Enums.payment_method
  }

  export type Enumpayment_statusFieldUpdateOperationsInput = {
    set?: $Enums.payment_status
  }

  export type orderUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<orderCreateWithoutPaymentInput, orderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: orderCreateOrConnectWithoutPaymentInput
    upsert?: orderUpsertWithoutPaymentInput
    connect?: orderWhereUniqueInput
    update?: XOR<XOR<orderUpdateToOneWithWhereWithoutPaymentInput, orderUpdateWithoutPaymentInput>, orderUncheckedUpdateWithoutPaymentInput>
  }

  export type userCreateNestedOneWithoutReview_review_reviewer_idTouserInput = {
    create?: XOR<userCreateWithoutReview_review_reviewer_idTouserInput, userUncheckedCreateWithoutReview_review_reviewer_idTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutReview_review_reviewer_idTouserInput
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedOneWithoutReview_review_reviewee_idTouserInput = {
    create?: XOR<userCreateWithoutReview_review_reviewee_idTouserInput, userUncheckedCreateWithoutReview_review_reviewee_idTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutReview_review_reviewee_idTouserInput
    connect?: userWhereUniqueInput
  }

  export type orderCreateNestedOneWithoutReviewInput = {
    create?: XOR<orderCreateWithoutReviewInput, orderUncheckedCreateWithoutReviewInput>
    connectOrCreate?: orderCreateOrConnectWithoutReviewInput
    connect?: orderWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutReview_review_reviewer_idTouserNestedInput = {
    create?: XOR<userCreateWithoutReview_review_reviewer_idTouserInput, userUncheckedCreateWithoutReview_review_reviewer_idTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutReview_review_reviewer_idTouserInput
    upsert?: userUpsertWithoutReview_review_reviewer_idTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutReview_review_reviewer_idTouserInput, userUpdateWithoutReview_review_reviewer_idTouserInput>, userUncheckedUpdateWithoutReview_review_reviewer_idTouserInput>
  }

  export type userUpdateOneRequiredWithoutReview_review_reviewee_idTouserNestedInput = {
    create?: XOR<userCreateWithoutReview_review_reviewee_idTouserInput, userUncheckedCreateWithoutReview_review_reviewee_idTouserInput>
    connectOrCreate?: userCreateOrConnectWithoutReview_review_reviewee_idTouserInput
    upsert?: userUpsertWithoutReview_review_reviewee_idTouserInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutReview_review_reviewee_idTouserInput, userUpdateWithoutReview_review_reviewee_idTouserInput>, userUncheckedUpdateWithoutReview_review_reviewee_idTouserInput>
  }

  export type orderUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<orderCreateWithoutReviewInput, orderUncheckedCreateWithoutReviewInput>
    connectOrCreate?: orderCreateOrConnectWithoutReviewInput
    upsert?: orderUpsertWithoutReviewInput
    connect?: orderWhereUniqueInput
    update?: XOR<XOR<orderUpdateToOneWithWhereWithoutReviewInput, orderUpdateWithoutReviewInput>, orderUncheckedUpdateWithoutReviewInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumuser_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.user_type | Enumuser_typeFieldRefInput<$PrismaModel>
    in?: $Enums.user_type[]
    notIn?: $Enums.user_type[]
    not?: NestedEnumuser_typeFilter<$PrismaModel> | $Enums.user_type
  }

  export type NestedEnumuser_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_type | Enumuser_typeFieldRefInput<$PrismaModel>
    in?: $Enums.user_type[]
    notIn?: $Enums.user_type[]
    not?: NestedEnumuser_typeWithAggregatesFilter<$PrismaModel> | $Enums.user_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_typeFilter<$PrismaModel>
    _max?: NestedEnumuser_typeFilter<$PrismaModel>
  }

  export type NestedEnumorder_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[]
    notIn?: $Enums.order_status[]
    not?: NestedEnumorder_statusFilter<$PrismaModel> | $Enums.order_status
  }

  export type NestedEnumorder_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[]
    notIn?: $Enums.order_status[]
    not?: NestedEnumorder_statusWithAggregatesFilter<$PrismaModel> | $Enums.order_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_statusFilter<$PrismaModel>
    _max?: NestedEnumorder_statusFilter<$PrismaModel>
  }

  export type NestedEnumpayment_methodFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payment_method[]
    notIn?: $Enums.payment_method[]
    not?: NestedEnumpayment_methodFilter<$PrismaModel> | $Enums.payment_method
  }

  export type NestedEnumpayment_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[]
    notIn?: $Enums.payment_status[]
    not?: NestedEnumpayment_statusFilter<$PrismaModel> | $Enums.payment_status
  }

  export type NestedEnumpayment_methodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payment_method[]
    notIn?: $Enums.payment_method[]
    not?: NestedEnumpayment_methodWithAggregatesFilter<$PrismaModel> | $Enums.payment_method
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_methodFilter<$PrismaModel>
    _max?: NestedEnumpayment_methodFilter<$PrismaModel>
  }

  export type NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_status | Enumpayment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.payment_status[]
    notIn?: $Enums.payment_status[]
    not?: NestedEnumpayment_statusWithAggregatesFilter<$PrismaModel> | $Enums.payment_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_statusFilter<$PrismaModel>
    _max?: NestedEnumpayment_statusFilter<$PrismaModel>
  }

  export type userCreateWithoutChat_room_chat_room_user1TouserInput = {
    full_name: string
    email: string
    passwd: string
    profile?: string | null
    phone?: string | null
    location?: string | null
    bio?: string | null
    farm_name?: string | null
    business_name?: string | null
    is_verified?: boolean
    is_active?: boolean
    type: $Enums.user_type
    created_at?: Date | string | null
    chat_room_chat_room_user2Touser?: chat_roomCreateNestedManyWithoutUser_chat_room_user2TouserInput
    harvest?: harvestCreateNestedManyWithoutUserInput
    message_message_sender_idTouser?: messageCreateNestedManyWithoutUser_message_sender_idTouserInput
    message_message_recipient_idTouser?: messageCreateNestedManyWithoutUser_message_recipient_idTouserInput
    order_order_buyer_idTouser?: orderCreateNestedManyWithoutUser_order_buyer_idTouserInput
    review_review_reviewer_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewer_idTouserInput
    review_review_reviewee_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewee_idTouserInput
  }

  export type userUncheckedCreateWithoutChat_room_chat_room_user1TouserInput = {
    id?: number
    full_name: string
    email: string
    passwd: string
    profile?: string | null
    phone?: string | null
    location?: string | null
    bio?: string | null
    farm_name?: string | null
    business_name?: string | null
    is_verified?: boolean
    is_active?: boolean
    type: $Enums.user_type
    created_at?: Date | string | null
    chat_room_chat_room_user2Touser?: chat_roomUncheckedCreateNestedManyWithoutUser_chat_room_user2TouserInput
    harvest?: harvestUncheckedCreateNestedManyWithoutUserInput
    message_message_sender_idTouser?: messageUncheckedCreateNestedManyWithoutUser_message_sender_idTouserInput
    message_message_recipient_idTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipient_idTouserInput
    order_order_buyer_idTouser?: orderUncheckedCreateNestedManyWithoutUser_order_buyer_idTouserInput
    review_review_reviewer_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewer_idTouserInput
    review_review_reviewee_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewee_idTouserInput
  }

  export type userCreateOrConnectWithoutChat_room_chat_room_user1TouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutChat_room_chat_room_user1TouserInput, userUncheckedCreateWithoutChat_room_chat_room_user1TouserInput>
  }

  export type userCreateWithoutChat_room_chat_room_user2TouserInput = {
    full_name: string
    email: string
    passwd: string
    profile?: string | null
    phone?: string | null
    location?: string | null
    bio?: string | null
    farm_name?: string | null
    business_name?: string | null
    is_verified?: boolean
    is_active?: boolean
    type: $Enums.user_type
    created_at?: Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomCreateNestedManyWithoutUser_chat_room_user1TouserInput
    harvest?: harvestCreateNestedManyWithoutUserInput
    message_message_sender_idTouser?: messageCreateNestedManyWithoutUser_message_sender_idTouserInput
    message_message_recipient_idTouser?: messageCreateNestedManyWithoutUser_message_recipient_idTouserInput
    order_order_buyer_idTouser?: orderCreateNestedManyWithoutUser_order_buyer_idTouserInput
    review_review_reviewer_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewer_idTouserInput
    review_review_reviewee_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewee_idTouserInput
  }

  export type userUncheckedCreateWithoutChat_room_chat_room_user2TouserInput = {
    id?: number
    full_name: string
    email: string
    passwd: string
    profile?: string | null
    phone?: string | null
    location?: string | null
    bio?: string | null
    farm_name?: string | null
    business_name?: string | null
    is_verified?: boolean
    is_active?: boolean
    type: $Enums.user_type
    created_at?: Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUncheckedCreateNestedManyWithoutUser_chat_room_user1TouserInput
    harvest?: harvestUncheckedCreateNestedManyWithoutUserInput
    message_message_sender_idTouser?: messageUncheckedCreateNestedManyWithoutUser_message_sender_idTouserInput
    message_message_recipient_idTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipient_idTouserInput
    order_order_buyer_idTouser?: orderUncheckedCreateNestedManyWithoutUser_order_buyer_idTouserInput
    review_review_reviewer_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewer_idTouserInput
    review_review_reviewee_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewee_idTouserInput
  }

  export type userCreateOrConnectWithoutChat_room_chat_room_user2TouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutChat_room_chat_room_user2TouserInput, userUncheckedCreateWithoutChat_room_chat_room_user2TouserInput>
  }

  export type messageCreateWithoutChat_roomInput = {
    text: string
    read?: boolean
    received?: boolean
    created_at?: Date | string | null
    user_message_sender_idTouser: userCreateNestedOneWithoutMessage_message_sender_idTouserInput
    user_message_recipient_idTouser: userCreateNestedOneWithoutMessage_message_recipient_idTouserInput
    message?: messageCreateNestedOneWithoutOther_messageInput
    other_message?: messageCreateNestedManyWithoutMessageInput
  }

  export type messageUncheckedCreateWithoutChat_roomInput = {
    id?: number
    sender_id: number
    recipient_id: number
    text: string
    read?: boolean
    received?: boolean
    reply_to_id?: number | null
    created_at?: Date | string | null
    other_message?: messageUncheckedCreateNestedManyWithoutMessageInput
  }

  export type messageCreateOrConnectWithoutChat_roomInput = {
    where: messageWhereUniqueInput
    create: XOR<messageCreateWithoutChat_roomInput, messageUncheckedCreateWithoutChat_roomInput>
  }

  export type messageCreateManyChat_roomInputEnvelope = {
    data: messageCreateManyChat_roomInput | messageCreateManyChat_roomInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutChat_room_chat_room_user1TouserInput = {
    update: XOR<userUpdateWithoutChat_room_chat_room_user1TouserInput, userUncheckedUpdateWithoutChat_room_chat_room_user1TouserInput>
    create: XOR<userCreateWithoutChat_room_chat_room_user1TouserInput, userUncheckedCreateWithoutChat_room_chat_room_user1TouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutChat_room_chat_room_user1TouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutChat_room_chat_room_user1TouserInput, userUncheckedUpdateWithoutChat_room_chat_room_user1TouserInput>
  }

  export type userUpdateWithoutChat_room_chat_room_user1TouserInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    farm_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room_chat_room_user2Touser?: chat_roomUpdateManyWithoutUser_chat_room_user2TouserNestedInput
    harvest?: harvestUpdateManyWithoutUserNestedInput
    message_message_sender_idTouser?: messageUpdateManyWithoutUser_message_sender_idTouserNestedInput
    message_message_recipient_idTouser?: messageUpdateManyWithoutUser_message_recipient_idTouserNestedInput
    order_order_buyer_idTouser?: orderUpdateManyWithoutUser_order_buyer_idTouserNestedInput
    review_review_reviewer_idTouser?: reviewUpdateManyWithoutUser_review_reviewer_idTouserNestedInput
    review_review_reviewee_idTouser?: reviewUpdateManyWithoutUser_review_reviewee_idTouserNestedInput
  }

  export type userUncheckedUpdateWithoutChat_room_chat_room_user1TouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    farm_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room_chat_room_user2Touser?: chat_roomUncheckedUpdateManyWithoutUser_chat_room_user2TouserNestedInput
    harvest?: harvestUncheckedUpdateManyWithoutUserNestedInput
    message_message_sender_idTouser?: messageUncheckedUpdateManyWithoutUser_message_sender_idTouserNestedInput
    message_message_recipient_idTouser?: messageUncheckedUpdateManyWithoutUser_message_recipient_idTouserNestedInput
    order_order_buyer_idTouser?: orderUncheckedUpdateManyWithoutUser_order_buyer_idTouserNestedInput
    review_review_reviewer_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewer_idTouserNestedInput
    review_review_reviewee_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewee_idTouserNestedInput
  }

  export type userUpsertWithoutChat_room_chat_room_user2TouserInput = {
    update: XOR<userUpdateWithoutChat_room_chat_room_user2TouserInput, userUncheckedUpdateWithoutChat_room_chat_room_user2TouserInput>
    create: XOR<userCreateWithoutChat_room_chat_room_user2TouserInput, userUncheckedCreateWithoutChat_room_chat_room_user2TouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutChat_room_chat_room_user2TouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutChat_room_chat_room_user2TouserInput, userUncheckedUpdateWithoutChat_room_chat_room_user2TouserInput>
  }

  export type userUpdateWithoutChat_room_chat_room_user2TouserInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    farm_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUpdateManyWithoutUser_chat_room_user1TouserNestedInput
    harvest?: harvestUpdateManyWithoutUserNestedInput
    message_message_sender_idTouser?: messageUpdateManyWithoutUser_message_sender_idTouserNestedInput
    message_message_recipient_idTouser?: messageUpdateManyWithoutUser_message_recipient_idTouserNestedInput
    order_order_buyer_idTouser?: orderUpdateManyWithoutUser_order_buyer_idTouserNestedInput
    review_review_reviewer_idTouser?: reviewUpdateManyWithoutUser_review_reviewer_idTouserNestedInput
    review_review_reviewee_idTouser?: reviewUpdateManyWithoutUser_review_reviewee_idTouserNestedInput
  }

  export type userUncheckedUpdateWithoutChat_room_chat_room_user2TouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    farm_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUncheckedUpdateManyWithoutUser_chat_room_user1TouserNestedInput
    harvest?: harvestUncheckedUpdateManyWithoutUserNestedInput
    message_message_sender_idTouser?: messageUncheckedUpdateManyWithoutUser_message_sender_idTouserNestedInput
    message_message_recipient_idTouser?: messageUncheckedUpdateManyWithoutUser_message_recipient_idTouserNestedInput
    order_order_buyer_idTouser?: orderUncheckedUpdateManyWithoutUser_order_buyer_idTouserNestedInput
    review_review_reviewer_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewer_idTouserNestedInput
    review_review_reviewee_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewee_idTouserNestedInput
  }

  export type messageUpsertWithWhereUniqueWithoutChat_roomInput = {
    where: messageWhereUniqueInput
    update: XOR<messageUpdateWithoutChat_roomInput, messageUncheckedUpdateWithoutChat_roomInput>
    create: XOR<messageCreateWithoutChat_roomInput, messageUncheckedCreateWithoutChat_roomInput>
  }

  export type messageUpdateWithWhereUniqueWithoutChat_roomInput = {
    where: messageWhereUniqueInput
    data: XOR<messageUpdateWithoutChat_roomInput, messageUncheckedUpdateWithoutChat_roomInput>
  }

  export type messageUpdateManyWithWhereWithoutChat_roomInput = {
    where: messageScalarWhereInput
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyWithoutChat_roomInput>
  }

  export type messageScalarWhereInput = {
    AND?: messageScalarWhereInput | messageScalarWhereInput[]
    OR?: messageScalarWhereInput[]
    NOT?: messageScalarWhereInput | messageScalarWhereInput[]
    id?: IntFilter<"message"> | number
    chat_room_id?: IntFilter<"message"> | number
    sender_id?: IntFilter<"message"> | number
    recipient_id?: IntFilter<"message"> | number
    text?: StringFilter<"message"> | string
    read?: BoolFilter<"message"> | boolean
    received?: BoolFilter<"message"> | boolean
    reply_to_id?: IntNullableFilter<"message"> | number | null
    created_at?: DateTimeNullableFilter<"message"> | Date | string | null
  }

  export type userCreateWithoutHarvestInput = {
    full_name: string
    email: string
    passwd: string
    profile?: string | null
    phone?: string | null
    location?: string | null
    bio?: string | null
    farm_name?: string | null
    business_name?: string | null
    is_verified?: boolean
    is_active?: boolean
    type: $Enums.user_type
    created_at?: Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomCreateNestedManyWithoutUser_chat_room_user1TouserInput
    chat_room_chat_room_user2Touser?: chat_roomCreateNestedManyWithoutUser_chat_room_user2TouserInput
    message_message_sender_idTouser?: messageCreateNestedManyWithoutUser_message_sender_idTouserInput
    message_message_recipient_idTouser?: messageCreateNestedManyWithoutUser_message_recipient_idTouserInput
    order_order_buyer_idTouser?: orderCreateNestedManyWithoutUser_order_buyer_idTouserInput
    review_review_reviewer_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewer_idTouserInput
    review_review_reviewee_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewee_idTouserInput
  }

  export type userUncheckedCreateWithoutHarvestInput = {
    id?: number
    full_name: string
    email: string
    passwd: string
    profile?: string | null
    phone?: string | null
    location?: string | null
    bio?: string | null
    farm_name?: string | null
    business_name?: string | null
    is_verified?: boolean
    is_active?: boolean
    type: $Enums.user_type
    created_at?: Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUncheckedCreateNestedManyWithoutUser_chat_room_user1TouserInput
    chat_room_chat_room_user2Touser?: chat_roomUncheckedCreateNestedManyWithoutUser_chat_room_user2TouserInput
    message_message_sender_idTouser?: messageUncheckedCreateNestedManyWithoutUser_message_sender_idTouserInput
    message_message_recipient_idTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipient_idTouserInput
    order_order_buyer_idTouser?: orderUncheckedCreateNestedManyWithoutUser_order_buyer_idTouserInput
    review_review_reviewer_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewer_idTouserInput
    review_review_reviewee_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewee_idTouserInput
  }

  export type userCreateOrConnectWithoutHarvestInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutHarvestInput, userUncheckedCreateWithoutHarvestInput>
  }

  export type harvest_categoryCreateWithoutHarvestInput = {
    category: string
  }

  export type harvest_categoryUncheckedCreateWithoutHarvestInput = {
    category: string
  }

  export type harvest_categoryCreateOrConnectWithoutHarvestInput = {
    where: harvest_categoryWhereUniqueInput
    create: XOR<harvest_categoryCreateWithoutHarvestInput, harvest_categoryUncheckedCreateWithoutHarvestInput>
  }

  export type harvest_imageCreateWithoutHarvestInput = {
    img_url: string
  }

  export type harvest_imageUncheckedCreateWithoutHarvestInput = {
    id?: number
    img_url: string
  }

  export type harvest_imageCreateOrConnectWithoutHarvestInput = {
    where: harvest_imageWhereUniqueInput
    create: XOR<harvest_imageCreateWithoutHarvestInput, harvest_imageUncheckedCreateWithoutHarvestInput>
  }

  export type harvest_imageCreateManyHarvestInputEnvelope = {
    data: harvest_imageCreateManyHarvestInput | harvest_imageCreateManyHarvestInput[]
    skipDuplicates?: boolean
  }

  export type orderCreateWithoutHarvestInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_status
    note?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_order_buyer_idTouser: userCreateNestedOneWithoutOrder_order_buyer_idTouserInput
    payment?: paymentCreateNestedManyWithoutOrderInput
    review?: reviewCreateNestedManyWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutHarvestInput = {
    id?: number
    buyer_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_status
    note?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    payment?: paymentUncheckedCreateNestedManyWithoutOrderInput
    review?: reviewUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderCreateOrConnectWithoutHarvestInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutHarvestInput, orderUncheckedCreateWithoutHarvestInput>
  }

  export type orderCreateManyHarvestInputEnvelope = {
    data: orderCreateManyHarvestInput | orderCreateManyHarvestInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutHarvestInput = {
    update: XOR<userUpdateWithoutHarvestInput, userUncheckedUpdateWithoutHarvestInput>
    create: XOR<userCreateWithoutHarvestInput, userUncheckedCreateWithoutHarvestInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutHarvestInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutHarvestInput, userUncheckedUpdateWithoutHarvestInput>
  }

  export type userUpdateWithoutHarvestInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    farm_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUpdateManyWithoutUser_chat_room_user1TouserNestedInput
    chat_room_chat_room_user2Touser?: chat_roomUpdateManyWithoutUser_chat_room_user2TouserNestedInput
    message_message_sender_idTouser?: messageUpdateManyWithoutUser_message_sender_idTouserNestedInput
    message_message_recipient_idTouser?: messageUpdateManyWithoutUser_message_recipient_idTouserNestedInput
    order_order_buyer_idTouser?: orderUpdateManyWithoutUser_order_buyer_idTouserNestedInput
    review_review_reviewer_idTouser?: reviewUpdateManyWithoutUser_review_reviewer_idTouserNestedInput
    review_review_reviewee_idTouser?: reviewUpdateManyWithoutUser_review_reviewee_idTouserNestedInput
  }

  export type userUncheckedUpdateWithoutHarvestInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    farm_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUncheckedUpdateManyWithoutUser_chat_room_user1TouserNestedInput
    chat_room_chat_room_user2Touser?: chat_roomUncheckedUpdateManyWithoutUser_chat_room_user2TouserNestedInput
    message_message_sender_idTouser?: messageUncheckedUpdateManyWithoutUser_message_sender_idTouserNestedInput
    message_message_recipient_idTouser?: messageUncheckedUpdateManyWithoutUser_message_recipient_idTouserNestedInput
    order_order_buyer_idTouser?: orderUncheckedUpdateManyWithoutUser_order_buyer_idTouserNestedInput
    review_review_reviewer_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewer_idTouserNestedInput
    review_review_reviewee_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewee_idTouserNestedInput
  }

  export type harvest_categoryUpsertWithoutHarvestInput = {
    update: XOR<harvest_categoryUpdateWithoutHarvestInput, harvest_categoryUncheckedUpdateWithoutHarvestInput>
    create: XOR<harvest_categoryCreateWithoutHarvestInput, harvest_categoryUncheckedCreateWithoutHarvestInput>
    where?: harvest_categoryWhereInput
  }

  export type harvest_categoryUpdateToOneWithWhereWithoutHarvestInput = {
    where?: harvest_categoryWhereInput
    data: XOR<harvest_categoryUpdateWithoutHarvestInput, harvest_categoryUncheckedUpdateWithoutHarvestInput>
  }

  export type harvest_categoryUpdateWithoutHarvestInput = {
    category?: StringFieldUpdateOperationsInput | string
  }

  export type harvest_categoryUncheckedUpdateWithoutHarvestInput = {
    category?: StringFieldUpdateOperationsInput | string
  }

  export type harvest_imageUpsertWithWhereUniqueWithoutHarvestInput = {
    where: harvest_imageWhereUniqueInput
    update: XOR<harvest_imageUpdateWithoutHarvestInput, harvest_imageUncheckedUpdateWithoutHarvestInput>
    create: XOR<harvest_imageCreateWithoutHarvestInput, harvest_imageUncheckedCreateWithoutHarvestInput>
  }

  export type harvest_imageUpdateWithWhereUniqueWithoutHarvestInput = {
    where: harvest_imageWhereUniqueInput
    data: XOR<harvest_imageUpdateWithoutHarvestInput, harvest_imageUncheckedUpdateWithoutHarvestInput>
  }

  export type harvest_imageUpdateManyWithWhereWithoutHarvestInput = {
    where: harvest_imageScalarWhereInput
    data: XOR<harvest_imageUpdateManyMutationInput, harvest_imageUncheckedUpdateManyWithoutHarvestInput>
  }

  export type harvest_imageScalarWhereInput = {
    AND?: harvest_imageScalarWhereInput | harvest_imageScalarWhereInput[]
    OR?: harvest_imageScalarWhereInput[]
    NOT?: harvest_imageScalarWhereInput | harvest_imageScalarWhereInput[]
    id?: IntFilter<"harvest_image"> | number
    harvest_id?: IntFilter<"harvest_image"> | number
    img_url?: StringFilter<"harvest_image"> | string
  }

  export type orderUpsertWithWhereUniqueWithoutHarvestInput = {
    where: orderWhereUniqueInput
    update: XOR<orderUpdateWithoutHarvestInput, orderUncheckedUpdateWithoutHarvestInput>
    create: XOR<orderCreateWithoutHarvestInput, orderUncheckedCreateWithoutHarvestInput>
  }

  export type orderUpdateWithWhereUniqueWithoutHarvestInput = {
    where: orderWhereUniqueInput
    data: XOR<orderUpdateWithoutHarvestInput, orderUncheckedUpdateWithoutHarvestInput>
  }

  export type orderUpdateManyWithWhereWithoutHarvestInput = {
    where: orderScalarWhereInput
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutHarvestInput>
  }

  export type orderScalarWhereInput = {
    AND?: orderScalarWhereInput | orderScalarWhereInput[]
    OR?: orderScalarWhereInput[]
    NOT?: orderScalarWhereInput | orderScalarWhereInput[]
    id?: IntFilter<"order"> | number
    buyer_id?: IntFilter<"order"> | number
    harvest_id?: IntFilter<"order"> | number
    quantity?: IntFilter<"order"> | number
    unit_price?: DecimalFilter<"order"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"order"> | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusFilter<"order"> | $Enums.order_status
    note?: StringNullableFilter<"order"> | string | null
    created_at?: DateTimeNullableFilter<"order"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"order"> | Date | string | null
  }

  export type harvestCreateWithoutHarvest_categoryInput = {
    quantity: number
    unit: string
    name: string
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    location?: string | null
    is_available?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user: userCreateNestedOneWithoutHarvestInput
    harvest_image?: harvest_imageCreateNestedManyWithoutHarvestInput
    order?: orderCreateNestedManyWithoutHarvestInput
  }

  export type harvestUncheckedCreateWithoutHarvest_categoryInput = {
    id?: number
    quantity: number
    unit: string
    owner_id: number
    name: string
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    location?: string | null
    is_available?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    harvest_image?: harvest_imageUncheckedCreateNestedManyWithoutHarvestInput
    order?: orderUncheckedCreateNestedManyWithoutHarvestInput
  }

  export type harvestCreateOrConnectWithoutHarvest_categoryInput = {
    where: harvestWhereUniqueInput
    create: XOR<harvestCreateWithoutHarvest_categoryInput, harvestUncheckedCreateWithoutHarvest_categoryInput>
  }

  export type harvestCreateManyHarvest_categoryInputEnvelope = {
    data: harvestCreateManyHarvest_categoryInput | harvestCreateManyHarvest_categoryInput[]
    skipDuplicates?: boolean
  }

  export type harvestUpsertWithWhereUniqueWithoutHarvest_categoryInput = {
    where: harvestWhereUniqueInput
    update: XOR<harvestUpdateWithoutHarvest_categoryInput, harvestUncheckedUpdateWithoutHarvest_categoryInput>
    create: XOR<harvestCreateWithoutHarvest_categoryInput, harvestUncheckedCreateWithoutHarvest_categoryInput>
  }

  export type harvestUpdateWithWhereUniqueWithoutHarvest_categoryInput = {
    where: harvestWhereUniqueInput
    data: XOR<harvestUpdateWithoutHarvest_categoryInput, harvestUncheckedUpdateWithoutHarvest_categoryInput>
  }

  export type harvestUpdateManyWithWhereWithoutHarvest_categoryInput = {
    where: harvestScalarWhereInput
    data: XOR<harvestUpdateManyMutationInput, harvestUncheckedUpdateManyWithoutHarvest_categoryInput>
  }

  export type harvestScalarWhereInput = {
    AND?: harvestScalarWhereInput | harvestScalarWhereInput[]
    OR?: harvestScalarWhereInput[]
    NOT?: harvestScalarWhereInput | harvestScalarWhereInput[]
    id?: IntFilter<"harvest"> | number
    quantity?: IntFilter<"harvest"> | number
    unit?: StringFilter<"harvest"> | string
    owner_id?: IntFilter<"harvest"> | number
    name?: StringFilter<"harvest"> | string
    category?: StringFilter<"harvest"> | string
    unit_price?: DecimalFilter<"harvest"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"harvest"> | string | null
    location?: StringNullableFilter<"harvest"> | string | null
    is_available?: BoolFilter<"harvest"> | boolean
    created_at?: DateTimeNullableFilter<"harvest"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"harvest"> | Date | string | null
  }

  export type harvestCreateWithoutHarvest_imageInput = {
    quantity: number
    unit: string
    name: string
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    location?: string | null
    is_available?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user: userCreateNestedOneWithoutHarvestInput
    harvest_category: harvest_categoryCreateNestedOneWithoutHarvestInput
    order?: orderCreateNestedManyWithoutHarvestInput
  }

  export type harvestUncheckedCreateWithoutHarvest_imageInput = {
    id?: number
    quantity: number
    unit: string
    owner_id: number
    name: string
    category: string
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    location?: string | null
    is_available?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order?: orderUncheckedCreateNestedManyWithoutHarvestInput
  }

  export type harvestCreateOrConnectWithoutHarvest_imageInput = {
    where: harvestWhereUniqueInput
    create: XOR<harvestCreateWithoutHarvest_imageInput, harvestUncheckedCreateWithoutHarvest_imageInput>
  }

  export type harvestUpsertWithoutHarvest_imageInput = {
    update: XOR<harvestUpdateWithoutHarvest_imageInput, harvestUncheckedUpdateWithoutHarvest_imageInput>
    create: XOR<harvestCreateWithoutHarvest_imageInput, harvestUncheckedCreateWithoutHarvest_imageInput>
    where?: harvestWhereInput
  }

  export type harvestUpdateToOneWithWhereWithoutHarvest_imageInput = {
    where?: harvestWhereInput
    data: XOR<harvestUpdateWithoutHarvest_imageInput, harvestUncheckedUpdateWithoutHarvest_imageInput>
  }

  export type harvestUpdateWithoutHarvest_imageInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutHarvestNestedInput
    harvest_category?: harvest_categoryUpdateOneRequiredWithoutHarvestNestedInput
    order?: orderUpdateManyWithoutHarvestNestedInput
  }

  export type harvestUncheckedUpdateWithoutHarvest_imageInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: orderUncheckedUpdateManyWithoutHarvestNestedInput
  }

  export type chat_roomCreateWithoutMessageInput = {
    created_at?: Date | string | null
    user_chat_room_user1Touser: userCreateNestedOneWithoutChat_room_chat_room_user1TouserInput
    user_chat_room_user2Touser: userCreateNestedOneWithoutChat_room_chat_room_user2TouserInput
  }

  export type chat_roomUncheckedCreateWithoutMessageInput = {
    id?: number
    user1: number
    user2: number
    created_at?: Date | string | null
  }

  export type chat_roomCreateOrConnectWithoutMessageInput = {
    where: chat_roomWhereUniqueInput
    create: XOR<chat_roomCreateWithoutMessageInput, chat_roomUncheckedCreateWithoutMessageInput>
  }

  export type userCreateWithoutMessage_message_sender_idTouserInput = {
    full_name: string
    email: string
    passwd: string
    profile?: string | null
    phone?: string | null
    location?: string | null
    bio?: string | null
    farm_name?: string | null
    business_name?: string | null
    is_verified?: boolean
    is_active?: boolean
    type: $Enums.user_type
    created_at?: Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomCreateNestedManyWithoutUser_chat_room_user1TouserInput
    chat_room_chat_room_user2Touser?: chat_roomCreateNestedManyWithoutUser_chat_room_user2TouserInput
    harvest?: harvestCreateNestedManyWithoutUserInput
    message_message_recipient_idTouser?: messageCreateNestedManyWithoutUser_message_recipient_idTouserInput
    order_order_buyer_idTouser?: orderCreateNestedManyWithoutUser_order_buyer_idTouserInput
    review_review_reviewer_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewer_idTouserInput
    review_review_reviewee_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewee_idTouserInput
  }

  export type userUncheckedCreateWithoutMessage_message_sender_idTouserInput = {
    id?: number
    full_name: string
    email: string
    passwd: string
    profile?: string | null
    phone?: string | null
    location?: string | null
    bio?: string | null
    farm_name?: string | null
    business_name?: string | null
    is_verified?: boolean
    is_active?: boolean
    type: $Enums.user_type
    created_at?: Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUncheckedCreateNestedManyWithoutUser_chat_room_user1TouserInput
    chat_room_chat_room_user2Touser?: chat_roomUncheckedCreateNestedManyWithoutUser_chat_room_user2TouserInput
    harvest?: harvestUncheckedCreateNestedManyWithoutUserInput
    message_message_recipient_idTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipient_idTouserInput
    order_order_buyer_idTouser?: orderUncheckedCreateNestedManyWithoutUser_order_buyer_idTouserInput
    review_review_reviewer_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewer_idTouserInput
    review_review_reviewee_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewee_idTouserInput
  }

  export type userCreateOrConnectWithoutMessage_message_sender_idTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMessage_message_sender_idTouserInput, userUncheckedCreateWithoutMessage_message_sender_idTouserInput>
  }

  export type userCreateWithoutMessage_message_recipient_idTouserInput = {
    full_name: string
    email: string
    passwd: string
    profile?: string | null
    phone?: string | null
    location?: string | null
    bio?: string | null
    farm_name?: string | null
    business_name?: string | null
    is_verified?: boolean
    is_active?: boolean
    type: $Enums.user_type
    created_at?: Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomCreateNestedManyWithoutUser_chat_room_user1TouserInput
    chat_room_chat_room_user2Touser?: chat_roomCreateNestedManyWithoutUser_chat_room_user2TouserInput
    harvest?: harvestCreateNestedManyWithoutUserInput
    message_message_sender_idTouser?: messageCreateNestedManyWithoutUser_message_sender_idTouserInput
    order_order_buyer_idTouser?: orderCreateNestedManyWithoutUser_order_buyer_idTouserInput
    review_review_reviewer_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewer_idTouserInput
    review_review_reviewee_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewee_idTouserInput
  }

  export type userUncheckedCreateWithoutMessage_message_recipient_idTouserInput = {
    id?: number
    full_name: string
    email: string
    passwd: string
    profile?: string | null
    phone?: string | null
    location?: string | null
    bio?: string | null
    farm_name?: string | null
    business_name?: string | null
    is_verified?: boolean
    is_active?: boolean
    type: $Enums.user_type
    created_at?: Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUncheckedCreateNestedManyWithoutUser_chat_room_user1TouserInput
    chat_room_chat_room_user2Touser?: chat_roomUncheckedCreateNestedManyWithoutUser_chat_room_user2TouserInput
    harvest?: harvestUncheckedCreateNestedManyWithoutUserInput
    message_message_sender_idTouser?: messageUncheckedCreateNestedManyWithoutUser_message_sender_idTouserInput
    order_order_buyer_idTouser?: orderUncheckedCreateNestedManyWithoutUser_order_buyer_idTouserInput
    review_review_reviewer_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewer_idTouserInput
    review_review_reviewee_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewee_idTouserInput
  }

  export type userCreateOrConnectWithoutMessage_message_recipient_idTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMessage_message_recipient_idTouserInput, userUncheckedCreateWithoutMessage_message_recipient_idTouserInput>
  }

  export type messageCreateWithoutOther_messageInput = {
    text: string
    read?: boolean
    received?: boolean
    created_at?: Date | string | null
    chat_room: chat_roomCreateNestedOneWithoutMessageInput
    user_message_sender_idTouser: userCreateNestedOneWithoutMessage_message_sender_idTouserInput
    user_message_recipient_idTouser: userCreateNestedOneWithoutMessage_message_recipient_idTouserInput
    message?: messageCreateNestedOneWithoutOther_messageInput
  }

  export type messageUncheckedCreateWithoutOther_messageInput = {
    id?: number
    chat_room_id: number
    sender_id: number
    recipient_id: number
    text: string
    read?: boolean
    received?: boolean
    reply_to_id?: number | null
    created_at?: Date | string | null
  }

  export type messageCreateOrConnectWithoutOther_messageInput = {
    where: messageWhereUniqueInput
    create: XOR<messageCreateWithoutOther_messageInput, messageUncheckedCreateWithoutOther_messageInput>
  }

  export type messageCreateWithoutMessageInput = {
    text: string
    read?: boolean
    received?: boolean
    created_at?: Date | string | null
    chat_room: chat_roomCreateNestedOneWithoutMessageInput
    user_message_sender_idTouser: userCreateNestedOneWithoutMessage_message_sender_idTouserInput
    user_message_recipient_idTouser: userCreateNestedOneWithoutMessage_message_recipient_idTouserInput
    other_message?: messageCreateNestedManyWithoutMessageInput
  }

  export type messageUncheckedCreateWithoutMessageInput = {
    id?: number
    chat_room_id: number
    sender_id: number
    recipient_id: number
    text: string
    read?: boolean
    received?: boolean
    created_at?: Date | string | null
    other_message?: messageUncheckedCreateNestedManyWithoutMessageInput
  }

  export type messageCreateOrConnectWithoutMessageInput = {
    where: messageWhereUniqueInput
    create: XOR<messageCreateWithoutMessageInput, messageUncheckedCreateWithoutMessageInput>
  }

  export type messageCreateManyMessageInputEnvelope = {
    data: messageCreateManyMessageInput | messageCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type chat_roomUpsertWithoutMessageInput = {
    update: XOR<chat_roomUpdateWithoutMessageInput, chat_roomUncheckedUpdateWithoutMessageInput>
    create: XOR<chat_roomCreateWithoutMessageInput, chat_roomUncheckedCreateWithoutMessageInput>
    where?: chat_roomWhereInput
  }

  export type chat_roomUpdateToOneWithWhereWithoutMessageInput = {
    where?: chat_roomWhereInput
    data: XOR<chat_roomUpdateWithoutMessageInput, chat_roomUncheckedUpdateWithoutMessageInput>
  }

  export type chat_roomUpdateWithoutMessageInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_chat_room_user1Touser?: userUpdateOneRequiredWithoutChat_room_chat_room_user1TouserNestedInput
    user_chat_room_user2Touser?: userUpdateOneRequiredWithoutChat_room_chat_room_user2TouserNestedInput
  }

  export type chat_roomUncheckedUpdateWithoutMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    user1?: IntFieldUpdateOperationsInput | number
    user2?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUpsertWithoutMessage_message_sender_idTouserInput = {
    update: XOR<userUpdateWithoutMessage_message_sender_idTouserInput, userUncheckedUpdateWithoutMessage_message_sender_idTouserInput>
    create: XOR<userCreateWithoutMessage_message_sender_idTouserInput, userUncheckedCreateWithoutMessage_message_sender_idTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMessage_message_sender_idTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMessage_message_sender_idTouserInput, userUncheckedUpdateWithoutMessage_message_sender_idTouserInput>
  }

  export type userUpdateWithoutMessage_message_sender_idTouserInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    farm_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUpdateManyWithoutUser_chat_room_user1TouserNestedInput
    chat_room_chat_room_user2Touser?: chat_roomUpdateManyWithoutUser_chat_room_user2TouserNestedInput
    harvest?: harvestUpdateManyWithoutUserNestedInput
    message_message_recipient_idTouser?: messageUpdateManyWithoutUser_message_recipient_idTouserNestedInput
    order_order_buyer_idTouser?: orderUpdateManyWithoutUser_order_buyer_idTouserNestedInput
    review_review_reviewer_idTouser?: reviewUpdateManyWithoutUser_review_reviewer_idTouserNestedInput
    review_review_reviewee_idTouser?: reviewUpdateManyWithoutUser_review_reviewee_idTouserNestedInput
  }

  export type userUncheckedUpdateWithoutMessage_message_sender_idTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    farm_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUncheckedUpdateManyWithoutUser_chat_room_user1TouserNestedInput
    chat_room_chat_room_user2Touser?: chat_roomUncheckedUpdateManyWithoutUser_chat_room_user2TouserNestedInput
    harvest?: harvestUncheckedUpdateManyWithoutUserNestedInput
    message_message_recipient_idTouser?: messageUncheckedUpdateManyWithoutUser_message_recipient_idTouserNestedInput
    order_order_buyer_idTouser?: orderUncheckedUpdateManyWithoutUser_order_buyer_idTouserNestedInput
    review_review_reviewer_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewer_idTouserNestedInput
    review_review_reviewee_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewee_idTouserNestedInput
  }

  export type userUpsertWithoutMessage_message_recipient_idTouserInput = {
    update: XOR<userUpdateWithoutMessage_message_recipient_idTouserInput, userUncheckedUpdateWithoutMessage_message_recipient_idTouserInput>
    create: XOR<userCreateWithoutMessage_message_recipient_idTouserInput, userUncheckedCreateWithoutMessage_message_recipient_idTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutMessage_message_recipient_idTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutMessage_message_recipient_idTouserInput, userUncheckedUpdateWithoutMessage_message_recipient_idTouserInput>
  }

  export type userUpdateWithoutMessage_message_recipient_idTouserInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    farm_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUpdateManyWithoutUser_chat_room_user1TouserNestedInput
    chat_room_chat_room_user2Touser?: chat_roomUpdateManyWithoutUser_chat_room_user2TouserNestedInput
    harvest?: harvestUpdateManyWithoutUserNestedInput
    message_message_sender_idTouser?: messageUpdateManyWithoutUser_message_sender_idTouserNestedInput
    order_order_buyer_idTouser?: orderUpdateManyWithoutUser_order_buyer_idTouserNestedInput
    review_review_reviewer_idTouser?: reviewUpdateManyWithoutUser_review_reviewer_idTouserNestedInput
    review_review_reviewee_idTouser?: reviewUpdateManyWithoutUser_review_reviewee_idTouserNestedInput
  }

  export type userUncheckedUpdateWithoutMessage_message_recipient_idTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    farm_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUncheckedUpdateManyWithoutUser_chat_room_user1TouserNestedInput
    chat_room_chat_room_user2Touser?: chat_roomUncheckedUpdateManyWithoutUser_chat_room_user2TouserNestedInput
    harvest?: harvestUncheckedUpdateManyWithoutUserNestedInput
    message_message_sender_idTouser?: messageUncheckedUpdateManyWithoutUser_message_sender_idTouserNestedInput
    order_order_buyer_idTouser?: orderUncheckedUpdateManyWithoutUser_order_buyer_idTouserNestedInput
    review_review_reviewer_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewer_idTouserNestedInput
    review_review_reviewee_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewee_idTouserNestedInput
  }

  export type messageUpsertWithoutOther_messageInput = {
    update: XOR<messageUpdateWithoutOther_messageInput, messageUncheckedUpdateWithoutOther_messageInput>
    create: XOR<messageCreateWithoutOther_messageInput, messageUncheckedCreateWithoutOther_messageInput>
    where?: messageWhereInput
  }

  export type messageUpdateToOneWithWhereWithoutOther_messageInput = {
    where?: messageWhereInput
    data: XOR<messageUpdateWithoutOther_messageInput, messageUncheckedUpdateWithoutOther_messageInput>
  }

  export type messageUpdateWithoutOther_messageInput = {
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    received?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room?: chat_roomUpdateOneRequiredWithoutMessageNestedInput
    user_message_sender_idTouser?: userUpdateOneRequiredWithoutMessage_message_sender_idTouserNestedInput
    user_message_recipient_idTouser?: userUpdateOneRequiredWithoutMessage_message_recipient_idTouserNestedInput
    message?: messageUpdateOneWithoutOther_messageNestedInput
  }

  export type messageUncheckedUpdateWithoutOther_messageInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_room_id?: IntFieldUpdateOperationsInput | number
    sender_id?: IntFieldUpdateOperationsInput | number
    recipient_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    received?: BoolFieldUpdateOperationsInput | boolean
    reply_to_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messageUpsertWithWhereUniqueWithoutMessageInput = {
    where: messageWhereUniqueInput
    update: XOR<messageUpdateWithoutMessageInput, messageUncheckedUpdateWithoutMessageInput>
    create: XOR<messageCreateWithoutMessageInput, messageUncheckedCreateWithoutMessageInput>
  }

  export type messageUpdateWithWhereUniqueWithoutMessageInput = {
    where: messageWhereUniqueInput
    data: XOR<messageUpdateWithoutMessageInput, messageUncheckedUpdateWithoutMessageInput>
  }

  export type messageUpdateManyWithWhereWithoutMessageInput = {
    where: messageScalarWhereInput
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyWithoutMessageInput>
  }

  export type chat_roomCreateWithoutUser_chat_room_user1TouserInput = {
    created_at?: Date | string | null
    user_chat_room_user2Touser: userCreateNestedOneWithoutChat_room_chat_room_user2TouserInput
    message?: messageCreateNestedManyWithoutChat_roomInput
  }

  export type chat_roomUncheckedCreateWithoutUser_chat_room_user1TouserInput = {
    id?: number
    user2: number
    created_at?: Date | string | null
    message?: messageUncheckedCreateNestedManyWithoutChat_roomInput
  }

  export type chat_roomCreateOrConnectWithoutUser_chat_room_user1TouserInput = {
    where: chat_roomWhereUniqueInput
    create: XOR<chat_roomCreateWithoutUser_chat_room_user1TouserInput, chat_roomUncheckedCreateWithoutUser_chat_room_user1TouserInput>
  }

  export type chat_roomCreateManyUser_chat_room_user1TouserInputEnvelope = {
    data: chat_roomCreateManyUser_chat_room_user1TouserInput | chat_roomCreateManyUser_chat_room_user1TouserInput[]
    skipDuplicates?: boolean
  }

  export type chat_roomCreateWithoutUser_chat_room_user2TouserInput = {
    created_at?: Date | string | null
    user_chat_room_user1Touser: userCreateNestedOneWithoutChat_room_chat_room_user1TouserInput
    message?: messageCreateNestedManyWithoutChat_roomInput
  }

  export type chat_roomUncheckedCreateWithoutUser_chat_room_user2TouserInput = {
    id?: number
    user1: number
    created_at?: Date | string | null
    message?: messageUncheckedCreateNestedManyWithoutChat_roomInput
  }

  export type chat_roomCreateOrConnectWithoutUser_chat_room_user2TouserInput = {
    where: chat_roomWhereUniqueInput
    create: XOR<chat_roomCreateWithoutUser_chat_room_user2TouserInput, chat_roomUncheckedCreateWithoutUser_chat_room_user2TouserInput>
  }

  export type chat_roomCreateManyUser_chat_room_user2TouserInputEnvelope = {
    data: chat_roomCreateManyUser_chat_room_user2TouserInput | chat_roomCreateManyUser_chat_room_user2TouserInput[]
    skipDuplicates?: boolean
  }

  export type harvestCreateWithoutUserInput = {
    quantity: number
    unit: string
    name: string
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    location?: string | null
    is_available?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    harvest_category: harvest_categoryCreateNestedOneWithoutHarvestInput
    harvest_image?: harvest_imageCreateNestedManyWithoutHarvestInput
    order?: orderCreateNestedManyWithoutHarvestInput
  }

  export type harvestUncheckedCreateWithoutUserInput = {
    id?: number
    quantity: number
    unit: string
    name: string
    category: string
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    location?: string | null
    is_available?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    harvest_image?: harvest_imageUncheckedCreateNestedManyWithoutHarvestInput
    order?: orderUncheckedCreateNestedManyWithoutHarvestInput
  }

  export type harvestCreateOrConnectWithoutUserInput = {
    where: harvestWhereUniqueInput
    create: XOR<harvestCreateWithoutUserInput, harvestUncheckedCreateWithoutUserInput>
  }

  export type harvestCreateManyUserInputEnvelope = {
    data: harvestCreateManyUserInput | harvestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type messageCreateWithoutUser_message_sender_idTouserInput = {
    text: string
    read?: boolean
    received?: boolean
    created_at?: Date | string | null
    chat_room: chat_roomCreateNestedOneWithoutMessageInput
    user_message_recipient_idTouser: userCreateNestedOneWithoutMessage_message_recipient_idTouserInput
    message?: messageCreateNestedOneWithoutOther_messageInput
    other_message?: messageCreateNestedManyWithoutMessageInput
  }

  export type messageUncheckedCreateWithoutUser_message_sender_idTouserInput = {
    id?: number
    chat_room_id: number
    recipient_id: number
    text: string
    read?: boolean
    received?: boolean
    reply_to_id?: number | null
    created_at?: Date | string | null
    other_message?: messageUncheckedCreateNestedManyWithoutMessageInput
  }

  export type messageCreateOrConnectWithoutUser_message_sender_idTouserInput = {
    where: messageWhereUniqueInput
    create: XOR<messageCreateWithoutUser_message_sender_idTouserInput, messageUncheckedCreateWithoutUser_message_sender_idTouserInput>
  }

  export type messageCreateManyUser_message_sender_idTouserInputEnvelope = {
    data: messageCreateManyUser_message_sender_idTouserInput | messageCreateManyUser_message_sender_idTouserInput[]
    skipDuplicates?: boolean
  }

  export type messageCreateWithoutUser_message_recipient_idTouserInput = {
    text: string
    read?: boolean
    received?: boolean
    created_at?: Date | string | null
    chat_room: chat_roomCreateNestedOneWithoutMessageInput
    user_message_sender_idTouser: userCreateNestedOneWithoutMessage_message_sender_idTouserInput
    message?: messageCreateNestedOneWithoutOther_messageInput
    other_message?: messageCreateNestedManyWithoutMessageInput
  }

  export type messageUncheckedCreateWithoutUser_message_recipient_idTouserInput = {
    id?: number
    chat_room_id: number
    sender_id: number
    text: string
    read?: boolean
    received?: boolean
    reply_to_id?: number | null
    created_at?: Date | string | null
    other_message?: messageUncheckedCreateNestedManyWithoutMessageInput
  }

  export type messageCreateOrConnectWithoutUser_message_recipient_idTouserInput = {
    where: messageWhereUniqueInput
    create: XOR<messageCreateWithoutUser_message_recipient_idTouserInput, messageUncheckedCreateWithoutUser_message_recipient_idTouserInput>
  }

  export type messageCreateManyUser_message_recipient_idTouserInputEnvelope = {
    data: messageCreateManyUser_message_recipient_idTouserInput | messageCreateManyUser_message_recipient_idTouserInput[]
    skipDuplicates?: boolean
  }

  export type orderCreateWithoutUser_order_buyer_idTouserInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_status
    note?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    harvest: harvestCreateNestedOneWithoutOrderInput
    payment?: paymentCreateNestedManyWithoutOrderInput
    review?: reviewCreateNestedManyWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutUser_order_buyer_idTouserInput = {
    id?: number
    harvest_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_status
    note?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    payment?: paymentUncheckedCreateNestedManyWithoutOrderInput
    review?: reviewUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderCreateOrConnectWithoutUser_order_buyer_idTouserInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutUser_order_buyer_idTouserInput, orderUncheckedCreateWithoutUser_order_buyer_idTouserInput>
  }

  export type orderCreateManyUser_order_buyer_idTouserInputEnvelope = {
    data: orderCreateManyUser_order_buyer_idTouserInput | orderCreateManyUser_order_buyer_idTouserInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutUser_review_reviewer_idTouserInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string | null
    user_review_reviewee_idTouser: userCreateNestedOneWithoutReview_review_reviewee_idTouserInput
    order: orderCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput = {
    id?: number
    reviewee_id: number
    order_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
  }

  export type reviewCreateOrConnectWithoutUser_review_reviewer_idTouserInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutUser_review_reviewer_idTouserInput, reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput>
  }

  export type reviewCreateManyUser_review_reviewer_idTouserInputEnvelope = {
    data: reviewCreateManyUser_review_reviewer_idTouserInput | reviewCreateManyUser_review_reviewer_idTouserInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutUser_review_reviewee_idTouserInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string | null
    user_review_reviewer_idTouser: userCreateNestedOneWithoutReview_review_reviewer_idTouserInput
    order: orderCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput = {
    id?: number
    reviewer_id: number
    order_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
  }

  export type reviewCreateOrConnectWithoutUser_review_reviewee_idTouserInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutUser_review_reviewee_idTouserInput, reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput>
  }

  export type reviewCreateManyUser_review_reviewee_idTouserInputEnvelope = {
    data: reviewCreateManyUser_review_reviewee_idTouserInput | reviewCreateManyUser_review_reviewee_idTouserInput[]
    skipDuplicates?: boolean
  }

  export type chat_roomUpsertWithWhereUniqueWithoutUser_chat_room_user1TouserInput = {
    where: chat_roomWhereUniqueInput
    update: XOR<chat_roomUpdateWithoutUser_chat_room_user1TouserInput, chat_roomUncheckedUpdateWithoutUser_chat_room_user1TouserInput>
    create: XOR<chat_roomCreateWithoutUser_chat_room_user1TouserInput, chat_roomUncheckedCreateWithoutUser_chat_room_user1TouserInput>
  }

  export type chat_roomUpdateWithWhereUniqueWithoutUser_chat_room_user1TouserInput = {
    where: chat_roomWhereUniqueInput
    data: XOR<chat_roomUpdateWithoutUser_chat_room_user1TouserInput, chat_roomUncheckedUpdateWithoutUser_chat_room_user1TouserInput>
  }

  export type chat_roomUpdateManyWithWhereWithoutUser_chat_room_user1TouserInput = {
    where: chat_roomScalarWhereInput
    data: XOR<chat_roomUpdateManyMutationInput, chat_roomUncheckedUpdateManyWithoutUser_chat_room_user1TouserInput>
  }

  export type chat_roomScalarWhereInput = {
    AND?: chat_roomScalarWhereInput | chat_roomScalarWhereInput[]
    OR?: chat_roomScalarWhereInput[]
    NOT?: chat_roomScalarWhereInput | chat_roomScalarWhereInput[]
    id?: IntFilter<"chat_room"> | number
    user1?: IntFilter<"chat_room"> | number
    user2?: IntFilter<"chat_room"> | number
    created_at?: DateTimeNullableFilter<"chat_room"> | Date | string | null
  }

  export type chat_roomUpsertWithWhereUniqueWithoutUser_chat_room_user2TouserInput = {
    where: chat_roomWhereUniqueInput
    update: XOR<chat_roomUpdateWithoutUser_chat_room_user2TouserInput, chat_roomUncheckedUpdateWithoutUser_chat_room_user2TouserInput>
    create: XOR<chat_roomCreateWithoutUser_chat_room_user2TouserInput, chat_roomUncheckedCreateWithoutUser_chat_room_user2TouserInput>
  }

  export type chat_roomUpdateWithWhereUniqueWithoutUser_chat_room_user2TouserInput = {
    where: chat_roomWhereUniqueInput
    data: XOR<chat_roomUpdateWithoutUser_chat_room_user2TouserInput, chat_roomUncheckedUpdateWithoutUser_chat_room_user2TouserInput>
  }

  export type chat_roomUpdateManyWithWhereWithoutUser_chat_room_user2TouserInput = {
    where: chat_roomScalarWhereInput
    data: XOR<chat_roomUpdateManyMutationInput, chat_roomUncheckedUpdateManyWithoutUser_chat_room_user2TouserInput>
  }

  export type harvestUpsertWithWhereUniqueWithoutUserInput = {
    where: harvestWhereUniqueInput
    update: XOR<harvestUpdateWithoutUserInput, harvestUncheckedUpdateWithoutUserInput>
    create: XOR<harvestCreateWithoutUserInput, harvestUncheckedCreateWithoutUserInput>
  }

  export type harvestUpdateWithWhereUniqueWithoutUserInput = {
    where: harvestWhereUniqueInput
    data: XOR<harvestUpdateWithoutUserInput, harvestUncheckedUpdateWithoutUserInput>
  }

  export type harvestUpdateManyWithWhereWithoutUserInput = {
    where: harvestScalarWhereInput
    data: XOR<harvestUpdateManyMutationInput, harvestUncheckedUpdateManyWithoutUserInput>
  }

  export type messageUpsertWithWhereUniqueWithoutUser_message_sender_idTouserInput = {
    where: messageWhereUniqueInput
    update: XOR<messageUpdateWithoutUser_message_sender_idTouserInput, messageUncheckedUpdateWithoutUser_message_sender_idTouserInput>
    create: XOR<messageCreateWithoutUser_message_sender_idTouserInput, messageUncheckedCreateWithoutUser_message_sender_idTouserInput>
  }

  export type messageUpdateWithWhereUniqueWithoutUser_message_sender_idTouserInput = {
    where: messageWhereUniqueInput
    data: XOR<messageUpdateWithoutUser_message_sender_idTouserInput, messageUncheckedUpdateWithoutUser_message_sender_idTouserInput>
  }

  export type messageUpdateManyWithWhereWithoutUser_message_sender_idTouserInput = {
    where: messageScalarWhereInput
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyWithoutUser_message_sender_idTouserInput>
  }

  export type messageUpsertWithWhereUniqueWithoutUser_message_recipient_idTouserInput = {
    where: messageWhereUniqueInput
    update: XOR<messageUpdateWithoutUser_message_recipient_idTouserInput, messageUncheckedUpdateWithoutUser_message_recipient_idTouserInput>
    create: XOR<messageCreateWithoutUser_message_recipient_idTouserInput, messageUncheckedCreateWithoutUser_message_recipient_idTouserInput>
  }

  export type messageUpdateWithWhereUniqueWithoutUser_message_recipient_idTouserInput = {
    where: messageWhereUniqueInput
    data: XOR<messageUpdateWithoutUser_message_recipient_idTouserInput, messageUncheckedUpdateWithoutUser_message_recipient_idTouserInput>
  }

  export type messageUpdateManyWithWhereWithoutUser_message_recipient_idTouserInput = {
    where: messageScalarWhereInput
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyWithoutUser_message_recipient_idTouserInput>
  }

  export type orderUpsertWithWhereUniqueWithoutUser_order_buyer_idTouserInput = {
    where: orderWhereUniqueInput
    update: XOR<orderUpdateWithoutUser_order_buyer_idTouserInput, orderUncheckedUpdateWithoutUser_order_buyer_idTouserInput>
    create: XOR<orderCreateWithoutUser_order_buyer_idTouserInput, orderUncheckedCreateWithoutUser_order_buyer_idTouserInput>
  }

  export type orderUpdateWithWhereUniqueWithoutUser_order_buyer_idTouserInput = {
    where: orderWhereUniqueInput
    data: XOR<orderUpdateWithoutUser_order_buyer_idTouserInput, orderUncheckedUpdateWithoutUser_order_buyer_idTouserInput>
  }

  export type orderUpdateManyWithWhereWithoutUser_order_buyer_idTouserInput = {
    where: orderScalarWhereInput
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutUser_order_buyer_idTouserInput>
  }

  export type reviewUpsertWithWhereUniqueWithoutUser_review_reviewer_idTouserInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutUser_review_reviewer_idTouserInput, reviewUncheckedUpdateWithoutUser_review_reviewer_idTouserInput>
    create: XOR<reviewCreateWithoutUser_review_reviewer_idTouserInput, reviewUncheckedCreateWithoutUser_review_reviewer_idTouserInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutUser_review_reviewer_idTouserInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutUser_review_reviewer_idTouserInput, reviewUncheckedUpdateWithoutUser_review_reviewer_idTouserInput>
  }

  export type reviewUpdateManyWithWhereWithoutUser_review_reviewer_idTouserInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutUser_review_reviewer_idTouserInput>
  }

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[]
    OR?: reviewScalarWhereInput[]
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[]
    id?: IntFilter<"review"> | number
    reviewer_id?: IntFilter<"review"> | number
    reviewee_id?: IntFilter<"review"> | number
    order_id?: IntFilter<"review"> | number
    rating?: IntFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeNullableFilter<"review"> | Date | string | null
  }

  export type reviewUpsertWithWhereUniqueWithoutUser_review_reviewee_idTouserInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutUser_review_reviewee_idTouserInput, reviewUncheckedUpdateWithoutUser_review_reviewee_idTouserInput>
    create: XOR<reviewCreateWithoutUser_review_reviewee_idTouserInput, reviewUncheckedCreateWithoutUser_review_reviewee_idTouserInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutUser_review_reviewee_idTouserInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutUser_review_reviewee_idTouserInput, reviewUncheckedUpdateWithoutUser_review_reviewee_idTouserInput>
  }

  export type reviewUpdateManyWithWhereWithoutUser_review_reviewee_idTouserInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutUser_review_reviewee_idTouserInput>
  }

  export type userCreateWithoutOrder_order_buyer_idTouserInput = {
    full_name: string
    email: string
    passwd: string
    profile?: string | null
    phone?: string | null
    location?: string | null
    bio?: string | null
    farm_name?: string | null
    business_name?: string | null
    is_verified?: boolean
    is_active?: boolean
    type: $Enums.user_type
    created_at?: Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomCreateNestedManyWithoutUser_chat_room_user1TouserInput
    chat_room_chat_room_user2Touser?: chat_roomCreateNestedManyWithoutUser_chat_room_user2TouserInput
    harvest?: harvestCreateNestedManyWithoutUserInput
    message_message_sender_idTouser?: messageCreateNestedManyWithoutUser_message_sender_idTouserInput
    message_message_recipient_idTouser?: messageCreateNestedManyWithoutUser_message_recipient_idTouserInput
    review_review_reviewer_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewer_idTouserInput
    review_review_reviewee_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewee_idTouserInput
  }

  export type userUncheckedCreateWithoutOrder_order_buyer_idTouserInput = {
    id?: number
    full_name: string
    email: string
    passwd: string
    profile?: string | null
    phone?: string | null
    location?: string | null
    bio?: string | null
    farm_name?: string | null
    business_name?: string | null
    is_verified?: boolean
    is_active?: boolean
    type: $Enums.user_type
    created_at?: Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUncheckedCreateNestedManyWithoutUser_chat_room_user1TouserInput
    chat_room_chat_room_user2Touser?: chat_roomUncheckedCreateNestedManyWithoutUser_chat_room_user2TouserInput
    harvest?: harvestUncheckedCreateNestedManyWithoutUserInput
    message_message_sender_idTouser?: messageUncheckedCreateNestedManyWithoutUser_message_sender_idTouserInput
    message_message_recipient_idTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipient_idTouserInput
    review_review_reviewer_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewer_idTouserInput
    review_review_reviewee_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewee_idTouserInput
  }

  export type userCreateOrConnectWithoutOrder_order_buyer_idTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutOrder_order_buyer_idTouserInput, userUncheckedCreateWithoutOrder_order_buyer_idTouserInput>
  }

  export type harvestCreateWithoutOrderInput = {
    quantity: number
    unit: string
    name: string
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    location?: string | null
    is_available?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user: userCreateNestedOneWithoutHarvestInput
    harvest_category: harvest_categoryCreateNestedOneWithoutHarvestInput
    harvest_image?: harvest_imageCreateNestedManyWithoutHarvestInput
  }

  export type harvestUncheckedCreateWithoutOrderInput = {
    id?: number
    quantity: number
    unit: string
    owner_id: number
    name: string
    category: string
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    location?: string | null
    is_available?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    harvest_image?: harvest_imageUncheckedCreateNestedManyWithoutHarvestInput
  }

  export type harvestCreateOrConnectWithoutOrderInput = {
    where: harvestWhereUniqueInput
    create: XOR<harvestCreateWithoutOrderInput, harvestUncheckedCreateWithoutOrderInput>
  }

  export type paymentCreateWithoutOrderInput = {
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.payment_method
    status?: $Enums.payment_status
    transaction_ref?: string | null
    created_at?: Date | string | null
  }

  export type paymentUncheckedCreateWithoutOrderInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.payment_method
    status?: $Enums.payment_status
    transaction_ref?: string | null
    created_at?: Date | string | null
  }

  export type paymentCreateOrConnectWithoutOrderInput = {
    where: paymentWhereUniqueInput
    create: XOR<paymentCreateWithoutOrderInput, paymentUncheckedCreateWithoutOrderInput>
  }

  export type paymentCreateManyOrderInputEnvelope = {
    data: paymentCreateManyOrderInput | paymentCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutOrderInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string | null
    user_review_reviewer_idTouser: userCreateNestedOneWithoutReview_review_reviewer_idTouserInput
    user_review_reviewee_idTouser: userCreateNestedOneWithoutReview_review_reviewee_idTouserInput
  }

  export type reviewUncheckedCreateWithoutOrderInput = {
    id?: number
    reviewer_id: number
    reviewee_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
  }

  export type reviewCreateOrConnectWithoutOrderInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutOrderInput, reviewUncheckedCreateWithoutOrderInput>
  }

  export type reviewCreateManyOrderInputEnvelope = {
    data: reviewCreateManyOrderInput | reviewCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutOrder_order_buyer_idTouserInput = {
    update: XOR<userUpdateWithoutOrder_order_buyer_idTouserInput, userUncheckedUpdateWithoutOrder_order_buyer_idTouserInput>
    create: XOR<userCreateWithoutOrder_order_buyer_idTouserInput, userUncheckedCreateWithoutOrder_order_buyer_idTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutOrder_order_buyer_idTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutOrder_order_buyer_idTouserInput, userUncheckedUpdateWithoutOrder_order_buyer_idTouserInput>
  }

  export type userUpdateWithoutOrder_order_buyer_idTouserInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    farm_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUpdateManyWithoutUser_chat_room_user1TouserNestedInput
    chat_room_chat_room_user2Touser?: chat_roomUpdateManyWithoutUser_chat_room_user2TouserNestedInput
    harvest?: harvestUpdateManyWithoutUserNestedInput
    message_message_sender_idTouser?: messageUpdateManyWithoutUser_message_sender_idTouserNestedInput
    message_message_recipient_idTouser?: messageUpdateManyWithoutUser_message_recipient_idTouserNestedInput
    review_review_reviewer_idTouser?: reviewUpdateManyWithoutUser_review_reviewer_idTouserNestedInput
    review_review_reviewee_idTouser?: reviewUpdateManyWithoutUser_review_reviewee_idTouserNestedInput
  }

  export type userUncheckedUpdateWithoutOrder_order_buyer_idTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    farm_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUncheckedUpdateManyWithoutUser_chat_room_user1TouserNestedInput
    chat_room_chat_room_user2Touser?: chat_roomUncheckedUpdateManyWithoutUser_chat_room_user2TouserNestedInput
    harvest?: harvestUncheckedUpdateManyWithoutUserNestedInput
    message_message_sender_idTouser?: messageUncheckedUpdateManyWithoutUser_message_sender_idTouserNestedInput
    message_message_recipient_idTouser?: messageUncheckedUpdateManyWithoutUser_message_recipient_idTouserNestedInput
    review_review_reviewer_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewer_idTouserNestedInput
    review_review_reviewee_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewee_idTouserNestedInput
  }

  export type harvestUpsertWithoutOrderInput = {
    update: XOR<harvestUpdateWithoutOrderInput, harvestUncheckedUpdateWithoutOrderInput>
    create: XOR<harvestCreateWithoutOrderInput, harvestUncheckedCreateWithoutOrderInput>
    where?: harvestWhereInput
  }

  export type harvestUpdateToOneWithWhereWithoutOrderInput = {
    where?: harvestWhereInput
    data: XOR<harvestUpdateWithoutOrderInput, harvestUncheckedUpdateWithoutOrderInput>
  }

  export type harvestUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutHarvestNestedInput
    harvest_category?: harvest_categoryUpdateOneRequiredWithoutHarvestNestedInput
    harvest_image?: harvest_imageUpdateManyWithoutHarvestNestedInput
  }

  export type harvestUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    harvest_image?: harvest_imageUncheckedUpdateManyWithoutHarvestNestedInput
  }

  export type paymentUpsertWithWhereUniqueWithoutOrderInput = {
    where: paymentWhereUniqueInput
    update: XOR<paymentUpdateWithoutOrderInput, paymentUncheckedUpdateWithoutOrderInput>
    create: XOR<paymentCreateWithoutOrderInput, paymentUncheckedCreateWithoutOrderInput>
  }

  export type paymentUpdateWithWhereUniqueWithoutOrderInput = {
    where: paymentWhereUniqueInput
    data: XOR<paymentUpdateWithoutOrderInput, paymentUncheckedUpdateWithoutOrderInput>
  }

  export type paymentUpdateManyWithWhereWithoutOrderInput = {
    where: paymentScalarWhereInput
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutOrderInput>
  }

  export type paymentScalarWhereInput = {
    AND?: paymentScalarWhereInput | paymentScalarWhereInput[]
    OR?: paymentScalarWhereInput[]
    NOT?: paymentScalarWhereInput | paymentScalarWhereInput[]
    id?: IntFilter<"payment"> | number
    order_id?: IntFilter<"payment"> | number
    amount?: DecimalFilter<"payment"> | Decimal | DecimalJsLike | number | string
    method?: Enumpayment_methodFilter<"payment"> | $Enums.payment_method
    status?: Enumpayment_statusFilter<"payment"> | $Enums.payment_status
    transaction_ref?: StringNullableFilter<"payment"> | string | null
    created_at?: DateTimeNullableFilter<"payment"> | Date | string | null
  }

  export type reviewUpsertWithWhereUniqueWithoutOrderInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutOrderInput, reviewUncheckedUpdateWithoutOrderInput>
    create: XOR<reviewCreateWithoutOrderInput, reviewUncheckedCreateWithoutOrderInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutOrderInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutOrderInput, reviewUncheckedUpdateWithoutOrderInput>
  }

  export type reviewUpdateManyWithWhereWithoutOrderInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutOrderInput>
  }

  export type orderCreateWithoutPaymentInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_status
    note?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_order_buyer_idTouser: userCreateNestedOneWithoutOrder_order_buyer_idTouserInput
    harvest: harvestCreateNestedOneWithoutOrderInput
    review?: reviewCreateNestedManyWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutPaymentInput = {
    id?: number
    buyer_id: number
    harvest_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_status
    note?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    review?: reviewUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderCreateOrConnectWithoutPaymentInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutPaymentInput, orderUncheckedCreateWithoutPaymentInput>
  }

  export type orderUpsertWithoutPaymentInput = {
    update: XOR<orderUpdateWithoutPaymentInput, orderUncheckedUpdateWithoutPaymentInput>
    create: XOR<orderCreateWithoutPaymentInput, orderUncheckedCreateWithoutPaymentInput>
    where?: orderWhereInput
  }

  export type orderUpdateToOneWithWhereWithoutPaymentInput = {
    where?: orderWhereInput
    data: XOR<orderUpdateWithoutPaymentInput, orderUncheckedUpdateWithoutPaymentInput>
  }

  export type orderUpdateWithoutPaymentInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_order_buyer_idTouser?: userUpdateOneRequiredWithoutOrder_order_buyer_idTouserNestedInput
    harvest?: harvestUpdateOneRequiredWithoutOrderNestedInput
    review?: reviewUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    harvest_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review?: reviewUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type userCreateWithoutReview_review_reviewer_idTouserInput = {
    full_name: string
    email: string
    passwd: string
    profile?: string | null
    phone?: string | null
    location?: string | null
    bio?: string | null
    farm_name?: string | null
    business_name?: string | null
    is_verified?: boolean
    is_active?: boolean
    type: $Enums.user_type
    created_at?: Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomCreateNestedManyWithoutUser_chat_room_user1TouserInput
    chat_room_chat_room_user2Touser?: chat_roomCreateNestedManyWithoutUser_chat_room_user2TouserInput
    harvest?: harvestCreateNestedManyWithoutUserInput
    message_message_sender_idTouser?: messageCreateNestedManyWithoutUser_message_sender_idTouserInput
    message_message_recipient_idTouser?: messageCreateNestedManyWithoutUser_message_recipient_idTouserInput
    order_order_buyer_idTouser?: orderCreateNestedManyWithoutUser_order_buyer_idTouserInput
    review_review_reviewee_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewee_idTouserInput
  }

  export type userUncheckedCreateWithoutReview_review_reviewer_idTouserInput = {
    id?: number
    full_name: string
    email: string
    passwd: string
    profile?: string | null
    phone?: string | null
    location?: string | null
    bio?: string | null
    farm_name?: string | null
    business_name?: string | null
    is_verified?: boolean
    is_active?: boolean
    type: $Enums.user_type
    created_at?: Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUncheckedCreateNestedManyWithoutUser_chat_room_user1TouserInput
    chat_room_chat_room_user2Touser?: chat_roomUncheckedCreateNestedManyWithoutUser_chat_room_user2TouserInput
    harvest?: harvestUncheckedCreateNestedManyWithoutUserInput
    message_message_sender_idTouser?: messageUncheckedCreateNestedManyWithoutUser_message_sender_idTouserInput
    message_message_recipient_idTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipient_idTouserInput
    order_order_buyer_idTouser?: orderUncheckedCreateNestedManyWithoutUser_order_buyer_idTouserInput
    review_review_reviewee_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewee_idTouserInput
  }

  export type userCreateOrConnectWithoutReview_review_reviewer_idTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutReview_review_reviewer_idTouserInput, userUncheckedCreateWithoutReview_review_reviewer_idTouserInput>
  }

  export type userCreateWithoutReview_review_reviewee_idTouserInput = {
    full_name: string
    email: string
    passwd: string
    profile?: string | null
    phone?: string | null
    location?: string | null
    bio?: string | null
    farm_name?: string | null
    business_name?: string | null
    is_verified?: boolean
    is_active?: boolean
    type: $Enums.user_type
    created_at?: Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomCreateNestedManyWithoutUser_chat_room_user1TouserInput
    chat_room_chat_room_user2Touser?: chat_roomCreateNestedManyWithoutUser_chat_room_user2TouserInput
    harvest?: harvestCreateNestedManyWithoutUserInput
    message_message_sender_idTouser?: messageCreateNestedManyWithoutUser_message_sender_idTouserInput
    message_message_recipient_idTouser?: messageCreateNestedManyWithoutUser_message_recipient_idTouserInput
    order_order_buyer_idTouser?: orderCreateNestedManyWithoutUser_order_buyer_idTouserInput
    review_review_reviewer_idTouser?: reviewCreateNestedManyWithoutUser_review_reviewer_idTouserInput
  }

  export type userUncheckedCreateWithoutReview_review_reviewee_idTouserInput = {
    id?: number
    full_name: string
    email: string
    passwd: string
    profile?: string | null
    phone?: string | null
    location?: string | null
    bio?: string | null
    farm_name?: string | null
    business_name?: string | null
    is_verified?: boolean
    is_active?: boolean
    type: $Enums.user_type
    created_at?: Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUncheckedCreateNestedManyWithoutUser_chat_room_user1TouserInput
    chat_room_chat_room_user2Touser?: chat_roomUncheckedCreateNestedManyWithoutUser_chat_room_user2TouserInput
    harvest?: harvestUncheckedCreateNestedManyWithoutUserInput
    message_message_sender_idTouser?: messageUncheckedCreateNestedManyWithoutUser_message_sender_idTouserInput
    message_message_recipient_idTouser?: messageUncheckedCreateNestedManyWithoutUser_message_recipient_idTouserInput
    order_order_buyer_idTouser?: orderUncheckedCreateNestedManyWithoutUser_order_buyer_idTouserInput
    review_review_reviewer_idTouser?: reviewUncheckedCreateNestedManyWithoutUser_review_reviewer_idTouserInput
  }

  export type userCreateOrConnectWithoutReview_review_reviewee_idTouserInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutReview_review_reviewee_idTouserInput, userUncheckedCreateWithoutReview_review_reviewee_idTouserInput>
  }

  export type orderCreateWithoutReviewInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_status
    note?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_order_buyer_idTouser: userCreateNestedOneWithoutOrder_order_buyer_idTouserInput
    harvest: harvestCreateNestedOneWithoutOrderInput
    payment?: paymentCreateNestedManyWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutReviewInput = {
    id?: number
    buyer_id: number
    harvest_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_status
    note?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    payment?: paymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderCreateOrConnectWithoutReviewInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutReviewInput, orderUncheckedCreateWithoutReviewInput>
  }

  export type userUpsertWithoutReview_review_reviewer_idTouserInput = {
    update: XOR<userUpdateWithoutReview_review_reviewer_idTouserInput, userUncheckedUpdateWithoutReview_review_reviewer_idTouserInput>
    create: XOR<userCreateWithoutReview_review_reviewer_idTouserInput, userUncheckedCreateWithoutReview_review_reviewer_idTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutReview_review_reviewer_idTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutReview_review_reviewer_idTouserInput, userUncheckedUpdateWithoutReview_review_reviewer_idTouserInput>
  }

  export type userUpdateWithoutReview_review_reviewer_idTouserInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    farm_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUpdateManyWithoutUser_chat_room_user1TouserNestedInput
    chat_room_chat_room_user2Touser?: chat_roomUpdateManyWithoutUser_chat_room_user2TouserNestedInput
    harvest?: harvestUpdateManyWithoutUserNestedInput
    message_message_sender_idTouser?: messageUpdateManyWithoutUser_message_sender_idTouserNestedInput
    message_message_recipient_idTouser?: messageUpdateManyWithoutUser_message_recipient_idTouserNestedInput
    order_order_buyer_idTouser?: orderUpdateManyWithoutUser_order_buyer_idTouserNestedInput
    review_review_reviewee_idTouser?: reviewUpdateManyWithoutUser_review_reviewee_idTouserNestedInput
  }

  export type userUncheckedUpdateWithoutReview_review_reviewer_idTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    farm_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUncheckedUpdateManyWithoutUser_chat_room_user1TouserNestedInput
    chat_room_chat_room_user2Touser?: chat_roomUncheckedUpdateManyWithoutUser_chat_room_user2TouserNestedInput
    harvest?: harvestUncheckedUpdateManyWithoutUserNestedInput
    message_message_sender_idTouser?: messageUncheckedUpdateManyWithoutUser_message_sender_idTouserNestedInput
    message_message_recipient_idTouser?: messageUncheckedUpdateManyWithoutUser_message_recipient_idTouserNestedInput
    order_order_buyer_idTouser?: orderUncheckedUpdateManyWithoutUser_order_buyer_idTouserNestedInput
    review_review_reviewee_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewee_idTouserNestedInput
  }

  export type userUpsertWithoutReview_review_reviewee_idTouserInput = {
    update: XOR<userUpdateWithoutReview_review_reviewee_idTouserInput, userUncheckedUpdateWithoutReview_review_reviewee_idTouserInput>
    create: XOR<userCreateWithoutReview_review_reviewee_idTouserInput, userUncheckedCreateWithoutReview_review_reviewee_idTouserInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutReview_review_reviewee_idTouserInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutReview_review_reviewee_idTouserInput, userUncheckedUpdateWithoutReview_review_reviewee_idTouserInput>
  }

  export type userUpdateWithoutReview_review_reviewee_idTouserInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    farm_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUpdateManyWithoutUser_chat_room_user1TouserNestedInput
    chat_room_chat_room_user2Touser?: chat_roomUpdateManyWithoutUser_chat_room_user2TouserNestedInput
    harvest?: harvestUpdateManyWithoutUserNestedInput
    message_message_sender_idTouser?: messageUpdateManyWithoutUser_message_sender_idTouserNestedInput
    message_message_recipient_idTouser?: messageUpdateManyWithoutUser_message_recipient_idTouserNestedInput
    order_order_buyer_idTouser?: orderUpdateManyWithoutUser_order_buyer_idTouserNestedInput
    review_review_reviewer_idTouser?: reviewUpdateManyWithoutUser_review_reviewer_idTouserNestedInput
  }

  export type userUncheckedUpdateWithoutReview_review_reviewee_idTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    farm_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    type?: Enumuser_typeFieldUpdateOperationsInput | $Enums.user_type
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room_chat_room_user1Touser?: chat_roomUncheckedUpdateManyWithoutUser_chat_room_user1TouserNestedInput
    chat_room_chat_room_user2Touser?: chat_roomUncheckedUpdateManyWithoutUser_chat_room_user2TouserNestedInput
    harvest?: harvestUncheckedUpdateManyWithoutUserNestedInput
    message_message_sender_idTouser?: messageUncheckedUpdateManyWithoutUser_message_sender_idTouserNestedInput
    message_message_recipient_idTouser?: messageUncheckedUpdateManyWithoutUser_message_recipient_idTouserNestedInput
    order_order_buyer_idTouser?: orderUncheckedUpdateManyWithoutUser_order_buyer_idTouserNestedInput
    review_review_reviewer_idTouser?: reviewUncheckedUpdateManyWithoutUser_review_reviewer_idTouserNestedInput
  }

  export type orderUpsertWithoutReviewInput = {
    update: XOR<orderUpdateWithoutReviewInput, orderUncheckedUpdateWithoutReviewInput>
    create: XOR<orderCreateWithoutReviewInput, orderUncheckedCreateWithoutReviewInput>
    where?: orderWhereInput
  }

  export type orderUpdateToOneWithWhereWithoutReviewInput = {
    where?: orderWhereInput
    data: XOR<orderUpdateWithoutReviewInput, orderUncheckedUpdateWithoutReviewInput>
  }

  export type orderUpdateWithoutReviewInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_order_buyer_idTouser?: userUpdateOneRequiredWithoutOrder_order_buyer_idTouserNestedInput
    harvest?: harvestUpdateOneRequiredWithoutOrderNestedInput
    payment?: paymentUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    harvest_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment?: paymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type messageCreateManyChat_roomInput = {
    id?: number
    sender_id: number
    recipient_id: number
    text: string
    read?: boolean
    received?: boolean
    reply_to_id?: number | null
    created_at?: Date | string | null
  }

  export type messageUpdateWithoutChat_roomInput = {
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    received?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_message_sender_idTouser?: userUpdateOneRequiredWithoutMessage_message_sender_idTouserNestedInput
    user_message_recipient_idTouser?: userUpdateOneRequiredWithoutMessage_message_recipient_idTouserNestedInput
    message?: messageUpdateOneWithoutOther_messageNestedInput
    other_message?: messageUpdateManyWithoutMessageNestedInput
  }

  export type messageUncheckedUpdateWithoutChat_roomInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_id?: IntFieldUpdateOperationsInput | number
    recipient_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    received?: BoolFieldUpdateOperationsInput | boolean
    reply_to_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_message?: messageUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type messageUncheckedUpdateManyWithoutChat_roomInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_id?: IntFieldUpdateOperationsInput | number
    recipient_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    received?: BoolFieldUpdateOperationsInput | boolean
    reply_to_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type harvest_imageCreateManyHarvestInput = {
    id?: number
    img_url: string
  }

  export type orderCreateManyHarvestInput = {
    id?: number
    buyer_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_status
    note?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type harvest_imageUpdateWithoutHarvestInput = {
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type harvest_imageUncheckedUpdateWithoutHarvestInput = {
    id?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type harvest_imageUncheckedUpdateManyWithoutHarvestInput = {
    id?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type orderUpdateWithoutHarvestInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_order_buyer_idTouser?: userUpdateOneRequiredWithoutOrder_order_buyer_idTouserNestedInput
    payment?: paymentUpdateManyWithoutOrderNestedInput
    review?: reviewUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutHarvestInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment?: paymentUncheckedUpdateManyWithoutOrderNestedInput
    review?: reviewUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateManyWithoutHarvestInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type harvestCreateManyHarvest_categoryInput = {
    id?: number
    quantity: number
    unit: string
    owner_id: number
    name: string
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    location?: string | null
    is_available?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type harvestUpdateWithoutHarvest_categoryInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutHarvestNestedInput
    harvest_image?: harvest_imageUpdateManyWithoutHarvestNestedInput
    order?: orderUpdateManyWithoutHarvestNestedInput
  }

  export type harvestUncheckedUpdateWithoutHarvest_categoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    harvest_image?: harvest_imageUncheckedUpdateManyWithoutHarvestNestedInput
    order?: orderUncheckedUpdateManyWithoutHarvestNestedInput
  }

  export type harvestUncheckedUpdateManyWithoutHarvest_categoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messageCreateManyMessageInput = {
    id?: number
    chat_room_id: number
    sender_id: number
    recipient_id: number
    text: string
    read?: boolean
    received?: boolean
    created_at?: Date | string | null
  }

  export type messageUpdateWithoutMessageInput = {
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    received?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room?: chat_roomUpdateOneRequiredWithoutMessageNestedInput
    user_message_sender_idTouser?: userUpdateOneRequiredWithoutMessage_message_sender_idTouserNestedInput
    user_message_recipient_idTouser?: userUpdateOneRequiredWithoutMessage_message_recipient_idTouserNestedInput
    other_message?: messageUpdateManyWithoutMessageNestedInput
  }

  export type messageUncheckedUpdateWithoutMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_room_id?: IntFieldUpdateOperationsInput | number
    sender_id?: IntFieldUpdateOperationsInput | number
    recipient_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    received?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_message?: messageUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type messageUncheckedUpdateManyWithoutMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_room_id?: IntFieldUpdateOperationsInput | number
    sender_id?: IntFieldUpdateOperationsInput | number
    recipient_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    received?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type chat_roomCreateManyUser_chat_room_user1TouserInput = {
    id?: number
    user2: number
    created_at?: Date | string | null
  }

  export type chat_roomCreateManyUser_chat_room_user2TouserInput = {
    id?: number
    user1: number
    created_at?: Date | string | null
  }

  export type harvestCreateManyUserInput = {
    id?: number
    quantity: number
    unit: string
    name: string
    category: string
    unit_price: Decimal | DecimalJsLike | number | string
    description?: string | null
    location?: string | null
    is_available?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type messageCreateManyUser_message_sender_idTouserInput = {
    id?: number
    chat_room_id: number
    recipient_id: number
    text: string
    read?: boolean
    received?: boolean
    reply_to_id?: number | null
    created_at?: Date | string | null
  }

  export type messageCreateManyUser_message_recipient_idTouserInput = {
    id?: number
    chat_room_id: number
    sender_id: number
    text: string
    read?: boolean
    received?: boolean
    reply_to_id?: number | null
    created_at?: Date | string | null
  }

  export type orderCreateManyUser_order_buyer_idTouserInput = {
    id?: number
    harvest_id: number
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    status?: $Enums.order_status
    note?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type reviewCreateManyUser_review_reviewer_idTouserInput = {
    id?: number
    reviewee_id: number
    order_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
  }

  export type reviewCreateManyUser_review_reviewee_idTouserInput = {
    id?: number
    reviewer_id: number
    order_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
  }

  export type chat_roomUpdateWithoutUser_chat_room_user1TouserInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_chat_room_user2Touser?: userUpdateOneRequiredWithoutChat_room_chat_room_user2TouserNestedInput
    message?: messageUpdateManyWithoutChat_roomNestedInput
  }

  export type chat_roomUncheckedUpdateWithoutUser_chat_room_user1TouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    user2?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: messageUncheckedUpdateManyWithoutChat_roomNestedInput
  }

  export type chat_roomUncheckedUpdateManyWithoutUser_chat_room_user1TouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    user2?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type chat_roomUpdateWithoutUser_chat_room_user2TouserInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_chat_room_user1Touser?: userUpdateOneRequiredWithoutChat_room_chat_room_user1TouserNestedInput
    message?: messageUpdateManyWithoutChat_roomNestedInput
  }

  export type chat_roomUncheckedUpdateWithoutUser_chat_room_user2TouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    user1?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: messageUncheckedUpdateManyWithoutChat_roomNestedInput
  }

  export type chat_roomUncheckedUpdateManyWithoutUser_chat_room_user2TouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    user1?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type harvestUpdateWithoutUserInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    harvest_category?: harvest_categoryUpdateOneRequiredWithoutHarvestNestedInput
    harvest_image?: harvest_imageUpdateManyWithoutHarvestNestedInput
    order?: orderUpdateManyWithoutHarvestNestedInput
  }

  export type harvestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    harvest_image?: harvest_imageUncheckedUpdateManyWithoutHarvestNestedInput
    order?: orderUncheckedUpdateManyWithoutHarvestNestedInput
  }

  export type harvestUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messageUpdateWithoutUser_message_sender_idTouserInput = {
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    received?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room?: chat_roomUpdateOneRequiredWithoutMessageNestedInput
    user_message_recipient_idTouser?: userUpdateOneRequiredWithoutMessage_message_recipient_idTouserNestedInput
    message?: messageUpdateOneWithoutOther_messageNestedInput
    other_message?: messageUpdateManyWithoutMessageNestedInput
  }

  export type messageUncheckedUpdateWithoutUser_message_sender_idTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_room_id?: IntFieldUpdateOperationsInput | number
    recipient_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    received?: BoolFieldUpdateOperationsInput | boolean
    reply_to_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_message?: messageUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type messageUncheckedUpdateManyWithoutUser_message_sender_idTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_room_id?: IntFieldUpdateOperationsInput | number
    recipient_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    received?: BoolFieldUpdateOperationsInput | boolean
    reply_to_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type messageUpdateWithoutUser_message_recipient_idTouserInput = {
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    received?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chat_room?: chat_roomUpdateOneRequiredWithoutMessageNestedInput
    user_message_sender_idTouser?: userUpdateOneRequiredWithoutMessage_message_sender_idTouserNestedInput
    message?: messageUpdateOneWithoutOther_messageNestedInput
    other_message?: messageUpdateManyWithoutMessageNestedInput
  }

  export type messageUncheckedUpdateWithoutUser_message_recipient_idTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_room_id?: IntFieldUpdateOperationsInput | number
    sender_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    received?: BoolFieldUpdateOperationsInput | boolean
    reply_to_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_message?: messageUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type messageUncheckedUpdateManyWithoutUser_message_recipient_idTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_room_id?: IntFieldUpdateOperationsInput | number
    sender_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    received?: BoolFieldUpdateOperationsInput | boolean
    reply_to_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type orderUpdateWithoutUser_order_buyer_idTouserInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    harvest?: harvestUpdateOneRequiredWithoutOrderNestedInput
    payment?: paymentUpdateManyWithoutOrderNestedInput
    review?: reviewUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutUser_order_buyer_idTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    harvest_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment?: paymentUncheckedUpdateManyWithoutOrderNestedInput
    review?: reviewUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateManyWithoutUser_order_buyer_idTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    harvest_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewUpdateWithoutUser_review_reviewer_idTouserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_review_reviewee_idTouser?: userUpdateOneRequiredWithoutReview_review_reviewee_idTouserNestedInput
    order?: orderUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutUser_review_reviewer_idTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewee_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewUncheckedUpdateManyWithoutUser_review_reviewer_idTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewee_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewUpdateWithoutUser_review_reviewee_idTouserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_review_reviewer_idTouser?: userUpdateOneRequiredWithoutReview_review_reviewer_idTouserNestedInput
    order?: orderUpdateOneRequiredWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutUser_review_reviewee_idTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewUncheckedUpdateManyWithoutUser_review_reviewee_idTouserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentCreateManyOrderInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.payment_method
    status?: $Enums.payment_status
    transaction_ref?: string | null
    created_at?: Date | string | null
  }

  export type reviewCreateManyOrderInput = {
    id?: number
    reviewer_id: number
    reviewee_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
  }

  export type paymentUpdateWithoutOrderInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    transaction_ref?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    transaction_ref?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type paymentUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    status?: Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status
    transaction_ref?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewUpdateWithoutOrderInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_review_reviewer_idTouser?: userUpdateOneRequiredWithoutReview_review_reviewer_idTouserNestedInput
    user_review_reviewee_idTouser?: userUpdateOneRequiredWithoutReview_review_reviewee_idTouserNestedInput
  }

  export type reviewUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: IntFieldUpdateOperationsInput | number
    reviewee_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewer_id?: IntFieldUpdateOperationsInput | number
    reviewee_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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