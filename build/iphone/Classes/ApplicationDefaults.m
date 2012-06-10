/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"s1YlMQAyRJPg9RLCqgN2fkBhsObTSrRQ"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"S90g98AV1aOXS124u88buBnKzYqXZJAN"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"nowDWrBkojke63BFe8J0TWT5KvaGxkMV"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"UJxcd8b5Jaf4wVtEEmTWi9Ukv7c8qHgE"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"0Vqn6BWK3zWg1CeI5ypHhnDGwDkKAfoT"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"3GVzQibUaClLmnOnKvS7jY9CrqlbKVsO"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
