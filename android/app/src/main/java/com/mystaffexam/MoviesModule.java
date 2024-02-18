package com.mystaffexam;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;

import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;


import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.List;

class Movie {
  private String id;
  private String title;
  private String date;
  private String description;

  public Movie(String id, String title, String date, String description) {
      this.id = id;  
      this.title = title;
      this.date = date;
      this.description = description;
  }

  public String getID() {
    return this.id;
  }

  public String getTitle() {
    return this.title;
  }

  public String getDate() {
    return this.date;
  }

  public String getDescription() {
    return this.description;
  }
}

public class MoviesModule extends ReactContextBaseJavaModule {
  MoviesModule(ReactApplicationContext context) {
       super(context);
   }

   @Override
   public String getName() {
    return "MoviesModule";
   }


   @ReactMethod
   public void fetchMovies(Callback callback) {
    List<Movie> movies = new ArrayList<>();
    movies.add(new Movie("0","Inception", "2010-07-16", "A thief who enters the dreams of others to steal secrets."));
    movies.add(new Movie("1","Interstellar", "2014-11-07", "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."));
    movies.add(new Movie("2","The Dark Knight", "2008-07-18", "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."));
      
    WritableArray writableMovies = Arguments.createArray();

    for (Movie movie: movies) {
      WritableMap movieMap = Arguments.createMap();
      movieMap.putString("id", movie.getID());
      movieMap.putString("title", movie.getTitle());
      movieMap.putString("date", movie.getDate());
      movieMap.putString("description", movie.getDescription());
      writableMovies.pushMap(movieMap);
    }

    callback.invoke(writableMovies);
   }

}


