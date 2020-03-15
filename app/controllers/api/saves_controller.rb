class Api::SavesController < ApplicationController
  def index
    @saves = Save.all 
    render "api/user/saves"
  end


  def create
    @save = Save.new(save_params)

    if @save.save
      render "api/user/saves"

    else
      render json: @save.errors.full_messages, status: 422
    end

  end


  def destroy
    @save = Save..find_by(id: params[:id])
    @save.destroy

  end

  def update
    @save = Save..find_by(id: params[:id])

  end


  def save_params
    param.require(:save).permit(:item_id, :item_type, :user_id)

  end
end
