import React from 'react'
import { storesContext } from "../stores/RootStore";

export const useRootStore = () => React.useContext(storesContext)
