/// <reference path="./typings/cbs.android.d.ts" />
import { CBSheetOption } from "./custom-bottomsheet.common";
import * as app from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';

// UIImage.imageNamed(options.icon)
export class CustomBottomsheet {

    constructor() {

    }

    public show(options: CBSheetOption): void {

        const titles: Array<string> = new Array<string>();
        const icons: Array<string> = new Array<string>();

        options.items.forEach((val: any) => {
            titles.push(val.title);
            icons.push(val.icon);
        });

        const bottomSheet = LCActionSheet.sheetWithTitleMainIconIconArrayCancelButtonTitleClickedOtherButtonTitleArray(
            options.title,
            UIImage.imageNamed(options.icon),
            icons,
            'Cancel',
            (actionSheet: LCActionSheet, index: number) => {
                options.onItemTap(index - 1, options.items[index]);
            },
            titles
        );


        bottomSheet.show();
    }
}

// class LCActionSheetDelegateImpl extends NSObject implements LCActionSheetDelegate {
//     static objCProtocols = [LCActionSheetDelegate];

//     static new(): LCActionSheetDelegateImpl {
//         return <LCActionSheetDelegateImpl>super.new();
//     }

//     public actionSheetClickedButtonAtIndex(actionSheet, index): void {
//         console.log(index);
//     }

//     public willPresentActionSheet(actionSheet): void {
//         console.log('will present')
//     }

//     public didPresentActionSheet(actionSheet): void {
//         console.log('did present');
//     }

//     public actionSheetWillDismissWithButtonIndex(actionSheet, index): void {
//         console.log('Button present');
//     }

//     public actionSheetDidDismissWithButtonIndex(actionSheet, index): void {
//         console.log('rrrrr')
//     }
// }

const rootVC = function () {
    let appwindow = UIApplication.sharedApplication.keyWindow;
    return appwindow.rootViewController;
};
