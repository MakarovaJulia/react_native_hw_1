import React from 'react'
import { storesContext } from "../mobx/RootStore";

export const useRootStore = () => React.useContext(storesContext)
