<?php

namespace App\Controller;
use App\Entity\Todo;
use App\Repository\TodoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/todo", name="api_todo")
 */
class TodoController extends AbstractController
{

    private $entityManager;
    private $todoRepository;

    public function __construct(EntityManagerInterface $entityManager, TodoRepository $todoRepository)
    {
        $this->entityManager = $entityManager;
        $this->todoRepository = $todoRepository;
    }
    /**
     * @Route("/read", name="api_todo_read", methods={"GET"})
     */
    public function index(): Response
    {
        $todos = $this->todoRepository->findAll();
        $arrayOfTodos = [];
        foreach ($todos as $todo) {
            $arrayOfTodos[] = $todo->toArray();
        }
        return $this->json($arrayOfTodos);
    }

    /**
     * @Route("/create", name="api_todo_create", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function create(Request $request): JsonResponse
    {
        $content = json_decode($request->getContent());
        $todo = new Todo();
        $todo->setName($content->name);
        $todo->setDescription($content->description);
        try {
            $this->entityManager->persist($todo);
            $this->entityManager->flush();
        } catch (Exception $exception){
            return $this->json([
                'message' => ['text' => ['Could not submit to the database'], 'level' => 'error']
            ]);

        }
        return $this->json([
            'todo' => $todo->toArray(),
            'message' => ['text' => ['todo has been created', 'Task: ' . $content->name], 'level' => 'success']
        ]);
    }
    /**
     * @Route("/update/{id}", name="api_todo_update", methods={"PUT"})
     * @param Request $request
     * @param Todo $todo
     * @return JsonResponse
     */
    public function update(Request $request, Todo $todo): JsonResponse
    {
        $content = json_decode($request->getContent());
        if ($todo->getName() === $content->name && $todo->getDescription() === $content->description) {
            return $this->json([
                'message' => ['text' => 'There was no change to the To-Do. Neither the name or the description was changed.', 'level' => 'error']
            ]);
        }
        $todo->setName($content->name);
        $todo->setDescription($content->description);

        try {
            $this->entityManager->flush();
        } catch (Exception $exception) {
            return $this->json([
                'message' => ['text' => 'Could not reach database when attempting to update a To-Do.', 'level' => 'error']
            ]);
        }

        return $this->json([
            'todo'    => $todo->toArray(),
            'message' => ['text' => 'To-Do successfully updated!', 'level' => 'success']
        ]);

    }

    /**
     * @Route("/delete/{id}", name="api_todo_delete", methods={"DELETE"})
     * @param Todo $todo
     * @return JsonResponse
     */
    public function delete(Todo $todo): JsonResponse
    {
        try {
            $this->entityManager->remove($todo);
            $this->entityManager->flush();
        } catch (Exception $exception){
            // error
        }
        return $this->json([
            'message' => 'TODO DELETED',
        ]);
    }
}
