//
//  Movie.swift
//  myStaffExam
//
//  Created by Tristan Galang on 2/18/24.
//

import Foundation
import React

struct Movie: Encodable {
  let id: Int
  let title: String
  let date: String
  let description: String
}

@objc(MoviesModule)
class MoviesModule: NSObject {
  
  @objc
  func fetchMovies(_ callback: RCTResponseSenderBlock) {
    let movies = fetchMoviesFromAppleTV()
    let jsonEncoder = JSONEncoder()
    var json: [[String: Any]] = []
    
    for movie in movies {
      if let jsonData = try? jsonEncoder.encode(movie),
         let jsonObject = try? JSONSerialization.jsonObject(with: jsonData, options: []) as? [String: Any] {
        json.append(jsonObject)
      }
    }
    
    callback([json])
  }
  
  private func fetchMoviesFromAppleTV() -> [Movie] {
    return [
      Movie(id: 0,
            title: "See",
            date: "2019-11-1",
            description: "Science fiction for the Apple TV+"),
      Movie(id: 1,title: "Servant",
            date: "2019-11-28",
            description: "A Psychological horror series made for the Apple TV+ subscribers."),
      Movie(id: 2,title: "Litte Voice",
            date: "2020-07-10",
            description: "A musical drama special for the Apple TV+ members.")
    ]
  }
}
