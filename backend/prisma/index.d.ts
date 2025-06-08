
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
 * Model configuraciones
 * 
 */
export type configuraciones = $Result.DefaultSelection<Prisma.$configuracionesPayload>
/**
 * Model conversaciones
 * 
 */
export type conversaciones = $Result.DefaultSelection<Prisma.$conversacionesPayload>
/**
 * Model intents
 * 
 */
export type intents = $Result.DefaultSelection<Prisma.$intentsPayload>
/**
 * Model logs_actividad
 * 
 */
export type logs_actividad = $Result.DefaultSelection<Prisma.$logs_actividadPayload>
/**
 * Model mensajes
 * 
 */
export type mensajes = $Result.DefaultSelection<Prisma.$mensajesPayload>
/**
 * Model respuestas
 * 
 */
export type respuestas = $Result.DefaultSelection<Prisma.$respuestasPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Configuraciones
 * const configuraciones = await prisma.configuraciones.findMany()
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
   * // Fetch zero or more Configuraciones
   * const configuraciones = await prisma.configuraciones.findMany()
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
   * `prisma.configuraciones`: Exposes CRUD operations for the **configuraciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configuraciones
    * const configuraciones = await prisma.configuraciones.findMany()
    * ```
    */
  get configuraciones(): Prisma.configuracionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversaciones`: Exposes CRUD operations for the **conversaciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversaciones
    * const conversaciones = await prisma.conversaciones.findMany()
    * ```
    */
  get conversaciones(): Prisma.conversacionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.intents`: Exposes CRUD operations for the **intents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Intents
    * const intents = await prisma.intents.findMany()
    * ```
    */
  get intents(): Prisma.intentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logs_actividad`: Exposes CRUD operations for the **logs_actividad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs_actividads
    * const logs_actividads = await prisma.logs_actividad.findMany()
    * ```
    */
  get logs_actividad(): Prisma.logs_actividadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mensajes`: Exposes CRUD operations for the **mensajes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensajes
    * const mensajes = await prisma.mensajes.findMany()
    * ```
    */
  get mensajes(): Prisma.mensajesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.respuestas`: Exposes CRUD operations for the **respuestas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Respuestas
    * const respuestas = await prisma.respuestas.findMany()
    * ```
    */
  get respuestas(): Prisma.respuestasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    configuraciones: 'configuraciones',
    conversaciones: 'conversaciones',
    intents: 'intents',
    logs_actividad: 'logs_actividad',
    mensajes: 'mensajes',
    respuestas: 'respuestas',
    usuarios: 'usuarios'
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
      modelProps: "configuraciones" | "conversaciones" | "intents" | "logs_actividad" | "mensajes" | "respuestas" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      configuraciones: {
        payload: Prisma.$configuracionesPayload<ExtArgs>
        fields: Prisma.configuracionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.configuracionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.configuracionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionesPayload>
          }
          findFirst: {
            args: Prisma.configuracionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.configuracionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionesPayload>
          }
          findMany: {
            args: Prisma.configuracionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionesPayload>[]
          }
          create: {
            args: Prisma.configuracionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionesPayload>
          }
          createMany: {
            args: Prisma.configuracionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.configuracionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionesPayload>
          }
          update: {
            args: Prisma.configuracionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionesPayload>
          }
          deleteMany: {
            args: Prisma.configuracionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.configuracionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.configuracionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configuracionesPayload>
          }
          aggregate: {
            args: Prisma.ConfiguracionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfiguraciones>
          }
          groupBy: {
            args: Prisma.configuracionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.configuracionesCountArgs<ExtArgs>
            result: $Utils.Optional<ConfiguracionesCountAggregateOutputType> | number
          }
        }
      }
      conversaciones: {
        payload: Prisma.$conversacionesPayload<ExtArgs>
        fields: Prisma.conversacionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.conversacionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversacionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.conversacionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversacionesPayload>
          }
          findFirst: {
            args: Prisma.conversacionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversacionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.conversacionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversacionesPayload>
          }
          findMany: {
            args: Prisma.conversacionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversacionesPayload>[]
          }
          create: {
            args: Prisma.conversacionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversacionesPayload>
          }
          createMany: {
            args: Prisma.conversacionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.conversacionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversacionesPayload>
          }
          update: {
            args: Prisma.conversacionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversacionesPayload>
          }
          deleteMany: {
            args: Prisma.conversacionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.conversacionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.conversacionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conversacionesPayload>
          }
          aggregate: {
            args: Prisma.ConversacionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversaciones>
          }
          groupBy: {
            args: Prisma.conversacionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversacionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.conversacionesCountArgs<ExtArgs>
            result: $Utils.Optional<ConversacionesCountAggregateOutputType> | number
          }
        }
      }
      intents: {
        payload: Prisma.$intentsPayload<ExtArgs>
        fields: Prisma.intentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.intentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.intentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intentsPayload>
          }
          findFirst: {
            args: Prisma.intentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.intentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intentsPayload>
          }
          findMany: {
            args: Prisma.intentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intentsPayload>[]
          }
          create: {
            args: Prisma.intentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intentsPayload>
          }
          createMany: {
            args: Prisma.intentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.intentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intentsPayload>
          }
          update: {
            args: Prisma.intentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intentsPayload>
          }
          deleteMany: {
            args: Prisma.intentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.intentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.intentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intentsPayload>
          }
          aggregate: {
            args: Prisma.IntentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntents>
          }
          groupBy: {
            args: Prisma.intentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.intentsCountArgs<ExtArgs>
            result: $Utils.Optional<IntentsCountAggregateOutputType> | number
          }
        }
      }
      logs_actividad: {
        payload: Prisma.$logs_actividadPayload<ExtArgs>
        fields: Prisma.logs_actividadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logs_actividadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logs_actividadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logs_actividadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logs_actividadPayload>
          }
          findFirst: {
            args: Prisma.logs_actividadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logs_actividadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logs_actividadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logs_actividadPayload>
          }
          findMany: {
            args: Prisma.logs_actividadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logs_actividadPayload>[]
          }
          create: {
            args: Prisma.logs_actividadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logs_actividadPayload>
          }
          createMany: {
            args: Prisma.logs_actividadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.logs_actividadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logs_actividadPayload>
          }
          update: {
            args: Prisma.logs_actividadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logs_actividadPayload>
          }
          deleteMany: {
            args: Prisma.logs_actividadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logs_actividadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.logs_actividadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logs_actividadPayload>
          }
          aggregate: {
            args: Prisma.Logs_actividadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogs_actividad>
          }
          groupBy: {
            args: Prisma.logs_actividadGroupByArgs<ExtArgs>
            result: $Utils.Optional<Logs_actividadGroupByOutputType>[]
          }
          count: {
            args: Prisma.logs_actividadCountArgs<ExtArgs>
            result: $Utils.Optional<Logs_actividadCountAggregateOutputType> | number
          }
        }
      }
      mensajes: {
        payload: Prisma.$mensajesPayload<ExtArgs>
        fields: Prisma.mensajesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mensajesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mensajesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>
          }
          findFirst: {
            args: Prisma.mensajesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mensajesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>
          }
          findMany: {
            args: Prisma.mensajesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>[]
          }
          create: {
            args: Prisma.mensajesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>
          }
          createMany: {
            args: Prisma.mensajesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mensajesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>
          }
          update: {
            args: Prisma.mensajesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>
          }
          deleteMany: {
            args: Prisma.mensajesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mensajesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mensajesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>
          }
          aggregate: {
            args: Prisma.MensajesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensajes>
          }
          groupBy: {
            args: Prisma.mensajesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensajesGroupByOutputType>[]
          }
          count: {
            args: Prisma.mensajesCountArgs<ExtArgs>
            result: $Utils.Optional<MensajesCountAggregateOutputType> | number
          }
        }
      }
      respuestas: {
        payload: Prisma.$respuestasPayload<ExtArgs>
        fields: Prisma.respuestasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.respuestasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respuestasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.respuestasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respuestasPayload>
          }
          findFirst: {
            args: Prisma.respuestasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respuestasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.respuestasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respuestasPayload>
          }
          findMany: {
            args: Prisma.respuestasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respuestasPayload>[]
          }
          create: {
            args: Prisma.respuestasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respuestasPayload>
          }
          createMany: {
            args: Prisma.respuestasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.respuestasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respuestasPayload>
          }
          update: {
            args: Prisma.respuestasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respuestasPayload>
          }
          deleteMany: {
            args: Prisma.respuestasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.respuestasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.respuestasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respuestasPayload>
          }
          aggregate: {
            args: Prisma.RespuestasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRespuestas>
          }
          groupBy: {
            args: Prisma.respuestasGroupByArgs<ExtArgs>
            result: $Utils.Optional<RespuestasGroupByOutputType>[]
          }
          count: {
            args: Prisma.respuestasCountArgs<ExtArgs>
            result: $Utils.Optional<RespuestasCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
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
    configuraciones?: configuracionesOmit
    conversaciones?: conversacionesOmit
    intents?: intentsOmit
    logs_actividad?: logs_actividadOmit
    mensajes?: mensajesOmit
    respuestas?: respuestasOmit
    usuarios?: usuariosOmit
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
   * Count Type ConversacionesCountOutputType
   */

  export type ConversacionesCountOutputType = {
    mensajes: number
  }

  export type ConversacionesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensajes?: boolean | ConversacionesCountOutputTypeCountMensajesArgs
  }

  // Custom InputTypes
  /**
   * ConversacionesCountOutputType without action
   */
  export type ConversacionesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversacionesCountOutputType
     */
    select?: ConversacionesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversacionesCountOutputType without action
   */
  export type ConversacionesCountOutputTypeCountMensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mensajesWhereInput
  }


  /**
   * Count Type IntentsCountOutputType
   */

  export type IntentsCountOutputType = {
    respuestas: number
  }

  export type IntentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respuestas?: boolean | IntentsCountOutputTypeCountRespuestasArgs
  }

  // Custom InputTypes
  /**
   * IntentsCountOutputType without action
   */
  export type IntentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntentsCountOutputType
     */
    select?: IntentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IntentsCountOutputType without action
   */
  export type IntentsCountOutputTypeCountRespuestasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: respuestasWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    conversaciones: number
    logs_actividad: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversaciones?: boolean | UsuariosCountOutputTypeCountConversacionesArgs
    logs_actividad?: boolean | UsuariosCountOutputTypeCountLogs_actividadArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountConversacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversacionesWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountLogs_actividadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logs_actividadWhereInput
  }


  /**
   * Models
   */

  /**
   * Model configuraciones
   */

  export type AggregateConfiguraciones = {
    _count: ConfiguracionesCountAggregateOutputType | null
    _avg: ConfiguracionesAvgAggregateOutputType | null
    _sum: ConfiguracionesSumAggregateOutputType | null
    _min: ConfiguracionesMinAggregateOutputType | null
    _max: ConfiguracionesMaxAggregateOutputType | null
  }

  export type ConfiguracionesAvgAggregateOutputType = {
    id_config: number | null
  }

  export type ConfiguracionesSumAggregateOutputType = {
    id_config: number | null
  }

  export type ConfiguracionesMinAggregateOutputType = {
    id_config: number | null
    clave: string | null
    valor: string | null
  }

  export type ConfiguracionesMaxAggregateOutputType = {
    id_config: number | null
    clave: string | null
    valor: string | null
  }

  export type ConfiguracionesCountAggregateOutputType = {
    id_config: number
    clave: number
    valor: number
    _all: number
  }


  export type ConfiguracionesAvgAggregateInputType = {
    id_config?: true
  }

  export type ConfiguracionesSumAggregateInputType = {
    id_config?: true
  }

  export type ConfiguracionesMinAggregateInputType = {
    id_config?: true
    clave?: true
    valor?: true
  }

  export type ConfiguracionesMaxAggregateInputType = {
    id_config?: true
    clave?: true
    valor?: true
  }

  export type ConfiguracionesCountAggregateInputType = {
    id_config?: true
    clave?: true
    valor?: true
    _all?: true
  }

  export type ConfiguracionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which configuraciones to aggregate.
     */
    where?: configuracionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuraciones to fetch.
     */
    orderBy?: configuracionesOrderByWithRelationInput | configuracionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: configuracionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuraciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuraciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned configuraciones
    **/
    _count?: true | ConfiguracionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfiguracionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfiguracionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfiguracionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfiguracionesMaxAggregateInputType
  }

  export type GetConfiguracionesAggregateType<T extends ConfiguracionesAggregateArgs> = {
        [P in keyof T & keyof AggregateConfiguraciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfiguraciones[P]>
      : GetScalarType<T[P], AggregateConfiguraciones[P]>
  }




  export type configuracionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: configuracionesWhereInput
    orderBy?: configuracionesOrderByWithAggregationInput | configuracionesOrderByWithAggregationInput[]
    by: ConfiguracionesScalarFieldEnum[] | ConfiguracionesScalarFieldEnum
    having?: configuracionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfiguracionesCountAggregateInputType | true
    _avg?: ConfiguracionesAvgAggregateInputType
    _sum?: ConfiguracionesSumAggregateInputType
    _min?: ConfiguracionesMinAggregateInputType
    _max?: ConfiguracionesMaxAggregateInputType
  }

  export type ConfiguracionesGroupByOutputType = {
    id_config: number
    clave: string
    valor: string
    _count: ConfiguracionesCountAggregateOutputType | null
    _avg: ConfiguracionesAvgAggregateOutputType | null
    _sum: ConfiguracionesSumAggregateOutputType | null
    _min: ConfiguracionesMinAggregateOutputType | null
    _max: ConfiguracionesMaxAggregateOutputType | null
  }

  type GetConfiguracionesGroupByPayload<T extends configuracionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfiguracionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfiguracionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfiguracionesGroupByOutputType[P]>
            : GetScalarType<T[P], ConfiguracionesGroupByOutputType[P]>
        }
      >
    >


  export type configuracionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_config?: boolean
    clave?: boolean
    valor?: boolean
  }, ExtArgs["result"]["configuraciones"]>



  export type configuracionesSelectScalar = {
    id_config?: boolean
    clave?: boolean
    valor?: boolean
  }

  export type configuracionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_config" | "clave" | "valor", ExtArgs["result"]["configuraciones"]>

  export type $configuracionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "configuraciones"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_config: number
      clave: string
      valor: string
    }, ExtArgs["result"]["configuraciones"]>
    composites: {}
  }

  type configuracionesGetPayload<S extends boolean | null | undefined | configuracionesDefaultArgs> = $Result.GetResult<Prisma.$configuracionesPayload, S>

  type configuracionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<configuracionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfiguracionesCountAggregateInputType | true
    }

  export interface configuracionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['configuraciones'], meta: { name: 'configuraciones' } }
    /**
     * Find zero or one Configuraciones that matches the filter.
     * @param {configuracionesFindUniqueArgs} args - Arguments to find a Configuraciones
     * @example
     * // Get one Configuraciones
     * const configuraciones = await prisma.configuraciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends configuracionesFindUniqueArgs>(args: SelectSubset<T, configuracionesFindUniqueArgs<ExtArgs>>): Prisma__configuracionesClient<$Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Configuraciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {configuracionesFindUniqueOrThrowArgs} args - Arguments to find a Configuraciones
     * @example
     * // Get one Configuraciones
     * const configuraciones = await prisma.configuraciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends configuracionesFindUniqueOrThrowArgs>(args: SelectSubset<T, configuracionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__configuracionesClient<$Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuraciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionesFindFirstArgs} args - Arguments to find a Configuraciones
     * @example
     * // Get one Configuraciones
     * const configuraciones = await prisma.configuraciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends configuracionesFindFirstArgs>(args?: SelectSubset<T, configuracionesFindFirstArgs<ExtArgs>>): Prisma__configuracionesClient<$Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configuraciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionesFindFirstOrThrowArgs} args - Arguments to find a Configuraciones
     * @example
     * // Get one Configuraciones
     * const configuraciones = await prisma.configuraciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends configuracionesFindFirstOrThrowArgs>(args?: SelectSubset<T, configuracionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__configuracionesClient<$Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configuraciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configuraciones
     * const configuraciones = await prisma.configuraciones.findMany()
     * 
     * // Get first 10 Configuraciones
     * const configuraciones = await prisma.configuraciones.findMany({ take: 10 })
     * 
     * // Only select the `id_config`
     * const configuracionesWithId_configOnly = await prisma.configuraciones.findMany({ select: { id_config: true } })
     * 
     */
    findMany<T extends configuracionesFindManyArgs>(args?: SelectSubset<T, configuracionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Configuraciones.
     * @param {configuracionesCreateArgs} args - Arguments to create a Configuraciones.
     * @example
     * // Create one Configuraciones
     * const Configuraciones = await prisma.configuraciones.create({
     *   data: {
     *     // ... data to create a Configuraciones
     *   }
     * })
     * 
     */
    create<T extends configuracionesCreateArgs>(args: SelectSubset<T, configuracionesCreateArgs<ExtArgs>>): Prisma__configuracionesClient<$Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configuraciones.
     * @param {configuracionesCreateManyArgs} args - Arguments to create many Configuraciones.
     * @example
     * // Create many Configuraciones
     * const configuraciones = await prisma.configuraciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends configuracionesCreateManyArgs>(args?: SelectSubset<T, configuracionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Configuraciones.
     * @param {configuracionesDeleteArgs} args - Arguments to delete one Configuraciones.
     * @example
     * // Delete one Configuraciones
     * const Configuraciones = await prisma.configuraciones.delete({
     *   where: {
     *     // ... filter to delete one Configuraciones
     *   }
     * })
     * 
     */
    delete<T extends configuracionesDeleteArgs>(args: SelectSubset<T, configuracionesDeleteArgs<ExtArgs>>): Prisma__configuracionesClient<$Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Configuraciones.
     * @param {configuracionesUpdateArgs} args - Arguments to update one Configuraciones.
     * @example
     * // Update one Configuraciones
     * const configuraciones = await prisma.configuraciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends configuracionesUpdateArgs>(args: SelectSubset<T, configuracionesUpdateArgs<ExtArgs>>): Prisma__configuracionesClient<$Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configuraciones.
     * @param {configuracionesDeleteManyArgs} args - Arguments to filter Configuraciones to delete.
     * @example
     * // Delete a few Configuraciones
     * const { count } = await prisma.configuraciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends configuracionesDeleteManyArgs>(args?: SelectSubset<T, configuracionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configuraciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configuraciones
     * const configuraciones = await prisma.configuraciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends configuracionesUpdateManyArgs>(args: SelectSubset<T, configuracionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Configuraciones.
     * @param {configuracionesUpsertArgs} args - Arguments to update or create a Configuraciones.
     * @example
     * // Update or create a Configuraciones
     * const configuraciones = await prisma.configuraciones.upsert({
     *   create: {
     *     // ... data to create a Configuraciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Configuraciones we want to update
     *   }
     * })
     */
    upsert<T extends configuracionesUpsertArgs>(args: SelectSubset<T, configuracionesUpsertArgs<ExtArgs>>): Prisma__configuracionesClient<$Result.GetResult<Prisma.$configuracionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configuraciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionesCountArgs} args - Arguments to filter Configuraciones to count.
     * @example
     * // Count the number of Configuraciones
     * const count = await prisma.configuraciones.count({
     *   where: {
     *     // ... the filter for the Configuraciones we want to count
     *   }
     * })
    **/
    count<T extends configuracionesCountArgs>(
      args?: Subset<T, configuracionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfiguracionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Configuraciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfiguracionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfiguracionesAggregateArgs>(args: Subset<T, ConfiguracionesAggregateArgs>): Prisma.PrismaPromise<GetConfiguracionesAggregateType<T>>

    /**
     * Group by Configuraciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configuracionesGroupByArgs} args - Group by arguments.
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
      T extends configuracionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: configuracionesGroupByArgs['orderBy'] }
        : { orderBy?: configuracionesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, configuracionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the configuraciones model
   */
  readonly fields: configuracionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for configuraciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__configuracionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the configuraciones model
   */
  interface configuracionesFieldRefs {
    readonly id_config: FieldRef<"configuraciones", 'Int'>
    readonly clave: FieldRef<"configuraciones", 'String'>
    readonly valor: FieldRef<"configuraciones", 'String'>
  }
    

  // Custom InputTypes
  /**
   * configuraciones findUnique
   */
  export type configuracionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
    /**
     * Filter, which configuraciones to fetch.
     */
    where: configuracionesWhereUniqueInput
  }

  /**
   * configuraciones findUniqueOrThrow
   */
  export type configuracionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
    /**
     * Filter, which configuraciones to fetch.
     */
    where: configuracionesWhereUniqueInput
  }

  /**
   * configuraciones findFirst
   */
  export type configuracionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
    /**
     * Filter, which configuraciones to fetch.
     */
    where?: configuracionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuraciones to fetch.
     */
    orderBy?: configuracionesOrderByWithRelationInput | configuracionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configuraciones.
     */
    cursor?: configuracionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuraciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuraciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configuraciones.
     */
    distinct?: ConfiguracionesScalarFieldEnum | ConfiguracionesScalarFieldEnum[]
  }

  /**
   * configuraciones findFirstOrThrow
   */
  export type configuracionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
    /**
     * Filter, which configuraciones to fetch.
     */
    where?: configuracionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuraciones to fetch.
     */
    orderBy?: configuracionesOrderByWithRelationInput | configuracionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configuraciones.
     */
    cursor?: configuracionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuraciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuraciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configuraciones.
     */
    distinct?: ConfiguracionesScalarFieldEnum | ConfiguracionesScalarFieldEnum[]
  }

  /**
   * configuraciones findMany
   */
  export type configuracionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
    /**
     * Filter, which configuraciones to fetch.
     */
    where?: configuracionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configuraciones to fetch.
     */
    orderBy?: configuracionesOrderByWithRelationInput | configuracionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing configuraciones.
     */
    cursor?: configuracionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configuraciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configuraciones.
     */
    skip?: number
    distinct?: ConfiguracionesScalarFieldEnum | ConfiguracionesScalarFieldEnum[]
  }

  /**
   * configuraciones create
   */
  export type configuracionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
    /**
     * The data needed to create a configuraciones.
     */
    data: XOR<configuracionesCreateInput, configuracionesUncheckedCreateInput>
  }

  /**
   * configuraciones createMany
   */
  export type configuracionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many configuraciones.
     */
    data: configuracionesCreateManyInput | configuracionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * configuraciones update
   */
  export type configuracionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
    /**
     * The data needed to update a configuraciones.
     */
    data: XOR<configuracionesUpdateInput, configuracionesUncheckedUpdateInput>
    /**
     * Choose, which configuraciones to update.
     */
    where: configuracionesWhereUniqueInput
  }

  /**
   * configuraciones updateMany
   */
  export type configuracionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update configuraciones.
     */
    data: XOR<configuracionesUpdateManyMutationInput, configuracionesUncheckedUpdateManyInput>
    /**
     * Filter which configuraciones to update
     */
    where?: configuracionesWhereInput
    /**
     * Limit how many configuraciones to update.
     */
    limit?: number
  }

  /**
   * configuraciones upsert
   */
  export type configuracionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
    /**
     * The filter to search for the configuraciones to update in case it exists.
     */
    where: configuracionesWhereUniqueInput
    /**
     * In case the configuraciones found by the `where` argument doesn't exist, create a new configuraciones with this data.
     */
    create: XOR<configuracionesCreateInput, configuracionesUncheckedCreateInput>
    /**
     * In case the configuraciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<configuracionesUpdateInput, configuracionesUncheckedUpdateInput>
  }

  /**
   * configuraciones delete
   */
  export type configuracionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
    /**
     * Filter which configuraciones to delete.
     */
    where: configuracionesWhereUniqueInput
  }

  /**
   * configuraciones deleteMany
   */
  export type configuracionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which configuraciones to delete
     */
    where?: configuracionesWhereInput
    /**
     * Limit how many configuraciones to delete.
     */
    limit?: number
  }

  /**
   * configuraciones without action
   */
  export type configuracionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configuraciones
     */
    select?: configuracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configuraciones
     */
    omit?: configuracionesOmit<ExtArgs> | null
  }


  /**
   * Model conversaciones
   */

  export type AggregateConversaciones = {
    _count: ConversacionesCountAggregateOutputType | null
    _avg: ConversacionesAvgAggregateOutputType | null
    _sum: ConversacionesSumAggregateOutputType | null
    _min: ConversacionesMinAggregateOutputType | null
    _max: ConversacionesMaxAggregateOutputType | null
  }

  export type ConversacionesAvgAggregateOutputType = {
    id_conversacion: number | null
    id_usuario: number | null
  }

  export type ConversacionesSumAggregateOutputType = {
    id_conversacion: number | null
    id_usuario: number | null
  }

  export type ConversacionesMinAggregateOutputType = {
    id_conversacion: number | null
    id_usuario: number | null
    fecha_inicio: Date | null
    fecha_ultimo_mensaje: Date | null
    estado: string | null
  }

  export type ConversacionesMaxAggregateOutputType = {
    id_conversacion: number | null
    id_usuario: number | null
    fecha_inicio: Date | null
    fecha_ultimo_mensaje: Date | null
    estado: string | null
  }

  export type ConversacionesCountAggregateOutputType = {
    id_conversacion: number
    id_usuario: number
    fecha_inicio: number
    fecha_ultimo_mensaje: number
    estado: number
    _all: number
  }


  export type ConversacionesAvgAggregateInputType = {
    id_conversacion?: true
    id_usuario?: true
  }

  export type ConversacionesSumAggregateInputType = {
    id_conversacion?: true
    id_usuario?: true
  }

  export type ConversacionesMinAggregateInputType = {
    id_conversacion?: true
    id_usuario?: true
    fecha_inicio?: true
    fecha_ultimo_mensaje?: true
    estado?: true
  }

  export type ConversacionesMaxAggregateInputType = {
    id_conversacion?: true
    id_usuario?: true
    fecha_inicio?: true
    fecha_ultimo_mensaje?: true
    estado?: true
  }

  export type ConversacionesCountAggregateInputType = {
    id_conversacion?: true
    id_usuario?: true
    fecha_inicio?: true
    fecha_ultimo_mensaje?: true
    estado?: true
    _all?: true
  }

  export type ConversacionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversaciones to aggregate.
     */
    where?: conversacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversaciones to fetch.
     */
    orderBy?: conversacionesOrderByWithRelationInput | conversacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: conversacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned conversaciones
    **/
    _count?: true | ConversacionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversacionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversacionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversacionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversacionesMaxAggregateInputType
  }

  export type GetConversacionesAggregateType<T extends ConversacionesAggregateArgs> = {
        [P in keyof T & keyof AggregateConversaciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversaciones[P]>
      : GetScalarType<T[P], AggregateConversaciones[P]>
  }




  export type conversacionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversacionesWhereInput
    orderBy?: conversacionesOrderByWithAggregationInput | conversacionesOrderByWithAggregationInput[]
    by: ConversacionesScalarFieldEnum[] | ConversacionesScalarFieldEnum
    having?: conversacionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversacionesCountAggregateInputType | true
    _avg?: ConversacionesAvgAggregateInputType
    _sum?: ConversacionesSumAggregateInputType
    _min?: ConversacionesMinAggregateInputType
    _max?: ConversacionesMaxAggregateInputType
  }

  export type ConversacionesGroupByOutputType = {
    id_conversacion: number
    id_usuario: number | null
    fecha_inicio: Date | null
    fecha_ultimo_mensaje: Date | null
    estado: string | null
    _count: ConversacionesCountAggregateOutputType | null
    _avg: ConversacionesAvgAggregateOutputType | null
    _sum: ConversacionesSumAggregateOutputType | null
    _min: ConversacionesMinAggregateOutputType | null
    _max: ConversacionesMaxAggregateOutputType | null
  }

  type GetConversacionesGroupByPayload<T extends conversacionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversacionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversacionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversacionesGroupByOutputType[P]>
            : GetScalarType<T[P], ConversacionesGroupByOutputType[P]>
        }
      >
    >


  export type conversacionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_conversacion?: boolean
    id_usuario?: boolean
    fecha_inicio?: boolean
    fecha_ultimo_mensaje?: boolean
    estado?: boolean
    usuarios?: boolean | conversaciones$usuariosArgs<ExtArgs>
    mensajes?: boolean | conversaciones$mensajesArgs<ExtArgs>
    _count?: boolean | ConversacionesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversaciones"]>



  export type conversacionesSelectScalar = {
    id_conversacion?: boolean
    id_usuario?: boolean
    fecha_inicio?: boolean
    fecha_ultimo_mensaje?: boolean
    estado?: boolean
  }

  export type conversacionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_conversacion" | "id_usuario" | "fecha_inicio" | "fecha_ultimo_mensaje" | "estado", ExtArgs["result"]["conversaciones"]>
  export type conversacionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | conversaciones$usuariosArgs<ExtArgs>
    mensajes?: boolean | conversaciones$mensajesArgs<ExtArgs>
    _count?: boolean | ConversacionesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $conversacionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "conversaciones"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
      mensajes: Prisma.$mensajesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_conversacion: number
      id_usuario: number | null
      fecha_inicio: Date | null
      fecha_ultimo_mensaje: Date | null
      estado: string | null
    }, ExtArgs["result"]["conversaciones"]>
    composites: {}
  }

  type conversacionesGetPayload<S extends boolean | null | undefined | conversacionesDefaultArgs> = $Result.GetResult<Prisma.$conversacionesPayload, S>

  type conversacionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<conversacionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversacionesCountAggregateInputType | true
    }

  export interface conversacionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['conversaciones'], meta: { name: 'conversaciones' } }
    /**
     * Find zero or one Conversaciones that matches the filter.
     * @param {conversacionesFindUniqueArgs} args - Arguments to find a Conversaciones
     * @example
     * // Get one Conversaciones
     * const conversaciones = await prisma.conversaciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends conversacionesFindUniqueArgs>(args: SelectSubset<T, conversacionesFindUniqueArgs<ExtArgs>>): Prisma__conversacionesClient<$Result.GetResult<Prisma.$conversacionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversaciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {conversacionesFindUniqueOrThrowArgs} args - Arguments to find a Conversaciones
     * @example
     * // Get one Conversaciones
     * const conversaciones = await prisma.conversaciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends conversacionesFindUniqueOrThrowArgs>(args: SelectSubset<T, conversacionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__conversacionesClient<$Result.GetResult<Prisma.$conversacionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversacionesFindFirstArgs} args - Arguments to find a Conversaciones
     * @example
     * // Get one Conversaciones
     * const conversaciones = await prisma.conversaciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends conversacionesFindFirstArgs>(args?: SelectSubset<T, conversacionesFindFirstArgs<ExtArgs>>): Prisma__conversacionesClient<$Result.GetResult<Prisma.$conversacionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversaciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversacionesFindFirstOrThrowArgs} args - Arguments to find a Conversaciones
     * @example
     * // Get one Conversaciones
     * const conversaciones = await prisma.conversaciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends conversacionesFindFirstOrThrowArgs>(args?: SelectSubset<T, conversacionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__conversacionesClient<$Result.GetResult<Prisma.$conversacionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversacionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversaciones
     * const conversaciones = await prisma.conversaciones.findMany()
     * 
     * // Get first 10 Conversaciones
     * const conversaciones = await prisma.conversaciones.findMany({ take: 10 })
     * 
     * // Only select the `id_conversacion`
     * const conversacionesWithId_conversacionOnly = await prisma.conversaciones.findMany({ select: { id_conversacion: true } })
     * 
     */
    findMany<T extends conversacionesFindManyArgs>(args?: SelectSubset<T, conversacionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversacionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversaciones.
     * @param {conversacionesCreateArgs} args - Arguments to create a Conversaciones.
     * @example
     * // Create one Conversaciones
     * const Conversaciones = await prisma.conversaciones.create({
     *   data: {
     *     // ... data to create a Conversaciones
     *   }
     * })
     * 
     */
    create<T extends conversacionesCreateArgs>(args: SelectSubset<T, conversacionesCreateArgs<ExtArgs>>): Prisma__conversacionesClient<$Result.GetResult<Prisma.$conversacionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversaciones.
     * @param {conversacionesCreateManyArgs} args - Arguments to create many Conversaciones.
     * @example
     * // Create many Conversaciones
     * const conversaciones = await prisma.conversaciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends conversacionesCreateManyArgs>(args?: SelectSubset<T, conversacionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Conversaciones.
     * @param {conversacionesDeleteArgs} args - Arguments to delete one Conversaciones.
     * @example
     * // Delete one Conversaciones
     * const Conversaciones = await prisma.conversaciones.delete({
     *   where: {
     *     // ... filter to delete one Conversaciones
     *   }
     * })
     * 
     */
    delete<T extends conversacionesDeleteArgs>(args: SelectSubset<T, conversacionesDeleteArgs<ExtArgs>>): Prisma__conversacionesClient<$Result.GetResult<Prisma.$conversacionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversaciones.
     * @param {conversacionesUpdateArgs} args - Arguments to update one Conversaciones.
     * @example
     * // Update one Conversaciones
     * const conversaciones = await prisma.conversaciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends conversacionesUpdateArgs>(args: SelectSubset<T, conversacionesUpdateArgs<ExtArgs>>): Prisma__conversacionesClient<$Result.GetResult<Prisma.$conversacionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversaciones.
     * @param {conversacionesDeleteManyArgs} args - Arguments to filter Conversaciones to delete.
     * @example
     * // Delete a few Conversaciones
     * const { count } = await prisma.conversaciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends conversacionesDeleteManyArgs>(args?: SelectSubset<T, conversacionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversacionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversaciones
     * const conversaciones = await prisma.conversaciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends conversacionesUpdateManyArgs>(args: SelectSubset<T, conversacionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversaciones.
     * @param {conversacionesUpsertArgs} args - Arguments to update or create a Conversaciones.
     * @example
     * // Update or create a Conversaciones
     * const conversaciones = await prisma.conversaciones.upsert({
     *   create: {
     *     // ... data to create a Conversaciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversaciones we want to update
     *   }
     * })
     */
    upsert<T extends conversacionesUpsertArgs>(args: SelectSubset<T, conversacionesUpsertArgs<ExtArgs>>): Prisma__conversacionesClient<$Result.GetResult<Prisma.$conversacionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversacionesCountArgs} args - Arguments to filter Conversaciones to count.
     * @example
     * // Count the number of Conversaciones
     * const count = await prisma.conversaciones.count({
     *   where: {
     *     // ... the filter for the Conversaciones we want to count
     *   }
     * })
    **/
    count<T extends conversacionesCountArgs>(
      args?: Subset<T, conversacionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversacionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversacionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversacionesAggregateArgs>(args: Subset<T, ConversacionesAggregateArgs>): Prisma.PrismaPromise<GetConversacionesAggregateType<T>>

    /**
     * Group by Conversaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversacionesGroupByArgs} args - Group by arguments.
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
      T extends conversacionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: conversacionesGroupByArgs['orderBy'] }
        : { orderBy?: conversacionesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, conversacionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversacionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the conversaciones model
   */
  readonly fields: conversacionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for conversaciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__conversacionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends conversaciones$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, conversaciones$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mensajes<T extends conversaciones$mensajesArgs<ExtArgs> = {}>(args?: Subset<T, conversaciones$mensajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the conversaciones model
   */
  interface conversacionesFieldRefs {
    readonly id_conversacion: FieldRef<"conversaciones", 'Int'>
    readonly id_usuario: FieldRef<"conversaciones", 'Int'>
    readonly fecha_inicio: FieldRef<"conversaciones", 'DateTime'>
    readonly fecha_ultimo_mensaje: FieldRef<"conversaciones", 'DateTime'>
    readonly estado: FieldRef<"conversaciones", 'String'>
  }
    

  // Custom InputTypes
  /**
   * conversaciones findUnique
   */
  export type conversacionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversaciones
     */
    select?: conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversaciones
     */
    omit?: conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversacionesInclude<ExtArgs> | null
    /**
     * Filter, which conversaciones to fetch.
     */
    where: conversacionesWhereUniqueInput
  }

  /**
   * conversaciones findUniqueOrThrow
   */
  export type conversacionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversaciones
     */
    select?: conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversaciones
     */
    omit?: conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversacionesInclude<ExtArgs> | null
    /**
     * Filter, which conversaciones to fetch.
     */
    where: conversacionesWhereUniqueInput
  }

  /**
   * conversaciones findFirst
   */
  export type conversacionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversaciones
     */
    select?: conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversaciones
     */
    omit?: conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversacionesInclude<ExtArgs> | null
    /**
     * Filter, which conversaciones to fetch.
     */
    where?: conversacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversaciones to fetch.
     */
    orderBy?: conversacionesOrderByWithRelationInput | conversacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversaciones.
     */
    cursor?: conversacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversaciones.
     */
    distinct?: ConversacionesScalarFieldEnum | ConversacionesScalarFieldEnum[]
  }

  /**
   * conversaciones findFirstOrThrow
   */
  export type conversacionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversaciones
     */
    select?: conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversaciones
     */
    omit?: conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversacionesInclude<ExtArgs> | null
    /**
     * Filter, which conversaciones to fetch.
     */
    where?: conversacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversaciones to fetch.
     */
    orderBy?: conversacionesOrderByWithRelationInput | conversacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conversaciones.
     */
    cursor?: conversacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conversaciones.
     */
    distinct?: ConversacionesScalarFieldEnum | ConversacionesScalarFieldEnum[]
  }

  /**
   * conversaciones findMany
   */
  export type conversacionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversaciones
     */
    select?: conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversaciones
     */
    omit?: conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversacionesInclude<ExtArgs> | null
    /**
     * Filter, which conversaciones to fetch.
     */
    where?: conversacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conversaciones to fetch.
     */
    orderBy?: conversacionesOrderByWithRelationInput | conversacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing conversaciones.
     */
    cursor?: conversacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conversaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conversaciones.
     */
    skip?: number
    distinct?: ConversacionesScalarFieldEnum | ConversacionesScalarFieldEnum[]
  }

  /**
   * conversaciones create
   */
  export type conversacionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversaciones
     */
    select?: conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversaciones
     */
    omit?: conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversacionesInclude<ExtArgs> | null
    /**
     * The data needed to create a conversaciones.
     */
    data?: XOR<conversacionesCreateInput, conversacionesUncheckedCreateInput>
  }

  /**
   * conversaciones createMany
   */
  export type conversacionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many conversaciones.
     */
    data: conversacionesCreateManyInput | conversacionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * conversaciones update
   */
  export type conversacionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversaciones
     */
    select?: conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversaciones
     */
    omit?: conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversacionesInclude<ExtArgs> | null
    /**
     * The data needed to update a conversaciones.
     */
    data: XOR<conversacionesUpdateInput, conversacionesUncheckedUpdateInput>
    /**
     * Choose, which conversaciones to update.
     */
    where: conversacionesWhereUniqueInput
  }

  /**
   * conversaciones updateMany
   */
  export type conversacionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update conversaciones.
     */
    data: XOR<conversacionesUpdateManyMutationInput, conversacionesUncheckedUpdateManyInput>
    /**
     * Filter which conversaciones to update
     */
    where?: conversacionesWhereInput
    /**
     * Limit how many conversaciones to update.
     */
    limit?: number
  }

  /**
   * conversaciones upsert
   */
  export type conversacionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversaciones
     */
    select?: conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversaciones
     */
    omit?: conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversacionesInclude<ExtArgs> | null
    /**
     * The filter to search for the conversaciones to update in case it exists.
     */
    where: conversacionesWhereUniqueInput
    /**
     * In case the conversaciones found by the `where` argument doesn't exist, create a new conversaciones with this data.
     */
    create: XOR<conversacionesCreateInput, conversacionesUncheckedCreateInput>
    /**
     * In case the conversaciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<conversacionesUpdateInput, conversacionesUncheckedUpdateInput>
  }

  /**
   * conversaciones delete
   */
  export type conversacionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversaciones
     */
    select?: conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversaciones
     */
    omit?: conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversacionesInclude<ExtArgs> | null
    /**
     * Filter which conversaciones to delete.
     */
    where: conversacionesWhereUniqueInput
  }

  /**
   * conversaciones deleteMany
   */
  export type conversacionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversaciones to delete
     */
    where?: conversacionesWhereInput
    /**
     * Limit how many conversaciones to delete.
     */
    limit?: number
  }

  /**
   * conversaciones.usuarios
   */
  export type conversaciones$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * conversaciones.mensajes
   */
  export type conversaciones$mensajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    where?: mensajesWhereInput
    orderBy?: mensajesOrderByWithRelationInput | mensajesOrderByWithRelationInput[]
    cursor?: mensajesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensajesScalarFieldEnum | MensajesScalarFieldEnum[]
  }

  /**
   * conversaciones without action
   */
  export type conversacionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversaciones
     */
    select?: conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversaciones
     */
    omit?: conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversacionesInclude<ExtArgs> | null
  }


  /**
   * Model intents
   */

  export type AggregateIntents = {
    _count: IntentsCountAggregateOutputType | null
    _avg: IntentsAvgAggregateOutputType | null
    _sum: IntentsSumAggregateOutputType | null
    _min: IntentsMinAggregateOutputType | null
    _max: IntentsMaxAggregateOutputType | null
  }

  export type IntentsAvgAggregateOutputType = {
    id_intent: number | null
  }

  export type IntentsSumAggregateOutputType = {
    id_intent: number | null
  }

  export type IntentsMinAggregateOutputType = {
    id_intent: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type IntentsMaxAggregateOutputType = {
    id_intent: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type IntentsCountAggregateOutputType = {
    id_intent: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type IntentsAvgAggregateInputType = {
    id_intent?: true
  }

  export type IntentsSumAggregateInputType = {
    id_intent?: true
  }

  export type IntentsMinAggregateInputType = {
    id_intent?: true
    nombre?: true
    descripcion?: true
  }

  export type IntentsMaxAggregateInputType = {
    id_intent?: true
    nombre?: true
    descripcion?: true
  }

  export type IntentsCountAggregateInputType = {
    id_intent?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type IntentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which intents to aggregate.
     */
    where?: intentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intents to fetch.
     */
    orderBy?: intentsOrderByWithRelationInput | intentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: intentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned intents
    **/
    _count?: true | IntentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IntentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IntentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntentsMaxAggregateInputType
  }

  export type GetIntentsAggregateType<T extends IntentsAggregateArgs> = {
        [P in keyof T & keyof AggregateIntents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntents[P]>
      : GetScalarType<T[P], AggregateIntents[P]>
  }




  export type intentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: intentsWhereInput
    orderBy?: intentsOrderByWithAggregationInput | intentsOrderByWithAggregationInput[]
    by: IntentsScalarFieldEnum[] | IntentsScalarFieldEnum
    having?: intentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntentsCountAggregateInputType | true
    _avg?: IntentsAvgAggregateInputType
    _sum?: IntentsSumAggregateInputType
    _min?: IntentsMinAggregateInputType
    _max?: IntentsMaxAggregateInputType
  }

  export type IntentsGroupByOutputType = {
    id_intent: number
    nombre: string
    descripcion: string | null
    _count: IntentsCountAggregateOutputType | null
    _avg: IntentsAvgAggregateOutputType | null
    _sum: IntentsSumAggregateOutputType | null
    _min: IntentsMinAggregateOutputType | null
    _max: IntentsMaxAggregateOutputType | null
  }

  type GetIntentsGroupByPayload<T extends intentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntentsGroupByOutputType[P]>
            : GetScalarType<T[P], IntentsGroupByOutputType[P]>
        }
      >
    >


  export type intentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_intent?: boolean
    nombre?: boolean
    descripcion?: boolean
    respuestas?: boolean | intents$respuestasArgs<ExtArgs>
    _count?: boolean | IntentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intents"]>



  export type intentsSelectScalar = {
    id_intent?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type intentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_intent" | "nombre" | "descripcion", ExtArgs["result"]["intents"]>
  export type intentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respuestas?: boolean | intents$respuestasArgs<ExtArgs>
    _count?: boolean | IntentsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $intentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "intents"
    objects: {
      respuestas: Prisma.$respuestasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_intent: number
      nombre: string
      descripcion: string | null
    }, ExtArgs["result"]["intents"]>
    composites: {}
  }

  type intentsGetPayload<S extends boolean | null | undefined | intentsDefaultArgs> = $Result.GetResult<Prisma.$intentsPayload, S>

  type intentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<intentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntentsCountAggregateInputType | true
    }

  export interface intentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['intents'], meta: { name: 'intents' } }
    /**
     * Find zero or one Intents that matches the filter.
     * @param {intentsFindUniqueArgs} args - Arguments to find a Intents
     * @example
     * // Get one Intents
     * const intents = await prisma.intents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends intentsFindUniqueArgs>(args: SelectSubset<T, intentsFindUniqueArgs<ExtArgs>>): Prisma__intentsClient<$Result.GetResult<Prisma.$intentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Intents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {intentsFindUniqueOrThrowArgs} args - Arguments to find a Intents
     * @example
     * // Get one Intents
     * const intents = await prisma.intents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends intentsFindUniqueOrThrowArgs>(args: SelectSubset<T, intentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__intentsClient<$Result.GetResult<Prisma.$intentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Intents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intentsFindFirstArgs} args - Arguments to find a Intents
     * @example
     * // Get one Intents
     * const intents = await prisma.intents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends intentsFindFirstArgs>(args?: SelectSubset<T, intentsFindFirstArgs<ExtArgs>>): Prisma__intentsClient<$Result.GetResult<Prisma.$intentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Intents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intentsFindFirstOrThrowArgs} args - Arguments to find a Intents
     * @example
     * // Get one Intents
     * const intents = await prisma.intents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends intentsFindFirstOrThrowArgs>(args?: SelectSubset<T, intentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__intentsClient<$Result.GetResult<Prisma.$intentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Intents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Intents
     * const intents = await prisma.intents.findMany()
     * 
     * // Get first 10 Intents
     * const intents = await prisma.intents.findMany({ take: 10 })
     * 
     * // Only select the `id_intent`
     * const intentsWithId_intentOnly = await prisma.intents.findMany({ select: { id_intent: true } })
     * 
     */
    findMany<T extends intentsFindManyArgs>(args?: SelectSubset<T, intentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$intentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Intents.
     * @param {intentsCreateArgs} args - Arguments to create a Intents.
     * @example
     * // Create one Intents
     * const Intents = await prisma.intents.create({
     *   data: {
     *     // ... data to create a Intents
     *   }
     * })
     * 
     */
    create<T extends intentsCreateArgs>(args: SelectSubset<T, intentsCreateArgs<ExtArgs>>): Prisma__intentsClient<$Result.GetResult<Prisma.$intentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Intents.
     * @param {intentsCreateManyArgs} args - Arguments to create many Intents.
     * @example
     * // Create many Intents
     * const intents = await prisma.intents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends intentsCreateManyArgs>(args?: SelectSubset<T, intentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Intents.
     * @param {intentsDeleteArgs} args - Arguments to delete one Intents.
     * @example
     * // Delete one Intents
     * const Intents = await prisma.intents.delete({
     *   where: {
     *     // ... filter to delete one Intents
     *   }
     * })
     * 
     */
    delete<T extends intentsDeleteArgs>(args: SelectSubset<T, intentsDeleteArgs<ExtArgs>>): Prisma__intentsClient<$Result.GetResult<Prisma.$intentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Intents.
     * @param {intentsUpdateArgs} args - Arguments to update one Intents.
     * @example
     * // Update one Intents
     * const intents = await prisma.intents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends intentsUpdateArgs>(args: SelectSubset<T, intentsUpdateArgs<ExtArgs>>): Prisma__intentsClient<$Result.GetResult<Prisma.$intentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Intents.
     * @param {intentsDeleteManyArgs} args - Arguments to filter Intents to delete.
     * @example
     * // Delete a few Intents
     * const { count } = await prisma.intents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends intentsDeleteManyArgs>(args?: SelectSubset<T, intentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Intents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Intents
     * const intents = await prisma.intents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends intentsUpdateManyArgs>(args: SelectSubset<T, intentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Intents.
     * @param {intentsUpsertArgs} args - Arguments to update or create a Intents.
     * @example
     * // Update or create a Intents
     * const intents = await prisma.intents.upsert({
     *   create: {
     *     // ... data to create a Intents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Intents we want to update
     *   }
     * })
     */
    upsert<T extends intentsUpsertArgs>(args: SelectSubset<T, intentsUpsertArgs<ExtArgs>>): Prisma__intentsClient<$Result.GetResult<Prisma.$intentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Intents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intentsCountArgs} args - Arguments to filter Intents to count.
     * @example
     * // Count the number of Intents
     * const count = await prisma.intents.count({
     *   where: {
     *     // ... the filter for the Intents we want to count
     *   }
     * })
    **/
    count<T extends intentsCountArgs>(
      args?: Subset<T, intentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Intents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IntentsAggregateArgs>(args: Subset<T, IntentsAggregateArgs>): Prisma.PrismaPromise<GetIntentsAggregateType<T>>

    /**
     * Group by Intents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intentsGroupByArgs} args - Group by arguments.
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
      T extends intentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: intentsGroupByArgs['orderBy'] }
        : { orderBy?: intentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, intentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the intents model
   */
  readonly fields: intentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for intents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__intentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    respuestas<T extends intents$respuestasArgs<ExtArgs> = {}>(args?: Subset<T, intents$respuestasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$respuestasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the intents model
   */
  interface intentsFieldRefs {
    readonly id_intent: FieldRef<"intents", 'Int'>
    readonly nombre: FieldRef<"intents", 'String'>
    readonly descripcion: FieldRef<"intents", 'String'>
  }
    

  // Custom InputTypes
  /**
   * intents findUnique
   */
  export type intentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intents
     */
    select?: intentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intents
     */
    omit?: intentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intentsInclude<ExtArgs> | null
    /**
     * Filter, which intents to fetch.
     */
    where: intentsWhereUniqueInput
  }

  /**
   * intents findUniqueOrThrow
   */
  export type intentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intents
     */
    select?: intentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intents
     */
    omit?: intentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intentsInclude<ExtArgs> | null
    /**
     * Filter, which intents to fetch.
     */
    where: intentsWhereUniqueInput
  }

  /**
   * intents findFirst
   */
  export type intentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intents
     */
    select?: intentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intents
     */
    omit?: intentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intentsInclude<ExtArgs> | null
    /**
     * Filter, which intents to fetch.
     */
    where?: intentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intents to fetch.
     */
    orderBy?: intentsOrderByWithRelationInput | intentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for intents.
     */
    cursor?: intentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of intents.
     */
    distinct?: IntentsScalarFieldEnum | IntentsScalarFieldEnum[]
  }

  /**
   * intents findFirstOrThrow
   */
  export type intentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intents
     */
    select?: intentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intents
     */
    omit?: intentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intentsInclude<ExtArgs> | null
    /**
     * Filter, which intents to fetch.
     */
    where?: intentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intents to fetch.
     */
    orderBy?: intentsOrderByWithRelationInput | intentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for intents.
     */
    cursor?: intentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of intents.
     */
    distinct?: IntentsScalarFieldEnum | IntentsScalarFieldEnum[]
  }

  /**
   * intents findMany
   */
  export type intentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intents
     */
    select?: intentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intents
     */
    omit?: intentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intentsInclude<ExtArgs> | null
    /**
     * Filter, which intents to fetch.
     */
    where?: intentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intents to fetch.
     */
    orderBy?: intentsOrderByWithRelationInput | intentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing intents.
     */
    cursor?: intentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intents.
     */
    skip?: number
    distinct?: IntentsScalarFieldEnum | IntentsScalarFieldEnum[]
  }

  /**
   * intents create
   */
  export type intentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intents
     */
    select?: intentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intents
     */
    omit?: intentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intentsInclude<ExtArgs> | null
    /**
     * The data needed to create a intents.
     */
    data: XOR<intentsCreateInput, intentsUncheckedCreateInput>
  }

  /**
   * intents createMany
   */
  export type intentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many intents.
     */
    data: intentsCreateManyInput | intentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * intents update
   */
  export type intentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intents
     */
    select?: intentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intents
     */
    omit?: intentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intentsInclude<ExtArgs> | null
    /**
     * The data needed to update a intents.
     */
    data: XOR<intentsUpdateInput, intentsUncheckedUpdateInput>
    /**
     * Choose, which intents to update.
     */
    where: intentsWhereUniqueInput
  }

  /**
   * intents updateMany
   */
  export type intentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update intents.
     */
    data: XOR<intentsUpdateManyMutationInput, intentsUncheckedUpdateManyInput>
    /**
     * Filter which intents to update
     */
    where?: intentsWhereInput
    /**
     * Limit how many intents to update.
     */
    limit?: number
  }

  /**
   * intents upsert
   */
  export type intentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intents
     */
    select?: intentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intents
     */
    omit?: intentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intentsInclude<ExtArgs> | null
    /**
     * The filter to search for the intents to update in case it exists.
     */
    where: intentsWhereUniqueInput
    /**
     * In case the intents found by the `where` argument doesn't exist, create a new intents with this data.
     */
    create: XOR<intentsCreateInput, intentsUncheckedCreateInput>
    /**
     * In case the intents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<intentsUpdateInput, intentsUncheckedUpdateInput>
  }

  /**
   * intents delete
   */
  export type intentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intents
     */
    select?: intentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intents
     */
    omit?: intentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intentsInclude<ExtArgs> | null
    /**
     * Filter which intents to delete.
     */
    where: intentsWhereUniqueInput
  }

  /**
   * intents deleteMany
   */
  export type intentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which intents to delete
     */
    where?: intentsWhereInput
    /**
     * Limit how many intents to delete.
     */
    limit?: number
  }

  /**
   * intents.respuestas
   */
  export type intents$respuestasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respuestas
     */
    select?: respuestasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respuestas
     */
    omit?: respuestasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respuestasInclude<ExtArgs> | null
    where?: respuestasWhereInput
    orderBy?: respuestasOrderByWithRelationInput | respuestasOrderByWithRelationInput[]
    cursor?: respuestasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RespuestasScalarFieldEnum | RespuestasScalarFieldEnum[]
  }

  /**
   * intents without action
   */
  export type intentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intents
     */
    select?: intentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intents
     */
    omit?: intentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intentsInclude<ExtArgs> | null
  }


  /**
   * Model logs_actividad
   */

  export type AggregateLogs_actividad = {
    _count: Logs_actividadCountAggregateOutputType | null
    _avg: Logs_actividadAvgAggregateOutputType | null
    _sum: Logs_actividadSumAggregateOutputType | null
    _min: Logs_actividadMinAggregateOutputType | null
    _max: Logs_actividadMaxAggregateOutputType | null
  }

  export type Logs_actividadAvgAggregateOutputType = {
    id_log: number | null
    id_usuario: number | null
  }

  export type Logs_actividadSumAggregateOutputType = {
    id_log: number | null
    id_usuario: number | null
  }

  export type Logs_actividadMinAggregateOutputType = {
    id_log: number | null
    id_usuario: number | null
    accion: string | null
    fecha: Date | null
  }

  export type Logs_actividadMaxAggregateOutputType = {
    id_log: number | null
    id_usuario: number | null
    accion: string | null
    fecha: Date | null
  }

  export type Logs_actividadCountAggregateOutputType = {
    id_log: number
    id_usuario: number
    accion: number
    fecha: number
    _all: number
  }


  export type Logs_actividadAvgAggregateInputType = {
    id_log?: true
    id_usuario?: true
  }

  export type Logs_actividadSumAggregateInputType = {
    id_log?: true
    id_usuario?: true
  }

  export type Logs_actividadMinAggregateInputType = {
    id_log?: true
    id_usuario?: true
    accion?: true
    fecha?: true
  }

  export type Logs_actividadMaxAggregateInputType = {
    id_log?: true
    id_usuario?: true
    accion?: true
    fecha?: true
  }

  export type Logs_actividadCountAggregateInputType = {
    id_log?: true
    id_usuario?: true
    accion?: true
    fecha?: true
    _all?: true
  }

  export type Logs_actividadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs_actividad to aggregate.
     */
    where?: logs_actividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs_actividads to fetch.
     */
    orderBy?: logs_actividadOrderByWithRelationInput | logs_actividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logs_actividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs_actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs_actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logs_actividads
    **/
    _count?: true | Logs_actividadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Logs_actividadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Logs_actividadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Logs_actividadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Logs_actividadMaxAggregateInputType
  }

  export type GetLogs_actividadAggregateType<T extends Logs_actividadAggregateArgs> = {
        [P in keyof T & keyof AggregateLogs_actividad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogs_actividad[P]>
      : GetScalarType<T[P], AggregateLogs_actividad[P]>
  }




  export type logs_actividadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logs_actividadWhereInput
    orderBy?: logs_actividadOrderByWithAggregationInput | logs_actividadOrderByWithAggregationInput[]
    by: Logs_actividadScalarFieldEnum[] | Logs_actividadScalarFieldEnum
    having?: logs_actividadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Logs_actividadCountAggregateInputType | true
    _avg?: Logs_actividadAvgAggregateInputType
    _sum?: Logs_actividadSumAggregateInputType
    _min?: Logs_actividadMinAggregateInputType
    _max?: Logs_actividadMaxAggregateInputType
  }

  export type Logs_actividadGroupByOutputType = {
    id_log: number
    id_usuario: number | null
    accion: string
    fecha: Date | null
    _count: Logs_actividadCountAggregateOutputType | null
    _avg: Logs_actividadAvgAggregateOutputType | null
    _sum: Logs_actividadSumAggregateOutputType | null
    _min: Logs_actividadMinAggregateOutputType | null
    _max: Logs_actividadMaxAggregateOutputType | null
  }

  type GetLogs_actividadGroupByPayload<T extends logs_actividadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Logs_actividadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Logs_actividadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Logs_actividadGroupByOutputType[P]>
            : GetScalarType<T[P], Logs_actividadGroupByOutputType[P]>
        }
      >
    >


  export type logs_actividadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_log?: boolean
    id_usuario?: boolean
    accion?: boolean
    fecha?: boolean
    usuarios?: boolean | logs_actividad$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["logs_actividad"]>



  export type logs_actividadSelectScalar = {
    id_log?: boolean
    id_usuario?: boolean
    accion?: boolean
    fecha?: boolean
  }

  export type logs_actividadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_log" | "id_usuario" | "accion" | "fecha", ExtArgs["result"]["logs_actividad"]>
  export type logs_actividadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | logs_actividad$usuariosArgs<ExtArgs>
  }

  export type $logs_actividadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "logs_actividad"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_log: number
      id_usuario: number | null
      accion: string
      fecha: Date | null
    }, ExtArgs["result"]["logs_actividad"]>
    composites: {}
  }

  type logs_actividadGetPayload<S extends boolean | null | undefined | logs_actividadDefaultArgs> = $Result.GetResult<Prisma.$logs_actividadPayload, S>

  type logs_actividadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<logs_actividadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Logs_actividadCountAggregateInputType | true
    }

  export interface logs_actividadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['logs_actividad'], meta: { name: 'logs_actividad' } }
    /**
     * Find zero or one Logs_actividad that matches the filter.
     * @param {logs_actividadFindUniqueArgs} args - Arguments to find a Logs_actividad
     * @example
     * // Get one Logs_actividad
     * const logs_actividad = await prisma.logs_actividad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logs_actividadFindUniqueArgs>(args: SelectSubset<T, logs_actividadFindUniqueArgs<ExtArgs>>): Prisma__logs_actividadClient<$Result.GetResult<Prisma.$logs_actividadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logs_actividad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {logs_actividadFindUniqueOrThrowArgs} args - Arguments to find a Logs_actividad
     * @example
     * // Get one Logs_actividad
     * const logs_actividad = await prisma.logs_actividad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logs_actividadFindUniqueOrThrowArgs>(args: SelectSubset<T, logs_actividadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logs_actividadClient<$Result.GetResult<Prisma.$logs_actividadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs_actividad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logs_actividadFindFirstArgs} args - Arguments to find a Logs_actividad
     * @example
     * // Get one Logs_actividad
     * const logs_actividad = await prisma.logs_actividad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logs_actividadFindFirstArgs>(args?: SelectSubset<T, logs_actividadFindFirstArgs<ExtArgs>>): Prisma__logs_actividadClient<$Result.GetResult<Prisma.$logs_actividadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs_actividad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logs_actividadFindFirstOrThrowArgs} args - Arguments to find a Logs_actividad
     * @example
     * // Get one Logs_actividad
     * const logs_actividad = await prisma.logs_actividad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logs_actividadFindFirstOrThrowArgs>(args?: SelectSubset<T, logs_actividadFindFirstOrThrowArgs<ExtArgs>>): Prisma__logs_actividadClient<$Result.GetResult<Prisma.$logs_actividadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs_actividads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logs_actividadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs_actividads
     * const logs_actividads = await prisma.logs_actividad.findMany()
     * 
     * // Get first 10 Logs_actividads
     * const logs_actividads = await prisma.logs_actividad.findMany({ take: 10 })
     * 
     * // Only select the `id_log`
     * const logs_actividadWithId_logOnly = await prisma.logs_actividad.findMany({ select: { id_log: true } })
     * 
     */
    findMany<T extends logs_actividadFindManyArgs>(args?: SelectSubset<T, logs_actividadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logs_actividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logs_actividad.
     * @param {logs_actividadCreateArgs} args - Arguments to create a Logs_actividad.
     * @example
     * // Create one Logs_actividad
     * const Logs_actividad = await prisma.logs_actividad.create({
     *   data: {
     *     // ... data to create a Logs_actividad
     *   }
     * })
     * 
     */
    create<T extends logs_actividadCreateArgs>(args: SelectSubset<T, logs_actividadCreateArgs<ExtArgs>>): Prisma__logs_actividadClient<$Result.GetResult<Prisma.$logs_actividadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs_actividads.
     * @param {logs_actividadCreateManyArgs} args - Arguments to create many Logs_actividads.
     * @example
     * // Create many Logs_actividads
     * const logs_actividad = await prisma.logs_actividad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logs_actividadCreateManyArgs>(args?: SelectSubset<T, logs_actividadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Logs_actividad.
     * @param {logs_actividadDeleteArgs} args - Arguments to delete one Logs_actividad.
     * @example
     * // Delete one Logs_actividad
     * const Logs_actividad = await prisma.logs_actividad.delete({
     *   where: {
     *     // ... filter to delete one Logs_actividad
     *   }
     * })
     * 
     */
    delete<T extends logs_actividadDeleteArgs>(args: SelectSubset<T, logs_actividadDeleteArgs<ExtArgs>>): Prisma__logs_actividadClient<$Result.GetResult<Prisma.$logs_actividadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logs_actividad.
     * @param {logs_actividadUpdateArgs} args - Arguments to update one Logs_actividad.
     * @example
     * // Update one Logs_actividad
     * const logs_actividad = await prisma.logs_actividad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logs_actividadUpdateArgs>(args: SelectSubset<T, logs_actividadUpdateArgs<ExtArgs>>): Prisma__logs_actividadClient<$Result.GetResult<Prisma.$logs_actividadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs_actividads.
     * @param {logs_actividadDeleteManyArgs} args - Arguments to filter Logs_actividads to delete.
     * @example
     * // Delete a few Logs_actividads
     * const { count } = await prisma.logs_actividad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logs_actividadDeleteManyArgs>(args?: SelectSubset<T, logs_actividadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs_actividads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logs_actividadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs_actividads
     * const logs_actividad = await prisma.logs_actividad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logs_actividadUpdateManyArgs>(args: SelectSubset<T, logs_actividadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Logs_actividad.
     * @param {logs_actividadUpsertArgs} args - Arguments to update or create a Logs_actividad.
     * @example
     * // Update or create a Logs_actividad
     * const logs_actividad = await prisma.logs_actividad.upsert({
     *   create: {
     *     // ... data to create a Logs_actividad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logs_actividad we want to update
     *   }
     * })
     */
    upsert<T extends logs_actividadUpsertArgs>(args: SelectSubset<T, logs_actividadUpsertArgs<ExtArgs>>): Prisma__logs_actividadClient<$Result.GetResult<Prisma.$logs_actividadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs_actividads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logs_actividadCountArgs} args - Arguments to filter Logs_actividads to count.
     * @example
     * // Count the number of Logs_actividads
     * const count = await prisma.logs_actividad.count({
     *   where: {
     *     // ... the filter for the Logs_actividads we want to count
     *   }
     * })
    **/
    count<T extends logs_actividadCountArgs>(
      args?: Subset<T, logs_actividadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Logs_actividadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logs_actividad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Logs_actividadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Logs_actividadAggregateArgs>(args: Subset<T, Logs_actividadAggregateArgs>): Prisma.PrismaPromise<GetLogs_actividadAggregateType<T>>

    /**
     * Group by Logs_actividad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logs_actividadGroupByArgs} args - Group by arguments.
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
      T extends logs_actividadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logs_actividadGroupByArgs['orderBy'] }
        : { orderBy?: logs_actividadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, logs_actividadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogs_actividadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the logs_actividad model
   */
  readonly fields: logs_actividadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for logs_actividad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logs_actividadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends logs_actividad$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, logs_actividad$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the logs_actividad model
   */
  interface logs_actividadFieldRefs {
    readonly id_log: FieldRef<"logs_actividad", 'Int'>
    readonly id_usuario: FieldRef<"logs_actividad", 'Int'>
    readonly accion: FieldRef<"logs_actividad", 'String'>
    readonly fecha: FieldRef<"logs_actividad", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * logs_actividad findUnique
   */
  export type logs_actividadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_actividad
     */
    select?: logs_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_actividad
     */
    omit?: logs_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_actividadInclude<ExtArgs> | null
    /**
     * Filter, which logs_actividad to fetch.
     */
    where: logs_actividadWhereUniqueInput
  }

  /**
   * logs_actividad findUniqueOrThrow
   */
  export type logs_actividadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_actividad
     */
    select?: logs_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_actividad
     */
    omit?: logs_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_actividadInclude<ExtArgs> | null
    /**
     * Filter, which logs_actividad to fetch.
     */
    where: logs_actividadWhereUniqueInput
  }

  /**
   * logs_actividad findFirst
   */
  export type logs_actividadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_actividad
     */
    select?: logs_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_actividad
     */
    omit?: logs_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_actividadInclude<ExtArgs> | null
    /**
     * Filter, which logs_actividad to fetch.
     */
    where?: logs_actividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs_actividads to fetch.
     */
    orderBy?: logs_actividadOrderByWithRelationInput | logs_actividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs_actividads.
     */
    cursor?: logs_actividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs_actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs_actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs_actividads.
     */
    distinct?: Logs_actividadScalarFieldEnum | Logs_actividadScalarFieldEnum[]
  }

  /**
   * logs_actividad findFirstOrThrow
   */
  export type logs_actividadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_actividad
     */
    select?: logs_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_actividad
     */
    omit?: logs_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_actividadInclude<ExtArgs> | null
    /**
     * Filter, which logs_actividad to fetch.
     */
    where?: logs_actividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs_actividads to fetch.
     */
    orderBy?: logs_actividadOrderByWithRelationInput | logs_actividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs_actividads.
     */
    cursor?: logs_actividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs_actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs_actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs_actividads.
     */
    distinct?: Logs_actividadScalarFieldEnum | Logs_actividadScalarFieldEnum[]
  }

  /**
   * logs_actividad findMany
   */
  export type logs_actividadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_actividad
     */
    select?: logs_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_actividad
     */
    omit?: logs_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_actividadInclude<ExtArgs> | null
    /**
     * Filter, which logs_actividads to fetch.
     */
    where?: logs_actividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs_actividads to fetch.
     */
    orderBy?: logs_actividadOrderByWithRelationInput | logs_actividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logs_actividads.
     */
    cursor?: logs_actividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs_actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs_actividads.
     */
    skip?: number
    distinct?: Logs_actividadScalarFieldEnum | Logs_actividadScalarFieldEnum[]
  }

  /**
   * logs_actividad create
   */
  export type logs_actividadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_actividad
     */
    select?: logs_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_actividad
     */
    omit?: logs_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_actividadInclude<ExtArgs> | null
    /**
     * The data needed to create a logs_actividad.
     */
    data: XOR<logs_actividadCreateInput, logs_actividadUncheckedCreateInput>
  }

  /**
   * logs_actividad createMany
   */
  export type logs_actividadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logs_actividads.
     */
    data: logs_actividadCreateManyInput | logs_actividadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logs_actividad update
   */
  export type logs_actividadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_actividad
     */
    select?: logs_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_actividad
     */
    omit?: logs_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_actividadInclude<ExtArgs> | null
    /**
     * The data needed to update a logs_actividad.
     */
    data: XOR<logs_actividadUpdateInput, logs_actividadUncheckedUpdateInput>
    /**
     * Choose, which logs_actividad to update.
     */
    where: logs_actividadWhereUniqueInput
  }

  /**
   * logs_actividad updateMany
   */
  export type logs_actividadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logs_actividads.
     */
    data: XOR<logs_actividadUpdateManyMutationInput, logs_actividadUncheckedUpdateManyInput>
    /**
     * Filter which logs_actividads to update
     */
    where?: logs_actividadWhereInput
    /**
     * Limit how many logs_actividads to update.
     */
    limit?: number
  }

  /**
   * logs_actividad upsert
   */
  export type logs_actividadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_actividad
     */
    select?: logs_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_actividad
     */
    omit?: logs_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_actividadInclude<ExtArgs> | null
    /**
     * The filter to search for the logs_actividad to update in case it exists.
     */
    where: logs_actividadWhereUniqueInput
    /**
     * In case the logs_actividad found by the `where` argument doesn't exist, create a new logs_actividad with this data.
     */
    create: XOR<logs_actividadCreateInput, logs_actividadUncheckedCreateInput>
    /**
     * In case the logs_actividad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logs_actividadUpdateInput, logs_actividadUncheckedUpdateInput>
  }

  /**
   * logs_actividad delete
   */
  export type logs_actividadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_actividad
     */
    select?: logs_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_actividad
     */
    omit?: logs_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_actividadInclude<ExtArgs> | null
    /**
     * Filter which logs_actividad to delete.
     */
    where: logs_actividadWhereUniqueInput
  }

  /**
   * logs_actividad deleteMany
   */
  export type logs_actividadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs_actividads to delete
     */
    where?: logs_actividadWhereInput
    /**
     * Limit how many logs_actividads to delete.
     */
    limit?: number
  }

  /**
   * logs_actividad.usuarios
   */
  export type logs_actividad$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * logs_actividad without action
   */
  export type logs_actividadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_actividad
     */
    select?: logs_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_actividad
     */
    omit?: logs_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_actividadInclude<ExtArgs> | null
  }


  /**
   * Model mensajes
   */

  export type AggregateMensajes = {
    _count: MensajesCountAggregateOutputType | null
    _avg: MensajesAvgAggregateOutputType | null
    _sum: MensajesSumAggregateOutputType | null
    _min: MensajesMinAggregateOutputType | null
    _max: MensajesMaxAggregateOutputType | null
  }

  export type MensajesAvgAggregateOutputType = {
    id_mensaje: number | null
    id_conversacion: number | null
  }

  export type MensajesSumAggregateOutputType = {
    id_mensaje: number | null
    id_conversacion: number | null
  }

  export type MensajesMinAggregateOutputType = {
    id_mensaje: number | null
    id_conversacion: number | null
    emisor: string | null
    mensaje: string | null
    fecha: Date | null
  }

  export type MensajesMaxAggregateOutputType = {
    id_mensaje: number | null
    id_conversacion: number | null
    emisor: string | null
    mensaje: string | null
    fecha: Date | null
  }

  export type MensajesCountAggregateOutputType = {
    id_mensaje: number
    id_conversacion: number
    emisor: number
    mensaje: number
    fecha: number
    _all: number
  }


  export type MensajesAvgAggregateInputType = {
    id_mensaje?: true
    id_conversacion?: true
  }

  export type MensajesSumAggregateInputType = {
    id_mensaje?: true
    id_conversacion?: true
  }

  export type MensajesMinAggregateInputType = {
    id_mensaje?: true
    id_conversacion?: true
    emisor?: true
    mensaje?: true
    fecha?: true
  }

  export type MensajesMaxAggregateInputType = {
    id_mensaje?: true
    id_conversacion?: true
    emisor?: true
    mensaje?: true
    fecha?: true
  }

  export type MensajesCountAggregateInputType = {
    id_mensaje?: true
    id_conversacion?: true
    emisor?: true
    mensaje?: true
    fecha?: true
    _all?: true
  }

  export type MensajesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mensajes to aggregate.
     */
    where?: mensajesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensajes to fetch.
     */
    orderBy?: mensajesOrderByWithRelationInput | mensajesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mensajesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mensajes
    **/
    _count?: true | MensajesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MensajesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MensajesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensajesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensajesMaxAggregateInputType
  }

  export type GetMensajesAggregateType<T extends MensajesAggregateArgs> = {
        [P in keyof T & keyof AggregateMensajes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensajes[P]>
      : GetScalarType<T[P], AggregateMensajes[P]>
  }




  export type mensajesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mensajesWhereInput
    orderBy?: mensajesOrderByWithAggregationInput | mensajesOrderByWithAggregationInput[]
    by: MensajesScalarFieldEnum[] | MensajesScalarFieldEnum
    having?: mensajesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensajesCountAggregateInputType | true
    _avg?: MensajesAvgAggregateInputType
    _sum?: MensajesSumAggregateInputType
    _min?: MensajesMinAggregateInputType
    _max?: MensajesMaxAggregateInputType
  }

  export type MensajesGroupByOutputType = {
    id_mensaje: number
    id_conversacion: number | null
    emisor: string
    mensaje: string
    fecha: Date | null
    _count: MensajesCountAggregateOutputType | null
    _avg: MensajesAvgAggregateOutputType | null
    _sum: MensajesSumAggregateOutputType | null
    _min: MensajesMinAggregateOutputType | null
    _max: MensajesMaxAggregateOutputType | null
  }

  type GetMensajesGroupByPayload<T extends mensajesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensajesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensajesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensajesGroupByOutputType[P]>
            : GetScalarType<T[P], MensajesGroupByOutputType[P]>
        }
      >
    >


  export type mensajesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mensaje?: boolean
    id_conversacion?: boolean
    emisor?: boolean
    mensaje?: boolean
    fecha?: boolean
    conversaciones?: boolean | mensajes$conversacionesArgs<ExtArgs>
  }, ExtArgs["result"]["mensajes"]>



  export type mensajesSelectScalar = {
    id_mensaje?: boolean
    id_conversacion?: boolean
    emisor?: boolean
    mensaje?: boolean
    fecha?: boolean
  }

  export type mensajesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_mensaje" | "id_conversacion" | "emisor" | "mensaje" | "fecha", ExtArgs["result"]["mensajes"]>
  export type mensajesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversaciones?: boolean | mensajes$conversacionesArgs<ExtArgs>
  }

  export type $mensajesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mensajes"
    objects: {
      conversaciones: Prisma.$conversacionesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_mensaje: number
      id_conversacion: number | null
      emisor: string
      mensaje: string
      fecha: Date | null
    }, ExtArgs["result"]["mensajes"]>
    composites: {}
  }

  type mensajesGetPayload<S extends boolean | null | undefined | mensajesDefaultArgs> = $Result.GetResult<Prisma.$mensajesPayload, S>

  type mensajesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mensajesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensajesCountAggregateInputType | true
    }

  export interface mensajesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mensajes'], meta: { name: 'mensajes' } }
    /**
     * Find zero or one Mensajes that matches the filter.
     * @param {mensajesFindUniqueArgs} args - Arguments to find a Mensajes
     * @example
     * // Get one Mensajes
     * const mensajes = await prisma.mensajes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mensajesFindUniqueArgs>(args: SelectSubset<T, mensajesFindUniqueArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mensajes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mensajesFindUniqueOrThrowArgs} args - Arguments to find a Mensajes
     * @example
     * // Get one Mensajes
     * const mensajes = await prisma.mensajes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mensajesFindUniqueOrThrowArgs>(args: SelectSubset<T, mensajesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajesFindFirstArgs} args - Arguments to find a Mensajes
     * @example
     * // Get one Mensajes
     * const mensajes = await prisma.mensajes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mensajesFindFirstArgs>(args?: SelectSubset<T, mensajesFindFirstArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensajes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajesFindFirstOrThrowArgs} args - Arguments to find a Mensajes
     * @example
     * // Get one Mensajes
     * const mensajes = await prisma.mensajes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mensajesFindFirstOrThrowArgs>(args?: SelectSubset<T, mensajesFindFirstOrThrowArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mensajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensajes
     * const mensajes = await prisma.mensajes.findMany()
     * 
     * // Get first 10 Mensajes
     * const mensajes = await prisma.mensajes.findMany({ take: 10 })
     * 
     * // Only select the `id_mensaje`
     * const mensajesWithId_mensajeOnly = await prisma.mensajes.findMany({ select: { id_mensaje: true } })
     * 
     */
    findMany<T extends mensajesFindManyArgs>(args?: SelectSubset<T, mensajesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mensajes.
     * @param {mensajesCreateArgs} args - Arguments to create a Mensajes.
     * @example
     * // Create one Mensajes
     * const Mensajes = await prisma.mensajes.create({
     *   data: {
     *     // ... data to create a Mensajes
     *   }
     * })
     * 
     */
    create<T extends mensajesCreateArgs>(args: SelectSubset<T, mensajesCreateArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mensajes.
     * @param {mensajesCreateManyArgs} args - Arguments to create many Mensajes.
     * @example
     * // Create many Mensajes
     * const mensajes = await prisma.mensajes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mensajesCreateManyArgs>(args?: SelectSubset<T, mensajesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mensajes.
     * @param {mensajesDeleteArgs} args - Arguments to delete one Mensajes.
     * @example
     * // Delete one Mensajes
     * const Mensajes = await prisma.mensajes.delete({
     *   where: {
     *     // ... filter to delete one Mensajes
     *   }
     * })
     * 
     */
    delete<T extends mensajesDeleteArgs>(args: SelectSubset<T, mensajesDeleteArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mensajes.
     * @param {mensajesUpdateArgs} args - Arguments to update one Mensajes.
     * @example
     * // Update one Mensajes
     * const mensajes = await prisma.mensajes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mensajesUpdateArgs>(args: SelectSubset<T, mensajesUpdateArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mensajes.
     * @param {mensajesDeleteManyArgs} args - Arguments to filter Mensajes to delete.
     * @example
     * // Delete a few Mensajes
     * const { count } = await prisma.mensajes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mensajesDeleteManyArgs>(args?: SelectSubset<T, mensajesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensajes
     * const mensajes = await prisma.mensajes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mensajesUpdateManyArgs>(args: SelectSubset<T, mensajesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mensajes.
     * @param {mensajesUpsertArgs} args - Arguments to update or create a Mensajes.
     * @example
     * // Update or create a Mensajes
     * const mensajes = await prisma.mensajes.upsert({
     *   create: {
     *     // ... data to create a Mensajes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensajes we want to update
     *   }
     * })
     */
    upsert<T extends mensajesUpsertArgs>(args: SelectSubset<T, mensajesUpsertArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajesCountArgs} args - Arguments to filter Mensajes to count.
     * @example
     * // Count the number of Mensajes
     * const count = await prisma.mensajes.count({
     *   where: {
     *     // ... the filter for the Mensajes we want to count
     *   }
     * })
    **/
    count<T extends mensajesCountArgs>(
      args?: Subset<T, mensajesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensajesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MensajesAggregateArgs>(args: Subset<T, MensajesAggregateArgs>): Prisma.PrismaPromise<GetMensajesAggregateType<T>>

    /**
     * Group by Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajesGroupByArgs} args - Group by arguments.
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
      T extends mensajesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mensajesGroupByArgs['orderBy'] }
        : { orderBy?: mensajesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mensajesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensajesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mensajes model
   */
  readonly fields: mensajesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mensajes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mensajesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversaciones<T extends mensajes$conversacionesArgs<ExtArgs> = {}>(args?: Subset<T, mensajes$conversacionesArgs<ExtArgs>>): Prisma__conversacionesClient<$Result.GetResult<Prisma.$conversacionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the mensajes model
   */
  interface mensajesFieldRefs {
    readonly id_mensaje: FieldRef<"mensajes", 'Int'>
    readonly id_conversacion: FieldRef<"mensajes", 'Int'>
    readonly emisor: FieldRef<"mensajes", 'String'>
    readonly mensaje: FieldRef<"mensajes", 'String'>
    readonly fecha: FieldRef<"mensajes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * mensajes findUnique
   */
  export type mensajesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * Filter, which mensajes to fetch.
     */
    where: mensajesWhereUniqueInput
  }

  /**
   * mensajes findUniqueOrThrow
   */
  export type mensajesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * Filter, which mensajes to fetch.
     */
    where: mensajesWhereUniqueInput
  }

  /**
   * mensajes findFirst
   */
  export type mensajesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * Filter, which mensajes to fetch.
     */
    where?: mensajesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensajes to fetch.
     */
    orderBy?: mensajesOrderByWithRelationInput | mensajesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mensajes.
     */
    cursor?: mensajesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mensajes.
     */
    distinct?: MensajesScalarFieldEnum | MensajesScalarFieldEnum[]
  }

  /**
   * mensajes findFirstOrThrow
   */
  export type mensajesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * Filter, which mensajes to fetch.
     */
    where?: mensajesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensajes to fetch.
     */
    orderBy?: mensajesOrderByWithRelationInput | mensajesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mensajes.
     */
    cursor?: mensajesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mensajes.
     */
    distinct?: MensajesScalarFieldEnum | MensajesScalarFieldEnum[]
  }

  /**
   * mensajes findMany
   */
  export type mensajesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * Filter, which mensajes to fetch.
     */
    where?: mensajesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensajes to fetch.
     */
    orderBy?: mensajesOrderByWithRelationInput | mensajesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mensajes.
     */
    cursor?: mensajesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensajes.
     */
    skip?: number
    distinct?: MensajesScalarFieldEnum | MensajesScalarFieldEnum[]
  }

  /**
   * mensajes create
   */
  export type mensajesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * The data needed to create a mensajes.
     */
    data: XOR<mensajesCreateInput, mensajesUncheckedCreateInput>
  }

  /**
   * mensajes createMany
   */
  export type mensajesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mensajes.
     */
    data: mensajesCreateManyInput | mensajesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mensajes update
   */
  export type mensajesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * The data needed to update a mensajes.
     */
    data: XOR<mensajesUpdateInput, mensajesUncheckedUpdateInput>
    /**
     * Choose, which mensajes to update.
     */
    where: mensajesWhereUniqueInput
  }

  /**
   * mensajes updateMany
   */
  export type mensajesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mensajes.
     */
    data: XOR<mensajesUpdateManyMutationInput, mensajesUncheckedUpdateManyInput>
    /**
     * Filter which mensajes to update
     */
    where?: mensajesWhereInput
    /**
     * Limit how many mensajes to update.
     */
    limit?: number
  }

  /**
   * mensajes upsert
   */
  export type mensajesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * The filter to search for the mensajes to update in case it exists.
     */
    where: mensajesWhereUniqueInput
    /**
     * In case the mensajes found by the `where` argument doesn't exist, create a new mensajes with this data.
     */
    create: XOR<mensajesCreateInput, mensajesUncheckedCreateInput>
    /**
     * In case the mensajes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mensajesUpdateInput, mensajesUncheckedUpdateInput>
  }

  /**
   * mensajes delete
   */
  export type mensajesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * Filter which mensajes to delete.
     */
    where: mensajesWhereUniqueInput
  }

  /**
   * mensajes deleteMany
   */
  export type mensajesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mensajes to delete
     */
    where?: mensajesWhereInput
    /**
     * Limit how many mensajes to delete.
     */
    limit?: number
  }

  /**
   * mensajes.conversaciones
   */
  export type mensajes$conversacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversaciones
     */
    select?: conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversaciones
     */
    omit?: conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversacionesInclude<ExtArgs> | null
    where?: conversacionesWhereInput
  }

  /**
   * mensajes without action
   */
  export type mensajesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
  }


  /**
   * Model respuestas
   */

  export type AggregateRespuestas = {
    _count: RespuestasCountAggregateOutputType | null
    _avg: RespuestasAvgAggregateOutputType | null
    _sum: RespuestasSumAggregateOutputType | null
    _min: RespuestasMinAggregateOutputType | null
    _max: RespuestasMaxAggregateOutputType | null
  }

  export type RespuestasAvgAggregateOutputType = {
    id_respuesta: number | null
    id_intent: number | null
  }

  export type RespuestasSumAggregateOutputType = {
    id_respuesta: number | null
    id_intent: number | null
  }

  export type RespuestasMinAggregateOutputType = {
    id_respuesta: number | null
    id_intent: number | null
    respuesta: string | null
    tipo_respuesta: string | null
  }

  export type RespuestasMaxAggregateOutputType = {
    id_respuesta: number | null
    id_intent: number | null
    respuesta: string | null
    tipo_respuesta: string | null
  }

  export type RespuestasCountAggregateOutputType = {
    id_respuesta: number
    id_intent: number
    respuesta: number
    tipo_respuesta: number
    _all: number
  }


  export type RespuestasAvgAggregateInputType = {
    id_respuesta?: true
    id_intent?: true
  }

  export type RespuestasSumAggregateInputType = {
    id_respuesta?: true
    id_intent?: true
  }

  export type RespuestasMinAggregateInputType = {
    id_respuesta?: true
    id_intent?: true
    respuesta?: true
    tipo_respuesta?: true
  }

  export type RespuestasMaxAggregateInputType = {
    id_respuesta?: true
    id_intent?: true
    respuesta?: true
    tipo_respuesta?: true
  }

  export type RespuestasCountAggregateInputType = {
    id_respuesta?: true
    id_intent?: true
    respuesta?: true
    tipo_respuesta?: true
    _all?: true
  }

  export type RespuestasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which respuestas to aggregate.
     */
    where?: respuestasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of respuestas to fetch.
     */
    orderBy?: respuestasOrderByWithRelationInput | respuestasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: respuestasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` respuestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` respuestas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned respuestas
    **/
    _count?: true | RespuestasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RespuestasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RespuestasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RespuestasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RespuestasMaxAggregateInputType
  }

  export type GetRespuestasAggregateType<T extends RespuestasAggregateArgs> = {
        [P in keyof T & keyof AggregateRespuestas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRespuestas[P]>
      : GetScalarType<T[P], AggregateRespuestas[P]>
  }




  export type respuestasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: respuestasWhereInput
    orderBy?: respuestasOrderByWithAggregationInput | respuestasOrderByWithAggregationInput[]
    by: RespuestasScalarFieldEnum[] | RespuestasScalarFieldEnum
    having?: respuestasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RespuestasCountAggregateInputType | true
    _avg?: RespuestasAvgAggregateInputType
    _sum?: RespuestasSumAggregateInputType
    _min?: RespuestasMinAggregateInputType
    _max?: RespuestasMaxAggregateInputType
  }

  export type RespuestasGroupByOutputType = {
    id_respuesta: number
    id_intent: number | null
    respuesta: string
    tipo_respuesta: string | null
    _count: RespuestasCountAggregateOutputType | null
    _avg: RespuestasAvgAggregateOutputType | null
    _sum: RespuestasSumAggregateOutputType | null
    _min: RespuestasMinAggregateOutputType | null
    _max: RespuestasMaxAggregateOutputType | null
  }

  type GetRespuestasGroupByPayload<T extends respuestasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RespuestasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RespuestasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RespuestasGroupByOutputType[P]>
            : GetScalarType<T[P], RespuestasGroupByOutputType[P]>
        }
      >
    >


  export type respuestasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_respuesta?: boolean
    id_intent?: boolean
    respuesta?: boolean
    tipo_respuesta?: boolean
    intents?: boolean | respuestas$intentsArgs<ExtArgs>
  }, ExtArgs["result"]["respuestas"]>



  export type respuestasSelectScalar = {
    id_respuesta?: boolean
    id_intent?: boolean
    respuesta?: boolean
    tipo_respuesta?: boolean
  }

  export type respuestasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_respuesta" | "id_intent" | "respuesta" | "tipo_respuesta", ExtArgs["result"]["respuestas"]>
  export type respuestasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    intents?: boolean | respuestas$intentsArgs<ExtArgs>
  }

  export type $respuestasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "respuestas"
    objects: {
      intents: Prisma.$intentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_respuesta: number
      id_intent: number | null
      respuesta: string
      tipo_respuesta: string | null
    }, ExtArgs["result"]["respuestas"]>
    composites: {}
  }

  type respuestasGetPayload<S extends boolean | null | undefined | respuestasDefaultArgs> = $Result.GetResult<Prisma.$respuestasPayload, S>

  type respuestasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<respuestasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RespuestasCountAggregateInputType | true
    }

  export interface respuestasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['respuestas'], meta: { name: 'respuestas' } }
    /**
     * Find zero or one Respuestas that matches the filter.
     * @param {respuestasFindUniqueArgs} args - Arguments to find a Respuestas
     * @example
     * // Get one Respuestas
     * const respuestas = await prisma.respuestas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends respuestasFindUniqueArgs>(args: SelectSubset<T, respuestasFindUniqueArgs<ExtArgs>>): Prisma__respuestasClient<$Result.GetResult<Prisma.$respuestasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Respuestas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {respuestasFindUniqueOrThrowArgs} args - Arguments to find a Respuestas
     * @example
     * // Get one Respuestas
     * const respuestas = await prisma.respuestas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends respuestasFindUniqueOrThrowArgs>(args: SelectSubset<T, respuestasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__respuestasClient<$Result.GetResult<Prisma.$respuestasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Respuestas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {respuestasFindFirstArgs} args - Arguments to find a Respuestas
     * @example
     * // Get one Respuestas
     * const respuestas = await prisma.respuestas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends respuestasFindFirstArgs>(args?: SelectSubset<T, respuestasFindFirstArgs<ExtArgs>>): Prisma__respuestasClient<$Result.GetResult<Prisma.$respuestasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Respuestas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {respuestasFindFirstOrThrowArgs} args - Arguments to find a Respuestas
     * @example
     * // Get one Respuestas
     * const respuestas = await prisma.respuestas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends respuestasFindFirstOrThrowArgs>(args?: SelectSubset<T, respuestasFindFirstOrThrowArgs<ExtArgs>>): Prisma__respuestasClient<$Result.GetResult<Prisma.$respuestasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Respuestas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {respuestasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Respuestas
     * const respuestas = await prisma.respuestas.findMany()
     * 
     * // Get first 10 Respuestas
     * const respuestas = await prisma.respuestas.findMany({ take: 10 })
     * 
     * // Only select the `id_respuesta`
     * const respuestasWithId_respuestaOnly = await prisma.respuestas.findMany({ select: { id_respuesta: true } })
     * 
     */
    findMany<T extends respuestasFindManyArgs>(args?: SelectSubset<T, respuestasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$respuestasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Respuestas.
     * @param {respuestasCreateArgs} args - Arguments to create a Respuestas.
     * @example
     * // Create one Respuestas
     * const Respuestas = await prisma.respuestas.create({
     *   data: {
     *     // ... data to create a Respuestas
     *   }
     * })
     * 
     */
    create<T extends respuestasCreateArgs>(args: SelectSubset<T, respuestasCreateArgs<ExtArgs>>): Prisma__respuestasClient<$Result.GetResult<Prisma.$respuestasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Respuestas.
     * @param {respuestasCreateManyArgs} args - Arguments to create many Respuestas.
     * @example
     * // Create many Respuestas
     * const respuestas = await prisma.respuestas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends respuestasCreateManyArgs>(args?: SelectSubset<T, respuestasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Respuestas.
     * @param {respuestasDeleteArgs} args - Arguments to delete one Respuestas.
     * @example
     * // Delete one Respuestas
     * const Respuestas = await prisma.respuestas.delete({
     *   where: {
     *     // ... filter to delete one Respuestas
     *   }
     * })
     * 
     */
    delete<T extends respuestasDeleteArgs>(args: SelectSubset<T, respuestasDeleteArgs<ExtArgs>>): Prisma__respuestasClient<$Result.GetResult<Prisma.$respuestasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Respuestas.
     * @param {respuestasUpdateArgs} args - Arguments to update one Respuestas.
     * @example
     * // Update one Respuestas
     * const respuestas = await prisma.respuestas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends respuestasUpdateArgs>(args: SelectSubset<T, respuestasUpdateArgs<ExtArgs>>): Prisma__respuestasClient<$Result.GetResult<Prisma.$respuestasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Respuestas.
     * @param {respuestasDeleteManyArgs} args - Arguments to filter Respuestas to delete.
     * @example
     * // Delete a few Respuestas
     * const { count } = await prisma.respuestas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends respuestasDeleteManyArgs>(args?: SelectSubset<T, respuestasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Respuestas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {respuestasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Respuestas
     * const respuestas = await prisma.respuestas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends respuestasUpdateManyArgs>(args: SelectSubset<T, respuestasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Respuestas.
     * @param {respuestasUpsertArgs} args - Arguments to update or create a Respuestas.
     * @example
     * // Update or create a Respuestas
     * const respuestas = await prisma.respuestas.upsert({
     *   create: {
     *     // ... data to create a Respuestas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Respuestas we want to update
     *   }
     * })
     */
    upsert<T extends respuestasUpsertArgs>(args: SelectSubset<T, respuestasUpsertArgs<ExtArgs>>): Prisma__respuestasClient<$Result.GetResult<Prisma.$respuestasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Respuestas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {respuestasCountArgs} args - Arguments to filter Respuestas to count.
     * @example
     * // Count the number of Respuestas
     * const count = await prisma.respuestas.count({
     *   where: {
     *     // ... the filter for the Respuestas we want to count
     *   }
     * })
    **/
    count<T extends respuestasCountArgs>(
      args?: Subset<T, respuestasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RespuestasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Respuestas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RespuestasAggregateArgs>(args: Subset<T, RespuestasAggregateArgs>): Prisma.PrismaPromise<GetRespuestasAggregateType<T>>

    /**
     * Group by Respuestas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {respuestasGroupByArgs} args - Group by arguments.
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
      T extends respuestasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: respuestasGroupByArgs['orderBy'] }
        : { orderBy?: respuestasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, respuestasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRespuestasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the respuestas model
   */
  readonly fields: respuestasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for respuestas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__respuestasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    intents<T extends respuestas$intentsArgs<ExtArgs> = {}>(args?: Subset<T, respuestas$intentsArgs<ExtArgs>>): Prisma__intentsClient<$Result.GetResult<Prisma.$intentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the respuestas model
   */
  interface respuestasFieldRefs {
    readonly id_respuesta: FieldRef<"respuestas", 'Int'>
    readonly id_intent: FieldRef<"respuestas", 'Int'>
    readonly respuesta: FieldRef<"respuestas", 'String'>
    readonly tipo_respuesta: FieldRef<"respuestas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * respuestas findUnique
   */
  export type respuestasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respuestas
     */
    select?: respuestasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respuestas
     */
    omit?: respuestasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respuestasInclude<ExtArgs> | null
    /**
     * Filter, which respuestas to fetch.
     */
    where: respuestasWhereUniqueInput
  }

  /**
   * respuestas findUniqueOrThrow
   */
  export type respuestasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respuestas
     */
    select?: respuestasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respuestas
     */
    omit?: respuestasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respuestasInclude<ExtArgs> | null
    /**
     * Filter, which respuestas to fetch.
     */
    where: respuestasWhereUniqueInput
  }

  /**
   * respuestas findFirst
   */
  export type respuestasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respuestas
     */
    select?: respuestasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respuestas
     */
    omit?: respuestasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respuestasInclude<ExtArgs> | null
    /**
     * Filter, which respuestas to fetch.
     */
    where?: respuestasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of respuestas to fetch.
     */
    orderBy?: respuestasOrderByWithRelationInput | respuestasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for respuestas.
     */
    cursor?: respuestasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` respuestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` respuestas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of respuestas.
     */
    distinct?: RespuestasScalarFieldEnum | RespuestasScalarFieldEnum[]
  }

  /**
   * respuestas findFirstOrThrow
   */
  export type respuestasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respuestas
     */
    select?: respuestasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respuestas
     */
    omit?: respuestasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respuestasInclude<ExtArgs> | null
    /**
     * Filter, which respuestas to fetch.
     */
    where?: respuestasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of respuestas to fetch.
     */
    orderBy?: respuestasOrderByWithRelationInput | respuestasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for respuestas.
     */
    cursor?: respuestasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` respuestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` respuestas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of respuestas.
     */
    distinct?: RespuestasScalarFieldEnum | RespuestasScalarFieldEnum[]
  }

  /**
   * respuestas findMany
   */
  export type respuestasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respuestas
     */
    select?: respuestasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respuestas
     */
    omit?: respuestasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respuestasInclude<ExtArgs> | null
    /**
     * Filter, which respuestas to fetch.
     */
    where?: respuestasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of respuestas to fetch.
     */
    orderBy?: respuestasOrderByWithRelationInput | respuestasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing respuestas.
     */
    cursor?: respuestasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` respuestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` respuestas.
     */
    skip?: number
    distinct?: RespuestasScalarFieldEnum | RespuestasScalarFieldEnum[]
  }

  /**
   * respuestas create
   */
  export type respuestasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respuestas
     */
    select?: respuestasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respuestas
     */
    omit?: respuestasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respuestasInclude<ExtArgs> | null
    /**
     * The data needed to create a respuestas.
     */
    data: XOR<respuestasCreateInput, respuestasUncheckedCreateInput>
  }

  /**
   * respuestas createMany
   */
  export type respuestasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many respuestas.
     */
    data: respuestasCreateManyInput | respuestasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * respuestas update
   */
  export type respuestasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respuestas
     */
    select?: respuestasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respuestas
     */
    omit?: respuestasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respuestasInclude<ExtArgs> | null
    /**
     * The data needed to update a respuestas.
     */
    data: XOR<respuestasUpdateInput, respuestasUncheckedUpdateInput>
    /**
     * Choose, which respuestas to update.
     */
    where: respuestasWhereUniqueInput
  }

  /**
   * respuestas updateMany
   */
  export type respuestasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update respuestas.
     */
    data: XOR<respuestasUpdateManyMutationInput, respuestasUncheckedUpdateManyInput>
    /**
     * Filter which respuestas to update
     */
    where?: respuestasWhereInput
    /**
     * Limit how many respuestas to update.
     */
    limit?: number
  }

  /**
   * respuestas upsert
   */
  export type respuestasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respuestas
     */
    select?: respuestasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respuestas
     */
    omit?: respuestasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respuestasInclude<ExtArgs> | null
    /**
     * The filter to search for the respuestas to update in case it exists.
     */
    where: respuestasWhereUniqueInput
    /**
     * In case the respuestas found by the `where` argument doesn't exist, create a new respuestas with this data.
     */
    create: XOR<respuestasCreateInput, respuestasUncheckedCreateInput>
    /**
     * In case the respuestas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<respuestasUpdateInput, respuestasUncheckedUpdateInput>
  }

  /**
   * respuestas delete
   */
  export type respuestasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respuestas
     */
    select?: respuestasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respuestas
     */
    omit?: respuestasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respuestasInclude<ExtArgs> | null
    /**
     * Filter which respuestas to delete.
     */
    where: respuestasWhereUniqueInput
  }

  /**
   * respuestas deleteMany
   */
  export type respuestasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which respuestas to delete
     */
    where?: respuestasWhereInput
    /**
     * Limit how many respuestas to delete.
     */
    limit?: number
  }

  /**
   * respuestas.intents
   */
  export type respuestas$intentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intents
     */
    select?: intentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intents
     */
    omit?: intentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intentsInclude<ExtArgs> | null
    where?: intentsWhereInput
  }

  /**
   * respuestas without action
   */
  export type respuestasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respuestas
     */
    select?: respuestasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respuestas
     */
    omit?: respuestasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respuestasInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    email: string | null
    fecha_registro: Date | null
    ultima_actividad: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    email: string | null
    fecha_registro: Date | null
    ultima_actividad: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id_usuario: number
    nombre: number
    email: number
    fecha_registro: number
    ultima_actividad: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuariosSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuariosMinAggregateInputType = {
    id_usuario?: true
    nombre?: true
    email?: true
    fecha_registro?: true
    ultima_actividad?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id_usuario?: true
    nombre?: true
    email?: true
    fecha_registro?: true
    ultima_actividad?: true
  }

  export type UsuariosCountAggregateInputType = {
    id_usuario?: true
    nombre?: true
    email?: true
    fecha_registro?: true
    ultima_actividad?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id_usuario: number
    nombre: string
    email: string | null
    fecha_registro: Date | null
    ultima_actividad: Date | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    email?: boolean
    fecha_registro?: boolean
    ultima_actividad?: boolean
    conversaciones?: boolean | usuarios$conversacionesArgs<ExtArgs>
    logs_actividad?: boolean | usuarios$logs_actividadArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>



  export type usuariosSelectScalar = {
    id_usuario?: boolean
    nombre?: boolean
    email?: boolean
    fecha_registro?: boolean
    ultima_actividad?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nombre" | "email" | "fecha_registro" | "ultima_actividad", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversaciones?: boolean | usuarios$conversacionesArgs<ExtArgs>
    logs_actividad?: boolean | usuarios$logs_actividadArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      conversaciones: Prisma.$conversacionesPayload<ExtArgs>[]
      logs_actividad: Prisma.$logs_actividadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nombre: string
      email: string | null
      fecha_registro: Date | null
      ultima_actividad: Date | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversaciones<T extends usuarios$conversacionesArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$conversacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversacionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs_actividad<T extends usuarios$logs_actividadArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$logs_actividadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logs_actividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id_usuario: FieldRef<"usuarios", 'Int'>
    readonly nombre: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly fecha_registro: FieldRef<"usuarios", 'DateTime'>
    readonly ultima_actividad: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.conversaciones
   */
  export type usuarios$conversacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversaciones
     */
    select?: conversacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conversaciones
     */
    omit?: conversacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conversacionesInclude<ExtArgs> | null
    where?: conversacionesWhereInput
    orderBy?: conversacionesOrderByWithRelationInput | conversacionesOrderByWithRelationInput[]
    cursor?: conversacionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversacionesScalarFieldEnum | ConversacionesScalarFieldEnum[]
  }

  /**
   * usuarios.logs_actividad
   */
  export type usuarios$logs_actividadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_actividad
     */
    select?: logs_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_actividad
     */
    omit?: logs_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_actividadInclude<ExtArgs> | null
    where?: logs_actividadWhereInput
    orderBy?: logs_actividadOrderByWithRelationInput | logs_actividadOrderByWithRelationInput[]
    cursor?: logs_actividadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Logs_actividadScalarFieldEnum | Logs_actividadScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
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


  export const ConfiguracionesScalarFieldEnum: {
    id_config: 'id_config',
    clave: 'clave',
    valor: 'valor'
  };

  export type ConfiguracionesScalarFieldEnum = (typeof ConfiguracionesScalarFieldEnum)[keyof typeof ConfiguracionesScalarFieldEnum]


  export const ConversacionesScalarFieldEnum: {
    id_conversacion: 'id_conversacion',
    id_usuario: 'id_usuario',
    fecha_inicio: 'fecha_inicio',
    fecha_ultimo_mensaje: 'fecha_ultimo_mensaje',
    estado: 'estado'
  };

  export type ConversacionesScalarFieldEnum = (typeof ConversacionesScalarFieldEnum)[keyof typeof ConversacionesScalarFieldEnum]


  export const IntentsScalarFieldEnum: {
    id_intent: 'id_intent',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type IntentsScalarFieldEnum = (typeof IntentsScalarFieldEnum)[keyof typeof IntentsScalarFieldEnum]


  export const Logs_actividadScalarFieldEnum: {
    id_log: 'id_log',
    id_usuario: 'id_usuario',
    accion: 'accion',
    fecha: 'fecha'
  };

  export type Logs_actividadScalarFieldEnum = (typeof Logs_actividadScalarFieldEnum)[keyof typeof Logs_actividadScalarFieldEnum]


  export const MensajesScalarFieldEnum: {
    id_mensaje: 'id_mensaje',
    id_conversacion: 'id_conversacion',
    emisor: 'emisor',
    mensaje: 'mensaje',
    fecha: 'fecha'
  };

  export type MensajesScalarFieldEnum = (typeof MensajesScalarFieldEnum)[keyof typeof MensajesScalarFieldEnum]


  export const RespuestasScalarFieldEnum: {
    id_respuesta: 'id_respuesta',
    id_intent: 'id_intent',
    respuesta: 'respuesta',
    tipo_respuesta: 'tipo_respuesta'
  };

  export type RespuestasScalarFieldEnum = (typeof RespuestasScalarFieldEnum)[keyof typeof RespuestasScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nombre: 'nombre',
    email: 'email',
    fecha_registro: 'fecha_registro',
    ultima_actividad: 'ultima_actividad'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const configuracionesOrderByRelevanceFieldEnum: {
    clave: 'clave',
    valor: 'valor'
  };

  export type configuracionesOrderByRelevanceFieldEnum = (typeof configuracionesOrderByRelevanceFieldEnum)[keyof typeof configuracionesOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const conversacionesOrderByRelevanceFieldEnum: {
    estado: 'estado'
  };

  export type conversacionesOrderByRelevanceFieldEnum = (typeof conversacionesOrderByRelevanceFieldEnum)[keyof typeof conversacionesOrderByRelevanceFieldEnum]


  export const intentsOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type intentsOrderByRelevanceFieldEnum = (typeof intentsOrderByRelevanceFieldEnum)[keyof typeof intentsOrderByRelevanceFieldEnum]


  export const logs_actividadOrderByRelevanceFieldEnum: {
    accion: 'accion'
  };

  export type logs_actividadOrderByRelevanceFieldEnum = (typeof logs_actividadOrderByRelevanceFieldEnum)[keyof typeof logs_actividadOrderByRelevanceFieldEnum]


  export const mensajesOrderByRelevanceFieldEnum: {
    emisor: 'emisor',
    mensaje: 'mensaje'
  };

  export type mensajesOrderByRelevanceFieldEnum = (typeof mensajesOrderByRelevanceFieldEnum)[keyof typeof mensajesOrderByRelevanceFieldEnum]


  export const respuestasOrderByRelevanceFieldEnum: {
    respuesta: 'respuesta',
    tipo_respuesta: 'tipo_respuesta'
  };

  export type respuestasOrderByRelevanceFieldEnum = (typeof respuestasOrderByRelevanceFieldEnum)[keyof typeof respuestasOrderByRelevanceFieldEnum]


  export const usuariosOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    email: 'email'
  };

  export type usuariosOrderByRelevanceFieldEnum = (typeof usuariosOrderByRelevanceFieldEnum)[keyof typeof usuariosOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type configuracionesWhereInput = {
    AND?: configuracionesWhereInput | configuracionesWhereInput[]
    OR?: configuracionesWhereInput[]
    NOT?: configuracionesWhereInput | configuracionesWhereInput[]
    id_config?: IntFilter<"configuraciones"> | number
    clave?: StringFilter<"configuraciones"> | string
    valor?: StringFilter<"configuraciones"> | string
  }

  export type configuracionesOrderByWithRelationInput = {
    id_config?: SortOrder
    clave?: SortOrder
    valor?: SortOrder
    _relevance?: configuracionesOrderByRelevanceInput
  }

  export type configuracionesWhereUniqueInput = Prisma.AtLeast<{
    id_config?: number
    AND?: configuracionesWhereInput | configuracionesWhereInput[]
    OR?: configuracionesWhereInput[]
    NOT?: configuracionesWhereInput | configuracionesWhereInput[]
    clave?: StringFilter<"configuraciones"> | string
    valor?: StringFilter<"configuraciones"> | string
  }, "id_config">

  export type configuracionesOrderByWithAggregationInput = {
    id_config?: SortOrder
    clave?: SortOrder
    valor?: SortOrder
    _count?: configuracionesCountOrderByAggregateInput
    _avg?: configuracionesAvgOrderByAggregateInput
    _max?: configuracionesMaxOrderByAggregateInput
    _min?: configuracionesMinOrderByAggregateInput
    _sum?: configuracionesSumOrderByAggregateInput
  }

  export type configuracionesScalarWhereWithAggregatesInput = {
    AND?: configuracionesScalarWhereWithAggregatesInput | configuracionesScalarWhereWithAggregatesInput[]
    OR?: configuracionesScalarWhereWithAggregatesInput[]
    NOT?: configuracionesScalarWhereWithAggregatesInput | configuracionesScalarWhereWithAggregatesInput[]
    id_config?: IntWithAggregatesFilter<"configuraciones"> | number
    clave?: StringWithAggregatesFilter<"configuraciones"> | string
    valor?: StringWithAggregatesFilter<"configuraciones"> | string
  }

  export type conversacionesWhereInput = {
    AND?: conversacionesWhereInput | conversacionesWhereInput[]
    OR?: conversacionesWhereInput[]
    NOT?: conversacionesWhereInput | conversacionesWhereInput[]
    id_conversacion?: IntFilter<"conversaciones"> | number
    id_usuario?: IntNullableFilter<"conversaciones"> | number | null
    fecha_inicio?: DateTimeNullableFilter<"conversaciones"> | Date | string | null
    fecha_ultimo_mensaje?: DateTimeNullableFilter<"conversaciones"> | Date | string | null
    estado?: StringNullableFilter<"conversaciones"> | string | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
    mensajes?: MensajesListRelationFilter
  }

  export type conversacionesOrderByWithRelationInput = {
    id_conversacion?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    fecha_inicio?: SortOrderInput | SortOrder
    fecha_ultimo_mensaje?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    mensajes?: mensajesOrderByRelationAggregateInput
    _relevance?: conversacionesOrderByRelevanceInput
  }

  export type conversacionesWhereUniqueInput = Prisma.AtLeast<{
    id_conversacion?: number
    AND?: conversacionesWhereInput | conversacionesWhereInput[]
    OR?: conversacionesWhereInput[]
    NOT?: conversacionesWhereInput | conversacionesWhereInput[]
    id_usuario?: IntNullableFilter<"conversaciones"> | number | null
    fecha_inicio?: DateTimeNullableFilter<"conversaciones"> | Date | string | null
    fecha_ultimo_mensaje?: DateTimeNullableFilter<"conversaciones"> | Date | string | null
    estado?: StringNullableFilter<"conversaciones"> | string | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
    mensajes?: MensajesListRelationFilter
  }, "id_conversacion">

  export type conversacionesOrderByWithAggregationInput = {
    id_conversacion?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    fecha_inicio?: SortOrderInput | SortOrder
    fecha_ultimo_mensaje?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    _count?: conversacionesCountOrderByAggregateInput
    _avg?: conversacionesAvgOrderByAggregateInput
    _max?: conversacionesMaxOrderByAggregateInput
    _min?: conversacionesMinOrderByAggregateInput
    _sum?: conversacionesSumOrderByAggregateInput
  }

  export type conversacionesScalarWhereWithAggregatesInput = {
    AND?: conversacionesScalarWhereWithAggregatesInput | conversacionesScalarWhereWithAggregatesInput[]
    OR?: conversacionesScalarWhereWithAggregatesInput[]
    NOT?: conversacionesScalarWhereWithAggregatesInput | conversacionesScalarWhereWithAggregatesInput[]
    id_conversacion?: IntWithAggregatesFilter<"conversaciones"> | number
    id_usuario?: IntNullableWithAggregatesFilter<"conversaciones"> | number | null
    fecha_inicio?: DateTimeNullableWithAggregatesFilter<"conversaciones"> | Date | string | null
    fecha_ultimo_mensaje?: DateTimeNullableWithAggregatesFilter<"conversaciones"> | Date | string | null
    estado?: StringNullableWithAggregatesFilter<"conversaciones"> | string | null
  }

  export type intentsWhereInput = {
    AND?: intentsWhereInput | intentsWhereInput[]
    OR?: intentsWhereInput[]
    NOT?: intentsWhereInput | intentsWhereInput[]
    id_intent?: IntFilter<"intents"> | number
    nombre?: StringFilter<"intents"> | string
    descripcion?: StringNullableFilter<"intents"> | string | null
    respuestas?: RespuestasListRelationFilter
  }

  export type intentsOrderByWithRelationInput = {
    id_intent?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    respuestas?: respuestasOrderByRelationAggregateInput
    _relevance?: intentsOrderByRelevanceInput
  }

  export type intentsWhereUniqueInput = Prisma.AtLeast<{
    id_intent?: number
    AND?: intentsWhereInput | intentsWhereInput[]
    OR?: intentsWhereInput[]
    NOT?: intentsWhereInput | intentsWhereInput[]
    nombre?: StringFilter<"intents"> | string
    descripcion?: StringNullableFilter<"intents"> | string | null
    respuestas?: RespuestasListRelationFilter
  }, "id_intent">

  export type intentsOrderByWithAggregationInput = {
    id_intent?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: intentsCountOrderByAggregateInput
    _avg?: intentsAvgOrderByAggregateInput
    _max?: intentsMaxOrderByAggregateInput
    _min?: intentsMinOrderByAggregateInput
    _sum?: intentsSumOrderByAggregateInput
  }

  export type intentsScalarWhereWithAggregatesInput = {
    AND?: intentsScalarWhereWithAggregatesInput | intentsScalarWhereWithAggregatesInput[]
    OR?: intentsScalarWhereWithAggregatesInput[]
    NOT?: intentsScalarWhereWithAggregatesInput | intentsScalarWhereWithAggregatesInput[]
    id_intent?: IntWithAggregatesFilter<"intents"> | number
    nombre?: StringWithAggregatesFilter<"intents"> | string
    descripcion?: StringNullableWithAggregatesFilter<"intents"> | string | null
  }

  export type logs_actividadWhereInput = {
    AND?: logs_actividadWhereInput | logs_actividadWhereInput[]
    OR?: logs_actividadWhereInput[]
    NOT?: logs_actividadWhereInput | logs_actividadWhereInput[]
    id_log?: IntFilter<"logs_actividad"> | number
    id_usuario?: IntNullableFilter<"logs_actividad"> | number | null
    accion?: StringFilter<"logs_actividad"> | string
    fecha?: DateTimeNullableFilter<"logs_actividad"> | Date | string | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }

  export type logs_actividadOrderByWithRelationInput = {
    id_log?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    accion?: SortOrder
    fecha?: SortOrderInput | SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    _relevance?: logs_actividadOrderByRelevanceInput
  }

  export type logs_actividadWhereUniqueInput = Prisma.AtLeast<{
    id_log?: number
    AND?: logs_actividadWhereInput | logs_actividadWhereInput[]
    OR?: logs_actividadWhereInput[]
    NOT?: logs_actividadWhereInput | logs_actividadWhereInput[]
    id_usuario?: IntNullableFilter<"logs_actividad"> | number | null
    accion?: StringFilter<"logs_actividad"> | string
    fecha?: DateTimeNullableFilter<"logs_actividad"> | Date | string | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }, "id_log">

  export type logs_actividadOrderByWithAggregationInput = {
    id_log?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    accion?: SortOrder
    fecha?: SortOrderInput | SortOrder
    _count?: logs_actividadCountOrderByAggregateInput
    _avg?: logs_actividadAvgOrderByAggregateInput
    _max?: logs_actividadMaxOrderByAggregateInput
    _min?: logs_actividadMinOrderByAggregateInput
    _sum?: logs_actividadSumOrderByAggregateInput
  }

  export type logs_actividadScalarWhereWithAggregatesInput = {
    AND?: logs_actividadScalarWhereWithAggregatesInput | logs_actividadScalarWhereWithAggregatesInput[]
    OR?: logs_actividadScalarWhereWithAggregatesInput[]
    NOT?: logs_actividadScalarWhereWithAggregatesInput | logs_actividadScalarWhereWithAggregatesInput[]
    id_log?: IntWithAggregatesFilter<"logs_actividad"> | number
    id_usuario?: IntNullableWithAggregatesFilter<"logs_actividad"> | number | null
    accion?: StringWithAggregatesFilter<"logs_actividad"> | string
    fecha?: DateTimeNullableWithAggregatesFilter<"logs_actividad"> | Date | string | null
  }

  export type mensajesWhereInput = {
    AND?: mensajesWhereInput | mensajesWhereInput[]
    OR?: mensajesWhereInput[]
    NOT?: mensajesWhereInput | mensajesWhereInput[]
    id_mensaje?: IntFilter<"mensajes"> | number
    id_conversacion?: IntNullableFilter<"mensajes"> | number | null
    emisor?: StringFilter<"mensajes"> | string
    mensaje?: StringFilter<"mensajes"> | string
    fecha?: DateTimeNullableFilter<"mensajes"> | Date | string | null
    conversaciones?: XOR<ConversacionesNullableScalarRelationFilter, conversacionesWhereInput> | null
  }

  export type mensajesOrderByWithRelationInput = {
    id_mensaje?: SortOrder
    id_conversacion?: SortOrderInput | SortOrder
    emisor?: SortOrder
    mensaje?: SortOrder
    fecha?: SortOrderInput | SortOrder
    conversaciones?: conversacionesOrderByWithRelationInput
    _relevance?: mensajesOrderByRelevanceInput
  }

  export type mensajesWhereUniqueInput = Prisma.AtLeast<{
    id_mensaje?: number
    AND?: mensajesWhereInput | mensajesWhereInput[]
    OR?: mensajesWhereInput[]
    NOT?: mensajesWhereInput | mensajesWhereInput[]
    id_conversacion?: IntNullableFilter<"mensajes"> | number | null
    emisor?: StringFilter<"mensajes"> | string
    mensaje?: StringFilter<"mensajes"> | string
    fecha?: DateTimeNullableFilter<"mensajes"> | Date | string | null
    conversaciones?: XOR<ConversacionesNullableScalarRelationFilter, conversacionesWhereInput> | null
  }, "id_mensaje">

  export type mensajesOrderByWithAggregationInput = {
    id_mensaje?: SortOrder
    id_conversacion?: SortOrderInput | SortOrder
    emisor?: SortOrder
    mensaje?: SortOrder
    fecha?: SortOrderInput | SortOrder
    _count?: mensajesCountOrderByAggregateInput
    _avg?: mensajesAvgOrderByAggregateInput
    _max?: mensajesMaxOrderByAggregateInput
    _min?: mensajesMinOrderByAggregateInput
    _sum?: mensajesSumOrderByAggregateInput
  }

  export type mensajesScalarWhereWithAggregatesInput = {
    AND?: mensajesScalarWhereWithAggregatesInput | mensajesScalarWhereWithAggregatesInput[]
    OR?: mensajesScalarWhereWithAggregatesInput[]
    NOT?: mensajesScalarWhereWithAggregatesInput | mensajesScalarWhereWithAggregatesInput[]
    id_mensaje?: IntWithAggregatesFilter<"mensajes"> | number
    id_conversacion?: IntNullableWithAggregatesFilter<"mensajes"> | number | null
    emisor?: StringWithAggregatesFilter<"mensajes"> | string
    mensaje?: StringWithAggregatesFilter<"mensajes"> | string
    fecha?: DateTimeNullableWithAggregatesFilter<"mensajes"> | Date | string | null
  }

  export type respuestasWhereInput = {
    AND?: respuestasWhereInput | respuestasWhereInput[]
    OR?: respuestasWhereInput[]
    NOT?: respuestasWhereInput | respuestasWhereInput[]
    id_respuesta?: IntFilter<"respuestas"> | number
    id_intent?: IntNullableFilter<"respuestas"> | number | null
    respuesta?: StringFilter<"respuestas"> | string
    tipo_respuesta?: StringNullableFilter<"respuestas"> | string | null
    intents?: XOR<IntentsNullableScalarRelationFilter, intentsWhereInput> | null
  }

  export type respuestasOrderByWithRelationInput = {
    id_respuesta?: SortOrder
    id_intent?: SortOrderInput | SortOrder
    respuesta?: SortOrder
    tipo_respuesta?: SortOrderInput | SortOrder
    intents?: intentsOrderByWithRelationInput
    _relevance?: respuestasOrderByRelevanceInput
  }

  export type respuestasWhereUniqueInput = Prisma.AtLeast<{
    id_respuesta?: number
    AND?: respuestasWhereInput | respuestasWhereInput[]
    OR?: respuestasWhereInput[]
    NOT?: respuestasWhereInput | respuestasWhereInput[]
    id_intent?: IntNullableFilter<"respuestas"> | number | null
    respuesta?: StringFilter<"respuestas"> | string
    tipo_respuesta?: StringNullableFilter<"respuestas"> | string | null
    intents?: XOR<IntentsNullableScalarRelationFilter, intentsWhereInput> | null
  }, "id_respuesta">

  export type respuestasOrderByWithAggregationInput = {
    id_respuesta?: SortOrder
    id_intent?: SortOrderInput | SortOrder
    respuesta?: SortOrder
    tipo_respuesta?: SortOrderInput | SortOrder
    _count?: respuestasCountOrderByAggregateInput
    _avg?: respuestasAvgOrderByAggregateInput
    _max?: respuestasMaxOrderByAggregateInput
    _min?: respuestasMinOrderByAggregateInput
    _sum?: respuestasSumOrderByAggregateInput
  }

  export type respuestasScalarWhereWithAggregatesInput = {
    AND?: respuestasScalarWhereWithAggregatesInput | respuestasScalarWhereWithAggregatesInput[]
    OR?: respuestasScalarWhereWithAggregatesInput[]
    NOT?: respuestasScalarWhereWithAggregatesInput | respuestasScalarWhereWithAggregatesInput[]
    id_respuesta?: IntWithAggregatesFilter<"respuestas"> | number
    id_intent?: IntNullableWithAggregatesFilter<"respuestas"> | number | null
    respuesta?: StringWithAggregatesFilter<"respuestas"> | string
    tipo_respuesta?: StringNullableWithAggregatesFilter<"respuestas"> | string | null
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id_usuario?: IntFilter<"usuarios"> | number
    nombre?: StringFilter<"usuarios"> | string
    email?: StringNullableFilter<"usuarios"> | string | null
    fecha_registro?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    ultima_actividad?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    conversaciones?: ConversacionesListRelationFilter
    logs_actividad?: Logs_actividadListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrderInput | SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    ultima_actividad?: SortOrderInput | SortOrder
    conversaciones?: conversacionesOrderByRelationAggregateInput
    logs_actividad?: logs_actividadOrderByRelationAggregateInput
    _relevance?: usuariosOrderByRelevanceInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nombre?: StringFilter<"usuarios"> | string
    email?: StringNullableFilter<"usuarios"> | string | null
    fecha_registro?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    ultima_actividad?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    conversaciones?: ConversacionesListRelationFilter
    logs_actividad?: Logs_actividadListRelationFilter
  }, "id_usuario">

  export type usuariosOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrderInput | SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    ultima_actividad?: SortOrderInput | SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuarios"> | number
    nombre?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    fecha_registro?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
    ultima_actividad?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
  }

  export type configuracionesCreateInput = {
    clave: string
    valor: string
  }

  export type configuracionesUncheckedCreateInput = {
    id_config?: number
    clave: string
    valor: string
  }

  export type configuracionesUpdateInput = {
    clave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
  }

  export type configuracionesUncheckedUpdateInput = {
    id_config?: IntFieldUpdateOperationsInput | number
    clave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
  }

  export type configuracionesCreateManyInput = {
    id_config?: number
    clave: string
    valor: string
  }

  export type configuracionesUpdateManyMutationInput = {
    clave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
  }

  export type configuracionesUncheckedUpdateManyInput = {
    id_config?: IntFieldUpdateOperationsInput | number
    clave?: StringFieldUpdateOperationsInput | string
    valor?: StringFieldUpdateOperationsInput | string
  }

  export type conversacionesCreateInput = {
    fecha_inicio?: Date | string | null
    fecha_ultimo_mensaje?: Date | string | null
    estado?: string | null
    usuarios?: usuariosCreateNestedOneWithoutConversacionesInput
    mensajes?: mensajesCreateNestedManyWithoutConversacionesInput
  }

  export type conversacionesUncheckedCreateInput = {
    id_conversacion?: number
    id_usuario?: number | null
    fecha_inicio?: Date | string | null
    fecha_ultimo_mensaje?: Date | string | null
    estado?: string | null
    mensajes?: mensajesUncheckedCreateNestedManyWithoutConversacionesInput
  }

  export type conversacionesUpdateInput = {
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_ultimo_mensaje?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: usuariosUpdateOneWithoutConversacionesNestedInput
    mensajes?: mensajesUpdateManyWithoutConversacionesNestedInput
  }

  export type conversacionesUncheckedUpdateInput = {
    id_conversacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_ultimo_mensaje?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    mensajes?: mensajesUncheckedUpdateManyWithoutConversacionesNestedInput
  }

  export type conversacionesCreateManyInput = {
    id_conversacion?: number
    id_usuario?: number | null
    fecha_inicio?: Date | string | null
    fecha_ultimo_mensaje?: Date | string | null
    estado?: string | null
  }

  export type conversacionesUpdateManyMutationInput = {
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_ultimo_mensaje?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type conversacionesUncheckedUpdateManyInput = {
    id_conversacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_ultimo_mensaje?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type intentsCreateInput = {
    nombre: string
    descripcion?: string | null
    respuestas?: respuestasCreateNestedManyWithoutIntentsInput
  }

  export type intentsUncheckedCreateInput = {
    id_intent?: number
    nombre: string
    descripcion?: string | null
    respuestas?: respuestasUncheckedCreateNestedManyWithoutIntentsInput
  }

  export type intentsUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    respuestas?: respuestasUpdateManyWithoutIntentsNestedInput
  }

  export type intentsUncheckedUpdateInput = {
    id_intent?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    respuestas?: respuestasUncheckedUpdateManyWithoutIntentsNestedInput
  }

  export type intentsCreateManyInput = {
    id_intent?: number
    nombre: string
    descripcion?: string | null
  }

  export type intentsUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type intentsUncheckedUpdateManyInput = {
    id_intent?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type logs_actividadCreateInput = {
    accion: string
    fecha?: Date | string | null
    usuarios?: usuariosCreateNestedOneWithoutLogs_actividadInput
  }

  export type logs_actividadUncheckedCreateInput = {
    id_log?: number
    id_usuario?: number | null
    accion: string
    fecha?: Date | string | null
  }

  export type logs_actividadUpdateInput = {
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios?: usuariosUpdateOneWithoutLogs_actividadNestedInput
  }

  export type logs_actividadUncheckedUpdateInput = {
    id_log?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logs_actividadCreateManyInput = {
    id_log?: number
    id_usuario?: number | null
    accion: string
    fecha?: Date | string | null
  }

  export type logs_actividadUpdateManyMutationInput = {
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logs_actividadUncheckedUpdateManyInput = {
    id_log?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mensajesCreateInput = {
    emisor: string
    mensaje: string
    fecha?: Date | string | null
    conversaciones?: conversacionesCreateNestedOneWithoutMensajesInput
  }

  export type mensajesUncheckedCreateInput = {
    id_mensaje?: number
    id_conversacion?: number | null
    emisor: string
    mensaje: string
    fecha?: Date | string | null
  }

  export type mensajesUpdateInput = {
    emisor?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversaciones?: conversacionesUpdateOneWithoutMensajesNestedInput
  }

  export type mensajesUncheckedUpdateInput = {
    id_mensaje?: IntFieldUpdateOperationsInput | number
    id_conversacion?: NullableIntFieldUpdateOperationsInput | number | null
    emisor?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mensajesCreateManyInput = {
    id_mensaje?: number
    id_conversacion?: number | null
    emisor: string
    mensaje: string
    fecha?: Date | string | null
  }

  export type mensajesUpdateManyMutationInput = {
    emisor?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mensajesUncheckedUpdateManyInput = {
    id_mensaje?: IntFieldUpdateOperationsInput | number
    id_conversacion?: NullableIntFieldUpdateOperationsInput | number | null
    emisor?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type respuestasCreateInput = {
    respuesta: string
    tipo_respuesta?: string | null
    intents?: intentsCreateNestedOneWithoutRespuestasInput
  }

  export type respuestasUncheckedCreateInput = {
    id_respuesta?: number
    id_intent?: number | null
    respuesta: string
    tipo_respuesta?: string | null
  }

  export type respuestasUpdateInput = {
    respuesta?: StringFieldUpdateOperationsInput | string
    tipo_respuesta?: NullableStringFieldUpdateOperationsInput | string | null
    intents?: intentsUpdateOneWithoutRespuestasNestedInput
  }

  export type respuestasUncheckedUpdateInput = {
    id_respuesta?: IntFieldUpdateOperationsInput | number
    id_intent?: NullableIntFieldUpdateOperationsInput | number | null
    respuesta?: StringFieldUpdateOperationsInput | string
    tipo_respuesta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type respuestasCreateManyInput = {
    id_respuesta?: number
    id_intent?: number | null
    respuesta: string
    tipo_respuesta?: string | null
  }

  export type respuestasUpdateManyMutationInput = {
    respuesta?: StringFieldUpdateOperationsInput | string
    tipo_respuesta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type respuestasUncheckedUpdateManyInput = {
    id_respuesta?: IntFieldUpdateOperationsInput | number
    id_intent?: NullableIntFieldUpdateOperationsInput | number | null
    respuesta?: StringFieldUpdateOperationsInput | string
    tipo_respuesta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuariosCreateInput = {
    nombre: string
    email?: string | null
    fecha_registro?: Date | string | null
    ultima_actividad?: Date | string | null
    conversaciones?: conversacionesCreateNestedManyWithoutUsuariosInput
    logs_actividad?: logs_actividadCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id_usuario?: number
    nombre: string
    email?: string | null
    fecha_registro?: Date | string | null
    ultima_actividad?: Date | string | null
    conversaciones?: conversacionesUncheckedCreateNestedManyWithoutUsuariosInput
    logs_actividad?: logs_actividadUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversaciones?: conversacionesUpdateManyWithoutUsuariosNestedInput
    logs_actividad?: logs_actividadUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversaciones?: conversacionesUncheckedUpdateManyWithoutUsuariosNestedInput
    logs_actividad?: logs_actividadUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id_usuario?: number
    nombre: string
    email?: string | null
    fecha_registro?: Date | string | null
    ultima_actividad?: Date | string | null
  }

  export type usuariosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type configuracionesOrderByRelevanceInput = {
    fields: configuracionesOrderByRelevanceFieldEnum | configuracionesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type configuracionesCountOrderByAggregateInput = {
    id_config?: SortOrder
    clave?: SortOrder
    valor?: SortOrder
  }

  export type configuracionesAvgOrderByAggregateInput = {
    id_config?: SortOrder
  }

  export type configuracionesMaxOrderByAggregateInput = {
    id_config?: SortOrder
    clave?: SortOrder
    valor?: SortOrder
  }

  export type configuracionesMinOrderByAggregateInput = {
    id_config?: SortOrder
    clave?: SortOrder
    valor?: SortOrder
  }

  export type configuracionesSumOrderByAggregateInput = {
    id_config?: SortOrder
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

  export type UsuariosNullableScalarRelationFilter = {
    is?: usuariosWhereInput | null
    isNot?: usuariosWhereInput | null
  }

  export type MensajesListRelationFilter = {
    every?: mensajesWhereInput
    some?: mensajesWhereInput
    none?: mensajesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type mensajesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type conversacionesOrderByRelevanceInput = {
    fields: conversacionesOrderByRelevanceFieldEnum | conversacionesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type conversacionesCountOrderByAggregateInput = {
    id_conversacion?: SortOrder
    id_usuario?: SortOrder
    fecha_inicio?: SortOrder
    fecha_ultimo_mensaje?: SortOrder
    estado?: SortOrder
  }

  export type conversacionesAvgOrderByAggregateInput = {
    id_conversacion?: SortOrder
    id_usuario?: SortOrder
  }

  export type conversacionesMaxOrderByAggregateInput = {
    id_conversacion?: SortOrder
    id_usuario?: SortOrder
    fecha_inicio?: SortOrder
    fecha_ultimo_mensaje?: SortOrder
    estado?: SortOrder
  }

  export type conversacionesMinOrderByAggregateInput = {
    id_conversacion?: SortOrder
    id_usuario?: SortOrder
    fecha_inicio?: SortOrder
    fecha_ultimo_mensaje?: SortOrder
    estado?: SortOrder
  }

  export type conversacionesSumOrderByAggregateInput = {
    id_conversacion?: SortOrder
    id_usuario?: SortOrder
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

  export type RespuestasListRelationFilter = {
    every?: respuestasWhereInput
    some?: respuestasWhereInput
    none?: respuestasWhereInput
  }

  export type respuestasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type intentsOrderByRelevanceInput = {
    fields: intentsOrderByRelevanceFieldEnum | intentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type intentsCountOrderByAggregateInput = {
    id_intent?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type intentsAvgOrderByAggregateInput = {
    id_intent?: SortOrder
  }

  export type intentsMaxOrderByAggregateInput = {
    id_intent?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type intentsMinOrderByAggregateInput = {
    id_intent?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type intentsSumOrderByAggregateInput = {
    id_intent?: SortOrder
  }

  export type logs_actividadOrderByRelevanceInput = {
    fields: logs_actividadOrderByRelevanceFieldEnum | logs_actividadOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type logs_actividadCountOrderByAggregateInput = {
    id_log?: SortOrder
    id_usuario?: SortOrder
    accion?: SortOrder
    fecha?: SortOrder
  }

  export type logs_actividadAvgOrderByAggregateInput = {
    id_log?: SortOrder
    id_usuario?: SortOrder
  }

  export type logs_actividadMaxOrderByAggregateInput = {
    id_log?: SortOrder
    id_usuario?: SortOrder
    accion?: SortOrder
    fecha?: SortOrder
  }

  export type logs_actividadMinOrderByAggregateInput = {
    id_log?: SortOrder
    id_usuario?: SortOrder
    accion?: SortOrder
    fecha?: SortOrder
  }

  export type logs_actividadSumOrderByAggregateInput = {
    id_log?: SortOrder
    id_usuario?: SortOrder
  }

  export type ConversacionesNullableScalarRelationFilter = {
    is?: conversacionesWhereInput | null
    isNot?: conversacionesWhereInput | null
  }

  export type mensajesOrderByRelevanceInput = {
    fields: mensajesOrderByRelevanceFieldEnum | mensajesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type mensajesCountOrderByAggregateInput = {
    id_mensaje?: SortOrder
    id_conversacion?: SortOrder
    emisor?: SortOrder
    mensaje?: SortOrder
    fecha?: SortOrder
  }

  export type mensajesAvgOrderByAggregateInput = {
    id_mensaje?: SortOrder
    id_conversacion?: SortOrder
  }

  export type mensajesMaxOrderByAggregateInput = {
    id_mensaje?: SortOrder
    id_conversacion?: SortOrder
    emisor?: SortOrder
    mensaje?: SortOrder
    fecha?: SortOrder
  }

  export type mensajesMinOrderByAggregateInput = {
    id_mensaje?: SortOrder
    id_conversacion?: SortOrder
    emisor?: SortOrder
    mensaje?: SortOrder
    fecha?: SortOrder
  }

  export type mensajesSumOrderByAggregateInput = {
    id_mensaje?: SortOrder
    id_conversacion?: SortOrder
  }

  export type IntentsNullableScalarRelationFilter = {
    is?: intentsWhereInput | null
    isNot?: intentsWhereInput | null
  }

  export type respuestasOrderByRelevanceInput = {
    fields: respuestasOrderByRelevanceFieldEnum | respuestasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type respuestasCountOrderByAggregateInput = {
    id_respuesta?: SortOrder
    id_intent?: SortOrder
    respuesta?: SortOrder
    tipo_respuesta?: SortOrder
  }

  export type respuestasAvgOrderByAggregateInput = {
    id_respuesta?: SortOrder
    id_intent?: SortOrder
  }

  export type respuestasMaxOrderByAggregateInput = {
    id_respuesta?: SortOrder
    id_intent?: SortOrder
    respuesta?: SortOrder
    tipo_respuesta?: SortOrder
  }

  export type respuestasMinOrderByAggregateInput = {
    id_respuesta?: SortOrder
    id_intent?: SortOrder
    respuesta?: SortOrder
    tipo_respuesta?: SortOrder
  }

  export type respuestasSumOrderByAggregateInput = {
    id_respuesta?: SortOrder
    id_intent?: SortOrder
  }

  export type ConversacionesListRelationFilter = {
    every?: conversacionesWhereInput
    some?: conversacionesWhereInput
    none?: conversacionesWhereInput
  }

  export type Logs_actividadListRelationFilter = {
    every?: logs_actividadWhereInput
    some?: logs_actividadWhereInput
    none?: logs_actividadWhereInput
  }

  export type conversacionesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type logs_actividadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosOrderByRelevanceInput = {
    fields: usuariosOrderByRelevanceFieldEnum | usuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuariosCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    fecha_registro?: SortOrder
    ultima_actividad?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    fecha_registro?: SortOrder
    ultima_actividad?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    fecha_registro?: SortOrder
    ultima_actividad?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usuariosCreateNestedOneWithoutConversacionesInput = {
    create?: XOR<usuariosCreateWithoutConversacionesInput, usuariosUncheckedCreateWithoutConversacionesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutConversacionesInput
    connect?: usuariosWhereUniqueInput
  }

  export type mensajesCreateNestedManyWithoutConversacionesInput = {
    create?: XOR<mensajesCreateWithoutConversacionesInput, mensajesUncheckedCreateWithoutConversacionesInput> | mensajesCreateWithoutConversacionesInput[] | mensajesUncheckedCreateWithoutConversacionesInput[]
    connectOrCreate?: mensajesCreateOrConnectWithoutConversacionesInput | mensajesCreateOrConnectWithoutConversacionesInput[]
    createMany?: mensajesCreateManyConversacionesInputEnvelope
    connect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
  }

  export type mensajesUncheckedCreateNestedManyWithoutConversacionesInput = {
    create?: XOR<mensajesCreateWithoutConversacionesInput, mensajesUncheckedCreateWithoutConversacionesInput> | mensajesCreateWithoutConversacionesInput[] | mensajesUncheckedCreateWithoutConversacionesInput[]
    connectOrCreate?: mensajesCreateOrConnectWithoutConversacionesInput | mensajesCreateOrConnectWithoutConversacionesInput[]
    createMany?: mensajesCreateManyConversacionesInputEnvelope
    connect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usuariosUpdateOneWithoutConversacionesNestedInput = {
    create?: XOR<usuariosCreateWithoutConversacionesInput, usuariosUncheckedCreateWithoutConversacionesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutConversacionesInput
    upsert?: usuariosUpsertWithoutConversacionesInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutConversacionesInput, usuariosUpdateWithoutConversacionesInput>, usuariosUncheckedUpdateWithoutConversacionesInput>
  }

  export type mensajesUpdateManyWithoutConversacionesNestedInput = {
    create?: XOR<mensajesCreateWithoutConversacionesInput, mensajesUncheckedCreateWithoutConversacionesInput> | mensajesCreateWithoutConversacionesInput[] | mensajesUncheckedCreateWithoutConversacionesInput[]
    connectOrCreate?: mensajesCreateOrConnectWithoutConversacionesInput | mensajesCreateOrConnectWithoutConversacionesInput[]
    upsert?: mensajesUpsertWithWhereUniqueWithoutConversacionesInput | mensajesUpsertWithWhereUniqueWithoutConversacionesInput[]
    createMany?: mensajesCreateManyConversacionesInputEnvelope
    set?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    disconnect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    delete?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    connect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    update?: mensajesUpdateWithWhereUniqueWithoutConversacionesInput | mensajesUpdateWithWhereUniqueWithoutConversacionesInput[]
    updateMany?: mensajesUpdateManyWithWhereWithoutConversacionesInput | mensajesUpdateManyWithWhereWithoutConversacionesInput[]
    deleteMany?: mensajesScalarWhereInput | mensajesScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type mensajesUncheckedUpdateManyWithoutConversacionesNestedInput = {
    create?: XOR<mensajesCreateWithoutConversacionesInput, mensajesUncheckedCreateWithoutConversacionesInput> | mensajesCreateWithoutConversacionesInput[] | mensajesUncheckedCreateWithoutConversacionesInput[]
    connectOrCreate?: mensajesCreateOrConnectWithoutConversacionesInput | mensajesCreateOrConnectWithoutConversacionesInput[]
    upsert?: mensajesUpsertWithWhereUniqueWithoutConversacionesInput | mensajesUpsertWithWhereUniqueWithoutConversacionesInput[]
    createMany?: mensajesCreateManyConversacionesInputEnvelope
    set?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    disconnect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    delete?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    connect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    update?: mensajesUpdateWithWhereUniqueWithoutConversacionesInput | mensajesUpdateWithWhereUniqueWithoutConversacionesInput[]
    updateMany?: mensajesUpdateManyWithWhereWithoutConversacionesInput | mensajesUpdateManyWithWhereWithoutConversacionesInput[]
    deleteMany?: mensajesScalarWhereInput | mensajesScalarWhereInput[]
  }

  export type respuestasCreateNestedManyWithoutIntentsInput = {
    create?: XOR<respuestasCreateWithoutIntentsInput, respuestasUncheckedCreateWithoutIntentsInput> | respuestasCreateWithoutIntentsInput[] | respuestasUncheckedCreateWithoutIntentsInput[]
    connectOrCreate?: respuestasCreateOrConnectWithoutIntentsInput | respuestasCreateOrConnectWithoutIntentsInput[]
    createMany?: respuestasCreateManyIntentsInputEnvelope
    connect?: respuestasWhereUniqueInput | respuestasWhereUniqueInput[]
  }

  export type respuestasUncheckedCreateNestedManyWithoutIntentsInput = {
    create?: XOR<respuestasCreateWithoutIntentsInput, respuestasUncheckedCreateWithoutIntentsInput> | respuestasCreateWithoutIntentsInput[] | respuestasUncheckedCreateWithoutIntentsInput[]
    connectOrCreate?: respuestasCreateOrConnectWithoutIntentsInput | respuestasCreateOrConnectWithoutIntentsInput[]
    createMany?: respuestasCreateManyIntentsInputEnvelope
    connect?: respuestasWhereUniqueInput | respuestasWhereUniqueInput[]
  }

  export type respuestasUpdateManyWithoutIntentsNestedInput = {
    create?: XOR<respuestasCreateWithoutIntentsInput, respuestasUncheckedCreateWithoutIntentsInput> | respuestasCreateWithoutIntentsInput[] | respuestasUncheckedCreateWithoutIntentsInput[]
    connectOrCreate?: respuestasCreateOrConnectWithoutIntentsInput | respuestasCreateOrConnectWithoutIntentsInput[]
    upsert?: respuestasUpsertWithWhereUniqueWithoutIntentsInput | respuestasUpsertWithWhereUniqueWithoutIntentsInput[]
    createMany?: respuestasCreateManyIntentsInputEnvelope
    set?: respuestasWhereUniqueInput | respuestasWhereUniqueInput[]
    disconnect?: respuestasWhereUniqueInput | respuestasWhereUniqueInput[]
    delete?: respuestasWhereUniqueInput | respuestasWhereUniqueInput[]
    connect?: respuestasWhereUniqueInput | respuestasWhereUniqueInput[]
    update?: respuestasUpdateWithWhereUniqueWithoutIntentsInput | respuestasUpdateWithWhereUniqueWithoutIntentsInput[]
    updateMany?: respuestasUpdateManyWithWhereWithoutIntentsInput | respuestasUpdateManyWithWhereWithoutIntentsInput[]
    deleteMany?: respuestasScalarWhereInput | respuestasScalarWhereInput[]
  }

  export type respuestasUncheckedUpdateManyWithoutIntentsNestedInput = {
    create?: XOR<respuestasCreateWithoutIntentsInput, respuestasUncheckedCreateWithoutIntentsInput> | respuestasCreateWithoutIntentsInput[] | respuestasUncheckedCreateWithoutIntentsInput[]
    connectOrCreate?: respuestasCreateOrConnectWithoutIntentsInput | respuestasCreateOrConnectWithoutIntentsInput[]
    upsert?: respuestasUpsertWithWhereUniqueWithoutIntentsInput | respuestasUpsertWithWhereUniqueWithoutIntentsInput[]
    createMany?: respuestasCreateManyIntentsInputEnvelope
    set?: respuestasWhereUniqueInput | respuestasWhereUniqueInput[]
    disconnect?: respuestasWhereUniqueInput | respuestasWhereUniqueInput[]
    delete?: respuestasWhereUniqueInput | respuestasWhereUniqueInput[]
    connect?: respuestasWhereUniqueInput | respuestasWhereUniqueInput[]
    update?: respuestasUpdateWithWhereUniqueWithoutIntentsInput | respuestasUpdateWithWhereUniqueWithoutIntentsInput[]
    updateMany?: respuestasUpdateManyWithWhereWithoutIntentsInput | respuestasUpdateManyWithWhereWithoutIntentsInput[]
    deleteMany?: respuestasScalarWhereInput | respuestasScalarWhereInput[]
  }

  export type usuariosCreateNestedOneWithoutLogs_actividadInput = {
    create?: XOR<usuariosCreateWithoutLogs_actividadInput, usuariosUncheckedCreateWithoutLogs_actividadInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutLogs_actividadInput
    connect?: usuariosWhereUniqueInput
  }

  export type usuariosUpdateOneWithoutLogs_actividadNestedInput = {
    create?: XOR<usuariosCreateWithoutLogs_actividadInput, usuariosUncheckedCreateWithoutLogs_actividadInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutLogs_actividadInput
    upsert?: usuariosUpsertWithoutLogs_actividadInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutLogs_actividadInput, usuariosUpdateWithoutLogs_actividadInput>, usuariosUncheckedUpdateWithoutLogs_actividadInput>
  }

  export type conversacionesCreateNestedOneWithoutMensajesInput = {
    create?: XOR<conversacionesCreateWithoutMensajesInput, conversacionesUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: conversacionesCreateOrConnectWithoutMensajesInput
    connect?: conversacionesWhereUniqueInput
  }

  export type conversacionesUpdateOneWithoutMensajesNestedInput = {
    create?: XOR<conversacionesCreateWithoutMensajesInput, conversacionesUncheckedCreateWithoutMensajesInput>
    connectOrCreate?: conversacionesCreateOrConnectWithoutMensajesInput
    upsert?: conversacionesUpsertWithoutMensajesInput
    disconnect?: conversacionesWhereInput | boolean
    delete?: conversacionesWhereInput | boolean
    connect?: conversacionesWhereUniqueInput
    update?: XOR<XOR<conversacionesUpdateToOneWithWhereWithoutMensajesInput, conversacionesUpdateWithoutMensajesInput>, conversacionesUncheckedUpdateWithoutMensajesInput>
  }

  export type intentsCreateNestedOneWithoutRespuestasInput = {
    create?: XOR<intentsCreateWithoutRespuestasInput, intentsUncheckedCreateWithoutRespuestasInput>
    connectOrCreate?: intentsCreateOrConnectWithoutRespuestasInput
    connect?: intentsWhereUniqueInput
  }

  export type intentsUpdateOneWithoutRespuestasNestedInput = {
    create?: XOR<intentsCreateWithoutRespuestasInput, intentsUncheckedCreateWithoutRespuestasInput>
    connectOrCreate?: intentsCreateOrConnectWithoutRespuestasInput
    upsert?: intentsUpsertWithoutRespuestasInput
    disconnect?: intentsWhereInput | boolean
    delete?: intentsWhereInput | boolean
    connect?: intentsWhereUniqueInput
    update?: XOR<XOR<intentsUpdateToOneWithWhereWithoutRespuestasInput, intentsUpdateWithoutRespuestasInput>, intentsUncheckedUpdateWithoutRespuestasInput>
  }

  export type conversacionesCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<conversacionesCreateWithoutUsuariosInput, conversacionesUncheckedCreateWithoutUsuariosInput> | conversacionesCreateWithoutUsuariosInput[] | conversacionesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: conversacionesCreateOrConnectWithoutUsuariosInput | conversacionesCreateOrConnectWithoutUsuariosInput[]
    createMany?: conversacionesCreateManyUsuariosInputEnvelope
    connect?: conversacionesWhereUniqueInput | conversacionesWhereUniqueInput[]
  }

  export type logs_actividadCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<logs_actividadCreateWithoutUsuariosInput, logs_actividadUncheckedCreateWithoutUsuariosInput> | logs_actividadCreateWithoutUsuariosInput[] | logs_actividadUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: logs_actividadCreateOrConnectWithoutUsuariosInput | logs_actividadCreateOrConnectWithoutUsuariosInput[]
    createMany?: logs_actividadCreateManyUsuariosInputEnvelope
    connect?: logs_actividadWhereUniqueInput | logs_actividadWhereUniqueInput[]
  }

  export type conversacionesUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<conversacionesCreateWithoutUsuariosInput, conversacionesUncheckedCreateWithoutUsuariosInput> | conversacionesCreateWithoutUsuariosInput[] | conversacionesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: conversacionesCreateOrConnectWithoutUsuariosInput | conversacionesCreateOrConnectWithoutUsuariosInput[]
    createMany?: conversacionesCreateManyUsuariosInputEnvelope
    connect?: conversacionesWhereUniqueInput | conversacionesWhereUniqueInput[]
  }

  export type logs_actividadUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<logs_actividadCreateWithoutUsuariosInput, logs_actividadUncheckedCreateWithoutUsuariosInput> | logs_actividadCreateWithoutUsuariosInput[] | logs_actividadUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: logs_actividadCreateOrConnectWithoutUsuariosInput | logs_actividadCreateOrConnectWithoutUsuariosInput[]
    createMany?: logs_actividadCreateManyUsuariosInputEnvelope
    connect?: logs_actividadWhereUniqueInput | logs_actividadWhereUniqueInput[]
  }

  export type conversacionesUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<conversacionesCreateWithoutUsuariosInput, conversacionesUncheckedCreateWithoutUsuariosInput> | conversacionesCreateWithoutUsuariosInput[] | conversacionesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: conversacionesCreateOrConnectWithoutUsuariosInput | conversacionesCreateOrConnectWithoutUsuariosInput[]
    upsert?: conversacionesUpsertWithWhereUniqueWithoutUsuariosInput | conversacionesUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: conversacionesCreateManyUsuariosInputEnvelope
    set?: conversacionesWhereUniqueInput | conversacionesWhereUniqueInput[]
    disconnect?: conversacionesWhereUniqueInput | conversacionesWhereUniqueInput[]
    delete?: conversacionesWhereUniqueInput | conversacionesWhereUniqueInput[]
    connect?: conversacionesWhereUniqueInput | conversacionesWhereUniqueInput[]
    update?: conversacionesUpdateWithWhereUniqueWithoutUsuariosInput | conversacionesUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: conversacionesUpdateManyWithWhereWithoutUsuariosInput | conversacionesUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: conversacionesScalarWhereInput | conversacionesScalarWhereInput[]
  }

  export type logs_actividadUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<logs_actividadCreateWithoutUsuariosInput, logs_actividadUncheckedCreateWithoutUsuariosInput> | logs_actividadCreateWithoutUsuariosInput[] | logs_actividadUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: logs_actividadCreateOrConnectWithoutUsuariosInput | logs_actividadCreateOrConnectWithoutUsuariosInput[]
    upsert?: logs_actividadUpsertWithWhereUniqueWithoutUsuariosInput | logs_actividadUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: logs_actividadCreateManyUsuariosInputEnvelope
    set?: logs_actividadWhereUniqueInput | logs_actividadWhereUniqueInput[]
    disconnect?: logs_actividadWhereUniqueInput | logs_actividadWhereUniqueInput[]
    delete?: logs_actividadWhereUniqueInput | logs_actividadWhereUniqueInput[]
    connect?: logs_actividadWhereUniqueInput | logs_actividadWhereUniqueInput[]
    update?: logs_actividadUpdateWithWhereUniqueWithoutUsuariosInput | logs_actividadUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: logs_actividadUpdateManyWithWhereWithoutUsuariosInput | logs_actividadUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: logs_actividadScalarWhereInput | logs_actividadScalarWhereInput[]
  }

  export type conversacionesUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<conversacionesCreateWithoutUsuariosInput, conversacionesUncheckedCreateWithoutUsuariosInput> | conversacionesCreateWithoutUsuariosInput[] | conversacionesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: conversacionesCreateOrConnectWithoutUsuariosInput | conversacionesCreateOrConnectWithoutUsuariosInput[]
    upsert?: conversacionesUpsertWithWhereUniqueWithoutUsuariosInput | conversacionesUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: conversacionesCreateManyUsuariosInputEnvelope
    set?: conversacionesWhereUniqueInput | conversacionesWhereUniqueInput[]
    disconnect?: conversacionesWhereUniqueInput | conversacionesWhereUniqueInput[]
    delete?: conversacionesWhereUniqueInput | conversacionesWhereUniqueInput[]
    connect?: conversacionesWhereUniqueInput | conversacionesWhereUniqueInput[]
    update?: conversacionesUpdateWithWhereUniqueWithoutUsuariosInput | conversacionesUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: conversacionesUpdateManyWithWhereWithoutUsuariosInput | conversacionesUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: conversacionesScalarWhereInput | conversacionesScalarWhereInput[]
  }

  export type logs_actividadUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<logs_actividadCreateWithoutUsuariosInput, logs_actividadUncheckedCreateWithoutUsuariosInput> | logs_actividadCreateWithoutUsuariosInput[] | logs_actividadUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: logs_actividadCreateOrConnectWithoutUsuariosInput | logs_actividadCreateOrConnectWithoutUsuariosInput[]
    upsert?: logs_actividadUpsertWithWhereUniqueWithoutUsuariosInput | logs_actividadUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: logs_actividadCreateManyUsuariosInputEnvelope
    set?: logs_actividadWhereUniqueInput | logs_actividadWhereUniqueInput[]
    disconnect?: logs_actividadWhereUniqueInput | logs_actividadWhereUniqueInput[]
    delete?: logs_actividadWhereUniqueInput | logs_actividadWhereUniqueInput[]
    connect?: logs_actividadWhereUniqueInput | logs_actividadWhereUniqueInput[]
    update?: logs_actividadUpdateWithWhereUniqueWithoutUsuariosInput | logs_actividadUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: logs_actividadUpdateManyWithWhereWithoutUsuariosInput | logs_actividadUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: logs_actividadScalarWhereInput | logs_actividadScalarWhereInput[]
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

  export type usuariosCreateWithoutConversacionesInput = {
    nombre: string
    email?: string | null
    fecha_registro?: Date | string | null
    ultima_actividad?: Date | string | null
    logs_actividad?: logs_actividadCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutConversacionesInput = {
    id_usuario?: number
    nombre: string
    email?: string | null
    fecha_registro?: Date | string | null
    ultima_actividad?: Date | string | null
    logs_actividad?: logs_actividadUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutConversacionesInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutConversacionesInput, usuariosUncheckedCreateWithoutConversacionesInput>
  }

  export type mensajesCreateWithoutConversacionesInput = {
    emisor: string
    mensaje: string
    fecha?: Date | string | null
  }

  export type mensajesUncheckedCreateWithoutConversacionesInput = {
    id_mensaje?: number
    emisor: string
    mensaje: string
    fecha?: Date | string | null
  }

  export type mensajesCreateOrConnectWithoutConversacionesInput = {
    where: mensajesWhereUniqueInput
    create: XOR<mensajesCreateWithoutConversacionesInput, mensajesUncheckedCreateWithoutConversacionesInput>
  }

  export type mensajesCreateManyConversacionesInputEnvelope = {
    data: mensajesCreateManyConversacionesInput | mensajesCreateManyConversacionesInput[]
    skipDuplicates?: boolean
  }

  export type usuariosUpsertWithoutConversacionesInput = {
    update: XOR<usuariosUpdateWithoutConversacionesInput, usuariosUncheckedUpdateWithoutConversacionesInput>
    create: XOR<usuariosCreateWithoutConversacionesInput, usuariosUncheckedCreateWithoutConversacionesInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutConversacionesInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutConversacionesInput, usuariosUncheckedUpdateWithoutConversacionesInput>
  }

  export type usuariosUpdateWithoutConversacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logs_actividad?: logs_actividadUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutConversacionesInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logs_actividad?: logs_actividadUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type mensajesUpsertWithWhereUniqueWithoutConversacionesInput = {
    where: mensajesWhereUniqueInput
    update: XOR<mensajesUpdateWithoutConversacionesInput, mensajesUncheckedUpdateWithoutConversacionesInput>
    create: XOR<mensajesCreateWithoutConversacionesInput, mensajesUncheckedCreateWithoutConversacionesInput>
  }

  export type mensajesUpdateWithWhereUniqueWithoutConversacionesInput = {
    where: mensajesWhereUniqueInput
    data: XOR<mensajesUpdateWithoutConversacionesInput, mensajesUncheckedUpdateWithoutConversacionesInput>
  }

  export type mensajesUpdateManyWithWhereWithoutConversacionesInput = {
    where: mensajesScalarWhereInput
    data: XOR<mensajesUpdateManyMutationInput, mensajesUncheckedUpdateManyWithoutConversacionesInput>
  }

  export type mensajesScalarWhereInput = {
    AND?: mensajesScalarWhereInput | mensajesScalarWhereInput[]
    OR?: mensajesScalarWhereInput[]
    NOT?: mensajesScalarWhereInput | mensajesScalarWhereInput[]
    id_mensaje?: IntFilter<"mensajes"> | number
    id_conversacion?: IntNullableFilter<"mensajes"> | number | null
    emisor?: StringFilter<"mensajes"> | string
    mensaje?: StringFilter<"mensajes"> | string
    fecha?: DateTimeNullableFilter<"mensajes"> | Date | string | null
  }

  export type respuestasCreateWithoutIntentsInput = {
    respuesta: string
    tipo_respuesta?: string | null
  }

  export type respuestasUncheckedCreateWithoutIntentsInput = {
    id_respuesta?: number
    respuesta: string
    tipo_respuesta?: string | null
  }

  export type respuestasCreateOrConnectWithoutIntentsInput = {
    where: respuestasWhereUniqueInput
    create: XOR<respuestasCreateWithoutIntentsInput, respuestasUncheckedCreateWithoutIntentsInput>
  }

  export type respuestasCreateManyIntentsInputEnvelope = {
    data: respuestasCreateManyIntentsInput | respuestasCreateManyIntentsInput[]
    skipDuplicates?: boolean
  }

  export type respuestasUpsertWithWhereUniqueWithoutIntentsInput = {
    where: respuestasWhereUniqueInput
    update: XOR<respuestasUpdateWithoutIntentsInput, respuestasUncheckedUpdateWithoutIntentsInput>
    create: XOR<respuestasCreateWithoutIntentsInput, respuestasUncheckedCreateWithoutIntentsInput>
  }

  export type respuestasUpdateWithWhereUniqueWithoutIntentsInput = {
    where: respuestasWhereUniqueInput
    data: XOR<respuestasUpdateWithoutIntentsInput, respuestasUncheckedUpdateWithoutIntentsInput>
  }

  export type respuestasUpdateManyWithWhereWithoutIntentsInput = {
    where: respuestasScalarWhereInput
    data: XOR<respuestasUpdateManyMutationInput, respuestasUncheckedUpdateManyWithoutIntentsInput>
  }

  export type respuestasScalarWhereInput = {
    AND?: respuestasScalarWhereInput | respuestasScalarWhereInput[]
    OR?: respuestasScalarWhereInput[]
    NOT?: respuestasScalarWhereInput | respuestasScalarWhereInput[]
    id_respuesta?: IntFilter<"respuestas"> | number
    id_intent?: IntNullableFilter<"respuestas"> | number | null
    respuesta?: StringFilter<"respuestas"> | string
    tipo_respuesta?: StringNullableFilter<"respuestas"> | string | null
  }

  export type usuariosCreateWithoutLogs_actividadInput = {
    nombre: string
    email?: string | null
    fecha_registro?: Date | string | null
    ultima_actividad?: Date | string | null
    conversaciones?: conversacionesCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutLogs_actividadInput = {
    id_usuario?: number
    nombre: string
    email?: string | null
    fecha_registro?: Date | string | null
    ultima_actividad?: Date | string | null
    conversaciones?: conversacionesUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutLogs_actividadInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutLogs_actividadInput, usuariosUncheckedCreateWithoutLogs_actividadInput>
  }

  export type usuariosUpsertWithoutLogs_actividadInput = {
    update: XOR<usuariosUpdateWithoutLogs_actividadInput, usuariosUncheckedUpdateWithoutLogs_actividadInput>
    create: XOR<usuariosCreateWithoutLogs_actividadInput, usuariosUncheckedCreateWithoutLogs_actividadInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutLogs_actividadInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutLogs_actividadInput, usuariosUncheckedUpdateWithoutLogs_actividadInput>
  }

  export type usuariosUpdateWithoutLogs_actividadInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversaciones?: conversacionesUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutLogs_actividadInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_actividad?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    conversaciones?: conversacionesUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type conversacionesCreateWithoutMensajesInput = {
    fecha_inicio?: Date | string | null
    fecha_ultimo_mensaje?: Date | string | null
    estado?: string | null
    usuarios?: usuariosCreateNestedOneWithoutConversacionesInput
  }

  export type conversacionesUncheckedCreateWithoutMensajesInput = {
    id_conversacion?: number
    id_usuario?: number | null
    fecha_inicio?: Date | string | null
    fecha_ultimo_mensaje?: Date | string | null
    estado?: string | null
  }

  export type conversacionesCreateOrConnectWithoutMensajesInput = {
    where: conversacionesWhereUniqueInput
    create: XOR<conversacionesCreateWithoutMensajesInput, conversacionesUncheckedCreateWithoutMensajesInput>
  }

  export type conversacionesUpsertWithoutMensajesInput = {
    update: XOR<conversacionesUpdateWithoutMensajesInput, conversacionesUncheckedUpdateWithoutMensajesInput>
    create: XOR<conversacionesCreateWithoutMensajesInput, conversacionesUncheckedCreateWithoutMensajesInput>
    where?: conversacionesWhereInput
  }

  export type conversacionesUpdateToOneWithWhereWithoutMensajesInput = {
    where?: conversacionesWhereInput
    data: XOR<conversacionesUpdateWithoutMensajesInput, conversacionesUncheckedUpdateWithoutMensajesInput>
  }

  export type conversacionesUpdateWithoutMensajesInput = {
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_ultimo_mensaje?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: usuariosUpdateOneWithoutConversacionesNestedInput
  }

  export type conversacionesUncheckedUpdateWithoutMensajesInput = {
    id_conversacion?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_ultimo_mensaje?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type intentsCreateWithoutRespuestasInput = {
    nombre: string
    descripcion?: string | null
  }

  export type intentsUncheckedCreateWithoutRespuestasInput = {
    id_intent?: number
    nombre: string
    descripcion?: string | null
  }

  export type intentsCreateOrConnectWithoutRespuestasInput = {
    where: intentsWhereUniqueInput
    create: XOR<intentsCreateWithoutRespuestasInput, intentsUncheckedCreateWithoutRespuestasInput>
  }

  export type intentsUpsertWithoutRespuestasInput = {
    update: XOR<intentsUpdateWithoutRespuestasInput, intentsUncheckedUpdateWithoutRespuestasInput>
    create: XOR<intentsCreateWithoutRespuestasInput, intentsUncheckedCreateWithoutRespuestasInput>
    where?: intentsWhereInput
  }

  export type intentsUpdateToOneWithWhereWithoutRespuestasInput = {
    where?: intentsWhereInput
    data: XOR<intentsUpdateWithoutRespuestasInput, intentsUncheckedUpdateWithoutRespuestasInput>
  }

  export type intentsUpdateWithoutRespuestasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type intentsUncheckedUpdateWithoutRespuestasInput = {
    id_intent?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type conversacionesCreateWithoutUsuariosInput = {
    fecha_inicio?: Date | string | null
    fecha_ultimo_mensaje?: Date | string | null
    estado?: string | null
    mensajes?: mensajesCreateNestedManyWithoutConversacionesInput
  }

  export type conversacionesUncheckedCreateWithoutUsuariosInput = {
    id_conversacion?: number
    fecha_inicio?: Date | string | null
    fecha_ultimo_mensaje?: Date | string | null
    estado?: string | null
    mensajes?: mensajesUncheckedCreateNestedManyWithoutConversacionesInput
  }

  export type conversacionesCreateOrConnectWithoutUsuariosInput = {
    where: conversacionesWhereUniqueInput
    create: XOR<conversacionesCreateWithoutUsuariosInput, conversacionesUncheckedCreateWithoutUsuariosInput>
  }

  export type conversacionesCreateManyUsuariosInputEnvelope = {
    data: conversacionesCreateManyUsuariosInput | conversacionesCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type logs_actividadCreateWithoutUsuariosInput = {
    accion: string
    fecha?: Date | string | null
  }

  export type logs_actividadUncheckedCreateWithoutUsuariosInput = {
    id_log?: number
    accion: string
    fecha?: Date | string | null
  }

  export type logs_actividadCreateOrConnectWithoutUsuariosInput = {
    where: logs_actividadWhereUniqueInput
    create: XOR<logs_actividadCreateWithoutUsuariosInput, logs_actividadUncheckedCreateWithoutUsuariosInput>
  }

  export type logs_actividadCreateManyUsuariosInputEnvelope = {
    data: logs_actividadCreateManyUsuariosInput | logs_actividadCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type conversacionesUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: conversacionesWhereUniqueInput
    update: XOR<conversacionesUpdateWithoutUsuariosInput, conversacionesUncheckedUpdateWithoutUsuariosInput>
    create: XOR<conversacionesCreateWithoutUsuariosInput, conversacionesUncheckedCreateWithoutUsuariosInput>
  }

  export type conversacionesUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: conversacionesWhereUniqueInput
    data: XOR<conversacionesUpdateWithoutUsuariosInput, conversacionesUncheckedUpdateWithoutUsuariosInput>
  }

  export type conversacionesUpdateManyWithWhereWithoutUsuariosInput = {
    where: conversacionesScalarWhereInput
    data: XOR<conversacionesUpdateManyMutationInput, conversacionesUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type conversacionesScalarWhereInput = {
    AND?: conversacionesScalarWhereInput | conversacionesScalarWhereInput[]
    OR?: conversacionesScalarWhereInput[]
    NOT?: conversacionesScalarWhereInput | conversacionesScalarWhereInput[]
    id_conversacion?: IntFilter<"conversaciones"> | number
    id_usuario?: IntNullableFilter<"conversaciones"> | number | null
    fecha_inicio?: DateTimeNullableFilter<"conversaciones"> | Date | string | null
    fecha_ultimo_mensaje?: DateTimeNullableFilter<"conversaciones"> | Date | string | null
    estado?: StringNullableFilter<"conversaciones"> | string | null
  }

  export type logs_actividadUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: logs_actividadWhereUniqueInput
    update: XOR<logs_actividadUpdateWithoutUsuariosInput, logs_actividadUncheckedUpdateWithoutUsuariosInput>
    create: XOR<logs_actividadCreateWithoutUsuariosInput, logs_actividadUncheckedCreateWithoutUsuariosInput>
  }

  export type logs_actividadUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: logs_actividadWhereUniqueInput
    data: XOR<logs_actividadUpdateWithoutUsuariosInput, logs_actividadUncheckedUpdateWithoutUsuariosInput>
  }

  export type logs_actividadUpdateManyWithWhereWithoutUsuariosInput = {
    where: logs_actividadScalarWhereInput
    data: XOR<logs_actividadUpdateManyMutationInput, logs_actividadUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type logs_actividadScalarWhereInput = {
    AND?: logs_actividadScalarWhereInput | logs_actividadScalarWhereInput[]
    OR?: logs_actividadScalarWhereInput[]
    NOT?: logs_actividadScalarWhereInput | logs_actividadScalarWhereInput[]
    id_log?: IntFilter<"logs_actividad"> | number
    id_usuario?: IntNullableFilter<"logs_actividad"> | number | null
    accion?: StringFilter<"logs_actividad"> | string
    fecha?: DateTimeNullableFilter<"logs_actividad"> | Date | string | null
  }

  export type mensajesCreateManyConversacionesInput = {
    id_mensaje?: number
    emisor: string
    mensaje: string
    fecha?: Date | string | null
  }

  export type mensajesUpdateWithoutConversacionesInput = {
    emisor?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mensajesUncheckedUpdateWithoutConversacionesInput = {
    id_mensaje?: IntFieldUpdateOperationsInput | number
    emisor?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mensajesUncheckedUpdateManyWithoutConversacionesInput = {
    id_mensaje?: IntFieldUpdateOperationsInput | number
    emisor?: StringFieldUpdateOperationsInput | string
    mensaje?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type respuestasCreateManyIntentsInput = {
    id_respuesta?: number
    respuesta: string
    tipo_respuesta?: string | null
  }

  export type respuestasUpdateWithoutIntentsInput = {
    respuesta?: StringFieldUpdateOperationsInput | string
    tipo_respuesta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type respuestasUncheckedUpdateWithoutIntentsInput = {
    id_respuesta?: IntFieldUpdateOperationsInput | number
    respuesta?: StringFieldUpdateOperationsInput | string
    tipo_respuesta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type respuestasUncheckedUpdateManyWithoutIntentsInput = {
    id_respuesta?: IntFieldUpdateOperationsInput | number
    respuesta?: StringFieldUpdateOperationsInput | string
    tipo_respuesta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type conversacionesCreateManyUsuariosInput = {
    id_conversacion?: number
    fecha_inicio?: Date | string | null
    fecha_ultimo_mensaje?: Date | string | null
    estado?: string | null
  }

  export type logs_actividadCreateManyUsuariosInput = {
    id_log?: number
    accion: string
    fecha?: Date | string | null
  }

  export type conversacionesUpdateWithoutUsuariosInput = {
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_ultimo_mensaje?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    mensajes?: mensajesUpdateManyWithoutConversacionesNestedInput
  }

  export type conversacionesUncheckedUpdateWithoutUsuariosInput = {
    id_conversacion?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_ultimo_mensaje?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    mensajes?: mensajesUncheckedUpdateManyWithoutConversacionesNestedInput
  }

  export type conversacionesUncheckedUpdateManyWithoutUsuariosInput = {
    id_conversacion?: IntFieldUpdateOperationsInput | number
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_ultimo_mensaje?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type logs_actividadUpdateWithoutUsuariosInput = {
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logs_actividadUncheckedUpdateWithoutUsuariosInput = {
    id_log?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logs_actividadUncheckedUpdateManyWithoutUsuariosInput = {
    id_log?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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