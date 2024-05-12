# Lesson7
## MongoDE[Mongoose]
### NoSQL VS SQL
* SQL
    * Tables
    * Rows
    * Columns

* NOSQL
    * Conllection
    * Documents
    * MongoDB

## NoSQL Working
    * Collection -> Blogs documents

## Mongoose
* Mongoose us ab ODM library - Object Document Mapping Library
    * User model -> User.get(), User.findById()
    * Blog model -> Blog.deleteOne()

## Schemas & Models
* Schemas defines the structure of a type of data / document
    - Properties & property types

* User Schema
    - name (string), required
    - age (number)
    - bio (string), required

* Blog Schema
    - title (string), required
    - snippet (string), required
    - body (string), required

* Models allow ys to communicate with database collections

Blog Model [Blog Schema] -> get,save, delete, etc -> Database Blog Collection

## Getting & Saving

## Outputting Documents in Views

