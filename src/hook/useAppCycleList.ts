
import { ref, computed } from 'vue'
import { useCycleList } from '@vueuse/core'

export function useAppCycleList(list:unknown[], options: any) {
    
    const cycleList = useCycleList (list, options)

    const direction = ref();

    const isForward = computed(() => direction.value === 'forward');
    const isBackward = computed(() => direction.value === 'backward');

    function next() {
        direction.value = 'forward';
        cycleList.next();
    }

    function prev() {
        direction.value = 'backward';
        cycleList.prev();
    }

    return {
       ...cycleList ,
       next,
       prev,
       isForward,
       isBackward
    }
}