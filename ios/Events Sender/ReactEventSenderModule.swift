//
//  ReactEventSenderModule.swift
//  SizeClass
//
//  Created by Nikita Tiufiakov on 15.06.2021.
//  Copyright © 2021 Facebook. All rights reserved.
//

import Foundation
import React

@objc(ReactEventSenderModule)
final class ReactEventSenderModule: RCTEventEmitter {

    @objc public static var emitter: RCTEventEmitter!

    @objc public static var sizeClassChangeEventIdentifier = "SizeClassChangeEvent"

    @objc override var methodQueue: DispatchQueue? { .main }

    override init() {
        super.init()
        ReactEventSenderModule.emitter = self
    }

    override public func supportedEvents() -> [String]! {
        return [ReactEventSenderModule.sizeClassChangeEventIdentifier]
    }

    @objc override static func requiresMainQueueSetup() -> Bool {
        return false
    }

}
