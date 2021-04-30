# debugger
if @restaurants.is_a?(Array)
    @restaurants.flatten.uniq.each do |restaurant|
        json.set! restaurant.id do
            json.extract! restaurant, 
                            :id, 
                            :name,
                            :phone_number,
                            :executive_chef,
                            :city,
                            :operation_hours
            # json.photoUrls restaurant.map { |file| url_for(file) }
            json.photoUrl url_for(restaurant.photos[0])
        end
    end
else
    @restaurants.each do |restaurant|
        json.set! restaurant.id do
            json.extract! restaurant, 
                            :id, 
                            :name,
                            :phone_number,
                            :executive_chef,
                            :city,
                            :operation_hours
            # json.photoUrls restaurant.map { |file| url_for(file) }
            json.photoUrl url_for(restaurant.photos[0])
        end
    end
end
# end