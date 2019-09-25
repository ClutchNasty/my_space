class Api::FriendsController < ApplicationController
  def index
    render json: Friend.all
  end
end
