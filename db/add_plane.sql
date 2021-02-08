INSERT INTO airplanes 
(plane_type, passenger_count)
VALUES
--this is being supplied by the user and can be passed in as an array or object
--1 would be the first value, 2 wuld be the seccond value below is an example of an array.
($1, $2);
--example of an object
--(${type}, ${passengers})


--this is going to make it so that our new planes are returned.
SELECT * FROM airplanes;