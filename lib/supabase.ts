import { createClient } from "@supabase/supabase-js";
import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return getItemAsync(key);
  },
  setItem: (key: string, value: string) => {
    return setItemAsync(key, value);
  },
  removeItem: (key: string) => {
    return deleteItemAsync(key);
  },
};

export const supabase = createClient(
  "https://zccimheabnklrnapnnxz.supabase.co",
  "sb_publishable_QjgPwR6zV0XBS-o3eq57KA_w2QS1ggu",

  //jon
  // "https://eveuyrnwsqnrupnkwitj.supabase.co",
  // "sb_publishable_-I1ZZYiAVwfvTsNNKDXIyA_OzXulTph",

  {
    auth: {
      storage: ExpoSecureStoreAdapter,
      detectSessionInUrl: false,
    },
  }
);
