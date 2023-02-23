import {create} from 'zustand'


interface Props {
    isDoneLoading: boolean,
    setIsDoneLoading: (data: boolean) => void,
}
const SplashStore = create<Props>((set) => ({
    isDoneLoading: false,
    setIsDoneLoading(data) {
        set({
            isDoneLoading: data
        })
    }
}))

export { SplashStore };