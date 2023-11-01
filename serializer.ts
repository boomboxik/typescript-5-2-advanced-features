import { Context } from "./types";

export function serialize(_target: any, context: Context): void {
  const metadata: any = context.metadata;
  if (!metadata["propNames"]) metadata["propNames"] = [];
  metadata["propNames"].push(context.name);
}

export function jsonify(instance: object): string {
  const metadata = instance.constructor[Symbol.metadata];
  const propNames = metadata?.["propNames"] as string[];

  const newObj = (propNames || []).reduce((obj: any, key) => {
    obj[key] = (instance as any)[key];
    return obj;
  }, {});

  return JSON.stringify(newObj);
}