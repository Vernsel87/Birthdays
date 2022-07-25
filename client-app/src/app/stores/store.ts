import { createContext, useContext } from "react";
import BirthdayStore from "./birthdayStore";

interface Store {
    birthdayStore: BirthdayStore;
}

export const store: Store = {
    birthdayStore: new BirthdayStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}