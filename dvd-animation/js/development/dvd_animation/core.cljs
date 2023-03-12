(ns dvd-animation.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (q/frame-rate 60)
  (q/color-mode :hsb)
  {:color (rand-int 256)
   :x 0
   :y 0
   :vx (/ (q/width) 125)
   :vy (/ (* (q/height) 3) 500)})


(defn update-state [state]
  ; Update sketch state by changing circle color and position.
  {:color (if (or (>= (+ (:x state) (:vx state)) (* (q/width) 0.8))
                  (<= (+ (:x state) (:vx state)) 0)
                  (>= (+ (:y state) (:vy state)) (* (q/height) 0.8))
                  (<= (+ (:y state) (:vy state)) 0)) (rand-int 256)
                                                     (:color state))
   :x (+ (:x state) (:vx state))
   :y (+ (:y state) (:vy state))
   :vx (cond (>= (+ (:x state) (:vx state)) (* (q/width) 0.8))  (* -1 (:vx state))
             (<= (+ (:x state) (:vx state)) 0)    (* -1 (:vx state))
             :else                                (:vx state))
   :vy (cond (>= (+ (:y state) (:vy state)) (* (q/height) 0.8))  (* -1 (:vy state))
             (<= (+ (:y state) (:vy state)) 0)    (* -1 (:vy state))
             :else                                (:vy state))
   })


(defn draw-state [state]
  ; Clear the sketch by filling it with black color.
  (q/background 0)
  ; Set rectangle color.
  (q/fill (:color state) 255 255)
  (q/rect (:x state) (:y state) (* (q/width) 0.2) (* (q/height) 0.2)))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch dvd-animation
    :host "dvd-animation"
    :size [500 500]
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state
    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
