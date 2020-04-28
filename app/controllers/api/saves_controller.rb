# frozen_string_literal: true

class Api::SavesController < ApplicationController
  def index
    @saves = Save.where(user_id: current_user.id)
    render :index
  end

  def create
    @save = Save.new(save_params)
    @save.user_id = current_user.id
    if @save.save
      render :show
    else
      render json: @save.errors.full_messages, status: 422
    end
  end

  def destroy
    @save = Save.find_by(id: params[:id])
    @save.destroy
  end

  def save_params
    params.require(:save).permit(:id, :item_id, :item_type, :user_id)
  end
end
