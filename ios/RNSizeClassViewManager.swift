//
//  RNSizeClassViewManager.swift
//  SizeClass
//
//  Created by Nikita Tiufiakov on 15.06.2021.
//  Copyright © 2021 Facebook. All rights reserved.
//

import UIKit
import React

@objc(RNSizeClassViewManager)
class RNSizeClassViewManager: RCTViewManager {

    override class func requiresMainQueueSetup() -> Bool {
        return true
    }

    override func view() -> UIView {
        let sizeClassView = RNSizeClassView(bridge: self.bridge)
        
        return sizeClassView
    }

}
