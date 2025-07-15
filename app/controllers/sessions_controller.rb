class SessionsController < ApplicationController
  allow_unauthenticated_access only: %i[ new create ]
  rate_limit to: 10, within: 3.minutes, only: :create, with: -> { redirect_to new_session_url, alert: "Try again later." }

  def new
    render inertia: "sessions/New"
  end

  def create
    if user = User.authenticate_by(params.permit(:email_address, :password))
      start_new_session_for user
      # redirect_to after_authentication_url
      redirect_to root_path, notice: "Connecté avec succès"
    else
      # redirect_to new_session_path, alert: "Try another email address or password."
      render inertia: 'sessions/New',
             props: {
               errors: { auth: "Email ou mot de passe invalide" },
               email: params[:email]
             },
             status: :unprocessable_entity
    end
  end

  def destroy
    terminate_session
    # redirect_to new_session_path
    redirect_to root_path
  end
end
