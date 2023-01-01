import { Button } from 'flowbite-react';
import React, { Dispatch, SetStateAction } from 'react'
import { HiOutlineMinus } from 'react-icons/hi';
import Sheet, { SheetRef } from 'react-modal-sheet'
interface BottomSheetProps {
    isOpenBottomSheet: boolean;
    snapPoints: Array<number>
    initialSnap: number
    setOpenBottomSheet: Dispatch<SetStateAction<boolean>>;
    snapTo: (i: number) => void;

}

const BottomSheet = React.forwardRef<SheetRef,BottomSheetProps>(({initialSnap,             isOpenBottomSheet,setOpenBottomSheet,snapPoints,snapTo}, ref) => (
    <Sheet
        ref={ref}
        isOpen={isOpenBottomSheet}
        onClose={() => setOpenBottomSheet(false)}
        snapPoints={[400, 300, 200, 0]}
        initialSnap={0}
        onSnap={snapIndex =>
            console.log('> Current snap point index:', snapIndex)
        }

    >
        <Sheet.Container>
            <Sheet.Content>
                <div className="flex justify-center" >
                    <Button color={'none'} className='bg-none focus:ring-white' outline={false}
                        onClick={() => snapTo(3)}
                    >
                        <HiOutlineMinus size={24} />
                    </Button>
                </div>
                
            </Sheet.Content>
        </Sheet.Container>
    </Sheet>
)
)
export default BottomSheet