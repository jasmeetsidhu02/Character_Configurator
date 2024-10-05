import { create } from 'zustand'
import PocketBase from 'pocketbase';
const pocketURL = import.meta.env.VITE_POCKETBASE_URL;
if(!pocketURL){
    throw new Error("VITE_POCKETBASE_URL is Required")
}
export const pb = new PocketBase(pocketURL);

export const useConfiguratorStore = create((set) => ({
  categories: [],
  currentCategory:null,
  assets:[],
  customization:{},
  fetchCategories:async ()=>{
    const categories = await pb.collection('CustomizationGroups').getFullList({
        sort: '+position',
    });
    const assets = await pb.collection('CustomizationAssets').getFullList({
        sort: '-created',
    });
   const customization = {}
    categories.forEach(category => {
        category.assets = assets.filter(asset => asset.group === category.id)
        customization[category.name] = {}
    })
    set({categories,currentCategory:categories[0],assets,customization})
  },
  setCurrentCategory :(catergory) => {
    set({currentCategory:catergory})
  },
  changeAssets: (category,asset) => {
    set((state)=>
    {
        console.log("changeAssets",state.customization);
        return {

        customization:{
            ...state.customization,
            [category]:{
                ...state.customization[category],
                asset
            }
        }
    }}
    
)

  }
 
}))
