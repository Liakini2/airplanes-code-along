-- we create the seed file incase something happens to our database we can make sure that we don't lose our information.
CREATE TABLE airplanes(
    plane_id SERIAL PRIMARY KEY,
    plane_type VARCHAR(40) NOT NULL,
    passenger_count INTEGER NOT NULL
);
