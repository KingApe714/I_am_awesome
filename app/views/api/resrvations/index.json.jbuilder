json.array! @reservations do |reservation|
    json.extract! reservation, :id, :guest_id, :restaurant_id, :guest_count, :reservation_date_time
end