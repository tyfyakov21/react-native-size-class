//
//  RNSizeClassView.swift
//  SizeClass
//
//  Created by Nikita Tiufiakov on 15.06.2021.
//  Copyright © 2021 Facebook. All rights reserved.
//

import Foundation
import UIKit
import React

class RNSizeClassView: RCTView {
    
    let bridge: RCTBridge
    
    init(bridge: RCTBridge) {
        self.bridge = bridge

        super.init(frame: CGRect.zero)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func willMove(toSuperview newSuperview: UIView?) {
        sizeClassUpdated()

        super.willMove(toSuperview: newSuperview)
    }
    
    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        sizeClassUpdated()
    }
    
    private func sizeClassUpdated() {
        var sizeClass = ["horizontalSizeClass": "compact","verticalSizeClass": "compact"]

        if self.traitCollection.horizontalSizeClass == .regular {
            sizeClass["horizontalSizeClass"] = "regular"
        }
        
        if self.traitCollection.verticalSizeClass == .regular {
            sizeClass["verticalSizeClass"] = "regular"
        }
        
        ReactEventSenderModule.emitter.sendEvent(withName: ReactEventSenderModule.sizeClassChangeEventIdentifier, body: sizeClass)
    }

}
