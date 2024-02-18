//
//  Movie.m
//  myStaffExam
//
//  Created by Tristan Galang on 2/18/24.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(MoviesModule, NSObject)

RCT_EXTERN_METHOD(fetchMovies:(RCTResponseSenderBlock)callback)

@end
