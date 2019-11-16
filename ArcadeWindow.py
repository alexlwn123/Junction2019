import pygame, sys, os, random

BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)


class Button():

  def __init__(self, text, x=0, y=0, width=100, height=50, command=None):
    self.text = text
    self.command = command
    self.image_normal = pygame.Surface((width, height))
    self.image_normal.fill(WHITE)

    self.image_hovered = pygame.Surface((width, height))
    self.image_hovered.fill(RED)

    self.image = self.image_normal
    self.rect = self.image.get_rect()

    self.CORRECT = 1
    self.INCORRECT = 0

    font = pygame.font.Font('freesansbold.ttf', 15)

    text_image = font.render(text, True, BLACK)
    text_rect = text_image.get_rect(center = self.rect.center)

    self.image_normal.blit(text_image, text_rect)
    self.image_hovered.blit(text_image, text_rect)

    self.rect.topleft = (x, y)

  def update(self):
    if self.hovered:
      self.image = self.image_hovered
    else:
      self.image = self.image_normallack

  def draw(self, surface):
    surface.blit(self.image, self.rect)

  def handle_event(self, event):

    if event.type == pygame.MOUSEMOTION:
      self.hovered = self.rect.collidepoint(event.pos)
    elif event.type == pygame.MOUSEBUTTONDOWN:
      if self.hovered:
        print('Clicked:', self.text)
        if self.command:
          return self.command()


  def correct(self):
    return self.CORRECT

  def incorrect(self):
    return self.INCORRECT

def main():

  pygame.init()

  screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
  screen_rect = screen.get_rect()

  clock = pygame.time.Clock()
  is_running = False

  btn1 = Button('Hello', 200, 50, 100, 50)
  btn1 = Button('Hello', 200, 150, 100, 50)

  is

